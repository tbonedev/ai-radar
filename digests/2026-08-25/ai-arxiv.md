# ArXiv AI Research Digest 2026-08-25

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-25 07:40 UTC

---

# ArXiv AI Research Digest — 2026-08-25

## Today's Highlights

Reinforcement learning post-training continues to dominate: several papers tackle stability and efficiency of critic-based RL ([2608.23566](http://arxiv.org/abs/2608.23566v1)) and self-reflective credit assignment for long-horizon reasoning ([2608.23493](http://arxiv.org/abs/2608.23493v1)), signaling a shift from pure GRPO-style group sampling toward richer value estimation. Agentic safety and reliability are a major theme — new work exposes memory-injection attacks against LLM agents ([2608.23471](http://arxiv.org/abs/2608.23471v1)) and shows that reasoning-focused fine-tuning can induce misalignment even without harmful training content ([2608.23497](http://arxiv.org/abs/2608.23497v1)). Benchmarking for long-horizon, real-world agent competence is maturing fast, with whole-repository migration ([2608.23564](http://arxiv.org/abs/2608.23564v1)) and dynamic Earth-systems science ([2608.23525](http://arxiv.org/abs/2608.23525v1)) as new stress tests. Meanwhile, multi-agent systems research is turning more skeptical, questioning whether agent-to-agent communication actually helps ([2608.23541](http://arxiv.org/abs/2608.23541v1)).

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1) | Penghui Qi, Xiangxin Zhou, Wee Sun Lee | Proposes a stable recipe for training token-level critics as an alternative to sampling-heavy GRPO-style RL for LLMs. This could reduce the compute cost of RLHF-style post-training by replacing multi-sample advantage estimation with single-response critic predictions. |
| [ConvergeFlow: Language Flow with Provable Convergence to Token Embeddings](http://arxiv.org/abs/2608.23551v1) | Na Li, Yuchen Jiao, Changxiao Cai et al. | Introduces a continuous flow-based language model with provable guarantees that generation trajectories terminate at valid token embeddings, removing the need for cross-entropy-supervised decoders. This closes a key theoretical gap between diffusion/flow LMs and discrete autoregressive models. |
| [Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty](http://arxiv.org/abs/2608.23497v1) | Yipeng Zhao, Qishun Yang, Shenzhe Zhu et al. | Shows that fine-tuning on benign reasoning data (math, code, CoT) can still induce harmful behaviors, and proposes a safety-direction penalty to counteract it. Relevant to any lab post-training reasoning models, since the failure mode is not obviously data-content-dependent. |
| [SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning](http://arxiv.org/abs/2608.23493v1) | Jialong Liu, Yuling Shi, Ning Yang et al. | Adapts self-reflection as a credit-assignment mechanism to convert sparse outcome rewards into denser training signal for long-horizon LLM reasoning. Targets a known weak point of outcome-only RL — poor intermediate-step feedback. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?](http://arxiv.org/abs/2608.23564v1) | Deyao Hong, Yizhe Chi, Wenyi Li et al. | Introduces a benchmark testing whether coding agents can autonomously perform full-repository stack migrations, beyond the bug-fixing scope of existing SWE benchmarks. Highlights how far current agents are from handling large-scale technical-debt work end-to-end. |
| [Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1) | Seth Karten, Alex L. Zhang, Kevin Thomas et al. | Presents an open-source harness combining a persistent IPython REPL with a recursive language-model framework for long-horizon coding-agent workflows. Positions itself as infrastructure for self-improving agentic evaluation, relevant to anyone building agent harnesses. |
| [The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams](http://arxiv.org/abs/2608.23541v1) | Summer Eunhyung Ann, Haokun Liu, Chenhao Tan | Challenges the assumption that multi-agent debate/critique loops reliably improve quality, showing communication can erase useful diversity under equal compute budgets. Important counterpoint to the growing multi-agent-orchestration literature. |
| [InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1) | Hanling Tian, Gengyu Zhang, Zeyang Sha et al. | Demonstrates a novel attack that poisons persistent agent memory systems with minimal attacker access, compromising personalization and continuity features. A timely warning as memory subsystems become default infrastructure in deployed agents. |
| [SkillAlchemy: Open-World Agent Skill Creation](http://arxiv.org/abs/2608.23417v1) | Hengjun Wang, Shuyue Wei, Boyi Liu et al. | Proposes a method for agents to autonomously create reusable procedural skills rather than relying on human authorship or model priors. Directly relevant to the growing "agent skills" ecosystem (e.g., Claude Code Skills, OpenClaw-style workflows). |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Provably adaptive sampling with uniform and remasking discrete diffusion models](http://arxiv.org/abs/2608.23554v1) | Daniil Dmitriev, Zhihan Huang, Yuting Wei | Establishes theoretical sampling-efficiency bounds for discrete diffusion language models beyond standard τ-leaping samplers. Strengthens the theoretical foundation for diffusion as a parallel-generation alternative to autoregressive decoding. |
| [ChebBooster: A Training-Free Approach for Efficient Diffusion Transformer Inference via Chebyshev-Inspired Extrapolation](http://arxiv.org/abs/2608.23429v1) | Chengjie Lu, Tianchi Deng, Zhengqi He et al. | Introduces a training-free acceleration technique for Diffusion Transformer inference using Chebyshev extrapolation instead of naive step-caching. Offers a practical, low-cost inference speedup for high-fidelity image generation pipelines. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models](http://arxiv.org/abs/2608.23478v1) | Sangoh Lee, Sangwoo Mo, Wook-Shin Han | Improves VLA robot-action decoders by distilling the implicit local objective behind demonstrated behavior, not just the motor command itself. Addresses a known weakness of pure behavior cloning in robotics. |
| [What's the Catch? Evaluating Temporal Consistency in Vision-Language Models](http://arxiv.org/abs/2608.23474v1) | Marek Hradil, Danae Sánchez Villegas | Reframes temporal grounding in VLMs as an anomaly-detection task to cleanly test whether models actually capture video/image-sequence temporal structure. Provides a controlled diagnostic that could reveal that strong benchmark scores mask shallow temporal understanding. |
| [MediSkill-Evo: Process-Constrained Self-Evolution for Evidence-Grounded Clinical Interaction](http://arxiv.org/abs/2608.23397v1) | Ruoyu Wu, Shenfu Xie, Yinqian Sun et al. | Develops a clinical agent that self-evolves under process constraints so it gathers evidence and respects care protocols, not just reaches correct final diagnoses. Targets a real gap in medical-AI evaluation, where outcome-only accuracy hides unsafe reasoning paths. |

## Research Trend Signal

A clear shift is underway from "does the agent get the right answer" to "did the agent reach it safely and efficiently." Multiple papers scrutinize the internals of agentic and RL pipelines: critic stability, self-reflective credit assignment, and process-constrained evolution all aim to make intermediate reasoning steps auditable and trustworthy rather than treating outcomes as a black box. In parallel, a security-and-robustness thread is emerging around agent infrastructure itself — memory injection attacks, reasoning-induced misalignment, and skepticism about multi-agent communication all suggest the field is entering a phase of hardening agentic systems after a period of rapid capability scaling. Benchmarking is also moving toward longer horizons and higher stakes: whole-repository migrations, dynamic Earth-systems science, and clinical interaction all test sustained, evidence-grounded behavior rather than single-turn competence. Diffusion-based generation (both language and image/video) continues to mature theoretically and practically, with provable sampling guarantees and training-free inference acceleration appearing in the same week — suggesting diffusion LMs are approaching production viability alongside autoregressive models.

## Worth Deep Reading

1. **[The Interaction Tax](http://arxiv.org/abs/2608.23541v1)** — A necessary corrective to multi-agent orchestration hype; worth reading closely before investing in debate/critique-loop architectures, since it directly questions whether communication overhead is worth its cost under matched budgets.
2. **[InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1)** — As persistent memory becomes standard in production agents (including coding assistants), understanding this attack surface early is critical for anyone deploying memory-enabled agents.
3. **[SWE Refactor Bench](http://arxiv.org/abs/2608.23564v1)** — Directly relevant to coding-agent capability assessment; provides a more realistic stress test than bug-fix benchmarks for evaluating how close agents are to handling real engineering work autonomously.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
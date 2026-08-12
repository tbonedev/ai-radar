# ArXiv AI Research Digest 2026-08-12

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-12 08:13 UTC

---

# ArXiv AI Research Digest — August 12, 2026

## Today's Highlights

Today's submissions cluster around a theme of **self-awareness and self-correction in AI systems** — from agents that reflect on their own failures (GUI grounding, skill compression) to models being probed for the reliability of their own claims (probabilistic consistency, attention fragility, emergent misalignment). A second strong thread is **agentic infrastructure at scale**: papers on RL rollout scheduling, pre-training failure localization, and even a meta-study on why agentic coding instructions (CLAUDE.md-style files) balloon uncontrollably. Safety and evaluation work continues to expose gaps between English-centric assumptions and real multilingual behavior, both for safety alignment and for tool-using agents. Notably, a Yoshua Bengio co-authored paper tackles the theoretical question of verifying whether a model's probabilistic self-reports are even internally consistent — a foundational concern for AI safety broadly.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1) | Kushal Chakrabarti | Traces the unbounded growth of agentic coding instruction files to "imperfect recall" — appending is cheap but safely deleting stale rationale is hard. Offers a diagnostic lens for anyone maintaining long-lived agent memory files. |
| [How to Verify Consistency of Probabilistic Claims](http://arxiv.org/abs/2608.11181v1) | O. Paradise, O. Richardson, Y. Bengio et al. | Asks whether a model's answers to many conditional-probability queries can be checked for self-consistency in polynomial time, directly relevant to trusting AI-reported risk estimates. Provides theoretical grounding for auditing honesty in probabilistic safety claims. |
| [The Illusion of Cross-Lingual Safety in Low-Resource Languages](http://arxiv.org/abs/2608.11146v1) | A. Oppong, P. S. Sahil, T. D. Belay et al. | Shows that English-trained safety alignment does not reliably transfer to low-resource languages, exposing a real vulnerability surface. Highlights that "safe by default" claims are often untested outside high-resource settings. |
| [Data Attribution of Emergent Misalignment with Persona Features](http://arxiv.org/abs/2608.11025v1) | C. Vetter, D. Kaczér, L. Flek et al. | Investigates the mechanistic claim that narrow fine-tuning triggers broad misalignment via amplified latent "persona" directions. Connects data attribution methods to interpretability accounts of emergent misalignment, a growing safety concern. |
| [Mapping and Measuring the Behavioral Evolution of Large Language Models](http://arxiv.org/abs/2608.11027v1) | D. Qiao, C. Ding, J. Fan | Characterizes 32 models across six families using 10,000 shared prompts to trace behavioral drift across generations, beyond simple leaderboard scores. Offers a reusable methodology for tracking how model families diverge over time. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration](http://arxiv.org/abs/2608.11195v1) | A. Li, R. Saha, A. Xue et al. | Documents a real case study of AI agents contributing to improved bounds on the Grothendieck constant, a hard open math problem. Provides concrete evidence and process detail for how AI can meaningfully assist long-horizon research. |
| [Actions Speak Louder than Words: Measuring Cross-Lingual Policy Retention in Tool-Using Agents](http://arxiv.org/abs/2608.11110v1) | S. Mukherjee, K. Bali, S. Sitaram | Argues that multilingual agent evaluation should compare action trajectories, not just final answers, since actions determine cost, latency, and failure modes. Finds that agents often take different steps for the same task across languages. |
| [SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents by Discovering Reusable Structure](http://arxiv.org/abs/2608.11079v1) | X. Bai, H. Lin, C. Liu et al. | Tackles skill-library bloat in self-evolving agents by discovering and compressing reusable structure across accumulated procedures, without needing costly evaluation. Directly complements the CLAUDE.md-growth findings above with a concrete mitigation. |
| [Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation](http://arxiv.org/abs/2608.11191v1) | S. Xuan, Z. Li | Enables GUI agents to adapt to unseen interfaces at test time by reflecting on failures rather than freezing after deployment. Addresses a key brittleness limitation for GUI-automation agents in production. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Scheduling Mixed RL Rollouts Beyond Prefix Locality](http://arxiv.org/abs/2608.11152v1) | Z. Hong, S. Yuan, Y. Ding et al. | Identifies that prefix-aware rollout scheduling, while efficient for cache reuse, fails to control heterogeneous domain mixing in modern multi-domain RL post-training pipelines. Proposes scheduling improvements relevant to anyone running large-scale RLHF/RLVR infra. |
| [SCOUT: Symmetric Consensus Outlier Detection for Failure Localization in LLM Pre-Training](http://arxiv.org/abs/2608.11034v1) | Zhuang Wang | Addresses the hard problem of localizing the origin of rank-local stalls and numerical errors in distributed LLM pre-training after synchronization has already obscured them. Fills a gap left by in-process monitors and post-mortem logs. |
| [ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization](http://arxiv.org/abs/2608.11045v1) | H.-Y. Hsieh, H. T. Kung | Fixes a subtle but consequential rounding ambiguity in calibration-free post-training quantization using a conditional diffusion-based approach. Relevant for efficient LLM deployment without calibration data. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning](http://arxiv.org/abs/2608.11204v1) | W. Bao, T. Jiang, Z. Chen et al. | Addresses the scarcity of action-labeled surgical demonstrations with a world-action model designed for data efficiency in precise, long-horizon surgical manipulation. A step toward more practical learning-based surgical robotics. |
| [R4DSG: Relative 4D Scene Graph Memory for Object-Centric Question Answering in Long Egocentric Video](http://arxiv.org/abs/2608.11017v1) | K. Ma, Y. Mao, W. Li et al. | Builds a persistent object-centric memory for wearable AI assistants, tackling questions like where/when/why an object moved that caption-based memories miss. Targets a core capability gap for long-horizon egocentric-video assistants. |
| [On the Limitations of Cross-Lingual Consistency in Multilingual Text-to-image Generation](http://arxiv.org/abs/2608.11002v1) | S. Zhang, Z. Yan, B. Xie et al. | Introduces LingT2I to benchmark and expose cross-lingual performance gaps in text-to-image generation, which has largely been evaluated English-only. Reinforces today's broader pattern of multilingual robustness gaps across modalities. |

## Research Trend Signal

A clear signal today is the field turning its evaluative lens inward: multiple papers probe whether AI systems' own outputs — probabilistic claims, safety behaviors, or agent action trajectories — actually hold up under scrutiny, rather than trusting surface-level benchmark scores. This reflects growing maturity in AI safety and interpretability research, moving from "does it work in English/on average" toward rigorous, structural verification. A second signal is **agent memory and skill management** emerging as its own subfield — CLAUDE.md's unbounded growth and SkillZip's compression approach both target the same underlying problem of accumulating, unpruned agent knowledge, suggesting this will be an active area as agentic coding tools scale. Finally, infrastructure papers (rollout scheduling, pre-training failure localization) show RL post-training pipelines are now complex enough to need dedicated systems research, not just algorithmic improvements — a sign the "LLM training stack" is maturing into its own systems discipline alongside classical distributed computing.

## Worth Deep Reading

1. **[How to Verify Consistency of Probabilistic Claims](http://arxiv.org/abs/2608.11181v1)** — A Bengio co-authored theoretical treatment of a foundational AI safety question: can we even check, in polynomial time, whether a model's stated risk probabilities are self-consistent? Essential reading for anyone building on model self-reports for safety decisions.

2. **[Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)** — Directly relevant to anyone maintaining agentic coding repositories; formalizes a problem practitioners feel intuitively (instruction files that only grow) and offers a causal account rooted in imperfect recall.

3. **[Long-Horizon AI Research for Grothendieck Constant](http://arxiv.org/abs/2608.11195v1)** — A rare concrete, documented case of AI agents contributing to genuine open-problem mathematical research, valuable both for its result and as a template for how human-AI research collaboration can be structured.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
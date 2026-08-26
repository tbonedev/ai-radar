# ArXiv AI Research Digest 2026-08-26

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-26 07:41 UTC

---

# ArXiv AI Research Digest — 2026-08-25

## Today's Highlights

Today's batch is dominated by agentic self-improvement research, with four papers (Recuris, SPO++, Meta^n, StarHarness) tackling different angles of how agents can accumulate skill and adapt without retraining base model weights — from working-memory architectures to harness evolution to asynchronous RL training. A parallel thread interrogates whether LLM outputs actually reflect the reasoning process they claim to: one paper finds medical chain-of-thought is often "decorative" rather than causally load-bearing, echoing broader faithfulness concerns. On the training-dynamics side, a notable finding shows loss trajectories collapse across runs once learning rate and parameter norm are unified into a single "effective learning rate" metric, offering a simpler lens on pretraining behavior. Infrastructure work continues to scale data for embodied/web agents (BrowserForge, LAION-BVD), while evaluation methodology (FID, RAG, guardrails) remains an active concern across the board.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Effective Learning Rate Governs Loss Dynamics in Language Model Pretraining](http://arxiv.org/abs/2608.24814v1) | Zihan Liu, Ruiheng Zheng, Shaobo Zhang et al. | Shows loss trajectories collapse across pretraining runs once matched on "effective learning rate" (the LR-to-parameter-norm ratio), rather than LR alone. This offers a simpler, more predictive knob for tuning and comparing pretraining schedules. |
| [Right Diagnoses, Decorative Reasoning: A Perturbation Audit of Medical Chain-of-Thought](http://arxiv.org/abs/2608.24790v1) | Mengzhu Xu, Jifan Gao, Xia Jiang et al. | Introduces a clinically-grounded perturbation audit showing that visible medical CoT often doesn't causally drive the final diagnosis. This directly challenges clinician trust in LLM reasoning traces as genuine evidence. |
| [RACE: Scalable Statistical Estimation of Functional Consistency in LLM Neurons](http://arxiv.org/abs/2608.24758v1) | Runyu Wang, Bo Liu, Xiaxin Zhang et al. | Proposes a scalable statistical method to measure stable neuron behavior across domains, moving beyond costly instance-level interpretability probes. Enables domain-wide mechanistic analysis at scale. |
| [The RAT: A Unified Bayesian Model for RAG Evaluation](http://arxiv.org/abs/2608.24753v1) | Pius von Däniken, Felix Matthias Saaro, Mark Cieliebak et al. | Presents a Bayesian framework that jointly models retrieval success, abstention, and error propagation in RAG pipelines. Enables diagnosing where a RAG system fails, not just whether the final answer is correct. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Recursive Experiential-Working Memory Evolution for Long-Horizon Agent Harnesses](http://arxiv.org/abs/2608.24876v1) | Zhaochen Yu, Yingcheng Wu, Zhenfei Yin et al. | Introduces Recuris, splitting agent memory into Working Memory (task progress) and Experiential Memory (reusable skills) to counter history bloat in long-horizon recursive self-improvement. Addresses a core scaling bottleneck for agent harnesses. |
| [SPO++: Stream-Aligned Policy Optimization for Asynchronous Agentic RL](http://arxiv.org/abs/2608.24870v1) | Kai Ruan, Jinghao Lin, Qianshan Wei et al. | Extends single-stream policy optimization to remove the need for sibling rollouts, cutting the cost of training agents on long, variable-length tool-use trajectories. Targets a key inefficiency in group-relative RL for agentic tasks. |
| [CAFE: Self-Improving Search Agents Need Co-Evolving Feedback](http://arxiv.org/abs/2608.24794v1) | Boyang Liu, Senjie Jin, Peixin Wang et al. | Argues terminal rewards can't localize intermediate retrieval errors, and proposes learned in-trajectory corrective feedback that co-evolves with the agent. Aims to fix errors before they compound rather than only at episode end. |
| [Meta$^n$: Recursive Self-Improvement through Emergent Depth](http://arxiv.org/abs/2608.24735v1) | Zae Myung Kim, Young-Jun Lee, Seungyeon Jwa et al. | Tackles the ceiling where self-editing agents can only reach ~2 levels of meta-improvement because part of the editing machinery must stay fixed. Proposes a mechanism for deeper recursive self-improvement. |
| [StarHarness: Evolving Harnesses with Stratified Search for Enterprise Environments](http://arxiv.org/abs/2608.24804v1) | Esakkivel Esakkiraja, Denis Akhiyarov, Vikas Yadav et al. | Evolves the full agent harness — prompts, tools, subagents, MCP providers — for enterprise environments while keeping model weights frozen. A practical alternative to fine-tuning for enterprise agent deployment. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [What FID Hides: Detecting, Ranking, and Diagnosing Deviations in Generative Evaluation](http://arxiv.org/abs/2608.24881v1) | Hao Chen | Shows FID's moment-based summary can mask real distributional differences and lacks a calibrated significance test against sampling variance. Proposes methods to detect and diagnose what standard generative-model metrics miss. |
| [Bellman Calibration for Marginalized Importance Weighting in Offline Reinforcement Learning](http://arxiv.org/abs/2608.24858v1) | Lars van der Laan, Nathan Kallus | Addresses residual occupancy-balance violations in existing offline policy evaluation estimators via a Bellman calibration approach. Improves reliability of off-policy evaluation, a key ingredient for safe agent deployment. |
| [Linear Probing Provides Robust and Efficient Detection of Machine-Generated Text](http://arxiv.org/abs/2608.24780v1) | Gerrit Quaremba, Hanqi Yan, Elizabeth Black et al. | Finds that lightweight linear probes on representations generalize better out-of-domain than typical supervised MGT detectors requiring large training sets. Offers a cheap, robust alternative for AI-text detection. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [LAION-BVD: A 10-Million-Hour Open Video Dataset for Multimodal Pre-training](http://arxiv.org/abs/2608.24845v1) | Andreas Hochlehnert, Marianna Nezhurina, Mehdi Cherti et al. | Releases 80M videos (10M hours) sourced from 1.3B CommonCrawl video URLs for open multimodal pre-training. A major open-data contribution narrowing the gap with proprietary video pretraining corpora. |
| [BrowserForge: Scaling Web Episode via Parallel Browser Sandboxes](http://arxiv.org/abs/2608.24848v1) | Fei Tang, Huawen Shen, Zhiqiong Lu et al. | Builds infrastructure to generate large-scale pixel-based web interaction trajectories via parallel browser sandboxes, addressing the data scarcity bottleneck for training vision-based web agents. Targets a key practical constraint in web-agent training pipelines. |
| [Reading Is Not Using: Retrieval, Judgment, and the Design of AI Financial Research Workflows](http://arxiv.org/abs/2608.24842v1) | Miao Liu, Zhizhe Liu | Identifies a "retrieval-judgment gap" — retrieved financial evidence often fails to actually shift the LLM's investment judgment. Raises design implications for how AI financial-analyst tools should be evaluated and built. |

## Research Trend Signal

Today's submissions converge on a theme of **agentic self-improvement infrastructure**: multiple papers (Recuris, SPO++, StarHarness, CAFE, Meta^n) treat the agent harness — memory, RL training loop, tool interfaces, feedback signals — as the object of optimization, rather than the base model. This suggests the field is shifting effort from model-centric scaling toward harness-centric and process-centric improvements, likely because frontier model weights are increasingly fixed or expensive to touch. A second, complementary trend is **faithfulness skepticism**: work on medical CoT auditing and RAG evaluation both probe whether visible LLM reasoning/retrieval artifacts causally matter or are decorative, a maturation from "does it work" to "does it work for the stated reason." Finally, large open-data releases (LAION-BVD, BrowserForge) signal continued investment in democratizing multimodal and embodied-agent training data, countering the closed-data advantage of frontier labs.

## Worth Deep Reading

1. **[Right Diagnoses, Decorative Reasoning](http://arxiv.org/abs/2608.24790v1)** — A rigorous, high-stakes faithfulness audit in medicine; the methodology (perturbation-based, clinically grounded) is likely portable to auditing CoT trust claims in other safety-critical domains.
2. **[Meta$^n$: Recursive Self-Improvement through Emergent Depth](http://arxiv.org/abs/2608.24735v1)** — Directly confronts a foundational limitation (the ~2-level meta-improvement ceiling) in self-improving agent research; important for anyone tracking the theoretical limits of recursive self-improvement.
3. **[Effective Learning Rate Governs Loss Dynamics in Language Model Pretraining](http://arxiv.org/abs/2608.24814v1)** — A simple, empirically strong unifying result (ELR collapse) that could reshape how practitioners reason about and compare pretraining hyperparameter choices.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
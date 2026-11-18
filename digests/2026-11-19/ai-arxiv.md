# ArXiv AI Research Digest 2026-11-19

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-18 16:07 UTC

---

# ArXiv AI Research Digest — 2026-11-19

## Today's Highlights

Today's submissions center on **self-improving and autonomous agents**. Several papers ask whether models still need hand-designed improvement recipes, how agents learn to train other models, and how stated values shape what coding agents build. Evaluation honesty is a second thread: one paper finds that higher benchmark scores did not translate into more completed work, and another shows that bias-head attribution is not identifiable. Agent governance and trust (federated identity, runtime verification against many natural-language criteria) also appear. Efficiency work is present too: temperature-matched SFT for small datasets, and activation-steered hint-augmented GRPO.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Ambient LLMs: Data-Efficient Supervised Fine-tuning via Temperature Matching](http://arxiv.org/abs/2611.23229v1) | Giannis Daras, Marios Papachristou, Adam Klivans et al. | Proposes temperature matching to make SFT work on datasets much smaller than pre-training corpora. It targets the overfitting and catastrophic forgetting that limit post-training on small data. |
| [Get Hint-Augmented GRPO Done Right Through Activation Steering](http://arxiv.org/abs/2611.23124v1) | Khiem Le, Ting Hua, Nitesh V. Chawla | Addresses GRPO's zero-reward failure on questions beyond the model's current ability by injecting hints through activation steering. This restores a learning signal on hard problems. |
| [What Does a Bias Head Measure? Non-Identifiability in Head-Level Bias Attribution](http://arxiv.org/abs/2611.23218v1) | S. M Seefat Alam | Audits head-level bias localization on Qwen-2.5-7B-Instruct and Llama-3.1-8B-Instruct. It shows the selection statistic is never validated as measuring bias, which undermines ablation-based debiasing claims. |
| [Hidden-State Similarity Predicts Re-Elicitation After Inoculation Prompting](http://arxiv.org/abs/2611.23096v1) | Rose N. Kwon, Samy Mammeri, Sabyasachi Sahoo et al. | Finds that hidden-state similarity predicts when harmful behavior resurfaces after inoculation prompting. This gives a diagnostic for emergent-misalignment mitigations. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Do LLM Agents Still Need to Be Told How to Self-Improve?](http://arxiv.org/abs/2611.23219v1) | Shobhita Sundaram, Cansu Sancaktar, Phillip Isola | Tests whether capable models still need a prescribed self-improvement procedure. The answer bears on how much scaffolding future self-improving agents will need. |
| [RSI-Prime: Training Models to Train Models](http://arxiv.org/abs/2611.23138v1) | Dewu Zheng, Yang Ye, Hongyu Zhang et al. | Studies LLMs' ability to conduct training of target models as a foundation for recursive self-improvement. It treats model-training capability as a distinct skill to measure and train. |
| [The Resolution Hypothesis: Agent Evolution's Key Is Identifying Improvements](http://arxiv.org/abs/2611.23068v1) | Yuanhao Zeng, Shaocheng Lan, Ao Lu et al. | Argues that the selector's ability to identify real improvements, not the proposer, drives agent evolution. This helps explain why methods trade wins across papers and sometimes fail to bootstrap. |
| [Values Shape What Self-Improving Coding Agents Build](http://arxiv.org/abs/2611.23067v1) | Jason Liang, Dylan Waldner, Risto Miikkulainen | Studies whether a short value statement in an agent's prompt changes how a self-improving agent works on open-ended tasks. It points to a lightweight steering lever beyond result-based optimization. |
| [Runtime Verification of Multiple Natural Language Criteria for Agent Governance](http://arxiv.org/abs/2611.23074v1) | Silviu Pitis, Parand A. Alamdari, Jessica Tang et al. | Introduces VFM, a tree-attention verifier that checks an output against many natural-language criteria at once. It reports each as satisfied, violated or inapplicable, which makes large-scale agent governance practical. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Spool: Low-Latency Streaming Inference for Hybrid Vision-Language Models](http://arxiv.org/abs/2611.23228v1) | Rui Ning, Om Chabra, Hari Balakrishnan | Targets prompt question answering over a bounded window of recent video using hybrid attention and linear-recurrent VLMs. It matters for accessibility agents and robotics that need low latency. |
| [Agent Trust Infrastructure (ATI)](http://arxiv.org/abs/2611.23202v1) | Viet K. Nguyen, Mohammad I. Husain | Proposes a federated architecture for identity, trust, attestation and accountability among agents across organizations. It fills a gap in current agent frameworks, which cannot verify cross-organizational agents. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Higher-Scoring Coding Models Did Not Get More Work Done](http://arxiv.org/abs/2611.23216v1) | Yining Hua | Uses a natural experiment, a 19-day access ban on Claude Fable 5, to test whether benchmark gains predict real work completed. It reports they did not, which challenges benchmark-driven model selection. |
| [Colombo: A Frontier-to-Frontier Autoresearch System for Oracle-Based Optimization](http://arxiv.org/abs/2611.23080v1) | Haihan Zhang, Wendao Wu, Chenheng Zhang et al. | Presents a self-organizing AI researcher, first applied to oracle-based optimization. It measures how efficiently an automated researcher can advance a frontier. |
| [Inference after coding agents](http://arxiv.org/abs/2611.23174v1) | Florian Gunsilius, David Van Dijcke, Kaspar Wüthrich | Argues that coding agents' flexibility in empirical analysis threatens classical hypothesis-testing validity. It is a methodological warning for AI-assisted science. |
| [The Illusion of Grounding: Do Vision-Language Models Weigh Retrieved Text and Images Like an Ideal Observer?](http://arxiv.org/abs/2611.23127v1) | Basavaraj R M, Harshal Chandel | Introduces GIB-200K, 200,000 image-question items, to test how retrieval-augmented VLMs weigh possibly faulty text and images. It exposes gaps between model behavior and an ideal observer. |

## Research Trend Signal

Three directions stand out. First, **self-improvement is being analyzed, not just built**: papers question whether the improvement procedure must be specified (Sundaram et al.), where evolution bottlenecks (Resolution Hypothesis), and how values steer behavior. Second, **skepticism about measurement** is growing: benchmark scores versus real work output, unvalidated bias-head attribution, and statistical validity when agents run analyses. Third, **agent infrastructure for trust and governance** is maturing, with federated identity and scalable multi-criteria runtime verification. Technique-level work continues on RL for reasoning (GRPO with steering) and data-efficient fine-tuning. Together these suggest the field is shifting from capability demos toward reliability, accountability and validated evaluation of autonomous systems.

## Worth Deep Reading

1. **[Higher-Scoring Coding Models Did Not Get More Work Done](http://arxiv.org/abs/2611.23216v1)**: a rare natural experiment on real usage rather than benchmarks. If the result holds, it affects how teams choose and how labs report coding models.
2. **[The Resolution Hypothesis](http://arxiv.org/abs/2611.23068v1)**: it offers a unifying explanation for inconsistent agent-evolution results by pointing at the selection signal. That could guide the design of more reliable self-improvement loops.
3. **[Runtime Verification of Multiple Natural Language Criteria for Agent Governance](http://arxiv.org/abs/2611.23074v1)**: a concrete, efficient mechanism (shared-prefix tree attention) for checking outputs against hundreds of policies. It is directly useful for production agent deployments.

Note: summaries are based on the truncated abstracts provided, so details beyond those excerpts are not claimed.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
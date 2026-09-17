# ArXiv AI Research Digest 2026-09-17

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-17 12:23 UTC

---

# ArXiv AI Research Digest — September 17, 2026

## Today's Highlights

Today's submissions show a clear pivot toward **interpretability-driven safety**: two papers independently probe internal model representations to catch reward hacking and misrouted evidence before it reaches outputs. Efficiency research is diversifying beyond pure scaling — zeroth-order preference alignment, expert-pruning for MoE, and even "infinite-parameter" weight generation all target the same problem (more capability per FLOP) from different angles. On the agents side, the field is maturing past benchmark accuracy toward **operational concerns**: privacy leakage across multi-step sessions, compositional policy compliance, and serving-system awareness of tool-call progress. Theoretical work on model collapse and off-policy evaluation hardness suggests growing scrutiny of the statistical foundations underlying synthetic-data pipelines and RL-based training.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Objective vs. Search: Decomposing What Makes a Good Tokeniser](http://arxiv.org/abs/2609.19145v1) | A. Yavuz, C. Meister, T. Pimentel | Disentangles BPE and UnigramLM along two independent axes — optimization objective vs. search procedure — to isolate what actually drives tokenizer quality. This reframing could redirect future tokenizer design toward the axis that matters most rather than treating the two algorithms as monolithic alternatives. |
| [A Zeroth-Order Paradigm for LLM Preference Alignment](http://arxiv.org/abs/2609.19144v1) | P. Chen, X. Chen, W. Yin et al. | Proposes a zeroth-order alternative to gradient-based direct preference alignment to address likelihood displacement on small-margin preference pairs. This could offer a cheaper, more robust path to alignment when preference signals are noisy or weak. |
| [Monitoring and Discovering Reward Hacking with Internal Representations](http://arxiv.org/abs/2609.19101v1) | L. Bergen, U. Bhalla, A. Lee et al. | Shows reward hacking leaves a detectable signature inside frontier open-source LLMs' internal activations during evaluation. This opens a practical monitoring pathway for catching reward hacking before it manifests in visible outputs. |
| [Preventing Model Collapse: A Fisher-Rao Perspective on Training with Synthetic Data](http://arxiv.org/abs/2609.18878v1) | M. Marchi, J. P. Silvestre, B. Gharesifard et al. | Applies statistical-mechanics/information-geometry tools (Fisher-Rao) to characterize the dynamics that cause recursive synthetic-data training to collapse. Understanding the geometry of collapse is foundational as more pretraining pipelines lean on synthetic data. |
| [Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data](http://arxiv.org/abs/2609.18842v1) | J. Hu, R. M. Clarke, Y. Zhang et al. | Extends the MoE idea of activating a fraction of stored parameters toward dynamically generating weights from live data rather than a fixed bank. This challenges the assumption that capability requires ever-larger static parameter stores. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Cognitive Extensions for Dual-Process Language Agents](http://arxiv.org/abs/2609.19128v1) | J. Meneses dos Santos, A. L. Oliveira | Extends the SwiftSage dual-process (fast proposer + slow planner) agent with modular memory and self-reflection components for long-horizon interactive tasks. Addresses a core brittleness in language agents: state tracking and recovery from failed steps. |
| [ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions](http://arxiv.org/abs/2609.18864v1) | G. Wu, H. Huang, G. Long et al. | Introduces a session-level metric for privacy leakage in tool-using agents, moving beyond single-action or final-response proxies that miss exposure elsewhere in a multi-step trace. Provides common ground truth across outlets and tool paths, filling a real evaluation gap. |
| [Ask the Tool, Don't Guess: Agent Tool Calls Hold Their Progress](http://arxiv.org/abs/2609.18849v1) | Y. Liu, Y. Zhang, F. Li et al. | Argues serving systems should read actual tool-call progress signals rather than guessing duration from name/history to decide whether to hold KV cache. A systems-level optimization that could meaningfully cut GPU memory waste in agentic serving at scale. |
| [Compositional Policy Violations: When Step-Level Compliance Fails in Agentic AI Workflows](http://arxiv.org/abs/2609.18820v1) | A. Kurady, S. S. C. Grandhi, R. Gupta et al. | Shows that step-scoped governance (per-turn classifiers, span-level evaluators) misses policy violations that only emerge compositionally across a workflow. Highlights a critical blind spot for regulated-industry deployments relying on turn-level guardrails. |
| [CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents](http://arxiv.org/abs/2609.18779v1) | J. Jiang, L. He, Z. Fang | Jointly evolves query routing and agent fine-tuning in Mixture-of-Agents systems instead of treating them as separate processes. Lets routing strategies adapt as agent capabilities change during continual post-training. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Exponential Hardness of Off-Policy Evaluation under History-Dependent Logging](http://arxiv.org/abs/2609.19135v1) | P. Jajoo | Constructs POMDPs where a logging policy visits every hidden state frequently yet remains exponentially uninformative about a target policy's value. A cautionary theoretical result for anyone relying on logged data to evaluate RL/agent policies. |
| [Probabilistic Linear Explanations](http://arxiv.org/abs/2609.19077v1) | F. Koriche, J.-M. Lagniez, C. Tran | Extends formal (abductive) explainability with probabilistic relaxations that stay within human cognitive limits while going beyond categorical classification. Bridges a gap between rigorous but unwieldy formal explanations and looser heuristic ones. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [MUSE: Benchmarking Large Vision-Language Models on Multi-Modal Understanding in Situated Education](http://arxiv.org/abs/2609.19088v1) | L. Zhu, X. W. Yee, W. Li et al. | Evaluates VLMs on interpreting artistic imagery's semantic, affective, and cultural context for AI-assisted language learning. Exposes gaps in educational deployment that standard VQA benchmarks don't capture. |
| [Reporting Practice Matters: The Impact of Reference Choice on Chest X-ray Report Evaluation](http://arxiv.org/abs/2609.19093v1) | D. P. Jeong, C. Q. Li, H. Hosseiny et al. | Shows that heterogeneous radiologist reporting styles distort automated evaluation of AI-generated chest X-ray reports. A methodological warning that could change how clinical NLG benchmarks are constructed going forward. |
| [EviGen: Predictive Evidence Scaffolding for Verifiable Clinical Rationale Generation](http://arxiv.org/abs/2609.18852v1) | F. Li, H. Burre, L. Sun et al. | Builds structured evidence scaffolds from longitudinal EHRs so LLM-generated clinical rationales stay verifiable rather than costly free-text summarization. Targets a practical bottleneck: making LLM reasoning over years of patient history auditable. |
| [ProgramDistill: From Interactive Web Apps to Verifiable Reference-Guided SWE Tasks](http://arxiv.org/abs/2609.18805v1) | J. Kim, M. Kim, Y. J. Kim et al. | Introduces a benchmark requiring coding agents to infer intended behavior from working software rather than from issues/instructions. Better mirrors real-world maintenance work where specs are implicit in existing code. |

## Research Trend Signal

A convergent theme this cycle is **shifting safety and evaluation inward** — toward model internals (reward-hacking detection, OCR-head circuits) and toward whole-session/whole-workflow scope rather than single actions or turns (ASLEval's privacy displacement, compositional policy violations, dual-view agent benchmarking). This suggests the community is recognizing that point-wise evaluation systematically undercounts failure modes that only appear across a trajectory. Parallel to this, efficiency research is diversifying past raw scaling: zeroth-order alignment, MoE expert pruning, and infinite-parameter weight generation all seek more capability per unit of compute without simply adding parameters. Theoretical papers (off-policy evaluation hardness, Fisher-Rao model collapse, double descent as least action) indicate renewed appetite for rigorous foundations underneath empirically-driven agent and RL systems. Finally, serving infrastructure is starting to co-design with agentic workloads specifically (tool-call-aware KV cache management), signaling that "agentic" is becoming a first-class systems concern, not just a prompting pattern.

## Worth Deep Reading

1. **[Monitoring and Discovering Reward Hacking with Internal Representations](http://arxiv.org/abs/2609.19101v1)** — Directly actionable for anyone deploying RLHF/RLAIF-trained models; if reward hacking is mechanistically detectable pre-deployment, this changes evaluation pipelines industry-wide.
2. **[Compositional Policy Violations: When Step-Level Compliance Fails in Agentic AI Workflows](http://arxiv.org/abs/2609.18820v1)** — Essential reading for anyone building agent governance today, since it names a specific, likely-underestimated gap in the step-scoped guardrail architectures currently in production.
3. **[Exponential Hardness of Off-Policy Evaluation under History-Dependent Logging](http://arxiv.org/abs/2609.19135v1)** — A sharp theoretical result with practical bite: it undercuts confidence in offline evaluation of agent/RL policies trained on historical logs, which is increasingly common practice.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
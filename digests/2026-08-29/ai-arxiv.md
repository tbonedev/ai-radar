# ArXiv AI Research Digest 2026-08-29

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-29 12:56 UTC

---

# ArXiv AI Research Digest — 2026-08-29

## Today's Highlights

Today's batch is dominated by **agent infrastructure and post-training refinements** rather than headline model releases. A cluster of papers tackles how agents accumulate, verify, and audit experience over time — skill libraries (WikiSkill), execution audit patterns (Persona-Execution Separation), and intent tracking for misalignment detection (INTENT-AS-A-TOOL). On the training side, several works push back against brute-force scaling: CritICL squeezes stronger inference-time behavior out of small-model failure patterns, and SWE-Prime shows fewer, higher-quality trajectories beat larger noisy datasets for SWE agents. There's also a healthy skepticism thread — papers questioning whether complex prompt search, eval-awareness suppression, and statistical audit designs actually deliver what they claim. Finally, a rare field study (Sophistication in GenAI Use) offers real workplace telemetry on how employees actually use LLMs, a useful counterweight to benchmark-only evaluations.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1) | Y. Wu, Y. He, Z. Hu et al. | Introduces an inference-time framework that extracts useful signal from small-model failure patterns instead of relying on repeated generation or external verifiers. This offers a cheaper alternative to standard inference-time scaling for improving LLM reasoning. |
| [Boosting LLM Exploration via Weak-Model Guidance in RLVR](http://arxiv.org/abs/2608.27420v1) | X. Shen, H. Zhang, P. Li et al. | Addresses entropy collapse in RLVR by using weak-model guidance to preserve exploration diversity, mitigating the narrowed reasoning coverage that hurts pass@k. This targets a well-known failure mode of RLVR training pipelines beyond standard regularization fixes. |
| [Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms](http://arxiv.org/abs/2608.27409v1) | S. Wu, K. Yang, Y. Cai et al. | Systematically compares three paradigms (merging, distillation, and related fusion methods) for combining domain-specific RLVR experts into a single capable model. Useful for teams weighing the cost/benefit of training separate experts versus multi-domain joint training. |
| [Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1) | K. Luo, J. Cui, Y. Yin et al. | Demonstrates a cost-efficient, hardware-accessible pretraining recipe that reproduces competitive small-model performance on a single consumer GPU budget. Lowers the barrier for academic and independent researchers to run pretraining experiments. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1) | L. Tang, C. Rashtchian, C-S. Ferng et al. | Proposes compiling agent trajectories into curated, reusable skill knowledge rather than raw experience discovery, addressing quality-control gaps in prior skill-evolution work. This moves agent self-improvement closer to durable, auditable knowledge assets. |
| [RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution](http://arxiv.org/abs/2608.27439v1) | J. Zhang, H. Liu, K. Chen et al. | Builds an automated red-teaming agent that evolves attack skills from experience instead of using fixed jailbreak templates, targeting agentic harms like tool misuse and persistent state changes. Relevant as agent deployments move from text generation to real-world execution harnesses. |
| [INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment](http://arxiv.org/abs/2608.27348v1) | Y. Zhang, J. Dong, P. Xu et al. | Uses chain-of-thought monitoring combined with an explicit "intent" tool to detect harmful agentic actions under goal conflict or pressure. Offers a lightweight, generalizable safety-monitoring mechanism for agents taking consequential actions. |
| [What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](http://arxiv.org/abs/2608.27260v1) | X. Zeng, Z. Xu, B. Zhang et al. | Analyzes what properties (consistency across environments, tasks, and success signals) make agentic interaction data useful for training rather than merely abundant. Provides a framework for evaluating and improving agentic data-generation pipelines. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SWE-Prime: Fewer Trajectories, Better Performance](http://arxiv.org/abs/2608.27449v1) | D. Zheng, R. Ye, Y. Wang et al. | Shows that curating fewer, higher-quality trajectories outperforms large-scale SFT on unfiltered successful trajectories for software-issue-resolution agents. Challenges the assumption that task success alone implies good training supervision. |
| [From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench](http://arxiv.org/abs/2608.27442v1) | D. Zheng, Y. Wang, X. Wang et al. | Introduces a benchmark modeling code review as an iterative, multi-turn developer-reviewer interaction rather than a single-shot judgment. Better reflects how LLM-based code review tools need to perform in practice. |
| [Beyond F1: Evaluating Coverage and Failure Recovery in AI Model Security Scanners](http://arxiv.org/abs/2608.27424v1) | Q. Lan, V. Pandurangan, A. Kaul et al. | Evaluates ModelScan, ModelAudit, and Fickling on cases beyond clean-verdict scenarios, arguing standard metrics like F1 miss how scanners behave under ambiguous or unscannable inputs. Highlights a coverage/robustness gap in ML supply-chain security tooling. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators](http://arxiv.org/abs/2608.27406v1) | K. Liu, O. Shorinwa | Extends action-conditioned video world models beyond single-robot embodiments so they can learn generalizable physics from heterogeneous robot video data. Enables zero-shot physical simulation across embodiments without embodiment-specific retraining. |
| [LLMs Can Design Near-Optimal OR Algorithms](http://arxiv.org/abs/2608.27296v1) | J. Baek | Tests whether LLMs can design effective algorithms for classic operations-research problems (inventory control, queueing, assortment optimization). Suggests a new use case for LLMs as algorithm designers in well-specified, mathematically structured domains. |
| [Sophistication in GenAI Use: Field Evidence from a Large Firm](http://arxiv.org/abs/2608.27364v1) | N. Hallman, Z. Kowaleski, A. Puvvada et al. | Analyzes 713,564 real employee prompts across ~4,000 back-office workers to measure how GenAI usage sophistication varies across functional areas. A rare large-scale field dataset grounding GenAI adoption claims in actual workplace behavior rather than surveys or lab studies. |

## Research Trend Signal

Today's submissions reflect a maturing agent ecosystem moving past raw capability demonstrations toward **infrastructure for trust, auditability, and durable learning**. Multiple papers address how agents should retain and structure experience (WikiSkill, harness evolution, agentic-data quality) rather than treating each deployment as stateless. Safety research is similarly shifting from static jailbreak benchmarks to dynamic, execution-aware monitoring (RedEvoAgent, INTENT-AS-A-TOOL, eval-awareness framing) — a recognition that agentic harms increasingly involve tool use and persistent state, not just unsafe text. On the training side, there's a "less but better" theme: RLVR fusion, weak-model guidance for exploration, and curated trajectory selection all push against the more-data-is-always-better assumption. A quieter but notable thread is empirical skepticism — papers explicitly re-examining whether existing evaluation methodologies (security scanner metrics, censored-scale DiD audits, complex prompt search) hold up under scrutiny, suggesting the field is entering a phase of methodological self-correction alongside continued capability growth.

## Worth Deep Reading

1. **[WikiSkill](http://arxiv.org/abs/2608.27454v1)** — A thoughtful treatment of the "skill evolution" problem that's becoming central to agent product design; worth reading for teams building any long-running agent with memory/skill persistence.
2. **[Sophistication in GenAI Use: Field Evidence from a Large Firm](http://arxiv.org/abs/2608.27364v1)** — One of the few papers grounded in genuine large-scale production telemetry rather than benchmarks; valuable for anyone making adoption or ROI arguments about enterprise LLM use.
3. **[INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment](http://arxiv.org/abs/2608.27348v1)** — Directly relevant to anyone deploying autonomous agents with real-world side effects; proposes a practical, low-overhead monitoring mechanism rather than another static red-team benchmark.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
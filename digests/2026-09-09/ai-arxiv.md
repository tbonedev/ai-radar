# ArXiv AI Research Digest 2026-09-09

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-09 12:07 UTC

---

# ArXiv AI Research Digest — September 9, 2026

## Today's Highlights

Today's submissions cluster heavily around agentic self-improvement — coding agents that co-evolve with their harnesses, generate their own tests, and manage long-horizon memory — alongside a strong thread of LLM behavioral auditing (sycophancy under pressure, attention sinks, and how evaluation methodology itself introduces bias). Several papers push mechanistic understanding of transformers, from why attention sinks arise (not RoPE, but self-concentration) to training-free task vectors for steering model behavior without fine-tuning. On the applications side, embodied AI continues to mature with whole-body humanoid navigation and contact-aware dexterous manipulation, while a large-scale clinical trial shows an AI diagnostic system outperforming both physicians and frontier LLMs in primary care. A recurring meta-theme is rigor: multiple papers interrogate whether existing benchmarks, checkpoints, and audit protocols actually measure what they claim to.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Measuring LLM Sycophancy under Sustained Multi-Turn Pressure](http://arxiv.org/abs/2609.09090v1) | L. Tang, K. Wei, T. Jiang et al. | Introduces SPINE, a benchmark for sycophancy under sustained, adaptive adversarial pushback rather than short scripted disagreements. Finds failure modes invisible to existing short-conversation evaluations, suggesting current sycophancy mitigations are incomplete. |
| [It's Not RoPE that Creates Sinks: The Role of Self-Concentration and Value-Non-Mixing in Attention](http://arxiv.org/abs/2609.09085v1) | R. Kiya, S. Ohashi, K. Sato et al. | Traces attention sinks and massive activations to self-concentration and value-non-mixing dynamics rather than positional encoding choice. Matters because massive activations complicate low-bit quantization, so correcting the causal story could inform better quantization-aware architectures. |
| [Good Pretraining, Bad SFT: Checkpoint Quality Across the Training Stack](http://arxiv.org/abs/2609.08966v1) | S. Maskey, P. Scholl, J. Knupp et al. | Shows in a 30B MoE pipeline that the best pretraining checkpoint by loss/benchmarks is not necessarily the best starting point for SFT. Challenges the standard practice of checkpoint selection based on pretraining metrics alone. |
| [The Audit Decides the Verdict: Instrument Effects Rival Demographic Bias in LLM Decision Audits](http://arxiv.org/abs/2609.09048v1) | S. Vohra, M. Ravikiran | Demonstrates that whether an LLM appears demographically biased flips depending on whether a benchmark asks one-at-a-time vs. side-by-side ranking questions. Implies that many published bias findings may be artifacts of audit instrument design rather than model behavior. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1) | Y. Lu, Y. Chen, S. Wu et al. | Proposes explicit, self-evolving procedural graphs to encode reusable "what to do, in what order" knowledge for long-horizon agents instead of unconstrained generation over history. Addresses a core scalability bottleneck in agent planning as task horizons grow. |
| [Co-Evolving Harnesses and Models: On-Policy Correction Helps Weaker Models Catch Up Where Imitation Fails](http://arxiv.org/abs/2609.09134v1) | Z. Yu, B. Bi, S. K. Pentyala et al. | Shows that jointly evolving the agent harness (prompts, tools, scaffolding) alongside on-policy correction lets smaller models match larger ones on domain tasks. Offers a cost-effective alternative to scaling model size for agentic performance. |
| [ExecCritic: Learn to Test, Test to Improve for Coding Agents](http://arxiv.org/abs/2609.09133v1) | L. Tao, B. Peng, H. Wang et al. | Identifies that self-generated tests from the same trajectory as the patch can encode correlated errors, undermining execution feedback for repo repair. Proposes decoupling test generation from patch generation to produce more reliable reward signals. |
| [Copying explains the collective behavior of AI agents in the wild](http://arxiv.org/abs/2609.09150v1) | G. De Marzo, N. Albore, D. Garcia | Analyzes thousands of memoryless, short-lived AI agents that spontaneously coordinated via a shared public wiki, showing copying dynamics alone explain the emergent cooperation. A rare in-the-wild empirical study of multi-agent social behavior outside controlled benchmarks. |
| [SAEScientist-Bench: Can AI Agents Conduct Autonomous SAE Interpretability Research?](http://arxiv.org/abs/2609.09113v1) | Y. Tan, S. He, J. Zhao et al. | Benchmarks whether agents can autonomously conduct sparse-autoencoder interpretability research, filling a gap in recursive self-improvement pipelines that automate training but not auditing. Important for safety, since scaling autonomous model development needs matching autonomous oversight tools. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Let It Go or Learn to Self-Correct: Continuous Diffusion for Constrained Discrete Tasks](http://arxiv.org/abs/2609.09009v1) | M. Drozdova, S. L. Nguyen, F. Fleuret | Investigates how DDPM-style denoising behaves on globally constrained discrete tasks, where the "stay close to noisy state" assumption from continuous domains breaks down. Clarifies design choices for applying diffusion models beyond image generation. |
| [Transformers as In-Context Samplers: From Closed-Form Diffusion to Estimation-Free Sampling](http://arxiv.org/abs/2609.08981v1) | A. Adibi, A. Jafari, M. Ghavamzadeh et al. | Extends theoretical understanding of in-context learning to show transformers can perform estimation-free sampling akin to closed-form diffusion. Strengthens the theoretical foundation for why ICL generalizes without parameter updates. |
| [SQLMorph: Query Mutation and Fine-Grained Metrics for Text-to-SQL Evaluation](http://arxiv.org/abs/2609.08950v1) | M. Malekpour, M. Riahi, M. Lamothe et al. | Introduces query mutation and fine-grained metrics to address the gap between public Text-to-SQL benchmarks and enterprise-scale schema complexity. Provides more discriminating evaluation as LLM-based SQL generation moves toward production use. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1) | A. Li, Y. Chen, Z. Li et al. | Replaces 2D path-planning navigation with continuous, geometry-aware whole-body coordination (arms, torso, legs) for humanoids in clutter. Pushes embodied VLA models toward the kind of full-body reasoning humans use to navigate tight spaces. |
| [Performance of Clinical AI System and Physicians and Frontier Language Models in primary care diagnostics](http://arxiv.org/abs/2609.09070v1) | A. Nkansah, H. Plotnitskaya, S. Salavei et al. | Reports a head-to-head trial where a clinical AI system (Doctorina) achieved 82% top-1 diagnostic concordance, outperforming eight physicians and four frontier LLMs on 150 synthetic consultations. One of the more rigorous clinical benchmarks comparing purpose-built medical AI against general frontier models. |
| [DeCAL: Towards Physically-Grounded Dexterous Vision-Language-Action Models via Contact-Aware Latent Co-Imagination](http://arxiv.org/abs/2609.09119v1) | Y. Fu, N. Chen, J. Zhao et al. | Adds contact-aware latent co-imagination to VLA models to handle occlusion and complex contact dynamics in dexterous manipulation. Targets a known weak point of current VLA systems: fine-grained, contact-rich physical interaction. |

## Research Trend Signal

A clear shift is underway from "can agents complete tasks" to "can we trust and audit the process by which they do." Papers on harness co-evolution, decoupled test generation, procedural graphs, and memory clearance all target the reliability of the agentic loop itself rather than raw capability. In parallel, a wave of methodology-critical papers (sycophancy under sustained pressure, audit-instrument effects on bias measurement, checkpoint-selection assumptions) suggests the field is entering a more skeptical, second-order phase — questioning whether existing evaluation protocols measure genuine model properties or artifacts of test design. Mechanistic interpretability work on attention sinks and training-free task vectors signals growing appetite for cheap, non-fine-tuning-based model control. Embodied AI continues its push toward full-body and contact-rich physical reasoning rather than treating robots as constrained 2D or gripper-only agents. Finally, real-world deployment studies (in-the-wild multi-agent wiki editing, primary-care clinical trials) mark a maturation point where papers increasingly validate against live systems and human professionals rather than synthetic benchmarks alone.

## Worth Deep Reading

1. **[The Audit Decides the Verdict](http://arxiv.org/abs/2609.09048v1)** — A methodologically sharp result showing that bias findings can reverse based on question framing alone; essential reading for anyone citing LLM bias benchmarks, since it questions the validity of a whole genre of prior work.
2. **[Co-Evolving Harnesses and Models](http://arxiv.org/abs/2609.09134v1)** — Directly actionable for teams building agentic products on smaller/cheaper models; the harness-as-first-class-optimization-target framing is likely to influence how agent systems get engineered going forward.
3. **[Performance of Clinical AI System and Physicians and Frontier Language Models in primary care diagnostics](http://arxiv.org/abs/2609.09070v1)** — A rare rigorous three-way comparison (specialized AI vs. physicians vs. frontier LLMs) with concrete concordance numbers, offering a template for how domain-specific AI systems should be validated against both human experts and general-purpose models.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
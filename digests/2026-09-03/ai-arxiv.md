# ArXiv AI Research Digest 2026-09-03

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-03 11:53 UTC

---

# ArXiv AI Research Digest — 2026-09-03

## Today's Highlights

Today's batch is dominated by post-training and inference-efficiency work: teams are squeezing more reliable reasoning out of existing model scales rather than chasing raw parameter growth, seen in gold-medal coding competition pipelines, process-reward learning from "first mistakes," and 2-bit/4-bit quantization advances. A second cluster focuses on agent robustness and evaluation — cheaper agent benchmarking, safety co-evolution between harness and policy, and world models for web agents — reflecting growing maturity in how agentic systems are built and audited rather than just demoed. Security and trust themes recur across multiple papers, from RAG poisoning attacks on code generation to mechanistic studies of misleading context corrupting medical judgment. Notably, several papers push back on pessimistic priors (LLMs *can* learn from noisy user feedback; process rewards *can* be extracted cheaply from failure points), suggesting a shift toward more optimistic, mechanism-driven interventions.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [UE5M3 FP4 Block Scaling for Stable Language Model Pretraining](http://arxiv.org/abs/2609.02846v1) | R. Hu, C. Luschi, P. Balanca | Proposes a simpler alternative to NVIDIA's current-tensor-scaling FP4 recipe for stable 4-bit pretraining without extra Hadamard-transform overhead. Matters because FP4 training is the next major lever for cutting large-model pretraining cost. |
| [Cliff: Learning Process Rewards from the First Mistake](http://arxiv.org/abs/2609.02817v1) | P. Han, R. Wang, K. Ramaneti et al. | Introduces a process-reward approach that pinpoints the first erroneous reasoning step rather than relying on coarse outcome rewards in RLVR. This gives LLM post-training much denser, more actionable supervision signal for multi-step reasoning. |
| [Language Models Can Control Their Own Attention](http://arxiv.org/abs/2609.02737v1) | N. Ho, H. Ahmad, W. Koh et al. | Shows LLMs can learn to selectively attend rather than scanning the full KV cache for every generated token, relevant to million-token contexts. This could substantially cut the compute cost of long-context inference. |
| [Unfolding the Leech Lattice: Fused Multi-Shell Decoding for 2-Bit LLM Weights](http://arxiv.org/abs/2609.02652v1) | P. Malandrino | Delivers the first working multi-shell decoder for Leech-lattice vector quantization, previously only a theoretical 2-bit quality ceiling. Enables practical deployment of the strongest known 2-bit weight compression scheme. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Discriminative World Models for Web Agents](http://arxiv.org/abs/2609.02885v1) | K. Li, D. Pendharkar, A. Pahilajani et al. | Reframes web-agent world models as discriminative rankers over candidate actions instead of generative next-state predictors. This sidesteps the fixed, low-diversity outputs that plague generative world models in test-time action selection. |
| [SafeEvolve: Harness-Policy Co-Evolution from Agent Experience for Safety Alignment](http://arxiv.org/abs/2609.02786v1) | Q. Mao, W. Qu, D. Guo et al. | Jointly evolves the agent harness and policy from real agent trajectories to address both harmful outputs and unsafe multi-step execution. Moves safety alignment beyond model-only fixes toward system-level co-design. |
| [Post-Training Language Models for Gold-Medal Performance in Coding Competitions](http://arxiv.org/abs/2609.02849v1) | A. Ficek, S. Narenthiran, M. Samadi et al. | Presents an end-to-end pipeline combining curated problems and synthetic reasoning traces to reach IOI/ICPC gold-medal-level performance. Demonstrates how far targeted post-training can push reasoning ceilings without new pretraining. |
| [Repo-To-Skill: Distilling GitHub Repositories Into AI4AI Skills](http://arxiv.org/abs/2609.02749v1) | J. Chen, Y. Hu, H. Qian et al. | Extracts reusable, domain-specific "skills" from GitHub repos to fill the know-how gap in autonomous ML-research agents. Directly relevant to giving agent harnesses persistent, transferable expertise rather than one-off context. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CodePoisonRAG: Knowledge Poisoning Attacks on Retrieval-Augmented Code Generation](http://arxiv.org/abs/2609.02774v1) | V. Gadey, Z. Marey, A. Dmitrienko | Demonstrates that poisoned code artifacts and docs retrieved into RACG pipelines can silently corrupt generated code. Highlights a critical, underexplored trust boundary as RAG-for-code adoption grows in production tooling. |
| [From Tokens to Semantics: Complementary Signals for Hallucination Detection in Black-Box LLMs](http://arxiv.org/abs/2609.02679v1) | U. Pawar, R. Ramanayake, O. O'Neill et al. | Combines token-level and semantic-level signals accessible via black-box APIs to detect fabrications without reference documents. Practical for public-facing deployments where ground truth isn't available at inference time. |
| [Incremental Pooled LLM Evaluation for Cost-Effective Retrieval Model Selection](http://arxiv.org/abs/2609.02745v1) | M. Nelson, H. Bhathena, A. Joshi et al. | Uses LLM judges over pooled retrieved documents to make retrieval-model comparison cheaper and repeatable as new candidates arrive. Addresses a real bottleneck in iterating on production RAG retrieval stacks. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [LLMs for Telecom Root Cause Analysis: A Structured Reasoning Framework for Evidence-Grounded Diagnosis](http://arxiv.org/abs/2609.02805v1) | H. Zhou, M. Kulkarni, H. Chen et al. | Applies structured, evidence-grounded LLM reasoning to diagnose cross-layer performance issues in 5G/6G networks. Targets a high-value industrial domain where hallucinated root causes carry real operational cost. |
| [CORAL: An LLM-Native Harness for Production Recommender Systems](http://arxiv.org/abs/2609.02730v1) | M. Rafay Azhar, Y. Zhou, G. Jiang et al. | Builds an LLM-driven harness to continually re-optimize retrieval, ranking, and serving choices in production recommenders. Reframes recommender-system maintenance as an agentic, LLM-supervised optimization loop. |
| [Untangling the Mechanisms of Misleading Context in Medical Question Answering](http://arxiv.org/abs/2609.02754v1) | R. Linzmayer, N. Elhadad | Mechanistically examines how misleading context corrupts expert-level medical judgment in LLMs. Important groundwork for deploying LLMs safely in high-stakes clinical QA settings. |

## Research Trend Signal

Two converging trends stand out: **efficiency-at-the-edges** (FP4/2-bit quantization, sparse attention control, LoRA optimizer redesigns) is maturing from theoretical proposals into deployable kernels and recipes, suggesting the field is optimizing hard against inference and training cost rather than just chasing capability. In parallel, **agent infrastructure is professionalizing** — cheaper agent evaluation (EarlyEval), harness-policy co-evolution for safety (SafeEvolve), reusable skill distillation (Repo-To-Skill), and game-theoretic accounts of multi-agent coordination (Bilevel Coordinated Reflection) all treat the agent harness, not just the base model, as a first-class object of study. A third thread is trust-boundary scrutiny: poisoning attacks on RAG-for-code, misleading-context corruption in medical QA, and black-box hallucination detection all probe where LLM systems silently fail under adversarial or noisy real-world inputs. Together these suggest 2026's frontier is less about scaling laws and more about making existing model capability cheap, controllable, and verifiable in deployment.

## Worth Deep Reading

1. **[Cliff: Learning Process Rewards from the First Mistake](http://arxiv.org/abs/2609.02817v1)** — A sharp, mechanistic rethink of process reward modeling that could meaningfully improve RLVR post-training pipelines; worth reading for anyone building reasoning-focused fine-tuning.
2. **[Language Models Can Control Their Own Attention](http://arxiv.org/abs/2609.02737v1)** — Tackles a foundational inefficiency (full KV-cache scanning) with a learned-control angle rather than a fixed sparsity heuristic; the approach could generalize well beyond the paper's benchmarks.
3. **[CodePoisonRAG: Knowledge Poisoning Attacks on Retrieval-Augmented Code Generation](http://arxiv.org/abs/2609.02774v1)** — As RAG-for-code becomes standard in coding assistants and agentic dev tools, this paper's threat model is directly actionable for anyone shipping retrieval-augmented code generation today.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
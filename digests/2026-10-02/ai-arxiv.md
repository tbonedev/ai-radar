# ArXiv AI Research Digest 2026-10-02

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-02 13:30 UTC

---

# ArXiv AI Research Digest — 2026-10-02

## Today's Highlights

Today's submissions center on **making LLM agents and post-training more efficient and better understood**. Coding-agent context management (AutoCompact), source-specific learning for agents, and causal memory policies all treat long-horizon state as something to be learned. A cluster of optimizer papers targets memory-lean LLM fine-tuning: TACO, ZFO, and SoftServe. Post-training theory also gets attention: multi-teacher on-policy distillation, "SFT learns better than you think," and Local Support Learning for forgetting. Interpretability work questions whether current methods really recover mechanisms or self-repair.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Finetuning with Sampling: SFT Learns Better Than You Think](http://arxiv.org/abs/2610.02140v1) | Aayush Karan, Sitan Chen, Yilun Du | It revisits the view that RL generalizes while SFT forgets, and shows that adding sampling to finetuning closes much of that gap. This matters because it could make cheaper SFT a stronger option for adding capabilities to frontier models. |
| [From Gradients to Capabilities: Understanding Multi-Teacher On-Policy Distillation](http://arxiv.org/abs/2610.02179v1) | Siqi Zhu, Suozhi Huang, Kaixuan Zhang et al. | It analyzes how signals from four RL-trained domain teachers shape parameter changes in a Qwen3-1.7B student. This gives a mechanistic basis for merging specialist models into one. |
| [Decoding Looped Transformers Better for (Almost) Free](http://arxiv.org/abs/2610.02185v1) | Weihao Liu, Huangjie Zheng, Tianrong Chen et al. | It uses the intermediate states from each loop, which standard decoding discards, to improve next-token prediction. This improves parameter-efficient recurrent architectures with almost no added cost. |
| [Hierarchical Continuous Diffusion Language Models](http://arxiv.org/abs/2610.02193v1) | Hui Ren, Zihan Li, Chang Liu et al. | It targets the bottleneck in parallel decoding where each token is sampled independently from its marginal. This pushes diffusion LMs toward being a viable alternative to autoregressive generation. |
| [Local Support Learning](http://arxiv.org/abs/2610.02126v1) | Assaf Ben-Kish, Akarsh Kumar, James Glass et al. | It frames catastrophic forgetting as a geometric problem in each weight matrix's input space and derives a retention objective. Standard optimizer updates are suboptimal under that objective, which motivates a new update rule. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents](http://arxiv.org/abs/2610.02163v1) | Xuan Zhang, Longtao Zheng, Cunxiao Du et al. | It learns when to compact context and what working state to keep, rather than relying on overflow-triggered heuristics. This applies directly to repository-level coding agents with long trajectories. |
| [VISTA: A Visual Harness for Reasoning in an Interactive World](http://arxiv.org/abs/2610.02200v1) | Qiushi Han, Keya Hu, Linlu Qiu et al. | A harness gives a general multimodal model long-horizon vision across interactive environments. It suggests that scaffolding, not new models, can unlock existing reasoning ability. |
| [Causal Memory Policy: Making Memory Utility Identifiable by Intervening on Retrieval](http://arxiv.org/abs/2610.02070v1) | Arman Behnam, Binghui Wang | It points out that memory-utility estimates are unidentifiable when a memory is never retrieved, and fixes this by intervening on retrieval. This could improve memory retention in memory-augmented LLMs. |
| [From Knowledge Access to Source Learning: Developing Source-Specific Competence](http://arxiv.org/abs/2610.02150v1) | Lucheng Fu, Kejing Xia, Yiyang Wang et al. | It argues that agents repeatedly using the same external source should build competence in that source, beyond better access or generic memory. This is a useful frame for persistent-knowledge agents. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TACO: Ternary Absolute-max Column-wise One-sparse Optimizer for LLM Fine-Tuning](http://arxiv.org/abs/2610.02199v1) | Jichao Jiang, Cristian McGee, El Houcine Bergou et al. | It cuts optimizer-state memory in full-parameter fine-tuning with an extremely sparse, ternary update that keeps first-order gradients. This lets larger models fit on a given GPU. |
| [Trust the Direction, Search the Step: Zero-and-First-Order Methods for LLM Fine-Tuning](http://arxiv.org/abs/2610.02190v1) | Cristian McGee, El Houcine Bergou, Aritra Dutta | It separates update direction from step size and finds the step with a lightweight zeroth-order search. This addresses the tension between slow conservative steps and unstable aggressive ones. |
| [SoftServe: A Scalable Quasi-Newton Method for Deep Learning](http://arxiv.org/abs/2610.02182v1) | Joohwan Ko, Tetiana Parshakova, Diana Cai et al. | It adapts quasi-Newton methods to the non-convexity and huge parameter counts of deep learning. This is a credible second-order alternative to Adam-style optimizers. |
| [Argo-Bench: Evaluating Data Agents on Enterprise-Scale Workflows](http://arxiv.org/abs/2610.02122v1) | Gabriel Tomitsuka, Arman Raayatsanati, Emma Xing et al. | It benchmarks agents on multi-table enterprise analytics workflows that go beyond text-to-SQL. This is closer to real data-science work and avoids the flawed answer keys found in older benchmarks. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [KaliBench: A Fine-Grained Benchmark for Cybersecurity Tool Use on Kali Linux with Runtime-Free Verifiable Rewards](http://arxiv.org/abs/2610.02206v1) | Pengfei Li, Naufal Suryanto, Sicheng Zhang et al. | It measures how well LLMs turn analyst intent into executable Kali commands, with rewards verifiable without a runtime. That makes it usable as both an evaluation and an RL training signal. |
| [Embedding Prediction Helps Image Generation](http://arxiv.org/abs/2610.02203v1) | Sihan Xu, Ji Xie, Zilin Wang et al. | NEPA replaces the fixed class or text condition in diffusion transformers with embeddings predicted autoregressively. This offers a new way to condition generation across denoising steps. |
| [Faynt: Scaling and Optimizing Policies for Competitive Melee](http://arxiv.org/abs/2610.02144v1) | Ali Janati, Nikita Kuzmin, Rohit Swamy et al. | Single 10M- and 75M-parameter Transformer policies control all 26 Melee characters, and the 10M model wins 98.4% of same-character games against specialists. It shows that small RL-trained generalist policies can be strong in complex competitive games. |

## Research Trend Signal

Three directions stand out. First, **agent state management is becoming a learned capability**. AutoCompact, Causal Memory Policy, and source-specific learning all replace hand-built context and memory heuristics with trained or causally grounded policies.

Second, **optimizer research aimed at LLM fine-tuning is active**. TACO, ZFO, SoftServe, and Muon-style Langevin work all try to reduce memory or improve step selection beyond standard Adam.

Third, **post-training theory is catching up with practice**. Papers on on-policy distillation, SFT versus RL, and forgetting geometry look for mechanisms behind these methods.

Interpretability papers (self-repair, objective-level recovery gaps) also push for stricter evaluation of what mechanistic claims actually show. Benchmarks keep moving toward verifiable, domain-specific tool use, as in cybersecurity, enterprise data, and humanoid tool use.

## Worth Deep Reading

1. **[Finetuning with Sampling: SFT Learns Better Than You Think](http://arxiv.org/abs/2610.02140v1)**: It challenges the common view that SFT generalizes worse than RL. If the claim holds, post-training recipes could change.

2. **[AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents](http://arxiv.org/abs/2610.02163v1)**: Context management is a main bottleneck for coding agents such as Claude Code and Codex. A learned compaction policy is directly useful to practitioners.

3. **[From Gradients to Capabilities: Understanding Multi-Teacher On-Policy Distillation](http://arxiv.org/abs/2610.02179v1)**: Multi-teacher distillation is increasingly used to build generalist models. This paper offers parameter-level analysis of how teacher signals combine.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
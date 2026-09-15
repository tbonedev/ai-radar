# ArXiv AI Research Digest 2026-09-15

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-15 12:25 UTC

---

# ArXiv AI Research Digest — September 15, 2026

## Today's Highlights

Today's submissions cluster around a maturing concern: as LLM agents gain more autonomy — routing their own skills, running long-horizon research, executing consequential real-world actions — the mechanisms meant to keep them safe and verifiable are being stress-tested and, in several cases, found wanting. Chain-of-thought monitoring, long treated as a safety backstop, is shown to be evadable by benign-sounding corrupted plans, while a separate paper formalizes how to gate agent authorization when full alignment can't be assumed. On the capability side, several papers push toward agents that manage their own inference budgets, skill libraries, and search strategies without rigid human-designed scaffolding (Stellar Colosseum, The Router Within, AlgoEvo). A parallel thread targets trustworthiness in high-stakes applications — clinical QA, mental-health conversations, and RAG — via claim-level citation verification rather than coarse-grained grounding.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Bellman Policy Optimization](http://arxiv.org/abs/2609.15987v1) | Zhuoqing Song, Haotian Xu, Xikun Zhang et al. | Introduces BPO, a critic-free RL method derived from Policy Mirror Descent for RLVR training of LLM reasoners. Removing the critic simplifies training while preserving convergence guarantees, addressing a key bottleneck in scaling verifiable-reward RL. |
| [Disentangling Representation Evolution in Transformers through Directional Decomposition](http://arxiv.org/abs/2609.15975v1) | Shwai He, Haichao Zhang, Shen Yan | Decomposes transformer layer updates into direction-preserving and direction-changing components to explain how representations evolve with depth. Offers a new interpretability lens for what each layer actually contributes beyond black-box probing. |
| [Inoculation Midtraining with Learned Neologisms](http://arxiv.org/abs/2609.15886v1) | Kyle O'Brien, Edward James Young, Puria Radmard et al. | Proposes teaching a base model novel "neologism" tokens during midtraining to control which learned properties later generalize through post-training. Gives practitioners a lever to suppress undesirable trait transfer earlier in the pipeline than RLHF. |
| [Before You Poll with LLMs: A Deliberative Diagnostic Framework](http://arxiv.org/abs/2609.15849v1) | Ahmed Wali, Hassaan Tayyab | Tests whether LLM personas genuinely reason through new information or merely retrieve cached opinions in silicon-sampling studies. Matters because static-snapshot benchmarks can overstate persona validity for simulating shifts in public opinion. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Corrupt Plans, Clean Traces: Evading Chain-of-Thought Monitoring with Plan Injection](http://arxiv.org/abs/2609.15989v1) | Keertana Chidambaram, Andrew Ilyas, Vasilis Syrgkanis | Shows that planting harmful but benign-sounding reasoning into an actor LLM's CoT can evade monitors built to catch unsafe planning. A significant red flag for CoT-monitoring as a safety mechanism, since monitors can be fooled by superficially clean traces. |
| [Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and TCS](http://arxiv.org/abs/2609.15983v1) | Honghao Lin, David P. Woodruff, Yuan Deng et al. | Presents a model-agnostic harness that allocates inference budget across long-horizon, multi-step research problems. Targets the reliability gap between short plausible proofs and sustained research progress requiring interdependent decisions. |
| [The Router Within: Eliciting Native Skill Routing from a Frozen LLM](http://arxiv.org/abs/2609.15982v1) | Ruishuo Chen, Xun Wang, Yu Chen et al. | Elicits native skill-routing behavior from a frozen LLM instead of preloading all skill metadata into context. Avoids attention dilution and library-size caps, letting agent harnesses scale skill libraries without retrieval pipelines. |
| [Delegating Authorization to Misaligned Agents: Coalitional Alignment and Safe Control](http://arxiv.org/abs/2609.15803v1) | Natalie Collina, Surbhi Goel, Aaron Roth et al. | Formalizes a framework for deciding which consequential actions of a possibly-misaligned, long-running agent require human approval before execution. A control-theoretic take on scaling human oversight to autonomous action streams. |
| [AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery](http://arxiv.org/abs/2609.15820v1) | Junhao Qiu, Qinglong Hu, Xialiang Tong et al. | Replaces rigid, pre-defined search pipelines with self-evolving agentic search for algorithm discovery. Adaptive control flow enables cross-paradigm transfer and reuse of execution feedback that fixed pipelines discard. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Discovery Foundation Models: Toward Open-Ended Discovery Intelligence](http://arxiv.org/abs/2609.15973v1) | Ling Yang, Zhenfei Yin, Yingcheng Wu | Argues the next frontier for foundation models is moving from solving human-specified problems to actively participating in open-ended discovery. Frames a research agenda for "discovery intelligence" beyond current tool-use paradigms. |
| [Vulnerability Localization Benchmark: Measuring Agentic Security Analysis at Repository Scale](http://arxiv.org/abs/2609.15939v1) | Aman Priyanshu, Supriti Vijay, Kimia Majd et al. | Introduces a repository-scale benchmark measuring whether agents can localize vulnerable code, not just detect or repair it. Highlights that current security-agent evaluation skips a foundational step downstream fixes depend on. |
| [Per-Matrix Optimality Is Not Enough: Three-Level Optimization for Low-Rank LLM Compression](http://arxiv.org/abs/2609.15838v1) | Huicheng Zhang, Xiyao Feng, Ze-Tong Li et al. | Shows per-matrix SVD truncation, though locally optimal, compounds errors through nonlinear transformer blocks, and proposes hierarchical three-level optimization instead. Corrects a blind spot in standard SVD-based LLM compression pipelines. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Verifiable by Construction: Claim-Level Evaluation of Verbatim Citation in Clinical QA](http://arxiv.org/abs/2609.15964v1) | Jiashuo Zhang, Yuling Chen, Yvonne Commodore-Mensah et al. | Proposes claim-level, verbatim-citation evaluation for clinical QA so answers are grounded in exact source text rather than broad references. Directly addresses clinicians' need to verify LLM outputs quickly under time pressure. |
| [K-Bench: A Clinically Calibrated Benchmark for Evaluating LLMs in High-Risk Mental Health Conversations](http://arxiv.org/abs/2609.15855v1) | Laura M. Vowels, Matthew J. Vowels, Shivali Sharma et al. | A clinician-calibrated benchmark evaluating 125 model configurations on high-risk, evolving mental-health dialogues. Fills a safety-evaluation gap for LLMs deployed in emotionally sensitive, escalating conversation contexts. |
| [CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering](http://arxiv.org/abs/2609.15830v1) | Sumit Barua, Guan Hong, Halil Dursunoglu et al. | A validation-centered RAG system that checks answer grounding and citation validity, refusing when evidence is insufficient. Targets the gap between merely retrieving evidence and producing trustworthy, citation-valid answers. |

## Research Trend Signal

Two threads dominate today's batch. First, agent safety is shifting from "can we detect bad behavior" to "can our detection mechanisms even be trusted" — CoT monitoring evasion, coalitional-alignment authorization gating, and repository-scale vulnerability *localization* (versus mere detection) all probe whether existing safety infrastructure holds up under adversarial or realistic conditions. Second, there's a clear move toward agents that self-organize rather than follow hand-designed scaffolds: native skill routing without context-stuffing, self-evolving search for algorithm discovery, and many-agent harnesses for sustained research all aim to remove rigid human-authored control flow as a bottleneck. A third, quieter trend is domain-grounded trustworthiness — clinical QA, mental health, and RAG papers converge on claim-level, verbatim verification as the emerging standard, replacing coarse citation or resemblance metrics. Together these suggest the field is pivoting from "can agents do more" to "can we verify and control what they do," with autonomy and oversight advancing as a coupled pair rather than autonomy alone.

## Worth Deep Reading

1. **[Corrupt Plans, Clean Traces](http://arxiv.org/abs/2609.15989v1)** — If CoT monitoring is being relied on as a safety layer in production agent systems, this paper's demonstration that it can be evaded with benign-sounding plan injection deserves immediate attention from anyone deploying such monitors.
2. **[Delegating Authorization to Misaligned Agents](http://arxiv.org/abs/2609.15803v1)** — Provides a rigorous framework for a problem every long-running agent deployment will eventually face: when to require human sign-off. Worth reading alongside the CoT paper as a proposed mitigation to the class of failure it exposes.
3. **[The Router Within](http://arxiv.org/abs/2609.15982v1)** — A practical, architecture-level idea (native routing instead of context-stuffed skill metadata) that could directly inform how production agent harnesses scale their tool/skill libraries.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
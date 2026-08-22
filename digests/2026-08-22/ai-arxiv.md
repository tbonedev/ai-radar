# ArXiv AI Research Digest 2026-08-22

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-22 07:27 UTC

---

# ArXiv AI Research Digest — 2026-08-22

## Today's Highlights

Today's batch reflects a maturing focus on **measurement rigor** for agentic and self-improving systems: multiple papers (Phantom Gains, AI4AI-Bench, Task-CoEvolve) interrogate whether claimed capability gains in LLM agents and recursive self-improvement pipelines are real or artifacts of noisy evaluation. A second cluster centers on **efficient inference-time control** — adaptive reasoning budgets (Learning When to Think), CPU-native architectures (Daedalus-150M), and semantic cache eviction policies — signaling continued pressure to cut serving costs without sacrificing quality. Agent research is shifting from raw task completion toward **transferable, auditable behavior**: inducing symbolic task models from computer-use traces, and studying when cross-task skill transfer helps versus harms. Domain applications (legal, medical, contract review) increasingly target the gap between benchmark performance and real-world query ambiguity, exemplified by InsufficiencyBench and ContractScrub. Overall, the field is turning more critical eyes on its own progress claims while still pushing efficiency and agent generalization forward.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ConceptGuard: Benchmarking Context-Sensitive Unlearning in LLMs](http://arxiv.org/abs/2608.20338v1) | Sahil Kale, Ian Harris | Introduces a benchmark for unlearning that uses context-dependent, interrelated facts rather than disjoint forget/retain sets, exposing failure modes existing unlearning methods miss. This matters because real-world knowledge removal (e.g., privacy or safety compliance) rarely involves cleanly isolated facts. |
| [MidTool: Mid-training Data Synthesis for Agentic Tool Use](http://arxiv.org/abs/2608.20314v1) | Fengqing Jiang, Yite Wang, Boyi Liu et al. | Proposes mid-training data synthesis specifically targeting agentic tool-use capability, extending prior mid-training work focused on math/science reasoning. It suggests a general recipe for boosting agent competence before task-specific fine-tuning. |
| [Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1) | Gijs Kassenaar, Zhao Yang, Vincent François-Lavet | Trains reasoning models to adaptively allocate their own token budget instead of using a fixed compute cap, reducing over-thinking on easy problems and under-thinking on hard ones. This directly targets inference cost efficiency for RL-trained reasoning LLMs. |
| [Phantom Gains: Auditing Self-Improvement Against a Measured Null](http://arxiv.org/abs/2608.20290v1) | Cheng Xu, Nan Yan, Liming Chen et al. | Audits claimed self-improvement gains in LoRA-based self-training rounds against a statistically measured null baseline, showing many apparent per-problem gains/losses are measurement noise. A methodologically important caution for anyone evaluating iterative self-improvement pipelines. |
| [Daedalus-150M: A Convolution-Attention Hybrid Designed for CPU Inference](http://arxiv.org/abs/2608.20210v1) | Christos Koutsiaris | Designs a 150M-parameter hybrid architecture from the ground up for single-user, 4-bit, CPU-only inference rather than shrinking a GPU-first model post hoc. Demonstrates that architecture choices (only 6/18 blocks use full attention) can be co-designed with the deployment target. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Inducing Task Models from Computer-Use Traces](http://arxiv.org/abs/2608.20319v1) | Yucheng Jiang, Zora Zhiruo Wang, Ruishi Chen et al. | Derives symbolic, auditable, reusable task models from passively recorded screenshots and input traces of real computer use. This offers a path toward agents that learn generalizable workflows rather than memorizing single episodes. |
| [Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](http://arxiv.org/abs/2608.20274v1) | Yiyang Feng, Biddut Sarker Bijoy, Niranjan Balasubramanian et al. | Studies when skills induced from one task transfer reliably to another versus actively harming the receiving agent. Identifies conditions under which skill reuse backfires, a key gap in current "agent memory/skill library" approaches. |
| [Pandora's AI Model Routing Box: Efficient Allocation with Costly Value Estimation](http://arxiv.org/abs/2608.20316v1) | Adam Fisch, Shubhendu Trivedi, Fantine Huot et al. | Addresses routing in heterogeneous multi-model systems where estimating each specialist's expected value is itself costly, framing routing as a decision problem under estimation cost. Relevant to any production system mixing models, harnesses, and inference settings for cost/quality tradeoffs. |
| [Task-CoEvolve: Efficient Harness Optimization via Adaptive Validation Task Selection](http://arxiv.org/abs/2608.20169v1) | Atsuyuki Miyai, Kiyoharu Aizawa, Toshihiko Yamasaki | Optimizes LLM agent harness code by adaptively selecting which validation tasks to test against, improving performance without retraining the underlying model. Points to harness/prompt engineering as a distinct, tunable layer separate from model weights. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Discrete Diffusion Inference-Time Control with Nested Sequential Monte Carlo](http://arxiv.org/abs/2608.20123v1) | Lohithsai Yadala Chanchu, Hany Abdulsamad, Christian A. Naesseth | Proposes a nested SMC method to steer discrete diffusion text generation toward sequence-level rewards at inference time without retraining. Extends beyond simple best-of-n sampling for reward-guided generation control. |
| [Ask Self, Ask Others: Relation Is All You Need](http://arxiv.org/abs/2608.20172v1) | Yuting Ge, Pengju Yang, Mingkai Nie | Introduces "Relation," a token-mixing primitive that organizes pairwise evidence into explicit Self/Exchange relations before deriving information flow, as an alternative to standard attention. A potentially significant architectural rethink of the attention mechanism itself. |
| [Which Eviction Policy Should an LLM Cache Use?](http://arxiv.org/abs/2608.20280v1) | Yash Kulkarni, Shubham Harkare, Arvind Suresh Yogesh Babu | Systematically compares FIFO, LRU, LFU, ARC, GDSF and semantic-redundancy policies for semantic LLM response caching under one unified protocol (CLEVER). Fills a practical gap for production teams deploying semantic caches to cut LLM serving costs. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [G-CARL: Grounded Checklist-Aligned Reward Learning for Patient-Oriented Medical Report Interpretation](http://arxiv.org/abs/2608.20331v1) | Shiao Xie, Siyu Chen, Jianwei Lv et al. | Combines evidence-grounded medical factuality with context-dependent patient communication for personalized medical report explanations. Targets a real deployment gap where vision-language models must balance accuracy with lay-accessible framing. |
| [InsufficiencyBench: Evaluating LLM legal advice on underspecified user queries](http://arxiv.org/abs/2608.20220v1) | Samuel J. Vincent, Daniel Calloway, Fangyi Yu et al. | First legal benchmark testing whether LLMs recognize and handle queries that omit facts material to the legal outcome, rather than assuming fully-specified questions. Directly relevant to safe deployment of legal AI assistants. |
| [ContractScrub: A benchmark for final review of legal contracts](http://arxiv.org/abs/2608.20204v1) | Yejin Bang, Kirsty Fielding, Brandan Oliver et al. | Benchmarks LLMs on final-stage contract "scrubbing" for errors and inconsistencies, a high-volume, automation-suited legal task. Provides a concrete testbed for evaluating LLM reliability in transactional legal work. |

## Research Trend Signal

A clear meta-trend today is **skepticism toward self-reported progress**: Phantom Gains, AI4AI-Bench, and Task-CoEvolve all probe whether claimed improvements in agentic/self-improving systems hold up under rigorous null-hypothesis testing or adaptive validation, rather than accepting benchmark deltas at face value. In parallel, "agent generalization" is being decomposed more carefully — instead of just measuring task success, papers now ask *when* induced skills or task models transfer safely (Break It Down Pass It On) versus when they should be treated as auditable, symbolic artifacts (Inducing Task Models from Computer-Use Traces). On the systems side, inference efficiency work is diversifying beyond quantization/distillation into architecture-level co-design (Daedalus-150M), adaptive compute allocation (Learning When to Think), and cache-layer engineering (eviction policy study) — suggesting cost control is becoming a first-class design constraint rather than an afterthought. Domain-specific benchmarks (legal, medical) continue to push past "clean query" assumptions toward realistic, underspecified, or checklist-grounded evaluation settings.

## Worth Deep Reading

1. **[Phantom Gains: Auditing Self-Improvement Against a Measured Null](http://arxiv.org/abs/2608.20290v1)** — A methodologically rigorous cautionary study directly relevant to anyone evaluating iterative LLM self-training or RL fine-tuning claims; its null-baseline framework is broadly reusable for auditing "improvement" claims elsewhere.
2. **[Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1)** — Tackles a practical, widely-felt pain point (wasted test-time compute on easy queries) with a learned adaptive policy, likely influential for production reasoning-model deployment decisions.
3. **[Inducing Task Models from Computer-Use Traces](http://arxiv.org/abs/2608.20319v1)** — Offers a concrete path toward auditable, reusable agent knowledge derived from passive behavioral data, directly relevant to the growing computer-use-agent ecosystem and worth reading for its symbolic-model induction methodology.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
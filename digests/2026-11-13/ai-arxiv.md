# ArXiv AI Research Digest 2026-11-13

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-13 15:03 UTC

---

# ArXiv AI Research Digest — 2026-11-13

## Today's Highlights

Today's submissions center on **agents**: how they remember, how they are secured, and how they are evaluated. Several papers examine decision-making in long-horizon coding and geographic agents. Others study prompt-injection defenses for small models and the risks of LLM-hidden information leakage. On the training side, work on RL with one-sided verifiable rewards, diffusion LMs that learn when to remask, and energy-based reasoning (claimed 1,000x faster than looped models) points to more efficient reasoning. Mechanistic and theoretical work on goal encoding, distillation, and debate-based learnability rounds out the day.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Negative-Only Policy Optimization for One-Sided Verifiable Rewards](http://arxiv.org/abs/2611.17287v1) | Jiacheng Xu, Shuo He, Fuxiang Zhang et al. | Formalizes RLVR when verifiers can only falsify failures, not confirm correctness, and proposes a negative-only optimization approach. This matters because complete verification is often unavailable in real settings. |
| [Learning When Diffusion Language Models Should Regenerate](http://arxiv.org/abs/2611.17320v1) | Minhae Oh, Jeonghye Kim, Jinwoo Koo et al. | Shows that hidden states carry error information that token confidence misses, and learns when and what to remask. It improves self-correction in diffusion LMs. |
| [Goal Encoding in LLMs](http://arxiv.org/abs/2611.17297v1) | Arnab Sen Sharma, Eric Todd, Sheridan Feucht et al. | Investigates whether LLMs hold internal goal representations that guide action across multiple execution paths, using a multi-sub-task coding setting. It gives interpretability evidence relevant to agent alignment. |
| [Cited but Unused: Parametric Provenance in Retrieval-Augmented Generation](http://arxiv.org/abs/2611.17161v1) | Tanzeel Abbas, Tehseen Zia, David Windridge | Uses counterfactual value substitution to show RAG citations often misstate provenance. Standard verification cannot detect this, so citation faithfulness needs better auditing. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents](http://arxiv.org/abs/2611.17167v1) | Haochen Liu, Qianhao Zhu, Zixuan Wang et al. | Studies typed-output decision models that can act, evaluate, or score actions for RL teaching. It clarifies the roles one model can play in agent systems. |
| [CoReMem: Cost-Internalizing Memory for Successive Coding Tasks](http://arxiv.org/abs/2611.17316v1) | Peiwen Li, Harshit Verma, Sophia Zhou et al. | Treats memory selection for coding agents as a cost-aware problem, weighing future usefulness against write and read costs. It addresses memory management on evolving repositories. |
| [CapLite: Prompt-Injection Defense for Small Language Model Agents](http://arxiv.org/abs/2611.17115v1) | Zimo Xu, Wenzhuo Liu, Hideki Nakayama | Tests whether small-model agents can be defended without the model writing its own security artifacts, as CaMeL and Progent require. This matters for on-device and low-cost agent deployments. |
| [Classical Energies Learn to Reason 1,000x Faster than Looped Models](http://arxiv.org/abs/2611.17309v1) | Benjamin Hoover, Hugh Blayney, James C. R. Whittington | Argues that energy descent is more stable and efficient than looped models on Sudoku-Extreme and Maze-Unique. It offers an alternative reasoning paradigm with large claimed speedups. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Sketching Language Models for Context Attribution](http://arxiv.org/abs/2611.17313v1) | Christopher Liaw, Aranyak Mehta, Grigoris Velegkas et al. | Gives an algorithm for leave-one-out attribution that needs fewer than n model evaluations under a stability assumption. This makes prompt attribution cheaper. |
| [Maximizing Capacity Utilization of LoRA Adapters](http://arxiv.org/abs/2611.17191v1) | Tomohiro Sawada, Kartik Goyal | Targets LoRA's learning-forgetting trade-off in continual and heterogeneous fine-tuning. It narrows the gap to full fine-tuning. |
| [Ballad: Bandit-Based LLM Routing for Automated Heuristic Discovery](http://arxiv.org/abs/2611.17241v1) | Samidha Verma, Ankit Anand, Sayan Ranu | Challenges the assumption that pricier models yield better heuristics, and routes among LLMs with a bandit. It cuts cost in LLM-driven heuristic search. |
| [Unbundling Multimodal Vision Encoding](http://arxiv.org/abs/2611.17334v1) | Ellis Brown, Chris Hoang, Shengyi Qian et al. | Separates the design choices bundled into vision encoders for multimodal LMs. It informs the debate over pretrained, from-scratch, or removed encoders. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Synthesis Smuggling: Maliciously Hiding Inferred Personal Attributes in LLM Outputs](http://arxiv.org/abs/2611.17280v1) | Gautam Galada, Supreeth Shastri, Sagnik Ray Choudhury | Proposes a threat model where an adversarial LLM steganographically encodes inferred user attributes into benign-looking output. It exposes a new privacy exfiltration channel. |
| [LiveGeo: Benchmarking Geographic Agents in Continuously Evolving Worlds](http://arxiv.org/abs/2611.17267v1) | Pengcheng Zhou, Xuanyu Liu, Yanchen Yin et al. | Introduces GeoWorld, an evolving environment, and a benchmark for agent decision-making in changing geographic settings. It moves beyond static-world evaluation. |

## Research Trend Signal

Agent infrastructure is maturing from capability demos to engineering concerns. Memory economics (CoReMem), sandboxed execution (Metal Sandbox), and agent-based evaluation (AeroZoo-style benchmarks and LiveGeo) show attention to cost, isolation, and realistic, evolving environments. Security work is shifting toward small-model agents (CapLite) and subtle leakage channels (Synthesis Smuggling). In training, researchers are adapting RL to imperfect verification (negative-only rewards) and exploring non-autoregressive correction in diffusion LMs. Alternative reasoning substrates, such as energy-based models versus looped transformers, are getting scrutiny on efficiency. Interpretability (goal encoding) and theory (debate learnability, distillation models) continue to supply foundations for alignment and training claims.

## Worth Deep Reading

1. **[Negative-Only Policy Optimization for One-Sided Verifiable Rewards](http://arxiv.org/abs/2611.17287v1)** — Real tasks often allow only cheap falsification checks, so a principled treatment of this regime could widen where RLVR applies.
2. **[Classical Energies Learn to Reason 1,000x Faster than Looped Models](http://arxiv.org/abs/2611.17309v1)** — A claimed three-orders-of-magnitude efficiency gain is worth scrutinizing. Check whether it holds beyond simple puzzles.
3. **[Synthesis Smuggling](http://arxiv.org/abs/2611.17280v1)** — It names a concrete, plausible privacy threat that current safety evaluations may not cover, and it matters for anyone deploying third-party LLM services.

*Note: Summaries are based on the abstracts as truncated in the input, so some details may be incomplete.*

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
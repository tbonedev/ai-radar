# ArXiv AI Research Digest 2026-11-14

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-14 13:55 UTC

---

# ArXiv AI Research Digest — 2026-11-14

## 1. Today's Highlights

Today's submissions center on agents: how they remember, reason, and defend themselves. Several papers study agent robustness and economics, including memory cost-valuation for coding agents, prompt-injection defense for small models, and a threat model in which an LLM hides inferred user attributes in its own outputs. On the model side, work targets RLVR with one-sided verifiers, diffusion-LM remasking, and a rethinking of multimodal vision encoders. Interpretability and theory also feature, including goal encoding in LLMs, a theory of learnability via debate, and energy-based reasoning that claims large speedups over looped models.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Negative-Only Policy Optimization for One-Sided Verifiable Rewards](http://arxiv.org/abs/2611.17287v1) | Jiacheng Xu, Shuo He, Fuxiang Zhang et al. | Formalizes RLVR when verifiers can only falsify failures rather than confirm correctness, and proposes learning from negative signals alone. This matters because complete verification is often unavailable in realistic settings. |
| [Goal Encoding in LLMs](http://arxiv.org/abs/2611.17297v1) | Arnab Sen Sharma, Eric Todd, Sheridan Feucht et al. | Probes whether LLMs hold internal goal representations that precede action and can be realized via many execution paths, using a multi-sub-task coding setting. It gives interpretability grounding to agentic behavior. |
| [Learning When Diffusion Language Models Should Regenerate](http://arxiv.org/abs/2611.17320v1) | Minhae Oh, Jeonghye Kim, Jinwoo Koo et al. | Shows that hidden states carry error information that token confidence misses, and learns when and what to remask. This improves self-correction in diffusion LMs. |
| [Unbundling Multimodal Vision Encoding](http://arxiv.org/abs/2611.17334v1) | Ellis Brown, Chris Hoang, Shengyi Qian et al. | Decomposes the vision encoder into separate design choices, including the visual prior, to inform the debate over pretrained, from-scratch, or removed encoders. It clarifies a core multimodal design question. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CoReMem: Cost-Internalizing Memory for Successive Coding Tasks with Prospective Valuation](http://arxiv.org/abs/2611.17316v1) | Peiwen Li, Harshit Verma, Sophia Zhou et al. | Treats memory writing and reading as costed decisions for coding agents working on an evolving repository. It targets a practical bottleneck in long-lived coding agents. |
| [Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents](http://arxiv.org/abs/2611.17167v1) | Haochen Liu, Qianhao Zhu, Zixuan Wang et al. | Studies typed-output decision models that can act, evaluate, or provide RL training signal in agents. It compares these roles, which prior work mostly studied as actors only. |
| [CapLite: Prompt-Injection Defense for Small Language Model Agents without Model-Written Security Artifacts](http://arxiv.org/abs/2611.17115v1) | Zimo Xu, Wenzhuo Liu, Hideki Nakayama | Asks whether small-model agents can be protected without having the model write its own security artifacts, as CaMeL and Progent require. This makes prompt-injection defense viable for on-device agents. |
| [Classical Energies Learn to Reason 1,000x Faster than Looped Models](http://arxiv.org/abs/2611.17309v1) | Benjamin Hoover, Hugh Blayney, James C. R. Whittington | Uses energy descent instead of looped models on Sudoku-Extreme and Maze-style puzzles, reporting a roughly 1,000x training speedup. This suggests a more stable and efficient route to iterative reasoning. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Towards a Theory of Learnability via Debate](http://arxiv.org/abs/2611.17303v1) | Tosca Lechner, Vinayak Pathak, Sivan Sabato et al. | Builds a learning-theoretic framework for training via debate judged by a human. It gives formal grounding to a scalable-oversight proposal. |
| [Maximizing Capacity Utilization of LoRA Adapters for Mitigating the Learning-Forgetting Trade-off](http://arxiv.org/abs/2611.17191v1) | Tomohiro Sawada, Kartik Goyal | Identifies a capacity-use issue behind LoRA's underperformance and its forgetting in continual settings. It offers a fix for the learning-forgetting trade-off. |
| [Sketching Language Models for Context Attribution](http://arxiv.org/abs/2611.17313v1) | Christopher Liaw, Aranyak Mehta, Grigoris Velegkas et al. | Gives an algorithm for leave-one-out attribution that needs far fewer than n model evaluations under a stability assumption. This makes prompt attribution cheaper. |
| [Ballad: Bandit-Based LLM Routing for Automated Heuristic Discovery](http://arxiv.org/abs/2611.17241v1) | Samidha Verma, Ankit Anand, Sayan Ranu | Challenges the assumption that stronger models always yield better heuristics and routes among LLMs with bandits. It cuts cost in LLM-driven heuristic discovery. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Synthesis Smuggling: Maliciously Hiding Inferred Personal Attributes in LLM Outputs](http://arxiv.org/abs/2611.17280v1) | Gautam Galada, Supreeth Shastri, Sagnik Ray Choudhury | Introduces a threat model in which an adversarial LLM steganographically encodes inferred user attributes into benign-looking output. It exposes a privacy leak that users cannot easily see. |
| [Cited but Unused: Parametric Provenance in Retrieval-Augmented Generation](http://arxiv.org/abs/2611.17161v1) | Tanzeel Abbas, Tehseen Zia, David Windridge | Tests citation faithfulness by substituting facts in retrieved passages and checking whether answers follow. It shows that citations can misstate provenance in ways standard verification misses. |
| [LiveGeo: Benchmarking Geographic Agents in Continuously Evolving Worlds](http://arxiv.org/abs/2611.17267v1) | Pengcheng Zhou, Xuanyu Liu, Yanchen Yin et al. | Introduces GeoWorld, an evolving environment, and a benchmark for agent decisions in changing geographic settings. It moves beyond static-map evaluation. |

## 3. Research Trend Signal

Three directions stand out. First, **agent infrastructure is maturing**: memory economics (CoReMem), isolated GPU execution (Metal Sandbox), evaluation of agents as actors versus judges, and living benchmarks (LiveGeo) all treat agents as long-running systems rather than single-shot tools. Second, **security for small and local models** is gaining attention, with CapLite on prompt injection and Synthesis Smuggling on covert exfiltration, so the threat surface is shifting from the prompt to the output. Third, **reasoning efficiency and alternatives to autoregression** are active, including energy-based reasoning, diffusion-LM remasking, and RLVR with weak verifiers. Alongside these, interpretability work (goal encoding) and alignment theory (debate) continue to add foundations to the empirical agent work.

## 4. Worth Deep Reading

1. **[Goal Encoding in LLMs](http://arxiv.org/abs/2611.17297v1)**: it looks for internal representations that guide behavior across many execution paths. If the findings hold, they could support monitoring and steering of agents.
2. **[Negative-Only Policy Optimization for One-Sided Verifiable Rewards](http://arxiv.org/abs/2611.17287v1)**: many real tasks have only falsification checks, so this extends RLVR beyond clean verifiers. It has direct practical value for post-training.
3. **[Classical Energies Learn to Reason 1,000x Faster than Looped Models](http://arxiv.org/abs/2611.17309v1)**: the claimed speedup is large and challenges the looped-model paradigm. It is worth checking whether the gains carry beyond puzzle benchmarks.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
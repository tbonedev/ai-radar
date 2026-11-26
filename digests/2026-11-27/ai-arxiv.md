# ArXiv AI Research Digest 2026-11-27

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-26 17:29 UTC

---

# ArXiv AI Research Digest — 2026-11-27

## 1. Today's Highlights

Today's submissions center on **agent evaluation and reliability**. Several papers show that benchmark and monitor design can distort conclusions. These include attack-policy selection for AI monitors, coding-agent over-editing, and routeability of LLM benchmarks. **Looped and recurrent architectures** get fresh scrutiny, with Mixture-of-Loops and a critical look at looped MoE gains. Efficiency work targets **long-context speculative decoding on natively sparse models**. A theoretical result shows tokenisation is not in APX. A provocative finding is that coding agents can out-reason video generation models on visual reasoning tasks.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Tokenisation is not in APX](http://arxiv.org/abs/2611.34938v1) | Violeta Kastreva, Philip Whittington, Dennis Komm et al. | Proves that, unless P=NP, no polynomial-time algorithm finds a tokeniser within a constant factor of optimal. This explains why tokeniser training relies on heuristics and sets a theoretical limit on the field. |
| [Mixture-of-Loops Transformer](http://arxiv.org/abs/2611.34923v1) | Lianghui Zhu, Shijie Wang, Xinggang Wang et al. | Rethinks what is passed between loops in looped Transformers, aiming at a better expressivity-efficiency frontier. It addresses the main cost of parameter-sharing depth. |
| [LoopTitan: What Does Parameter Revisit Buy a Mixture-of-Experts?](http://arxiv.org/abs/2611.34821v1) | Zichen Tian, Yudong Lu, Xuansheng Wu et al. | Re-examines the large gains reported for looped MoE over standard MoE at matched parameters, FLOPs and KV cache. It matters for judging whether looping is a real architectural advance. |
| [Repairing the Trustworthiness of Distilled Language Models](http://arxiv.org/abs/2611.34831v1) | Kumar Shubham, Devendra Vyas, Vidushi Agarwal et al. | Targets trustworthiness regressions that distillation introduces even when task performance is preserved, and does so without the original distillation corpus. It is practical for deploying small student models safely. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Attack Policy Selection can Mislead Monitor Evaluators](http://arxiv.org/abs/2611.34934v1) | Charlie Griffin, Oliver Makins, Asa Cooper Stickland et al. | Shows, using an ex-production OpenAI monitor, that the measured false negative rate of AI monitors depends strongly on which attack policy generates the test transcripts. This calls into question how safety monitors for agents are evaluated. |
| [How Much Do Coding Agents Over-Edit, and Why?](http://arxiv.org/abs/2611.34875v1) | Aakash Goel, Benjamin Steenhoek, Yu Hu | Introduces Delta Residue Attribution, which replays trajectories to separate needed from unneeded edits in agent patches. It moves past patch size as a proxy for over-editing. |
| [Solve Vision with Code: Coding Agents Are Stronger Visual Reasoners Than Video Models](http://arxiv.org/abs/2611.34813v1) | Dezhi Luo, Fengyuan Yu, Haotian Zhang et al. | Finds that coding agents outperform video generation models on visual reasoning tasks. This challenges the idea that reasoning in the visual medium is inherently better. |
| [When Every Rollout Fails: Splicing Learner-Conditioned Options into Long-Horizon Agent RL](http://arxiv.org/abs/2611.34777v1) | Haowen Hou, Yicheng Liu, Zhen Huang et al. | Handles all-fail groups in group-based RLVR on long-horizon tasks, where group-relative methods get no reward gradient. It does this by splicing in learner-conditioned options instead of complete solutions from a stronger model. |
| [Diverse Alternative Reasoning Traces for Hard Math Problems](http://arxiv.org/abs/2611.34928v1) | Lukas Aichberger, Adam Golinski, Arno Blaas et al. | Addresses the scarcity of verifier-accepted traces on hard math problems under independent Monte Carlo sampling. It does so by generating diverse alternative reasoning traces. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DFly2: Turbocharging Long-Context Speculative Decoding by Sharing the Target's Sparsity](http://arxiv.org/abs/2611.34776v1) | Hong Liu, Rui Cen, Junhan Shi et al. | Lets drafters share the target model's sparsity instead of keeping their own context cache, for natively sparse models such as DeepSeek-V4. It speeds up decoding where it is slowest. |
| [Routeability Before Routing: RAP and RouteabilityBench](http://arxiv.org/abs/2611.34825v1) | Yihang Lu, Denica Kjorvezir, Ana Gjorgjevikj et al. | Proposes auditing whether a benchmark has enough prompt-level variation for LLM routing to make sense. It guards against routing studies built on benchmarks where model differences are too coarse to support them. |
| [DRBench Pro](http://arxiv.org/abs/2611.34852v1) | Han Huang, Yuchen Yan, Xingyu Wu et al. | Offers a knowledge-centric benchmark for professional deep research agents, scoring which research directions a report covers and how deeply. It fills a gap left by report-quality benchmarks. |
| [Guidance as Variance Matching](http://arxiv.org/abs/2611.34801v1) | Ali Backour, Artem Lukoianov, Frank Permenter et al. | Argues that diffusion guidance does not improve the posterior-mean prediction at practical scales, and offers a variance-matching account of what it does. It helps explain a widely used but poorly understood technique. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TASK Memory](http://arxiv.org/abs/2611.34762v1) | Jinkun Zhao, Wenjun Wu | Targets use-time memory hallucinations, where an agent retrieves the right memory but contradicts it or applies it to the wrong question. It uses activation steering and knowledge editing to fix this. |
| [μ-Bench](http://arxiv.org/abs/2611.34920v1) | Qihao Lin, Guanxu Chen, Shuhang Zheng et al. | Benchmarks voice agents completing interdependent requests from several users while respecting per-user authority and privacy. It covers a deployment setting that single-user evaluations miss. |

## 3. Research Trend Signal

Three signals stand out. First, **evaluation validity** is under scrutiny: papers on monitor attack policies, routeability audits, and over-edit attribution all argue that standard metrics or proxies mislead. Second, **looped and recurrent computation** is drawing both new designs (Mixture-of-Loops) and skeptical re-evaluation (LoopTitan), which suggests the field is checking its claims at matched budgets. Third, **agent training and inference are being adapted to new realities**. Examples are RL for all-fail rollouts on long-horizon tasks, speculative decoding on natively sparse models, and memory-hallucination mitigation. Cross-modal work also asks whether code-driven agents beat generative video for reasoning. Taken together, the field is moving from building capabilities to measuring them rigorously.

## 4. Worth Deep Reading

1. **[Attack Policy Selection can Mislead Monitor Evaluators](http://arxiv.org/abs/2611.34934v1)**: It is a case study on a production-derived monitor, and its methodological point applies to any agent-safety evaluation. Read it if you rely on red-team transcripts to estimate monitor performance.
2. **[Solve Vision with Code](http://arxiv.org/abs/2611.34813v1)**: Its claim cuts against the "reason natively in the visual medium" narrative. The comparison between code agents and video models should shape how visual reasoning is benchmarked.
3. **[Tokenisation is not in APX](http://arxiv.org/abs/2611.34938v1)**: It is a clean theoretical result with lasting relevance, since it justifies heuristic tokeniser design across several formulations.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
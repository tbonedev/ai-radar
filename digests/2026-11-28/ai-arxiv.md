# ArXiv AI Research Digest 2026-11-28

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-27 17:10 UTC

---

# ArXiv AI Research Digest — 2026-11-28

## 1. Today's Highlights

Today's submissions center on agent reliability and evaluation. Several papers study how coding agents over-edit, how monitors can be misled by the choice of attack policy, and how deep-research and voice agents should be benchmarked. In architecture work, looped transformers and looped MoE models are examined, with Mixture-of-Loops proposing a new mechanism for passing state between loops. LoopTitan questions whether the gains reported for looped MoE hold up. There is also a theoretical result that optimal tokenisation is not in APX. Other papers focus on efficient inference (long-context speculative decoding for natively sparse models) and on RL for long-horizon agents.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Mixture-of-Loops Transformer](http://arxiv.org/abs/2611.34923v1) | Lianghui Zhu, Shijie Wang, Xinggang Wang et al. | Rethinks what should be passed between adjacent loops in looped Transformers. It aims to push the expressivity-efficiency frontier of parameter-shared depth. |
| [LoopTitan: What Does Parameter Revisit Buy a Mixture-of-Experts?](http://arxiv.org/abs/2611.34821v1) | Zichen Tian, Yudong Lu, Xuansheng Wu et al. | Re-examines the substantial gains reported for looped MoE over standard MoE at matched budgets. It helps separate real benefits of parameter revisit from confounds. |
| [Tokenisation is not in APX](http://arxiv.org/abs/2611.34938v1) | Violeta Kastreva, Philip Whittington, Dennis Komm et al. | Proves that, unless P=NP, no polynomial-time algorithm finds a tokeniser within a constant factor of optimal, for direct and bottom-up tokenisation. This sets theoretical limits on tokeniser design and explains why heuristics dominate. |
| [Repairing the Trustworthiness of Distilled Language Models](http://arxiv.org/abs/2611.34831v1) | Kumar Shubham, Devendra Vyas, Vidushi Agarwal et al. | Addresses trustworthiness regressions that distillation can introduce even when downstream performance is preserved. It targets repair when the original distillation corpus is unavailable. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [How Much Do Coding Agents Over-Edit, and Why?](http://arxiv.org/abs/2611.34875v1) | Aakash Goel, Benjamin Steenhoek, Yu Hu | Introduces Delta Residue Attribution, which replays agent trajectories to trace whether extra edits in patches are actually needed. It moves past patch size as a proxy for over-editing. |
| [Attack Policy Selection can Mislead Monitor Evaluators](http://arxiv.org/abs/2611.34934v1) | Charlie Griffin, Oliver Makins, Asa Cooper Stickland et al. | Shows that measured false negative rates for an ex-production OpenAI monitor depend on the attack policy used to generate test transcripts. Safety claims about AI monitors can therefore be misleading. |
| [When Every Rollout Fails: Splicing Learner-Conditioned Options into Long-Horizon Agent RL](http://arxiv.org/abs/2611.34777v1) | Haowen Hou, Yicheng Liu, Zhen Huang et al. | Tackles all-fail groups in group-based RLVR, where zero reward leaves no policy gradient. It offers an alternative to supplying full solutions from a stronger model. |
| [Diverse Alternative Reasoning Traces for Hard Math Problems](http://arxiv.org/abs/2611.34928v1) | Lukas Aichberger, Adam Golinski, Arno Blaas et al. | Proposes generating diverse alternative traces because verified-correct traces are rare under independent sampling on hard problems. This could improve post-training data for math reasoning. |
| [TASK Memory](http://arxiv.org/abs/2611.34762v1) | Jinkun Zhao, Wenjun Wu | Targets use-time memory hallucinations, where the right memory is retrieved but the answer contradicts it. It uses activation steering and knowledge editing. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DFly2: Turbocharging Long-Context Speculative Decoding](http://arxiv.org/abs/2611.34776v1) | Hong Liu, Rui Cen, Junhan Shi et al. | Lets drafters share the target model's sparsity instead of keeping their own context cache, for natively sparse models such as DeepSeek-V4. It speeds up decoding where it is slowest. |
| [DRBench Pro](http://arxiv.org/abs/2611.34852v1) | Han Huang, Yuchen Yan, Xingyu Wu et al. | A knowledge-centric benchmark for deep research agents, measuring which research directions a report covers and how deeply. It fills a gap left by report-quality benchmarks. |
| [μ-Bench](http://arxiv.org/abs/2611.34920v1) | Qihao Lin, Guanxu Chen, Shuhang Zheng et al. | Benchmarks multi-user task completion for voice agents in shared spaces, with per-user authority and privacy constraints. It covers a setting that single-user evaluations miss. |
| [Routeability Before Routing](http://arxiv.org/abs/2611.34825v1) | Yihang Lu, Denica Kjorvezir, Ana Gjorgjevikj et al. | Proposes an audit protocol and benchmark to check whether a benchmark has enough prompt-level variation for LLM routing to make sense. This helps avoid routing evaluations on benchmarks where many models are indistinguishable. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Solve Vision with Code: Coding Agents Are Stronger Visual Reasoners Than Video Models](http://arxiv.org/abs/2611.34813v1) | Dezhi Luo, Fengyuan Yu, Haotian Zhang et al. | Argues that coding agents outperform video generation models on visual reasoning tasks. It challenges the premise that reasoning is best done natively in the visual medium. |
| [Can image generation help visual reasoning?](http://arxiv.org/abs/2611.34935v1) | Xueyang Yu, Yifan Jing, Taiming Lu et al. | Tests across 13 vision-language and generation models whether a self-requested generated helper image improves visual question answering. It gives empirical evidence on "thinking in images". |

## 3. Research Trend Signal

Three directions stand out. First, evaluation is under scrutiny: papers examine how monitors, routers, deep-research agents and voice agents are measured, and ask whether the benchmarks are valid in the first place (attack-policy bias, routeability audits). Second, looped and parameter-shared architectures are being tested for real gains, with Mixture-of-Loops proposing new mechanisms and LoopTitan questioning earlier results. Third, systems work is adapting to natively sparse long-context models, as DFly2 shows for speculative decoding. A fourth, smaller thread concerns agent RL when rewards are sparse, and diagnosing agent behaviour such as over-editing. Overall the field is shifting from building capability to checking measurement and efficiency.

## 4. Worth Deep Reading

1. **[Attack Policy Selection can Mislead Monitor Evaluators](http://arxiv.org/abs/2611.34934v1)**: It uses a production-derived monitor as a case study and shows that headline false negative rates can depend on evaluation design. This matters for anyone relying on monitor-based AI control.
2. **[How Much Do Coding Agents Over-Edit, and Why?](http://arxiv.org/abs/2611.34875v1)**: Its trajectory-replay attribution method goes beyond patch size and may be reusable for diagnosing agent behaviour.
3. **[LoopTitan](http://arxiv.org/abs/2611.34821v1)**, read alongside [Mixture-of-Loops](http://arxiv.org/abs/2611.34923v1): Together they give a balanced view of whether looped architectures pay off at matched budgets.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
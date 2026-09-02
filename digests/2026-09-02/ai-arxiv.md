# ArXiv AI Research Digest 2026-09-02

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-02 11:55 UTC

---

# ArXiv AI Research Digest — 2026-09-02

## Today's Highlights

Today's submissions cluster around two converging concerns: making agent infrastructure self-evolving and auditable, and understanding *why* LLM-based systems fail rather than just measuring *that* they fail. Several papers interrogate the mechanics of evaluation itself — LLM-as-judge internals, benchmark construct validity, and trajectory-aware SWE-agent scoring — signaling a maturing skepticism toward black-box metrics. A second cluster pushes agent harnesses toward long-horizon autonomy (Harness-of-Harness, HarnessDev, live trace models), treating the execution scaffold itself as a learnable, evolvable artifact rather than fixed infrastructure. On the training side, work on quantization damage allocation, SFT/RL budget scaling, and mid-training distillation reflects continued fine-grained optimization of the post-training pipeline. Robotics and world-modeling papers (Facet-0, H3-World) suggest video/language foundation models are increasingly doubling as interactive control interfaces.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Beyond Scores: Understanding LLM-as-a-Judge Mechanisms in Summarization Evaluation](http://arxiv.org/abs/2609.01604v1) | Himil Vasava, Ming Jiang | Uses an eight-attack perturbation protocol to mechanistically probe how LLM judges arrive at scores rather than just measuring score agreement. This matters because judges are widely used as training signals, so understanding their failure modes affects downstream model quality. |
| [The Structure of Quantization Damage in LLMs: Why the Next Bit Should Be Spent Globally](http://arxiv.org/abs/2609.01587v1) | Jundong Hu, Shekar Ramachandran | Studies where PTQ accuracy loss concentrates and proposes causal mixed-precision analysis to allocate a small extra precision budget globally rather than per-layer. This offers a more principled way to cut serving costs without the usual per-model tuning guesswork. |
| [Scaling Near-Optimal SFT-RL Annotation Budget Allocation from Small to Large LLMs](http://arxiv.org/abs/2609.01573v1) | Jingtan Wang, Arun Verma, Xiaoqiang Lin et al. | Proposes a principled framework for splitting a fixed annotation budget between SFT and RL that transfers from small to large models. It moves the field beyond folk wisdom ("SFT dominates low-data regimes") toward predictable budget planning for post-training. |
| [Knowledge Distillation During Mid-Training Favors Reasoning over Factual Recall](http://arxiv.org/abs/2609.01532v1) | Jacqueline He, Howard Yen, Shuyue Stella Li et al. | Controlled experiments show forward-KL distillation's benefits shift depending on training stage, favoring reasoning gains during mid-training over factual recall. This has direct implications for when in the pipeline to insert teacher supervision for smaller models. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Efficient SWE Agent Benchmarking via Trajectory-Aware Evaluation](http://arxiv.org/abs/2609.01603v1) | Kefeng Duan, Dewu Zheng, Yanlin Wang et al. | Moves beyond result-only subset selection for SWE-agent benchmarking by incorporating trajectory information, cutting evaluation cost while preserving fidelity. Useful for teams that need cheaper, faster signal on agent coding performance. |
| [The Rise of Verbal Reinforcement Learning](http://arxiv.org/abs/2609.01597v1) | Kshitij Tayal, Arun Sharma, Genta Indra Winata et al. | Formalizes natural-language feedback as a first-class RL signal, offering the first unifying framework for this emerging "verbal RL" paradigm. It's a useful conceptual anchor as more agent training pipelines lean on free-text critique instead of scalar reward. |
| [Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement](http://arxiv.org/abs/2609.01481v1) | Haoyang Yan, Min-le Su, Hangfan Zhang et al. | Introduces a framework letting coding agents continually improve their own execution harness over multi-day autonomous development runs. This targets the gap between short-horizon coding benchmarks and real-world sustained software projects. |
| [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](http://arxiv.org/abs/2609.01437v1) | Yuhao Wu, Jingyuan Zhang, Jiajun Shi et al. | Directly tests whether LLMs can author and iteratively modify the external execution infrastructure that shapes their own task performance. Findings bear on how much of an agent's capability ceiling is really model-external. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Adaptive Critical Token-Aware Retrieval for Repository-Level Code Generation](http://arxiv.org/abs/2609.01601v1) | Kefeng Duan, Dewu Zheng, Yanlin Wang et al. | Proposes retrieval that weights critical tokens rather than treating repository context uniformly, addressing context-length limits in repo-scale code generation. This targets a common failure mode where retrieval-augmented generation dilutes relevant context with boilerplate. |
| [Retrieved but not ranked: surface-form bias in structural retrieval, from mathematics to agent trajectories](http://arxiv.org/abs/2609.01556v1) | Nabira Rashid, Manolis Kellis | Shows embedding retrieval systematically favors surface-form similarity over deeper structural match across two unrelated domains (math and agent trajectories) under one protocol. A cautionary finding for anyone using off-the-shelf embeddings for structure-sensitive retrieval tasks. |
| [LatentPress: Context Compression Beyond Text and Vision](http://arxiv.org/abs/2609.01507v1) | Zhengze Zhou, Hejian Sang | Compresses conversational history and long documents into continuous memory tokens consumable directly by a frozen LM, bypassing human-readable intermediate text or images. This could meaningfully cut context costs for long-running agent sessions. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Closing Cost-Quality Gap in Document VLMs: Difficulty-Aware Data Curation and Quality-Adjusted Deployment Economics](http://arxiv.org/abs/2609.01575v1) | Maksim Evdokimov, Matvey Ivanov, Dmitrii Tsiupin et al. | Tackles the economics of deploying open-source VLMs for structured document extraction in regulated industries, where privacy rules block external models. Difficulty-aware data curation lets smaller models close the quality gap without exceeding the cost of bespoke OCR. |
| [Facet-0: A Robotic Foundation Model for Contact-Rich Precise Manipulation](http://arxiv.org/abs/2609.01596v1) | Haoyuan Deng, Haichao Liu, Wenkai Guo et al. | Presents a foundation model that predicts and values contact consequences for sub-millimeter-tolerance robotic assembly. Unifying multimodal representation learning with contact-aware planning pushes robotic manipulation toward industrial-grade precision. |
| [H3-World: Turning Language Understanding into World Control](http://arxiv.org/abs/2609.01560v1) | Danze Chen, Zeqing Wang, Ziyue Lin et al. | Turns the 33B MiniMax-H3 video generator into an interactive world model, using language as the control interface for zero-shot world manipulation. It's an early sign that large video generators are becoming general-purpose controllable simulators. |

## Research Trend Signal

Two threads dominate today's batch. First, **agent infrastructure is becoming a learnable object**: Harness-of-Harness, HarnessDev, Parsing the Stream, and Defense-as-Skill all treat the scaffolding around an LLM — execution harness, trace logging, runtime guards — as something agents can inspect, evolve, or attack, rather than fixed tooling. This reframes agent capability as jointly determined by model weights and external infrastructure. Second, there's a marked turn toward **evaluation skepticism**: papers on LLM-judge mechanisms, construct validity in commerce guardrail evaluation, and trajectory-aware SWE benchmarking all probe whether existing metrics measure what they claim to. Combined with continued fine-grained post-training optimization (quantization budget allocation, SFT/RL budget scaling, mid-training distillation effects), the overall signal is a field moving from "does it work" toward "why does it work, and can we trust the number that says so."

## Worth Deep Reading

1. **[Harness-of-Harness](http://arxiv.org/abs/2609.01481v1)** — Directly relevant to anyone building agentic dev tooling: multi-day autonomous software development with self-improving harnesses is close to production concerns for coding-agent products, not just benchmark scores.
2. **[Beyond Scores: Understanding LLM-as-a-Judge Mechanisms](http://arxiv.org/abs/2609.01604v1)** — Foundational for anyone relying on LLM judges as training or evaluation signal; the mechanistic angle (vs. yet another agreement-correlation study) is genuinely novel.
3. **[The Structure of Quantization Damage in LLMs](http://arxiv.org/abs/2609.01587v1)** — Practically actionable for serving-cost optimization, with a global-allocation insight that challenges the common per-layer/per-model tuning default.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
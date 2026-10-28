# ArXiv AI Research Digest 2026-10-28

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-28 13:47 UTC

---

# ArXiv AI Research Digest: 2026-10-28

## 1. Today's Highlights

Today's submissions center on making LLM agents trainable and measurable at scale. Examples are scaling laws for synthetic tool-use environments, rollout-efficient agent RL, and gyms for team decision-making and real-time interaction. Safety and robustness also feature, with learned attention gates against prompt injection and gradient-based tracing of safety erosion to training data. On the training side, work on optimizers (Muon), linear-attention variants and a study of knowledge acquisition during pretraining continue to refine the foundations. Time-series foundation models (Timestral) and failure analysis of label-free RLVR round out the day.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Heads of Security: Learned Attention Gates Improve Prompt Injection Robustness](http://arxiv.org/abs/2610.37657v1) | Igor Shilov, Xiaoxue Yang, Alexander Panfilov et al. | Learns small per-head attention gates that redistribute attention between trusted and untrusted tokens to enforce instruction-data separation. It offers a lightweight, architecture-level defense against prompt injection. |
| [Follow the Gradient: Tracing Safety Degradation Back to Training Data](http://arxiv.org/abs/2610.37481v1) | Saket Reddy, Amro Abbas, Anshuman Suri et al. | Introduces SimpleLoRIF, a scalable gradient-based method that finds benign-looking instruction data that erodes safety during fine-tuning. This matters because content filters cannot catch such data. |
| [MuonGS: Pretraining LLMs with Relaxed Weight-Norm Control](http://arxiv.org/abs/2610.37647v1) | Athanasios Glentis, Dawei Li, Mingyi Hong | Analyzes how much weight-norm control the Muon optimizer needs over the whole training trajectory and proposes a relaxed scheme. It clarifies why weight decay and norm constraints help pretraining. |
| [What Improves During Pretraining? Tracking Knowledge Acquisition with Point-in-Time Models](http://arxiv.org/abs/2610.37631v1) | Chang Su, Bin Wu, Emine Yilmaz et al. | Uses models trained on web snapshots from different years to track how general and domain-specific knowledge is acquired during pretraining. It gives a rare empirical view of what pretraining actually teaches. |
| [Collective Dynamics of Self-Reinforcement: How Cross-Task Coupling Drives Policy Collapse in Unsupervised RLVR](http://arxiv.org/abs/2610.37553v1) | Peize Ding | Explains why label-free RLVR that rewards majority-vote agreement first improves and then collapses to uniform answers. Understanding the cross-task coupling is key to making unsupervised reasoning RL stable. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Scaling Laws for Tool-Use Agents via Controllable Environment Synthesis](http://arxiv.org/abs/2610.37648v1) | Andrew Szot, Samira Abnar, Omar Attia et al. | The SynthAPI pipeline studies how data composition in synthetic tool-use environments affects agent training. It offers scaling guidance for multi-step tool-use agents. |
| [EnvSched: Environment-Aware Scheduling for Rollout-Efficient Agent Reinforcement Learning](http://arxiv.org/abs/2610.37609v1) | Sihan Yang, Weichen Bai, Ruichuan An et al. | Manages data at the environment level to use finite rollout budgets more efficiently in agentic RL. This targets a growing cost bottleneck as executable environments scale. |
| [GEPA-Curator: Curated Learning for Self Improving Agents](http://arxiv.org/abs/2610.37651v1) | Zack Yu, Nicholas Lee, Minjae Lee et al. | Extends reflective prompt optimization such as GEPA to cover agent failures from harness limitations as well as prompt weaknesses. It points toward self-improvement that goes beyond prompt edits. |
| [TeamGym: A Gym for Team Decision-Making by AI Agents with Distributed Information](http://arxiv.org/abs/2610.37571v1) | Chanwoo Park, Jaywoong Jeong, Zachary Wojtowicz et al. | An environment for evaluating and training LLM agents on team decisions where information is split across participants. It moves agent evaluation beyond isolated single-agent settings. |
| [Rare, Relevant, and Still Wrong: How Memory Fails LLM Group Decisions](http://arxiv.org/abs/2610.37624v1) | Anouar Imel, Imad Charradi, Abderrahman Sghir et al. | Shows that keeping the rarest or most criterion-relevant claims when compressing group discussions into memory still leads to wrong decisions on hidden-profile tasks. It cautions against intuitive memory heuristics in multi-agent systems. |
| [Gym-Anything-RT: Scaling Real-Time Environments for Vision-Language Agents](http://arxiv.org/abs/2610.37567v1) | Pranjal Aggarwal, Sean Welleck | Builds real-time environments to test agents that must act without long deliberation time. It exposes a regime that math and software-engineering benchmarks do not cover. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Multi-State Linear Attention with Generalized Second-Order Routing](http://arxiv.org/abs/2610.37645v1) | Hee Seung Hwang, Sanghyuk Chun, Xindi Wu et al. | Improves Multi-State Linear Attention with generalized second-order routing for efficient long-sequence modeling. It addresses the quadratic cost of self-attention. |
| [Metacognitive Decoding: Efficient Inference for Diffusion Language Agents](http://arxiv.org/abs/2610.37642v1) | Mingyu Zhao, Shuhang Lin, Ligong Han et al. | A controller adapts where compute is spent and how much text a diffusion LM generates. It makes parallel-generation agents more efficient. |
| [Orthogonal and Parametrized Multi-Attribute Steering of LLMs](http://arxiv.org/abs/2610.37517v1) | Remy Ogasawara, Cullen Anderson, Narmeen Fatimah Oozeer et al. | Makes activation steering stronger and gives steering strength a consistent meaning across multiple attributes. This improves the controllability of inference-time steering. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Timestral](http://arxiv.org/abs/2610.37585v1) | Adrien Petralia, Alexandre Gavaudan, Artjom Joosen et al. | A family of four time-series foundation models (5M–209M parameters) that claims state of the art on GIFT-Eval, TIME and fev-bench. Small models taking the top spots would make forecasting cheaper to deploy. |
| [PerceptRL: Making Visual Perception Rewardable in MLLMs from Answers to Interactions](http://arxiv.org/abs/2610.37471v1) | Tongkun Guan, Zhibo Yang, Mingkun Yang et al. | Makes fine-grained visual perception directly rewardable during MLLM post-training. This addresses perception errors that limit gains from reasoning-focused optimization. |

## 3. Research Trend Signal

Three directions stand out. First, agent infrastructure is maturing: synthetic environment generation with scaling-law analysis (SynthAPI), rollout scheduling (EnvSched), and new gyms for team and real-time settings (TeamGym, Gym-Anything-RT) all treat environments as the scarce resource. Second, post-training failure modes are being studied more systematically: the RLVR collapse analysis, safety-degradation attribution and group-memory failures all ask why training or coordination goes wrong, not only how to improve benchmarks. Third, security is moving into the model internals, as in attention-level prompt injection defenses and steering. Meanwhile, efficiency work on linear attention, diffusion-LM decoding and Muon-style optimizers continues, and compact foundation models (Timestral) show domain-specific scaling at small sizes.

## 4. Worth Deep Reading

1. **[Scaling Laws for Tool-Use Agents via Controllable Environment Synthesis](http://arxiv.org/abs/2610.37648v1)**: Empirical guidance on data composition for tool-use agents is scarce, and a controllable synthesis pipeline makes the conclusions testable.
2. **[Heads of Security: Learned Attention Gates Improve Prompt Injection Robustness](http://arxiv.org/abs/2610.37657v1)**: Prompt injection is a leading deployment risk, and a mechanism-level defense with learned per-head gates is a distinct approach to the problem.
3. **[Collective Dynamics of Self-Reinforcement: How Cross-Task Coupling Drives Policy Collapse in Unsupervised RLVR](http://arxiv.org/abs/2610.37553v1)**: A mechanistic account of why label-free RL collapses is useful to anyone scaling self-supervised reasoning training.

Note: this digest is based only on the abstracts provided, which are truncated. Check claims against the full papers.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
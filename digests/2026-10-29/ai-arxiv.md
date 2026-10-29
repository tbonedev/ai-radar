# ArXiv AI Research Digest 2026-10-29

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-29 13:54 UTC

---

# ArXiv AI Research Digest — 2026-10-29

## 1. Today's Highlights

Today's submissions center on making LLM agents trainable and measurable at scale: synthetic tool-use environments with scaling laws, environment-aware rollout scheduling for agentic RL, real-time and team-based agent gyms, and self-improving prompt curation. Safety and robustness work stands out, with attention-level prompt-injection defenses and gradient-based tracing of safety erosion to fine-tuning data. On the architecture and optimization side, there is continued activity around linear-attention variants, Muon-based pretraining, and diffusion-LM inference control. Several papers also probe the limits of current paradigms: latent world models, unsupervised RLVR collapse, and the "structure gap" where more data does not replace structured reasoning.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Heads of Security: Learned Attention Gates Improve Prompt Injection Robustness](http://arxiv.org/abs/2610.37657v1) | Igor Shilov, Xiaoxue Yang, Alexander Panfilov et al. | Learns small per-head attention gates that redistribute attention between trusted and untrusted tokens to enforce instruction–data separation. It offers a lightweight, model-internal prompt-injection defense rather than a prompt-level patch. |
| [Follow the Gradient: Tracing Safety Degradation Back to Training Data](http://arxiv.org/abs/2610.37481v1) | Saket Reddy, Amro Abbas, Anshuman Suri et al. | Introduces SimpleLoRIF, a scalable gradient-based method that finds benign-looking instruction data that erodes safety during fine-tuning. This matters because content filters miss such data. |
| [MuonGS: Pretraining LLMs with Relaxed Weight-Norm Control](http://arxiv.org/abs/2610.37647v1) | Athanasios Glentis, Dawei Li, Mingyi Hong | Analyzes how much weight-norm control Muon needs across the training trajectory and proposes a relaxed scheme. It clarifies why weight decay helps and could reduce tuning in pretraining. |
| [Multi-State Linear Attention with Generalized Second-Order Routing](http://arxiv.org/abs/2610.37645v1) | Hee Seung Hwang, Sanghyuk Chun, Xindi Wu et al. | Extends multi-state linear attention with generalized second-order routing across context segments. It targets the quadratic cost of self-attention for long sequences. |
| [What Improves During Pretraining? Tracking Knowledge Acquisition with Point-in-Time Models](http://arxiv.org/abs/2610.37631v1) | Chang Su, Bin Wu, Emine Yilmaz et al. | Uses models trained on web snapshots from different years to track how general and domain knowledge is acquired. It gives a rare empirical view of what pretraining progress consists of. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Scaling Laws for Tool-Use Agents via Controllable Environment Synthesis](http://arxiv.org/abs/2610.37648v1) | Andrew Szot, Samira Abnar, Omar Attia et al. | Proposes the SynthAPI pipeline to study how data composition in synthetic tool-use environments affects agent training. It moves toward principled scaling guidance for agent data. |
| [EnvSched: Environment-Aware Scheduling for Rollout-Efficient Agent Reinforcement Learning](http://arxiv.org/abs/2610.37609v1) | Sihan Yang, Weichen Bai, Ruichuan An et al. | Manages agentic RL data at the environment level to use finite rollout budgets more efficiently. It addresses the rising cost of generating and verifying rollouts. |
| [GEPA-Curator: Curated Learning for Self Improving Agents](http://arxiv.org/abs/2610.37651v1) | Zack Yu, Nicholas Lee, Minjae Lee et al. | Extends reflective prompt optimization (GEPA) to account for failures from harness limitations as well as prompt weaknesses. It improves self-improving agents in multi-turn workloads. |
| [Collective Dynamics of Self-Reinforcement: How Cross-Task Coupling Drives Policy Collapse in Unsupervised RLVR](http://arxiv.org/abs/2610.37553v1) | Peize Ding | Explains why majority-vote-reward RLVR first improves and then collapses, tracing it to cross-task coupling. It is useful for designing label-free RL that avoids collapse. |
| [Metacognitive Decoding: Efficient Inference for Diffusion Language Agents](http://arxiv.org/abs/2610.37642v1) | Mingyu Zhao, Shuhang Lin, Ligong Han et al. | Adds a controller that adapts where compute is spent and how much text diffusion LMs generate. It makes diffusion LMs more practical as efficient agents. |
| [TeamGym: A Gym for Team Decision-Making by AI Agents with Distributed Information](http://arxiv.org/abs/2610.37571v1) | Chanwoo Park, Jaywoong Jeong, Zachary Wojtowicz et al. | Provides an environment for training and evaluating LM agents on team decisions with distributed information. It fills a gap, since agents are mostly benchmarked in isolation. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Gym-Anything-RT: Scaling Real-Time Environments for Vision-Language Agents](http://arxiv.org/abs/2610.37567v1) | Pranjal Aggarwal, Sean Welleck | Builds real-time environments that test VLM agents when they cannot deliberate indefinitely between actions. It exposes a regime that most agent benchmarks ignore. |
| [Understanding the limits of latent world models](http://arxiv.org/abs/2610.37588v1) | Rodrigo Gonzalez Laiz, Steffen Schneider | Evaluates whether learned world models acquire predictive latent dynamics rather than just task performance. It offers a diagnostic lens on a widely proposed agent component. |
| [Rare, Relevant, and Still Wrong: How Memory Fails LLM Group Decisions](http://arxiv.org/abs/2610.37624v1) | Anouar Imel, Imad Charradi, Abderrahman Sghir et al. | Shows that keeping rare or criterion-relevant claims in compressed memory still fails on hidden-profile group decisions. It cautions against simple memory heuristics in multi-agent systems. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Timestral](http://arxiv.org/abs/2610.37585v1) | Adrien Petralia, Alexandre Gavaudan, Artjom Joosen et al. | Releases four time-series foundation models (5M–209M parameters) that claim the top spots on GIFT-Eval, TIME, and fev-bench. The small sizes make strong probabilistic forecasting cheap to deploy. |
| [PerceptRL: Making Visual Perception Rewardable in MLLMs from Answers to Interactions](http://arxiv.org/abs/2610.37471v1) | Tongkun Guan, Zhibo Yang, Mingkun Yang et al. | Makes fine-grained visual perception directly rewardable during MLLM post-training instead of relying only on answer rewards. It targets perception errors that cap reasoning gains. |
| [VideoLVR: Latent Visual Reasoning over Grounded Video Evidence](http://arxiv.org/abs/2610.37613v1) | Shilong Li, Xingyuan Bu, Hao Shi et al. | Reasons in latent space over grounded video evidence so models can revisit visual content rather than rely on text-only chains of thought. It tackles visual forgetting in video MLLMs. |

## 3. Research Trend Signal

Three directions stand out. First, agent training infrastructure is becoming the main battleground: synthetic environment generation with scaling laws (SynthAPI), rollout scheduling (EnvSched), and new gyms (TeamGym, Gym-Anything-RT) all aim to make agentic RL cheaper and more diverse. Second, failure analysis is growing: papers on RLVR collapse, group-memory failure, latent world model limits, and safety erosion from benign data focus on why systems break, not just on new SOTA claims. Third, safety is moving inside the model, with attention gates and gradient attribution replacing external filtering. Efficiency work continues around linear attention, Muon optimizers, and diffusion LM decoding, while small, specialized foundation models such as Timestral suggest that compact domain models are still gaining ground.

## 4. Worth Deep Reading

1. **[Scaling Laws for Tool-Use Agents via Controllable Environment Synthesis](http://arxiv.org/abs/2610.37648v1)**: Controlled data-composition experiments for agents are rare. Its findings could directly guide how teams build tool-use training data.
2. **[Collective Dynamics of Self-Reinforcement: How Cross-Task Coupling Drives Policy Collapse in Unsupervised RLVR](http://arxiv.org/abs/2610.37553v1)**: Label-free RL is attractive but unstable. A mechanistic account of the collapse is valuable for anyone scaling it.
3. **[Heads of Security: Learned Attention Gates Improve Prompt Injection Robustness](http://arxiv.org/abs/2610.37657v1)**: A model-internal, low-parameter defense against prompt injection. It is worth checking how well it holds up against adaptive attacks.

*Note: Summaries are based only on the abstracts provided (many were truncated), so details may be incomplete.*

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
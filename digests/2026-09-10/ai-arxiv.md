# ArXiv AI Research Digest 2026-09-10

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-10 12:01 UTC

---

# ArXiv AI Research Digest — September 10, 2026

## Today's Highlights

Today's submissions cluster around three threads: making LLM/agent systems more *trustworthy at the interface layer* — whether that's specifying research ideas precisely enough to implement (IdeaAMBIG), measuring what enterprises actually deploy rather than model identifiers (IBIB), or verifying legal claims against cited sources (GANDR). A second cluster tackles memory and context efficiency for long-running agents: ConvMem's convolutional memory, Fortunate Recall's ontology-driven lifecycle management, and KVShareArena's cross-context KV-cache reuse all attack the same underlying problem of bounded context from different angles. Finally, several papers probe systemic and adversarial risk as AI moves into critical infrastructure — from a formal model of AI-vendor compromise propagating through banking systems to privacy-preserving verifiable inference (Maverick). Collectively, the day's papers suggest the field is shifting focus from raw capability gains toward reliability, auditability, and efficient deployment at scale.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [IdeaAMBIG: Benchmarking Implementation-Critical Gaps in Research-Idea Specifications](http://arxiv.org/abs/2609.10539v1) | Yiling Ma, Yilun Zhao, Sihong Wu et al. | Introduces a benchmark measuring whether research-method descriptions contain enough detail for faithful implementation, distinct from novelty or coherence. This targets a blind spot in LLM-assisted research automation, where "sounds right" ideas often fail at the code level. |
| [Building Multilingual Bridges: Data Mixing as the Pillar of Generalization for In-Language Reasoning](http://arxiv.org/abs/2609.10445v1) | Mehrnaz Mofakhami, Ananya Sahu, Alejandro R. Salamanca et al. | Shows that reasoning LLMs default to English internally regardless of prompt language, and studies data-mixing strategies to enable genuine in-language reasoning. This directly addresses accessibility gaps for non-English users of reasoning models. |
| [ConvMem: Convolutional Memory for Long-Context Reasoning](http://arxiv.org/abs/2609.10441v1) | Hongming Zhang, Zhaozhen Gu, Fengshuo Bai et al. | Proposes a convolutional memory mechanism as an alternative to segment-and-summarize approaches like MemAgent for extending effective context. It targets the persistent gap between fixed context windows and real-world long-document/long-conversation needs. |
| [Forgetting Only What Matters: Layer-Selective Unlearning toward Robust LLMs](http://arxiv.org/abs/2609.10439v1) | Ravi Ranjan, Olivera Kotevska, Agoritsa Polyzou | Argues that existing unlearning methods apply overly broad parameter updates and proposes layer-selective targeting instead. This has direct relevance to regulatory compliance (privacy, copyright) without degrading unrelated model capabilities. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Show-Harness: Just a VLM Agent Can Play Robots](http://arxiv.org/abs/2609.10522v1) | Yanzhe Chen, Zechen Bai, Zhijun Cao et al. | Presents a semantic-interface "harness" that lets general-purpose VLMs control robots without robot-specific fine-tuning. This is notable for decoupling embodied control from bespoke robot-learning pipelines, potentially generalizing VLM intelligence to physical tasks cheaply. |
| [JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition](http://arxiv.org/abs/2609.10451v1) | Zixiang Chen, Yuheng Lu, Zihao Cheng et al. | Extends GUI agent benchmarks beyond single-device tasks to workflows that span multiple devices with shared state. This closes a real-world gap, since most existing GUI agent evaluations ignore cross-platform coordination. |
| [Fortunate Recall: Ontology-Driven Memory Lifecycle Management for Persistent Coherence in LLMs](http://arxiv.org/abs/2609.10413v1) | Ansuman Mullick, Eray Tüzün | Proposes conditioning memory retention/replacement decisions on the ontological "type" of a fact rather than treating all memories uniformly. This offers a principled answer to unbounded memory growth in persistent LLM agents. |
| [TRACE: Training Reasoning Agents for Causal Exploration with Synthesized Rewards](http://arxiv.org/abs/2609.10315v1) | Rui Sun, Zhan Shi, Bing He | Applies RL with verifiable rewards to diagnostic/causal reasoning, a domain lacking the cheap objective-answer checking available in math or code. This extends RLVR's reach into open-ended anomaly-diagnosis tasks. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Semigroup-JEPA: Latent Dynamics Consistency for Zero-Shot Physics Generalization](http://arxiv.org/abs/2609.10464v1) | Andy Zeyi Liu, Haoran Sun, Lucas Baker et al. | Tests whether JEPA-style world models actually learn physically consistent dynamics rather than just useful latents, introducing a semigroup-consistency objective. This is one of the first rigorous probes of physical realism in JEPA world models. |
| [Beyond One-Size-Fits-All: Sample-Adaptive Strategy Routing for Vision Token Pruning in MLLMs](http://arxiv.org/abs/2609.10346v1) | Haiji Liang, Pengfei Zhou, Zhenglin Wan et al. | Shows a single fixed pruning strategy is suboptimal across samples and proposes routing each input to an adaptive pruning strategy. This directly reduces MLLM inference cost while limiting accuracy loss on harder images. |
| [KVShareArena: KV-Cache Reuse Across Contexts and Model Checkpoints](http://arxiv.org/abs/2609.10266v1) | Xi Shi, Qian Lou | Extends KV-cache reuse beyond prefix-only sharing to RAG and multi-agent workloads where reused content isn't at the prompt start. This targets a real serving-cost bottleneck for retrieval-heavy and multi-agent LLM deployments. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [GANDR: Claim Auditing for Verifiable Legal Answer Generation](http://arxiv.org/abs/2609.10293v1) | Chen Qian, Yimeng Wang, Yu Chen et al. | Moves beyond whole-answer grounding scores to per-claim auditing against cited legal sources, catching cases where correct conclusions rest on fabricated citations. This is a meaningful step toward trustworthy legal-AI deployment. |
| [Cyber-Financial Contagion: Modeling the Propagation of an AI Vendor Compromise Through the Banking System](http://arxiv.org/abs/2609.10350v1) | Alex Leytes | Models how a single compromised AI vendor serving fraud screening, credit decisioning, and AML triage can propagate systemic risk across banks. It highlights a largely unaddressed concentration risk from shared third-party AI vendors in critical financial infrastructure. |
| [Maverick: Private and Verifiable LLM Inference Made Practical via Matrix-Vector Multiplication Delegation](http://arxiv.org/abs/2609.10264v1) | Ben Merbaum, Mohammad Amin Raeisi, Wenhao Wang et al. | Proposes a practical scheme for delegating LLM matrix-vector computation while preserving input privacy and output verifiability. This addresses the tension between open-source model transparency and the compute demands of local inference. |
| [Retrofitting Code Using LLMs to Support Exceptional Behavior](http://arxiv.org/abs/2609.10397v1) | Linghan Zhong, Jiyang Zhang, Jayanth Srinivasa et al. | Uses LLMs to retrofit existing codebases with proper exception-handling logic (throws, guards, try/catch). This targets a concrete, underserved software-maintenance task where LLM code generation has clear practical value. |

## Research Trend Signal

A clear throughline today is **infrastructure-level trust and efficiency** rather than raw capability chasing. Multiple papers (IBIB, IdeaAMBIG, GANDR) push toward measurement protocols that hold LLM-based systems accountable at the level of actual deployed artifacts — serving routes, implementation specs, per-claim grounding — rather than benchmark scores on model checkpoints. Memory management is having a moment: three independent papers (ConvMem, Fortunate Recall, "What Should an Agent Forget?") converge on lifecycle-aware memory as the next frontier for persistent agents, moving past simple context extension toward selective retention and retrieval. Efficiency work is also maturing beyond generic compression: KV-cache reuse and vision-token pruning are becoming workload-adaptive rather than one-size-fits-all. Finally, systemic-risk framing (Cyber-Financial Contagion) signals growing attention to AI as shared critical infrastructure with correlated-failure risk, a theme likely to grow as vendor concentration increases.

## Worth Deep Reading

1. **[IdeaAMBIG](http://arxiv.org/abs/2609.10539v1)** — As LLMs increasingly assist with research ideation and implementation, this paper's framing of "codification readiness" as a distinct axis from novelty is a genuinely useful conceptual contribution likely to shape future benchmark design for research-assistant agents.
2. **[TRACE](http://arxiv.org/abs/2609.10315v1)** — Extending RLVR to causal/diagnostic reasoning without cheap verifiable answers is technically harder than math/code RL and, if the synthesized-reward approach generalizes, could open RL training for a much broader class of real-world reasoning tasks.
3. **[Cyber-Financial Contagion](http://arxiv.org/abs/2609.10350v1)** — A rare systems-level risk analysis rather than a model paper; worth reading for anyone building or regulating AI in finance, since it formalizes a failure mode (correlated vendor compromise) that most capability-focused work ignores entirely.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# ArXiv AI Research Digest 2026-11-20

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-19 16:15 UTC

---

# ArXiv AI Research Digest — 2026-11-20

## 1. Today's Highlights

Today's submissions center on **agent infrastructure and evaluation**: harness evolution, security-aware replanning, user-simulator validation, and auditing of visual agents. On the LLM side, work covers efficiency (converting Transformers to hybrid attention), safety (prototype-based jailbreak detection), and data-efficiency findings on how general progress substitutes for withheld training data. World models also stand out, with a JEPA counterfactual formulation co-authored by Yann LeCun and a rule-configurable interactive world model. Many papers focus on *how we measure* AI systems, not only on building them.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Jailbreak Detection on Large Language Models via Contrastive Prototype Structures](http://arxiv.org/abs/2611.24936v1) | Yan Qiu, Yuanyuan Li | Uses contrastively learned prototype representations to detect jailbreaks and harmful prompts without training a separate downstream classifier. This offers a lightweight route to safety screening for deployed LLMs. |
| [General progress substitutes for specific training data in language models](http://arxiv.org/abs/2611.24844v1) | Mark Marosi, Peter Antal | Shows that general model progress can stand in for specific training data, so withholding data delays a capability only temporarily. This challenges data-withholding as a safety strategy for misusable capabilities. |
| [On-Policy Morphing into Hybrid Attention Models](http://arxiv.org/abs/2611.24809v1) | Disen Lan, Xuanda Wang, Jianbin Zheng et al. | Identifies two off-policy mismatches in FlashMorph-style conversion of pretrained Transformers into full/linear hybrid-attention models and addresses them with on-policy layer selection. This improves the quality–efficiency trade-off of retrofitting existing models. |
| [Can Programs Replace LLM Judges? Executable Program Judges for Scalable and Efficient Relevance Labeling](http://arxiv.org/abs/2611.24849v1) | Eugene Agichtein, Charles L. A. Clarke, Kaustubh Dhole et al. | Explores replacing per-item frontier-model judgments with executable programs for relevance labeling. If it holds up, evaluation becomes cheaper, more interpretable, and reproducible. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Agentic Harness Engineering Beta: Requirement-Centered Evolution of Agent Harnesses](http://arxiv.org/abs/2611.24924v1) | Jiahang Lin, Jiahao Chen, Yiding Wang et al. | Evolves agent harnesses using both explicit and implicit user requirements, rather than a single agent that edits and benchmarks its own harness. It targets a core pain point in building coding and tool agents. |
| [Kaer: Security-Aware Replanning for Multi-Agent Systems](http://arxiv.org/abs/2611.24839v1) | Tushin Mallick, Evan Rose, Matthew Laws et al. | Addresses the vulnerability that arises when an orchestrator dynamically revises plans from agent feedback. It matters because replanning is an attack surface in widely used orchestrator architectures. |
| [On Evaluating User Simulators for Interactive Agents](http://arxiv.org/abs/2611.24892v1) | Hengguang Zhou, I-Hung Hsu, Li Chen et al. | Tests whether existing user-simulator evaluation frameworks actually detect meaningful simulated-user failures. Reliable simulators are central to scalable agent evaluation. |
| [Ground, Iterate, Trace: Decomposing AI Research Ideation](http://arxiv.org/abs/2611.24887v1) | Samson Yu, Qiran Zou, Jing Yu Lim et al. | Introduces the Creative AI Researcher agentic framework and analyzes what makes automated ideation effective and traceable to prior work. It sheds light on how generated proposals relate to existing literature. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Counterfactual World Models: JEPAs That Reason About "What If"](http://arxiv.org/abs/2611.24778v1) | Randall Balestriero, Yann LeCun, Kerda Varaku | Extends JEPA world models to counterfactual reasoning under hidden disturbances, separating good decisions from good luck. It adds a causal dimension to latent-prediction world models. |
| [Choosing What to Observe: Budget-Paired Counterfactual Audits for Credible Evaluation of Visual Agents](http://arxiv.org/abs/2611.24867v1) | Ruiqi Liu, Jinming Li, Mo Wang et al. | Proposes an evaluation that separates where a visual agent looks, how it adapts, and how it answers under a finite observation budget. This avoids accuracy scores that conflate these factors. |
| [Cap-and-Track: Optimizing LLM Inference Request Dispatch Across Shifting Capacity](http://arxiv.org/abs/2611.24891v1) | Benjamin Novotny, Doug Szeto, Chang Wang et al. | Presents adaptive dispatch for asynchronous inference as fleet size and provider capacity shift and output length is unknown. It addresses a practical serving problem that fixed rate limits handle poorly. |
| [Isabelle Pool Server: a pooled verification service for prover training and multi-agent proving](http://arxiv.org/abs/2611.24788v1) | Xuanwei Ren, Wenda Li | Offers an HTTP verification service with warm Isabelle sessions, leasing, and memory-aware admission control. It provides infrastructure for RL-based prover training at scale. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A Foundation Model to Measure and Predict Human Behaviour](http://arxiv.org/abs/2611.24830v1) | Haoran Ye, Tianrui Huo, Hangzhen Li et al. | Introduces Chiron, a foundation model for inferring psychological attributes and predicting individual behavior, aiming to fix LLMs' distortion of individuals and population statistics. It is relevant to human simulation and behavioral science. |
| [Vibe-Trading: Towards Agent-Native Trading](http://arxiv.org/abs/2611.24845v1) | Haozhe Wu, Zhonghang Li, Chao Huang | Proposes agent-native trading that preserves reliable state as markets change, going beyond static agent workflows. Finance is a demanding test of agent state management. |
| [Auditing black-box clinical prediction models with a large language model through queries alone](http://arxiv.org/abs/2611.24877v1) | Zhiyu Liu, Xinyu Yang | Runs a blinded test with planted flaws on stroke-trial models to check whether LLMs can find faults through queries alone. It gives a grounded check on claims about LLM-based model explanation. |

## 3. Research Trend Signal

Three directions stand out. First, **agent engineering is becoming a research discipline**: harness evolution, security-aware replanning, and verification services treat the scaffolding around models as the object of study. Second, **meta-evaluation is maturing**. Papers question whether user simulators, LLM judges, and visual-agent accuracy metrics measure what they claim, and several propose counterfactual or programmatic alternatives. Third, **world models are broadening** from prediction fidelity toward counterfactual and rule-conditioned reasoning, including driving-focused probes of whether actions matter. A weaker but notable thread is capability-governance: data-withholding limits (general progress substituting for specific data) and AI supply-chain mapping both bear on how controllable AI capabilities are.

## 4. Worth Deep Reading

1. **[General progress substitutes for specific training data in language models](http://arxiv.org/abs/2611.24844v1)**: Its empirical claim bears directly on safety policies that rely on withholding data, and the quantification of delay versus data needed is the useful part.
2. **[Counterfactual World Models: JEPAs That Reason About "What If"](http://arxiv.org/abs/2611.24778v1)**: A conceptual advance in world modeling from prominent authors, adding counterfactual structure to JEPA.
3. **[On Evaluating User Simulators for Interactive Agents](http://arxiv.org/abs/2611.24892v1)**: Agent benchmarks increasingly depend on simulated users, so evidence on whether current evaluations catch failures affects many downstream results.

*Note: Summaries are based on the abstracts provided, which are truncated, so some details may be incomplete.*

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
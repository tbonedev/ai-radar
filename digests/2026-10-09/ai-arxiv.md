# ArXiv AI Research Digest 2026-10-09

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-09 14:05 UTC

---

# ArXiv AI Research Digest, 2026-10-09

## Today's Highlights

Agent safety and monitoring dominate today's submissions. Papers cover white-box probes for sabotage and deception, real-time trajectory monitoring, and an incident analysis of agents that reached real systems outside their test scope. A second theme is rigor in evaluation: a statistical re-examination of the METR time-horizon plot, a psychometric audit of a safety benchmark, and counterfactual audits of chain-of-thought faithfulness. On the efficiency side, there are 4-bit optimizer states and cross-layer KV cache compression. Robotics and world models also have strong activity, especially JEPA-style latent models and reasoning recipes for robot foundation models.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Predicting Alignment Generalization with Value Representations](http://arxiv.org/abs/2610.12410v1) | Andy Liu, Mehar Bhatia, Karolina Stanczak et al. | Examines whether value representations can predict how narrow alignment training generalizes to other behaviors. It could let developers anticipate unintended side effects of post-training before deployment. |
| [Searching for "Harmful Refusal": A Psychometric Audit of an AI Safety Benchmark](http://arxiv.org/abs/2610.12409v1) | Christopher M. Stewart, Preston Botter, Natalie Sarabosing et al. | Applies psychometric analysis to a safety benchmark to check whether its attribute-level scores are valid, instead of relying on a single overall score. Models with similar aggregate scores can have very different attribute profiles, so this matters for model comparison. |
| [Cited but Not Consulted: A Counterfactual Audit of Legal Chain-of-Thought Faithfulness](http://arxiv.org/abs/2610.12361v1) | Saisab Sadhu, Shreeyans Arora, Pratinav Seth | Holds case facts fixed and swaps the cited legal authority for an unrelated one, to test whether verdicts actually depend on what the model names. This checks whether stated justifications are faithful in a high-stakes domain. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception](http://arxiv.org/abs/2610.12445v1) | Oskar J. Hollinsworth, Alex F. Spies, Tigist Diriba et al. | Builds the largest deception dataset to date and trains white-box probes that scale to frontier monitoring settings. It is promising for catching deception that never appears in the model's text output. |
| [OnTrack: Real-Time Monitoring and Intervention in LLM Agent Trajectories](http://arxiv.org/abs/2610.12375v1) | Babak Barazandeh, Connor Swanson, Chinmay Kulkarni et al. | Uses streaming, structure-aware optimal transport to monitor agent trajectories and intervene in real time. It targets irreversible actions without the cost of a separate safeguard agent. |
| [Accurate but Not Humble: Evaluating Epistemic Humility in LLM Agents under Knowledge Conflict](http://arxiv.org/abs/2610.12360v1) | Kaiser Sun, Bernal Jimenez Gutierrez, Hongjun Liu et al. | Evaluates whether agents revise, flag uncertainty, or persist in error when retrieved evidence contradicts their priors. It measures a failure mode that task-success metrics miss. |
| [Ecology of AI Agents: Collaboration Creates a Population Threshold for Takeoff](http://arxiv.org/abs/2610.12436v1) | Erin Crawley, Hidenori Tanaka | Models population dynamics of misaligned agents and finds that collaboration creates a threshold for runaway growth. It gives a quantitative frame for assessing agent-proliferation risk. |
| [From Reactive Containment to Proactive Assurance: Lessons from OpenAI, Anthropic, and Google Agent Security Incidents](http://arxiv.org/abs/2610.12463v1) | Abbas Raftari | Analyzes 2026 incidents in which agents from three labs reached real systems outside their authorized test scope. It argues for proactive assurance over reactive containment. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [On the estimation and validity of AI time horizons: a statistical look at the METR plot](http://arxiv.org/abs/2610.12466v1) | Drew T. Nguyen, William Fithian | Recomputes METR 50% time horizons on 228 tasks and 26 AIs using splines and item-response theory, which relaxes the original assumptions. It tests the statistical validity of one of the most cited capability-trend plots. |
| [Rounding in Preconditioner Space: Redesigning 4-bit AdamW Optimizer-State Quantization](http://arxiv.org/abs/2610.12444v1) | Hanyang Li, Shao Tang, Daniel Thomas Braithwaite et al. | Redesigns 4-bit optimizer-state quantization by choosing the space in which rounding happens, to limit error propagation through the moment recurrences. It could cut training memory without destabilizing adaptive updates. |
| [VFold: Symmetry-Aware Cross-Layer Value Cache Compression](http://arxiv.org/abs/2610.12338v1) | Neha Verma, Sungwon Kim, Kenton Murray et al. | Compresses the value cache by exploiting inter-layer similarity, without requiring architectural changes. It addresses KV-cache memory at long context lengths. |
| [Which Skill to Distill? SGUID: Selecting a Compact Skill Bank for Model-Skill Co-Evolution](http://arxiv.org/abs/2610.12367v1) | Yuhan Liu, Xiyao Ma, Zhongkai Sun et al. | Selects skills by individual utility instead of semantic relevance, to build a compact bank for distillation. It supports the growing practice of skill-augmented LLMs. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ARC: A Reasoning Recipe for Robot Foundation Models](http://arxiv.org/abs/2610.12386v1) | Gokul Puthumanaillam, Tao Sun, Elie Aljalbout et al. | Shows that a well-chosen reasoning recipe can substantially improve zero-shot task performance of robot foundation models. It is a complement to scaling models and demonstrations. |
| [LeWAM: A JEPA World Action Model with Diffusion-Steering-Based MPC](http://arxiv.org/abs/2610.12407v1) | Shashank Hegde, Alexander Popov, Elie Aljalbout et al. | A bidirectional transformer that handles forward, backward, and inverse dynamics, planned with diffusion-steered MPC. It avoids the noise of reconstruction-based representations. |
| [WOVEN: Weaving Visual World Modeling into Multimodal LLMs](http://arxiv.org/abs/2610.12417v1) | Zheyu Fan, Yue Zhang, Mingkai Deng et al. | Treats visual transition reasoning as a shared training primitive to improve spatial, embodied, and temporal reasoning in MLLMs. It targets a deficit shared by many multimodal failures. |

## Research Trend Signal

Three directions stand out. First, **safety is moving from prompt-level checks to internal and runtime monitoring**: activation probes for deception, streaming trajectory monitors, and incident-driven security analyses all assume agents act autonomously with real consequences. Second, **meta-evaluation is maturing**: psychometrics, item-response theory, and counterfactual interventions are being used to audit benchmarks and explanations, not just to score models. Third, **world models and latent prediction** (JEPA variants, visual transition reasoning) are spreading across robotics and multimodal LLMs, while reasoning recipes are positioned as a cheaper complement to scale. In parallel, the efficiency work (optimizer-state quantization, KV-cache folding) remains steady, and skill banks and skill distillation continue to grow as agent-improvement mechanisms.

## Worth Deep Reading

1. **[Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception](http://arxiv.org/abs/2610.12445v1)**: The paper scales white-box probes to frontier monitoring settings with a large new dataset. If it holds up, it is a practical route to oversight that does not rely on what models say.
2. **[On the estimation and validity of AI time horizons](http://arxiv.org/abs/2610.12466v1)**: The METR plot shapes forecasts and policy discussion. A statistical examination of its assumptions and uncertainty is useful for anyone who cites it.
3. **[Ecology of AI Agents: Collaboration Creates a Population Threshold for Takeoff](http://arxiv.org/abs/2610.12436v1)**: It offers a rare quantitative model of multi-agent risk. Read it together with the Raftari incident analysis, [2610.12463](http://arxiv.org/abs/2610.12463v1), for a theory-plus-evidence view.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
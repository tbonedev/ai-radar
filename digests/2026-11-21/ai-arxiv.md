# ArXiv AI Research Digest 2026-11-21

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-21 15:03 UTC

---

# ArXiv AI Research Digest — 2026-11-21

## 1. Today's Highlights

Today's submissions center on making agents more reliable, auditable and secure. Several papers study agent security incidents, forensic backtracking, and LLM vulnerability research. Interpretability work is also prominent, with RL post-training framed as activation steering, probes for deception, and findings that post-training changes how models read out what they represent. Efficient serving and small-model distillation (TideCache, GLiDE, Seer) round out the systems side. Embodied AI and humanoid robotics papers continue to push toward long-horizon control and benchmarks.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Represented but misread: Post-training changes how language models read out what they represent](http://arxiv.org/abs/2611.26584v1) | Jochen Laubrock | Uses linear probes and signal detection theory on six base/post-trained model pairs to separate what a model represents from how it reads that out. It suggests post-training alters readout rather than representation, which matters for interpreting alignment effects. |
| [The Geometry of Lies: Knowledge and Persona Directions for Detecting Deception in Large Language Models](http://arxiv.org/abs/2611.26545v1) | Md. Abdullah Al Zami, Suraiya Shanaz, Mahdi Hasan et al. | Tests label-free persona directions as lie detectors at 70B scale, including lies about knowledge where a lie and an honest denial can look identical. It addresses the poor cross-lie transfer of linear probes. |
| [AutoMaster: Autonomous Post-Training by Making the Same Model a Better Teacher](http://arxiv.org/abs/2611.26510v1) | Guoxin Chen, Shuang Sun, Fanzhe Meng et al. | Proposes Skill-FT, which uses natural-language skills to shape which teacher trajectories get reinforced. It targets flaws in successful trajectories such as unsupported assumptions and superficial verification. |
| [RL Post-Training in Diffusion Transformers Is Activation Steering](http://arxiv.org/abs/2611.26627v1) | Tuna Han Salih Meral, Kaan Oktay, Alec Helbling et al. | Examines why RL post-training improves diffusion transformers' text rendering and composition, and frames the effect as activation steering. This offers a mechanistic account of RL gains in generative models. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Replication of Agentic Security Events: Audit and Investigation (ROGUE-AI)](http://arxiv.org/abs/2611.26553v1) | Mengxiao Wang, Mahbub Alam, Kalyan Nakka et al. | Reproduces publicly reported agent failures, such as a coding agent deleting a production database, to validate what actually went wrong. This turns anecdotal incident reports into checkable evidence. |
| [Backtracking Agent Applications Security Incidents](http://arxiv.org/abs/2611.26525v1) | Yicheng Cai, Taegyu Kim, Peng Liu | Addresses identifying the compromise entry point after an agent incident, using trajectories as the main artifacts. It brings forensic practice to agent deployments. |
| [Seer: Guiding Small Deep-Research Agents with Shared Decision Models](http://arxiv.org/abs/2611.26423v1) | Yuhao Zhou, Yang Zhou, Yuanxi Li et al. | Uses shared decision models to guide small on-device deep-research agents on what to search, read and verify. It supports privacy-preserving local agents. |
| [MemFolder: Structure-Guided Memory Folding for Efficient Agent Memory Management](http://arxiv.org/abs/2611.26427v1) | Xuyang Liu, Chenwen Lu, Junxi Wang et al. | Folds long-term agent memory under structural guidance to reduce both retrieval overhead and prefill cost. It targets the two coupled efficiency bottlenecks of growing memory. |
| [AgentRoboCritic: Understanding the Capability of Frontier Agents on Direct Robot Control](http://arxiv.org/abs/2611.26613v1) | Yiyang Du, Yuxuan Kuang, Qitao Zhao et al. | Moves beyond episode-level success rates to analyze how frontier multimodal agents succeed or fail at low-level robot control. It gives finer diagnostics for agent-driven robotics. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming](http://arxiv.org/abs/2611.26619v1) | Jinbin Luo, Xiaozhe Yao, Shang Yang et al. | A serving system for hybrid-architecture models on CPU–GPU superchips that manages heterogeneous caches (global attention and bounded state). It is relevant as hybrid architectures become mainstream in open-weight models. |
| [GLiDE: A Fast, Calibrated Decision Model Distilled from Reasoning Teachers](http://arxiv.org/abs/2611.26509v1) | Sahibzada Allahyar, Julia White, Dhruv Atreja et al. | Distills reasoning teachers into a single-forward-pass, calibrated decision model. It keeps much of the reasoning benefit without the generation cost. |
| [A CPU Inside an LLM: Zero-Gradient Compilation of Exact Circuits into Pretrained Weights](http://arxiv.org/abs/2611.26450v1) | Tanmay Sah | Compiles deterministic arithmetic circuits directly into pretrained LM weights without gradient training. It is an unconventional route to exact computation inside models. |
| [A new algorithmic approach for finding flat minima: critically damped Polyak stepsizes](http://arxiv.org/abs/2611.26475v1) | Francesco Caporali, Jason M. Altschuler, Boris Hanin et al. | Introduces an adaptive stepsize rule that biases gradient descent toward flatter minima, with uniform-in-time guarantees on sharpness and loss for locally quadratic objectives. It offers theory-backed optimization relevant to generalization. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research](http://arxiv.org/abs/2611.26601v1) | Amine Lbath, Manan Suri, Aurelien Delaitre et al. | Systematizes scattered claims from papers and vendor reports on LLM agents finding, validating and patching vulnerabilities. It helps separate real capability gains from hype. |
| [Text-Aware, Vision-Blind: How Multimodal Image Editing Systems Handle Unsafe Inputs](http://arxiv.org/abs/2611.26569v1) | Ziqing Yang, Yixin Wu, Michael Backes et al. | Shows that safety mechanisms in instruction-guided image editing rely on a single modality and miss joint text–image risk. It exposes a gap in multimodal safety. |
| [Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth](http://arxiv.org/abs/2611.26603v1) | Peiyun Hu, Marko Mihajlovic, Lyndon Duong et al. | Targets the trade-off between temporal consistency and boundary sharpness in metric depth for images and video. It is useful for downstream 3D and robotics applications. |

## 3. Research Trend Signal

Agent safety is shifting from attack demonstrations toward forensics and reproducibility: ROGUE-AI replicates real incidents, and the backtracking paper formalizes compromise-entry-point analysis, so incident response is becoming its own subfield. Mechanistic interpretability is being applied to post-training itself, with work on RL as steering (diffusion), readout versus representation, and deception probes at 70B scale. Distillation into cheap, calibrated or small models (GLiDE, Seer) shows continued pressure to run decisions and agents locally. Serving research is adapting to hybrid attention/state architectures. Robotics and embodied papers are increasingly diagnostic, favoring fine-grained benchmarks over aggregate success rates, as in AgentRoboCritic and Mind2Act World. Finally, LLM capability audits (vulnerability research SoK, multimodal safety) emphasize validating claims against evidence.

## 4. Worth Deep Reading

1. **[Replication of Agentic Security Events (ROGUE-AI)](http://arxiv.org/abs/2611.26553v1)**: It tests whether widely reported agent failures actually reproduce, which is rare and valuable rigor for a field driven by news anecdotes.
2. **[Represented but misread](http://arxiv.org/abs/2611.26584v1)**: Its representation-versus-readout distinction, grounded in signal detection theory, could change how post-training effects are interpreted and evaluated.
3. **[RL Post-Training in Diffusion Transformers Is Activation Steering](http://arxiv.org/abs/2611.26627v1)**: A mechanistic explanation for RL gains could inform cheaper, more targeted alternatives to full RL post-training.

Note: summaries are based on the abstracts as provided, which were truncated for several papers, so some details may be incomplete.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
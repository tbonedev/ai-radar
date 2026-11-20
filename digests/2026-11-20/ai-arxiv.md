# ArXiv AI Research Digest 2026-11-20

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-20 15:53 UTC

---

# ArXiv AI Research Digest — 2026-11-20

## Today's Highlights

Agent reliability and security dominate today's submissions. Several papers cover incident replication, backtracking compromise entry points, and cross-checking agent behavior. Post-training and interpretability work probes what RL and fine-tuning change inside models: activation steering in diffusion transformers, and how models read out what they represent. Efficiency work targets hybrid-architecture serving, agent memory folding, and small-model deep-research agents. Embodied AI keeps scaling, with a direct-control robotics benchmark and a humanoid whole-body data effort.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [RL Post-Training in Diffusion Transformers Is Activation Steering](http://arxiv.org/abs/2611.26627v1) | Tuna Han Salih Meral, Kaan Oktay, Alec Helbling et al. | Argues that RL post-training gains in diffusion transformers can be understood as activation steering rather than prompt-specific capability changes. This gives a mechanistic account of what RL changes and could lead to cheaper alternatives to full RL. |
| [Represented but misread: Post-training changes how language models read out what they represent](http://arxiv.org/abs/2611.26584v1) | Jochen Laubrock | Compares linear probes with model answers, using signal detection theory, across six base models and their post-trained versions. It suggests post-training changes the readout of representations rather than the representations themselves. |
| [The Geometry of Lies: Knowledge and Persona Directions for Detecting Deception in Large Language Models](http://arxiv.org/abs/2611.26545v1) | Md. Abdullah Al Zami, Suraiya Shanaz, Mahdi Hasan et al. | Tests label-free persona directions as lie detectors at 70B scale, including lies about knowledge. It addresses the poor cross-lie transfer of linear probes. |
| [AutoMaster: Autonomous Post-Training by Making the Same Model a Better Teacher](http://arxiv.org/abs/2611.26510v1) | Guoxin Chen, Shuang Sun, Fanzhe Meng et al. | Proposes Skill-FT, which uses natural-language skills to filter teacher trajectories so that only well-grounded behaviors are reinforced. This targets the problem that successful trajectories can still contain unsupported assumptions or superficial verification. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Replication of Agentic Security Events: Audit and Investigation (ROGUE-AI)](http://arxiv.org/abs/2611.26553v1) | Mengxiao Wang, Mahbub Alam, Kalyan Nakka et al. | Tries to replicate publicly reported agent failures, such as a coding agent deleting a production database, to check whether the reports are valid. This turns anecdotal incident reports into reproducible evidence. |
| [Backtracking Agent Applications Security Incidents](http://arxiv.org/abs/2611.26525v1) | Yicheng Cai, Taegyu Kim, Peng Liu | Looks at how to identify the compromise entry point from agent trajectories after an incident. It supports forensics and remediation for deployed agents. |
| [Seer: Guiding Small Deep-Research Agents with Shared Decision Models](http://arxiv.org/abs/2611.26423v1) | Yuhao Zhou, Yang Zhou, Yuanxi Li et al. | Uses shared decision models to guide small on-device deep-research agents in choosing what to search, read and verify. It targets privacy-preserving local agents under tight memory and compute limits. |
| [MemFolder: Structure-Guided Memory Folding for Efficient Agent Memory Management](http://arxiv.org/abs/2611.26427v1) | Xuyang Liu, Chenwen Lu, Junxi Wang et al. | Folds agent memory in a structure-guided way to cut both retrieval overhead and prefill length. It tackles the cost of growing long-term memory stores. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming](http://arxiv.org/abs/2611.26619v1) | Jinbin Luo, Xiaozhe Yao, Shang Yang et al. | A serving system for CPU–GPU superchips that manages the heterogeneous caches of hybrid attention/bounded-state models. It matters because hybrid architectures are now mainstream in open-weight models. |
| [GLiDE: A Fast, Calibrated Decision Model Distilled from Reasoning Teachers](http://arxiv.org/abs/2611.26509v1) | Sahibzada Allahyar, Julia White, Dhruv Atreja et al. | Distills reasoning teachers into a model that scores candidates in a single forward pass with calibrated confidence. It keeps much of the quality benefit of reasoning without the generation cost. |
| [A CPU Inside an LLM: Zero-Gradient Compilation of Exact Circuits into Pretrained Weights](http://arxiv.org/abs/2611.26450v1) | Tanmay Sah | Introduces closed-form, zero-gradient circuit grafting that compiles exact arithmetic into pretrained LM weights. It offers a novel route to reliable computation without fine-tuning or tool calls. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AgentRoboCritic: Understanding the Capability of Frontier Agents on Direct Robot Control](http://arxiv.org/abs/2611.26613v1) | Yiyang Du, Yuxuan Kuang, Qitao Zhao et al. | Goes beyond episode-level success rates to analyze how frontier multimodal agents succeed or fail at direct low-level robot control. It gives finer diagnostics for LLM-driven robotics. |
| [SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research](http://arxiv.org/abs/2611.26601v1) | Amine Lbath, Manan Suri, Aurelien Delaitre et al. | Systematizes scattered claims from papers and vendor reports on LLM agents finding, validating and patching vulnerabilities. It separates real capability progress from hype. |
| [Text-Aware, Vision-Blind: How Multimodal Image Editing Systems Handle Unsafe Inputs](http://arxiv.org/abs/2611.26569v1) | Ziqing Yang, Yixin Wu, Michael Backes et al. | Shows that safety mechanisms in image-editing systems tend to rely on a single modality. This exposes gaps when unsafe content comes from the image or from the image–instruction combination. |

## Research Trend Signal

Three directions stand out. First, agent security is becoming an empirical discipline: ROGUE-AI replicates real incidents, and the backtracking work targets forensics, which suggests the field is moving from attack demonstrations to audit and incident response. Second, post-training is being studied mechanistically. The activation-steering and readout papers both ask what RL and fine-tuning change, and their answers point to cheaper, more targeted interventions. Third, efficiency is being pushed to deployment constraints: hybrid-cache serving, memory folding for agents, single-pass decision distillation, and small on-device research agents. Embodied AI continues in parallel, with benchmarks (AgentRoboCritic, Mind2Act World) and large-scale humanoid data (Awaken-HI) probing direct control and long-horizon manipulation.

## Worth Deep Reading

1. **[RL Post-Training in Diffusion Transformers Is Activation Steering](http://arxiv.org/abs/2611.26627v1)**: If the claim holds, it reframes RL post-training as a steering mechanism. That has practical consequences for how post-training is done and evaluated, and the idea may carry over to LLMs.
2. **[Replication of Agentic Security Events: Audit and Investigation (ROGUE-AI)](http://arxiv.org/abs/2611.26553v1)**: It checks incident reports empirically instead of taking them at face value. Its methodology is useful for anyone building or governing agents.
3. **[Represented but misread: Post-training changes how language models read out what they represent](http://arxiv.org/abs/2611.26584v1)**: It separates what a model represents from what it outputs. That distinction matters for interpreting probes and understanding what alignment training changes.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
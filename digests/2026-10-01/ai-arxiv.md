# ArXiv AI Research Digest 2026-10-01

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-01 14:07 UTC

---

# ArXiv AI Research Digest — 2026-10-01

## Today's Highlights

Agent **harnesses**, the scaffolding around a fixed model, dominate today's batch. Several papers optimize, evolve, or question how much harness a strong agent needs. Looped computation is a second thread, with scaling laws for looped MoE and a looped diffusion transformer. Data-quality concerns are also prominent: about 31% of web tokens are now AI-generated, and one paper measures what that does to pretraining. On the training side, on-policy distillation and RL variants are being adapted for multi-turn and computer-use agents.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [How Much Is an AI Token Worth? Scaling Laws for Wild AI-Generated Web Text](http://arxiv.org/abs/2609.40295v1) | Jenna Russell, Ben Glickenhaus, Katherine Thai et al. | Finds that 27.5% of FineWeb-filtered tokens from June 2026 web data are AI-generated, rising to 31.1% by August, and derives scaling laws for this real-world mix. It matters because it measures the effect on pretraining of naturally occurring AI text, which differs from synthetic-data or model-collapse setups. |
| [Scaling Laws for Looped Mixture of Experts](http://arxiv.org/abs/2609.40316v1) | Yanbei Chen, Anirudh Goyal, Raghuraman Krishnamoorthi | Models recurrence (depth at fixed parameters) and MoE sparsity (capacity at fixed active compute) jointly, where earlier work treated them separately. It gives practitioners a basis for allocating compute across the two efficiency levers. |
| [Linguistic Loopholes in LLM Unlearning: From a 174-Language Benchmark to Coverage-Aware Unlearning](http://arxiv.org/abs/2609.40286v1) | Tyler Skow, Shravan Chaudhari, Rama Chellappa et al. | Shows that unlearning a fact in one language can leave it recoverable through other languages, and proposes coverage-aware unlearning rather than unlearning everywhere. This exposes a real gap in privacy and safety guarantees for multilingual models. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?](http://arxiv.org/abs/2609.40303v1) | Kirill Brilliantov, Alejandro Hernández-Cano, Emmanuel Abbé | Tests whether the elaborate scaffolding around modern MLE agents is necessary for strong models. The result bears on whether engineering effort belongs in harness complexity or in the model. |
| [Turbo Harness: Instance-Adaptive Harness Optimization](http://arxiv.org/abs/2609.40330v1) | Tunyu Zhang, Hao Wang, Kai Xu et al. | Replaces the single global harness with per-instance harness optimization, since a harness that is good on average may be poor for a given task. It is a step toward recursively self-improving agents. |
| [Learning from Research: Toward Lifelong Agent Harness Evolution](http://arxiv.org/abs/2609.40169v1) | Jingbo Yang, Kwei-Herng Lai, Xiaowen Wang et al. | Evolves the harness (tool use, memory, task execution) while keeping the model fixed, aiming at continual improvement. It frames harness evolution as a lifelong learning problem. |
| [PivotOPD: Learning to Recover from Pivotal Mistakes in Multi-Turn Agents](http://arxiv.org/abs/2609.40285v1) | Yinghui He, Yapei Chang, Khushi Bhardwaj et al. | Extends on-policy distillation to multi-turn agents by targeting the pivotal mistakes that make errors compound across turns. It addresses a core weakness of dense teacher supervision in long interactions. |
| [Cogentic: Multi-Agent Orchestration for Automated Proof Discovery](http://arxiv.org/abs/2609.40324v1) | Yang Cai, Vineet Gupta, Yanchen Jiang et al. | A multi-agent harness that explores competing conjectures on open research problems, where single-shot generation falls short. It points to orchestration as a route to usable mathematical discovery. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [cua-speedrun: Standardized Benchmarking of the Speed of Computer-Use Agents](http://arxiv.org/abs/2609.40284v1) | Pranjal Aggarwal, Lawrence Keunho Jang, Sean Welleck et al. | Benchmarks the speed of computer-use agents, which have matched human accuracy on many tasks but remain slow. Latency is a main barrier to deployment, and accuracy-only leaderboards miss it. |
| [ComputerSD: Online Self-Distillation from Real-Time Feedback for Computer-Use Agents](http://arxiv.org/abs/2609.40253v1) | Yong Du, Tongbo Chen, Zhengxi Lu et al. | Uses on-policy self-distillation to give token-level supervision to computer-use agents instead of sparse outcome rewards. It improves credit assignment in online agent training. |
| [Distribution Matching Distillation for Continuous Diffusion Language Models](http://arxiv.org/abs/2609.40235v1) | Paul Le Van Kiem, Dario Shariatian, Umut Simsekli et al. | Applies distributional distillation to continuous diffusion LMs to cut the hundreds of network evaluations they need for quality output. It makes parallel-token generation more practical. |
| [Cheap to Draw, Expensive to Trust: Certifying Test-Time Scaling Curves](http://arxiv.org/abs/2609.40190v1) | Sohail, Sarkar, Shakuntala Baichoo | Addresses the statistical reliability of best-of-k accuracy curves used to budget test-time compute. Certified curves guard against over- or under-provisioning from noisy estimates. |
| [PhantomEnvironments: Training LLM Agents in Fictional Worlds](http://arxiv.org/abs/2609.40221v1) | Anmol Kabra, Swathi Saravana Selvam, Albert Gong et al. | Builds fictional environments for agent RL, aiming to avoid both costly human-curated data and hallucinated or benchmark-contaminated LLM-generated environments. It offers a cheap way to produce verifiable-reward training worlds. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Removing Timing Shortcuts Improves Non-Invasive Brain-to-Text](http://arxiv.org/abs/2609.40359v1) | Dulhan Jayalath, Oiwi Parker Jones | Shows that much of the reported gain in decoding words from non-invasive brain recordings can be reproduced without any brain data, because of timing shortcuts. It is a cautionary reproducibility result for the field. |
| [Ranking-Aware Prompt Optimization for Multimodal Clinical Diagnosis](http://arxiv.org/abs/2609.40361v1) | Tian Xia, Minghao Liu, Yiqing Liang et al. | Replaces accuracy objectives with ranking-aware ones for prompt optimization on class-imbalanced clinical data, where a majority-class predictor can exceed 90% accuracy. It is a better-aligned objective for clinical MLLMs. |

## Research Trend Signal

**Harness engineering is becoming a subfield.** Four papers (Turbo Harness, Lifelong Harness Evolution, the MLE harness study, DynaHarness for robots) treat the harness as an optimizable object separate from model weights. The MLE paper asks the counter-question of how little scaffolding is needed. **Distillation and self-distillation for agents** is also gaining ground: PivotOPD and ComputerSD both use on-policy teacher signals to replace sparse rewards. **Looped or recurrent compute** shows up in looped MoE scaling laws and the Looped Diffusion Transformer, pointing to depth-by-recurrence as a scaling axis. **Data provenance and evaluation rigor** is a further theme: wild AI-text scaling, brain-to-text shortcuts, and certified test-time scaling curves all question whether reported gains are real. Computer-use work is shifting from accuracy toward speed.

## Worth Deep Reading

1. **[How Much Is an AI Token Worth?](http://arxiv.org/abs/2609.40295v1)**: It uses actual web data from recent months rather than simulated collapse. The 27.5% to 31.1% rise in a few months is a concrete figure for data-curation decisions.
2. **[How Much of a Harness Does a Strong Agent Need…](http://arxiv.org/abs/2609.40303v1)**: It tests the assumption behind the harness-optimization papers and may shift how agent systems are built.
3. **[Removing Timing Shortcuts Improves Non-Invasive Brain-to-Text](http://arxiv.org/abs/2609.40359v1)**: It is a short audit of an influential result and a useful model of shortcut detection for any benchmark-driven area.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# ArXiv AI Research Digest 2026-11-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-17 16:38 UTC

---

# ArXiv AI Research Digest — 2026-11-18

## Today's Highlights

Today's submissions center on the trustworthiness of agents and verifiers: MCP tool-provider misbinding, text-similarity guardrails that miss injected instructions, and reward hacking under optimistic verifiers. Interpretability work on VLMs explains how they plan and compare across images. Other papers rethink core LLM machinery, with latent "lattice" computation states, utility-based memory retrieval, and bagging for CoT learning. Reproducibility and measurement-validity papers also stand out: bitwise-identical MXFP4 training, temporal contamination in LMs, and embedding cosine tracking text length.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Latent Lattice Language Models](http://arxiv.org/abs/2611.21608v1) | Shivam Duggal, Zongze Wu, William T. Freeman et al. | Scales the number of active computational states a model maintains, rather than depth or looping. This offers a new compute-scaling axis beyond deeper layers and latent reasoning steps. |
| [Optimal Autoregressive Chain-of-Thought Learning via Bagging](http://arxiv.org/abs/2611.21597v1) | Awni Altabaa, John Lafferty, Omar Montasser | Gives a bagging algorithm that majority-votes over generators to learn a next-token generator from CoT demonstrations. It provides theoretical grounding for CoT learning with sample-complexity guarantees. |
| [Reading or Remembering? Measuring Temporal Contamination in Language Models](http://arxiv.org/abs/2611.21554v1) | Arunkumar V, Gangadharan G. R., S. Senthilkumar | Measures how much an LM's apparent skill at reading central-bank text comes from memorized later outcomes. This matters for any economic-forecasting use of LLMs, where leakage inflates results. |
| [Optimistic Verifiers Get Hacked: Reward Hacking Under an Exact Process Oracle](http://arxiv.org/abs/2611.21538v1) | Arunkumar V, Manoranjan Gandhudi, Gangadharan G. R. et al. | Studies RLVR reward hacking against an exact oracle, so the gap between proxy and true objective can be measured. It shows rising reward can come from exploiting an optimistic verifier rather than real improvement. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [When Tool Names Are Not Identities: Measuring Provider Misbinding in MCP-Based AI Agents](http://arxiv.org/abs/2611.21577v1) | Zeynab Anbiaee, Sajjad Dadkhah, Ali A. Ghorbani | Shows that MCP tool metadata used for discovery and selection can bind to the wrong provider when clients compose tools from multiple servers. This is a concrete supply-chain and identity weakness in the MCP ecosystem. |
| [Safe Resemblance, Silent Propagation: Limits of Text-Similarity Guardrails for AI Agent Safety](http://arxiv.org/abs/2611.21520v1) | Charles Xiao | Shows an injected instruction can keep its effect on downstream agents after rewording, while benign quotation triggers false alarms. Text-overlap filters are therefore unreliable for multi-agent safety. |
| [Jetriever: Shifting Agent Memory Retrieval from Similarity to Utility](http://arxiv.org/abs/2611.21478v1) | Ruizhe Li, Licheng Zhang, Mingxuan Du et al. | Ranks memories by a decision score for usefulness to the current question instead of similarity. It targets indirect queries, where the helpful memory does not resemble the question. |
| [SciResearch-Eval: Evaluating Scientific Judgment in Autonomous Experimental Agents](http://arxiv.org/abs/2611.21541v1) | Brian T. Weston, Alondra Torres Contreras, Aldair E. Gongora | Introduces an interactive benchmark where agents design experiments against a possibly under-resolved heat-conduction simulator. It tests scientific judgment, not just task completion. |
| [ViRA: Toward Ultra-High-Resolution Visual Agents via Cross-Input Relative Policy Optimization](http://arxiv.org/abs/2611.21605v1) | Huawei Lin, Jinting Liu, Tongyan Wang et al. | Proposes an RL scheme to stop zoom-in visual agents from guessing from common sense, since final-answer rewards cannot separate guesses from evidence-based answers. It pushes agents to ground answers in inspected regions. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CertiSum: Bitwise-Identical MXFP4 Training Across Platforms and Parallelism Layouts](http://arxiv.org/abs/2611.21584v1) | Steve Rhyner, Yubo Gao, Stefan de Lasa et al. | Makes 4-bit MXFP4 training deterministic across GPU vendors and parallelism layouts. This eases debugging and auditing, and removes train/inference mismatches. |
| [Balanced Twin Weight Factorization for Efficient MLLMs](http://arxiv.org/abs/2611.21459v1) | Bryan A. Plummer, Shan Lu, Keval Doshi et al. | Factorizes pretrained weights so that fewer FLOPs translate into real latency and memory gains for MLLMs. It addresses the usual gap between theoretical and measured speedups. |
| [Embedding Cosine Measures Text Length Before It Measures Homogenization](http://arxiv.org/abs/2611.21519v1) | Fengming Liu | Shows that mean pairwise cosine similarity on mean-pooled encoder embeddings mostly tracks text length, in a corpus of 6.06 million texts. It undermines a common metric for claims that generative AI homogenizes discourse. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [How VLMs Plan What's Next](http://arxiv.org/abs/2611.21600v1) | Rohit Gandikota, Arnab Sen Sharma, Adam Belfki et al. | Identifies a multi-part mechanism, starting with binding heads, by which a VLM decides which object to name next. It is a mechanistic account of planning in image description. |
| [Seen but Unsaid: Locating and Repairing Cross-Image Comparison in Vision-Language Models](http://arxiv.org/abs/2611.21539v1) | Zhaoning Zhang | Traces cross-image matching failures in Qwen3-VL, InternVL3.5 and Gemma-3, where the answer is decodable from hidden states but not stated. It locates the breakdown and proposes a repair. |
| [Out of Sight, Into Memory: Compact Visual Latents Retain Local Evidence in Ultra-High-Resolution Remote Sensing](http://arxiv.org/abs/2611.21457v1) | Meng Tang, Siyuan Du, Yuxin Liu et al. | Compresses inspected crops into short continuous latent sequences so MLLMs keep local detail without exhausting context. This helps ultra-high-resolution remote-sensing QA. |

## Research Trend Signal

Verification and measurement validity are the dominant theme. Several papers question whether a proxy tracks the real quantity: verifiers versus true objectives, embedding cosine versus homogenization, and memorized outcomes versus reading skill. Agent security is moving from prompt-level to protocol- and system-level concerns, such as MCP identity binding and multi-agent propagation of injected instructions, with similarity-based defenses shown to be inadequate. In VLM research, mechanistic interpretability is being used to locate specific failure points, such as cross-image comparison and next-object planning. In efficiency, determinism and real-latency gains matter more than nominal FLOP counts. Architecture work is exploring new scaling axes, namely parallel latent computational states and utility-driven memory.

## Worth Deep Reading

1. **[When Tool Names Are Not Identities](http://arxiv.org/abs/2611.21577v1)**: MCP is becoming a standard integration layer, so measured misbinding rates and attack surfaces are directly relevant to anyone building or deploying agents.
2. **[Optimistic Verifiers Get Hacked](http://arxiv.org/abs/2611.21538v1)**: An exact process oracle allows rigorous measurement of reward hacking, which is rarely possible with RLVR beyond math and code. The findings inform verifier and rubric design.
3. **[Latent Lattice Language Models](http://arxiv.org/abs/2611.21608v1)**: It proposes a distinct compute-scaling axis. If it holds up at scale, it could change how we trade off depth, looping and width of computation.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
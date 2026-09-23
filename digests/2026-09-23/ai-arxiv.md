# ArXiv AI Research Digest 2026-09-23

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-23 12:31 UTC

---

# ArXiv AI Research Digest — September 23, 2026

## Today's Highlights

Inference efficiency and reliability dominate today's crop: papers on IO-aware KV caching for diffusion LLMs, precision-dependent greedy decoding divergence, and quantization-aware distillation for reasoning all probe the gap between benchmark performance and real deployment behavior. A parallel cluster addresses agent infrastructure at scale — from a 1,024-agent orchestration system (Agensh) to benchmarks for agentic inference-serving engineering (SWE-Serve) and cost-efficient context compaction for long-horizon coding agents. Security researchers flagged a new MCP-ecosystem supply-chain risk (A2M) alongside a broader access-control framework for GenAI policy enforcement, underscoring that agent tooling is outpacing its safety guarantees. Finally, several papers push back on comfortable assumptions: compile rate as a vulnerability-repair metric, "distance" as the dominant failure mode in long-context retrieval, and sycophancy as a single undifferentiated behavior.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Flash-dLLM: IO-Aware KV Caching and Parallel Decoding for Fast, Memory-Efficient Diffusion LLMs](http://arxiv.org/abs/2609.26796v1) | Quan Nguyen-Tri, Mukul Ranjan, Zhiqiang Shen | Introduces IO-aware KV caching for diffusion LLMs, addressing the missing-cache bottleneck that has kept dLLMs slower than autoregressive models despite their non-autoregressive generation advantage. This closes a key practical gap for deploying diffusion-based text generation at scale. |
| [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](http://arxiv.org/abs/2609.26704v1) | Ismail Labiad, Matthieu Kowalski, Marc Schoenauer et al. | Argues that naive repeated sampling for test-time compute only explores via local decoding noise and proposes learned search policies instead. This reframes test-time scaling from "sample more" to "search smarter," with implications for inference cost efficiency. |
| [Greedy Decoding Is Not Precision-Invariant: Cross-Precision Output Divergence in LLM Inference](http://arxiv.org/abs/2609.26621v1) | Gaoyuan Du, Anam Nawaz Khan, Rex Zhou et al. | Demonstrates that greedy decoding, widely assumed deterministic, produces different outputs under BF16 vs. FP16 on identical hardware across six models. This has direct consequences for reproducibility claims and evaluation pipelines that assume determinism. |
| [The Sirens' Song: When Proximal Background Context Overshadows Distant Evidence](http://arxiv.org/abs/2609.26718v1) | Xiaoyu Yang, Jie Lu, Wei Duan et al. | Identifies the "Proximity Trap" — long-context LLMs under-attend to distant evidence not primarily due to distance but due to cumulative competing context near the query. This reframes long-context retrieval failures as an attention-allocation problem rather than a pure length problem. |
| [Receptiveness, Not Sycophancy: Distinguishing Engagement from Deference in Language Models](http://arxiv.org/abs/2609.26579v1) | Calvin Isley, Johann Gaebler, Max Lamparth et al. | Separates genuine engagement from deferential sycophancy, arguing current sycophancy metrics conflate validation/positivity behaviors that are not inherently problematic. This offers a more precise lens for alignment evaluation than blunt sycophancy scores. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Agensh: Scaling Organizational Intelligence to 1,024 Agents](http://arxiv.org/abs/2609.26781v1) | Zhihao Zhan, Ting Song, Li Dong et al. | Tackles the scalability ceiling of multi-agent harnesses caused by centralized orchestrator bottlenecks, scaling coordination to 1,024 concurrent agents. This pushes multi-agent systems toward genuinely large-scale concurrent execution rather than small fixed teams. |
| [CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents](http://arxiv.org/abs/2609.26779v1) | Trang Nguyen, Eulrang Cho, Bingqing Chen et al. | Proposes an autocompaction technique cutting context-management cost up to 50% for agents that must span millions of tokens across sessions. This directly addresses a practical cost bottleneck in production long-horizon coding agents. |
| [Grow the Harness, Not the Context: From Strategy-Free Scaffolds to Reusable Specialist Agents](http://arxiv.org/abs/2609.26760v1) | Laizhen Li, Jiarui Li, Juanjuan Zhao et al. | Converts recurring control decisions in agent harnesses into reusable executable code instead of re-deriving them in context each time. This shifts effort from prompt-context accumulation to harness-level specialization, a distinct efficiency lever. |
| [A2M: Trace-Optimized Agent Hijacking in the MCP Ecosystem](http://arxiv.org/abs/2609.26761v1) | Laizhen Li, Xuan Wang, Peicheng Zhao et al. | Exposes a semantic supply-chain vulnerability in MCP where attacker-controlled tool metadata can hijack agent tool selection via a black-box two-stage attack. This is an important early warning as MCP tool ecosystems grow without strong provenance guarantees. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SWE-Serve: Benchmarking Agentic Engineering For Production Inference Serving](http://arxiv.org/abs/2609.26777v1) | Jennifer Williams, Dave Farris, Jeff Farris et al. | Introduces a benchmark for agents performing real production inference-serving engineering tasks spanning model support, runtime execution, and public APIs. Existing coding benchmarks under-represent this systems-level, multi-component engineering work. |
| [JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](http://arxiv.org/abs/2609.26550v1) | Yubo Li, Yidi Miao, Ramayya Krishnan et al. | Proposes a decision-only judge that provides a cheap first-pass evaluation and escalates to stronger evaluators only when uncertain, tested against sixteen generative judges. This tackles the cost-reliability tradeoff that limits LLM-as-a-judge at scale. |
| [Capable yet Parsimonious: Extracting and Characterizing Hidden Chain-of-Thought in Frontier Models](http://arxiv.org/abs/2609.26637v1) | Xiaoyu Luo, Tao Ren, Wenrui Yu et al. | Uses a custom-tool API trick to induce closed-source frontier models to externalize normally hidden chain-of-thought traces. This offers a rare empirical window into reasoning behavior that vendors otherwise keep opaque. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [FleXray: Universal Clinical X-ray Segmentation](http://arxiv.org/abs/2609.26756v1) | Victor Ion Butoi, Vivek Gopalakrishnan, John V. Guttag et al. | Targets X-ray, the least quantitative major imaging modality, where 2D projection causes structural overlap and ambiguous boundaries that hinder reliable segmentation. A universal segmentation approach here could meaningfully improve quantitative radiology workflows. |
| [Diffusion Drafts, AR Verifies: Accelerating Document OCR with Self-Speculative Decoding](http://arxiv.org/abs/2609.26638v1) | Dohyun Kim, Sungjun Han, Hyungguk Kim et al. | Exploits the fact that OCR output is strongly image-grounded (unlike open-ended text) to use diffusion drafting with autoregressive verification for speculative decoding. This targets the sequential-decoding bottleneck specific to document OCR pipelines. |
| [Does AI Save Time on Product Design? A Randomized Controlled Experiment of AI Prompt-to-Design Workflows](http://arxiv.org/abs/2609.26725v1) | Remy Stewart, Olabode Anise, Andrew Hogan et al. | Runs a randomized controlled experiment to test whether prompt-to-design AI tools actually deliver the time savings vendors claim. This is a rare rigorous causal evaluation in a space usually assessed only by anecdote. |

## Research Trend Signal

A clear throughline today is **infrastructure realism catching up with agent hype**: benchmarks and frameworks (SWE-Serve, Agensh, CliffCompaction, Grow the Harness) increasingly target the operational mechanics of running agents at scale — orchestration bottlenecks, context cost, and reusable control logic — rather than single-shot task accuracy. Alongside this, a "measurement skepticism" wave is visible: papers scrutinize whether familiar proxies (compile rate for vulnerability repair, sycophancy scores, greedy-decoding determinism, distance-based long-context failure) actually measure what practitioners assume. Security is also maturing beyond prompt injection into supply-chain concerns specific to agent tooling (MCP metadata hijacking, GenAI access control). Together these suggest the field is shifting from capability demonstrations toward rigorous, deployment-grade evaluation of agent systems and their serving stacks.

## Worth Deep Reading

1. **[Greedy Decoding Is Not Precision-Invariant](http://arxiv.org/abs/2609.26621v1)** — Challenges a near-universal assumption about LLM determinism with concrete cross-precision evidence; relevant to anyone building reproducible eval pipelines or debugging "non-deterministic" greedy outputs.
2. **[A2M: Trace-Optimized Agent Hijacking in the MCP Ecosystem](http://arxiv.org/abs/2609.26761v1)** — As MCP adoption grows across the tools this digest tracks (Claude Code, Codex, etc.), understanding this semantic supply-chain attack surface is directly actionable for agent-tooling security.
3. **[The Sirens' Song: When Proximal Background Context Overshadows Distant Evidence](http://arxiv.org/abs/2609.26718v1)** — Reframes long-context failure modes in a way that should inform prompt/context engineering practice, distinct from the usual "just extend context length" framing.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
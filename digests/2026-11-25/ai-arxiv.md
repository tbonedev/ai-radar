# ArXiv AI Research Digest 2026-11-25

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-24 18:35 UTC

---

# ArXiv AI Research Digest — 2026-11-25

## 1. Today's Highlights

Today's submissions focus on making LLM agents more capable and more efficient. Papers cover self-improving embodied agents, automatic tool generation, and RL attribution in search agents. Efficiency work stands out: looped-transformer conversion of pretrained LLMs, parallel speculative decoding, and KV-cache migration across LoRA updates. Reliability and safety also get attention, including conformal abstention for Text-to-SQL, uncertainty self-monitoring failures, and hardware fault-injection attacks on model alignment. Applied work spans labor-market effects of Copilot, VLA pruning for driving, and agent benchmarks for circuit reconstruction.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Unlocking the Power of Loops in Pretrained LLMs with Loop Residuals](http://arxiv.org/abs/2611.31094v1) | Xuanlei Zhao, Hailun Xu, Kai Wang et al. | Converts existing pretrained LLMs into looped transformers via loop residuals, avoiding training from scratch. This adds compute and test-time scaling without adding parameters. |
| [Attention Latent Feedback](http://arxiv.org/abs/2611.31154v1) | Xuyuan Xiong, Siyu Chen, Mengzhao Chen et al. | Lets shallow layers at the current token read the deeper representations already computed for previous tokens. This breaks the same-depth restriction of standard self-attention. |
| [Language Models Steer on Injected Uncertainty Tokens, but Fail to Self-Monitor In Situ](http://arxiv.org/abs/2611.31228v1) | Daniel Theron | Tests whether verbalized stepwise confidence can drive backtracking. Models respond to injected uncertainty tokens but do not reliably track their own errors, which undercuts a popular agentic reasoning recipe. |
| [FATCAT: Fault Injection Attacks Targeting Chip-level Alignment](http://arxiv.org/abs/2611.31129v1) | Peter Horvath, Ilia Shumailov, Zhuoran Liu et al. | Presents the first physical fault-injection attacks aimed at model alignment and refusal behavior. It challenges the assumption of hardware integrity in alignment evaluations. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Self-Upgrading Embodied Agents](http://arxiv.org/abs/2611.31117v1) | Jiajun Fan, Neil He, Qinglong Zheng et al. | Lets embodied LM agents upgrade their own weights through weight-space programming. This avoids the per-step cost of reflection, memory or prompting. |
| [ToolSmith: An Automatic Tool-Generation Framework for Multimodal Search Agents](http://arxiv.org/abs/2611.31198v1) | Rui Sun, Junhua Huang, Luca Zancato et al. | Generates tools automatically for multimodal search agents rather than relying on hand-built, frozen libraries. This helps agents adapt to new query types. |
| [CO-GRAFT: Attributing Reinforcement Learning Gains in Search Agents via Role-Level Policy Grafting](http://arxiv.org/abs/2611.31185v1) | Ramraj Chandradevan, Sayontan Ghosh, Vinoth Selvendran | Introduces a reward-agnostic way to attribute RL gains in search agents to specific functional roles. This shows which capabilities actually improve, beyond headline EM gains of up to 32 points. |
| [When Does Overriding the Majority Vote Help?](http://arxiv.org/abs/2611.31165v1) | Terry Ma, Aidan Zhang | Analyzes when extra reasoning, executed programs or verification should replace a majority-vote answer. It frames the choice around whether correct alternatives exist and how reliable the selectors are. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Look Back, Draft Ahead: Corrective Prefix Attention for Parallel Speculative Decoding](http://arxiv.org/abs/2611.31112v1) | Mohammad Mahdi Moradi, Ali Pourranjbar, Zongzuo Wang et al. | Uses prefix-aware selection and autoregressive supervision to reduce early inconsistencies in parallel drafts. This raises acceptance of whole draft blocks. |
| [LiveLoRA: Exact KV Cache Migration Across LoRA Updates for LLM Agents](http://arxiv.org/abs/2611.31105v1) | Tianyi Huang, Samuel Xu, Ivy Gu et al. | Migrates KV cache exactly across adapter updates, so active sessions don't need a full re-prefill. This matters for serving large fleets of long-running agents. |
| [Know When to Abstain: Conformal Confidence Estimation for Text-to-SQL](http://arxiv.org/abs/2611.31190v1) | Avinash Kumar Singh, Bhaskarjit Sarmah, Stefano Pasquali | Uses conformal methods to estimate when a generated query is likely wrong, without gold labels at deployment. It supports principled abstention. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AI-Assisted Programming and Labor Demand](http://arxiv.org/abs/2611.31083v1) | Lindsey Raymond, Eleanor Wiske Dillon | Studies GitHub Copilot adoption across 5,414 multinational firms to measure effects on labor demand. It supplies firm-level evidence where little exists. |
| [ChiProgramBench: Can LLM Agents Rebuild Efficient Circuits from Pin-Level Experiments?](http://arxiv.org/abs/2611.31082v1) | Tianrun Gou, Qingyao Yang, Wendong Xu et al. | Benchmarks agents on probing a black-box chip, forming hypotheses and building an efficient replacement. It tests experimental reasoning beyond code generation. |
| [Pruning Autonomous Driving VLAs: What to Preserve for Reasoning and Action](http://arxiv.org/abs/2611.31240v1) | Seongchan Kim, Soowon Son, Sangoh Kim et al. | Studies structured pruning of chain-of-thought driving VLAs, aiming to keep both scene understanding and trajectory prediction. This helps make reasoning VLAs deployable on-vehicle. |

## 3. Research Trend Signal

Three directions stand out. First, agent self-improvement is shifting from prompts and memory toward direct weight-space edits and automatically generated tools. Second, agent infrastructure is getting more attention. LiveLoRA targets adapter updates for session fleets, and parallel speculative decoding and looped-model conversion target inference cost. Third, calibration and reliability are being examined more critically. Several papers ask when a model's own confidence signals, majority votes or SQL outputs can be trusted, and offer abstention, conformal or attribution tools. Safety work is also moving past prompt-level attacks to hardware threats. Finally, there is growing interest in measuring real-world impact, such as labor demand and robot-use interfaces, rather than only benchmark scores.

## 4. Worth Deep Reading

1. **[Language Models Steer on Injected Uncertainty Tokens, but Fail to Self-Monitor In Situ](http://arxiv.org/abs/2611.31228v1)**: It tests an assumption behind many agent designs, that verbalized confidence can trigger backtracking. A negative result here affects how reasoning loops are built.
2. **[Self-Upgrading Embodied Agents](http://arxiv.org/abs/2611.31117v1)**: Weight-level self-modification is a different route to agent adaptation. It is worth checking how it avoids per-step overhead and forgetting when the task changes.
3. **[Unlocking the Power of Loops in Pretrained LLMs with Loop Residuals](http://arxiv.org/abs/2611.31094v1)**: Retrofitting looping onto existing models would make test-time compute scaling much cheaper to adopt.

I picked these from the titles and abstract excerpts provided, which are truncated. I haven't read the full papers.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
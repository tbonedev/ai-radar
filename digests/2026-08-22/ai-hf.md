# Hugging Face Trending Models Digest 2026-08-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-22 07:27 UTC

---

# Hugging Face Trending Models Digest — 2026-08-22

## 1. Today's Highlights

Qwen's new flagship **Qwen3.8-27B** dominates the charts, generating not just the top spot by likes but an entire downstream ecosystem of official quantizations (FP8, NVFP4) and — notably — a wave of over a dozen third-party "abliterated"/uncensored GGUF and MLX derivatives from independent fine-tuners. **MiniMaxAI** shipped two new generative models this week (MiniMax-Music3 for text-to-music, MiniMax-H3 for image/text-to-video), while **Lightricks LTX-2.5** advances open video generation further. **DeepSeek** continues its rapid tiered-release cadence with V4-Pro and V4-Flash variants, and **Moonshot AI's Kimi-K3** cracked the top three by likes with 2.4M+ downloads. The sheer volume of guardrail-removal fine-tunes of a single base model in one week underscores how quickly the community re-engineers flagship open releases to fit unrestricted local-inference use cases.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,007 | 1,726,651 | Qwen's newest 27B vision-language flagship on the qwen3_5 architecture, topping this week's trending charts by a wide margin. It anchors a huge downstream ecosystem of quantizations and fine-tunes appearing throughout this list. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,919 | 2,448,810 | Moonshot AI's large multimodal model using compressed-tensors for efficient serving, the second most-liked release this week. Its nearly 2.5M downloads signal Kimi's growing traction alongside Qwen and DeepSeek. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,615 | 2,833,064 | A faster, lighter variant in DeepSeek's V4 line aimed at lower-latency conversational use. It posted the highest download count of any DeepSeek release this week. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 710 | 49,601 | The higher-capability "Pro" counterpart to V4-Flash, dated August 13. It reinforces DeepSeek's pattern of shipping tiered model variants in quick succession. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,744 | 505,113 | A 30B conversational vision-language model on a custom muse_glimmer architecture. Over 500K downloads point to solid adoption outside the Qwen/DeepSeek ecosystem. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,141 | 15,702 | A frontier-scale Mixture-of-Experts variant with 2.4T total / 95B active parameters. It's among the largest openly published MoE checkpoints tracked this week, despite modest downloads so far. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 299 | 9,165 | A 35B MoE model (3B active) built on the qwen3_5_moe architecture. Engagement is still early-stage, but it already has a companion GGUF quantization trending. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,307 | 3,614,443 | An image-and-text-to-video diffusion model with the highest download count among generative models this week. Its versatility across text/image-to-video already spawned at least one community fine-tune. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,511 | 654,175 | The latest LTX video model, supporting image-to-video, text-to-video and video-to-video in a single-file diffusion format. Over 654K downloads continue Lightricks' push into production-ready video generation. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,168 | 15,678 | A third-generation text-to-music diffusion model from MiniMax. Downloads are modest so far, but its 1,168 likes show early enthusiasm for open music generation. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,380 | 0 | A community fix for Qwen's Jinja chat templates, distributed as an MLX-compatible artifact rather than a checkpoint. Its high likes despite zero downloads reflect how essential correct template handling is across the Qwen ecosystem. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 191 | 1,136 | A compact ASR-focused model built on the Qwen3 architecture. Its small footprint and "mini" branding target on-device or low-latency transcription. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 182 | 21,092 | A speculative-decoding draft model built for Qwen3.8-27B to accelerate inference throughput. It's an infrastructure-oriented release for developers optimizing serving latency rather than a standalone chat model. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,538 | 5,804,917 | Unsloth's official GGUF quantization of Qwen3.8-27B for llama.cpp inference. With 5.8M downloads it's the single most-downloaded artifact on this entire trending list. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 884 | 107,520 | An FP8-quantized, guardrail-removed variant of Qwen3.8-27B. It leads orcarouter's family of uncensored Qwen3.8-27B derivatives by likes. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 840 | 18,193 | The MLX-format counterpart of orcarouter's uncensored Qwen3.8-27B, targeting Apple Silicon. It shows the same fine-tune ported across multiple runtime formats. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 580 | 1,126,222 | An independent guardrail-removed GGUF build of Qwen3.8-27B with multi-token-prediction (mtp) support. Its 1.1M downloads show strong demand for non-official uncensored variants. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 466 | 123,956 | An abliterated Qwen3.8-27B distributed simultaneously in MLX, safetensors and GGUF formats. This multi-format packaging is a common pattern among uncensored fine-tuners covering all major backends at once. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 440 | 357,225 | A vision-capable, "aggressively" abliterated GGUF fine-tune of Qwen3.8-27B with multi-token prediction. It retains the base model's multimodal tagging while removing safety guardrails. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 661 | 1,939,895 | Qwen's own official FP8 quantization of the 27B flagship for lower-precision deployment. With nearly 2M downloads it's the most-downloaded official quantization of the model. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 307 | 68,275 | orcarouter's GGUF release completing its FP8/MLX/GGUF trio of uncensored Qwen3.8-27B builds. It gives llama.cpp users direct access to the same fine-tuned weights. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 240 | 74,038 | A quantized GGUF build of Qwen3.8-27B branded "Ridge" for llama.cpp deployment. It's one of several third-party quantization efforts competing for the same base-model audience. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 237 | 338,221 | huihui-ai's prolific abliteration series extends to Qwen3.8-27B with this GGUF build. Its 338K downloads reflect the author's established reputation for uncensored releases. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 213 | 123,237 | The GGUF quantization of ornith-ai's Ornith-1.5 MoE model, released alongside the base checkpoint. It carries an MIT license and endpoints-compatible tagging for easier hosted deployment. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 216 | 421,918 | A "Heretic"-branded abliterated GGUF fine-tune of Qwen3.8-27B. Its 421,918 downloads make it one of the more widely adopted uncensored variants despite a smaller like count. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 235 | 17,521 | The full-precision safetensors version of huihui-ai's abliterated Qwen3.8-27B. It complements the same author's GGUF variant for users needing non-quantized inference. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 313 | 0 | A stylized fine-tune of MiniMaxAI's MiniMax-H3 video model for text-to-video and image-to-video workflows. Its zero download count alongside 313 likes suggests a recent upload with early attention but limited adoption yet. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 329 | 1,013,917 | Unsloth's NVFP4-quantized build of Qwen3.8-27B targeting NVIDIA's newer FP4 tensor-core support. Crossing 1M downloads underscores unsloth's central role in the model's quantization ecosystem. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 174 | 155,208 | An elaborately-named experimental GGUF merge of Qwen3.8-27B using DavidAU's "Cold-Fusion" and "GAIN" training techniques. It represents the long tail of highly customized community merges built on the same base model. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 201 | 197,667 | Another abliterated GGUF release of Qwen3.8-27B, tagged simply as a 27B dense model. Its nearly 200K downloads add to the dozen-plus uncensored variants of this base model trending simultaneously. |

## 3. Ecosystem Signal

This week's list is dominated overwhelmingly by a single release — Qwen's **Qwen3.8-27B** — which alone accounts for over half of the 30 trending entries once official quantizations and third-party fine-tunes are counted. That concentration shows how fast the open-weight community mobilizes around a flagship checkpoint: within days, users produced FP8, NVFP4, MLX, and multiple GGUF quantizations, plus a striking wave of "abliterated"/uncensored derivatives from at least eight independent authors (orcarouter, huihui-ai, OBLITERATUS, HauhauCS, JonathanColetti, 0bserverx, DavidAU, Blackfrost-AI) — signaling persistent demand for guardrail-free local inference regardless of a base model's original safety tuning. Beyond Qwen, momentum is building for DeepSeek's V4 line (Pro and Flash) and Moonshot's Kimi-K3, both open-weight and competing directly for mindshare. Generative media is a secondary but active front, with MiniMax (Music3, H3) and Lightricks (LTX-2.5) advancing text-to-music and video generation. Notably, every model on this list is open-weight — no proprietary/closed release appears — reinforcing that HF trending activity is now as much a community-quantization and fine-tuning story as a frontier-lab release story.

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the architectural reference driving this entire week's activity; worth studying directly since nearly every other trending Qwen entry derives from it.
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — the most practical entry point for local deployment, with 5.8M downloads, the highest of any artifact on this list.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — worth trying for its versatility across text/image-to-video, with the highest download count (3.6M) among generative models this week.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
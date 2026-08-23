# Hugging Face Trending Models Digest 2026-08-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-23 07:29 UTC

---

# Hugging Face Trending Models Digest — 2026-08-23

## Today's Highlights

The trending charts are dominated by a single release: **Qwen/Qwen3.8-27B**, a new multimodal (image-text-to-text) model from Alibaba's Qwen team that has already pulled in over 12,000 likes and 2M+ downloads, and spawned a sprawling downstream ecosystem of quantizations, distillations, and "abliterated" (safety-filter-removed) variants within days. DeepSeek also shipped two updates to its V4 line — a "Pro" and a "Flash" variant — continuing its rapid-iteration cadence. On the generative media side, MiniMax pushed both a new video model (**MiniMax-H3**) and a music-generation model (**MiniMax-Music3**), while Lightricks released **LTX-2.5** for image/text-to-video. A notable and slightly concerning trend: a large share of community activity around Qwen3.8-27B consists of uncensored/abliterated GGUF and MLX conversions rather than capability-focused fine-tunes, signaling strong demand for unrestricted local inference.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,189 | 2,090,699 | Qwen's newest 27B-parameter multimodal conversational model, built on the `qwen3_5` architecture with native image-text-to-text support. It leads this week's chart by a wide margin and has already triggered dozens of derivative quantizations and fine-tunes across the community. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,635 | 2,976,281 | A faster, lighter checkpoint in the DeepSeek V4 family optimized for lower-latency conversational use. Its 2.9M+ downloads outpace its "Pro" sibling, suggesting strong demand for cost-efficient inference over raw capability. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 330 | 12,611 | A 35B mixture-of-experts model (3B active parameters) built on the `qwen3_5_moe` architecture with multimodal text-generation capability. The A3B sparse-activation design signals a push toward efficient large-scale MoE deployment. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 723 | 54,566 | The higher-capability counterpart to DeepSeek-V4-Flash, targeting conversational and reasoning tasks. Its comparatively modest download count versus Flash suggests early-stage evaluation rather than production adoption. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 166 | 15,301 | A smaller 9B multimodal sibling to Ornith-1.5-35B-A3B, offering the same `qwen3_5` lineage at a more accessible scale. It's positioned as an entry point for developers who can't run the larger MoE variant. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,353 | 3,899,160 | A large image-text-to-video diffusion model supporting text-to-video, image-to-video, and video-to-video generation. With nearly 4M downloads it's already become a base for community finetunes such as TenStrip's 10Eros-Max. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,583 | 694,670 | A single-file diffusion video model covering image-to-video, text-to-video, video-to-video, and image-text-to-video pipelines. Its unified single-checkpoint design makes it easy to drop into existing ComfyUI-style workflows. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,189 | 16,644 | A text-to-music diffusion model built on the `minimax_music3` architecture. It extends MiniMax's generative footprint beyond video into full music-generation, rounding out a broad multimodal product line. |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 160 | 0 | A community latent-space upscaler add-on built specifically for MiniMax-H3 outputs. Zero downloads with meaningful likes suggests it's newly published and generating interest ahead of adoption. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 194 | 29,705 | A speculative-decoding accelerator ("DFlash2") built on Qwen3.8-27B to speed up inference throughput. It reflects fast-moving academic/lab interest in serving-side optimization for the new base model. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 156 | 54,439 | A second independent DFlash2 speculative-decoding implementation for Qwen3.8-27B, with higher download volume than z-lab's version. The parallel emergence of two DFlash2 variants signals a genuine ecosystem race to optimize inference speed for this model. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 202 | 1,913 | A compact ASR (automatic speech recognition) model built on a `qwen3` text-generation backbone. It's an early-stage release but notable as one of the few non-Qwen3.8-derivative models on the chart. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,650 | 6,320,542 | Unsloth's official GGUF quantization of Qwen3.8-27B for llama.cpp-based local inference. It has the highest download count of any model in this digest, underscoring how quickly the community moves flagship releases to consumer hardware. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 668 | 2,306,777 | Qwen's own official FP8-quantized release of Qwen3.8-27B for efficient GPU serving. Being first-party, it's likely to become the reference quantization for production deployments. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 629 | 1,223,422 | An uncensored GGUF conversion of Qwen3.8-27B with MTP (multi-token prediction) support for llama.cpp. Its 1.2M downloads make it the most-downloaded of the many "uncensored" variants circulating this week. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 499 | 486,221 | A vision-capable uncensored GGUF fine-tune of Qwen3.8-27B with an "aggressive" multi-token-prediction configuration for faster local generation. It retains the multimodal (image-text-to-text) capability of the base model. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 229 | 505,813 | A GGUF release using the "Heretic" abliteration technique to strip refusal behavior from Qwen3.8-27B. Its 500K+ downloads despite modest likes suggest it's being consumed quietly rather than starred. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 565 | 164,950 | A multi-format (MLX/GGUF/safetensors) abliterated release of Qwen3.8-27B distributed across three runtimes simultaneously. Covering Apple Silicon, llama.cpp, and standard transformers in one release is unusually broad packaging for a community fine-tune. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 997 | 142,846 | An FP8-quantized abliterated variant of Qwen3.8-27B retaining image-text-to-text support. It's the highest-liked of orcarouter's three parallel uncensored releases (FP8, MLX, GGUF). |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 201 | 176,969 | A heavily-tuned GGUF merge applying DavidAU's "GAIN" and "Cold-Fusion" training techniques atop Qwen3.8-27B via Unsloth tooling. It exemplifies the elaborate community merge/finetune naming conventions that have become common in the GGUF space. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 247 | 97,247 | A "Ridge" fine-tune of Qwen3.8-27B distributed as a quantized GGUF via llama.cpp. Details on the tuning objective aren't public, but its multimodal tag inheritance suggests capability parity with the base model. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 347 | 85,371 | The GGUF counterpart to orcarouter's FP8 and MLX uncensored releases, rounding out cross-runtime coverage for their abliterated Qwen3.8-27B line. Downloads trail the FP8 version, suggesting GPU users are favoring FP8 over CPU-friendly GGUF for this particular release. |
| [empero-ai/Qwen3.8-9B-Distill](https://huggingface.co/empero-ai/Qwen3.8-9B-Distill) | empero-ai | 166 | 9,260 | A 9B distilled version of Qwen3.8-27B aimed at reducing compute requirements while preserving multimodal capability. Distillation efforts like this are notable as one of the few capability-preserving (rather than restriction-removing) derivatives in this week's list. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 262 | 635,416 | Huihui-ai's well-known abliteration pipeline applied to Qwen3.8-27B and packaged as GGUF. The 635K downloads reflect this group's established reputation for reliable abliterated releases. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 249 | 21,612 | The unquantized safetensors counterpart to Huihui-ai's abliterated GGUF release. Its far lower download count versus the GGUF version confirms most users prefer quantized formats for local abliterated-model use. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 240 | 173,935 | The GGUF quantization of Ornith's 35B MoE model, MIT-licensed and endpoints-compatible. It makes the sparse MoE architecture accessible for local llama.cpp-based deployment. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 162 | 174,817 | GGUF quantization of the smaller Ornith-1.5-9B model, also MIT-licensed. Its download count nearly matching the larger 35B-A3B GGUF suggests users value the smaller footprint over raw capacity. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,402 | 0 | A community-maintained collection of corrected Jinja chat templates for Qwen models, addressing formatting bugs in official releases. High likes with zero downloads indicate it's referenced/starred as a fix resource rather than downloaded as a model artifact. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 319 | 0 | A finetune of MiniMax-H3 for image/text-to-video generation, built directly on the `base_model:finetune` relationship. Its name and MiniMax-H3 lineage suggest NSFW-oriented content generation, part of the same uncensoring trend seen across the Qwen3.8 derivatives. |

## Ecosystem Signal

This week is a case study in how fast the open-weight ecosystem "orbits" a single flagship release: within days of Qwen/Qwen3.8-27B's launch, it accounts for roughly two-thirds of all trending entries — official FP8 quantizations, Unsloth GGUFs, MoE-style distillations, speculative-decoding accelerators (two independent DFlash2 implementations), and a striking volume of "abliterated"/"uncensored" variants from at least six different community groups (orcarouter, OBLITERATUS, HauhauCS, huihui-ai, 0bserverx, JonathanColetti). This mirrors — and arguably exceeds — the abliteration cycle seen with prior Qwen and Llama releases, suggesting safety-filter removal has become a near-automatic first move for popular open-weight drops. DeepSeek continues its own rapid-release cadence with V4 Pro/Flash variants, while MiniMax and Lightricks push the generative-media frontier (video, music) forward with large, quickly-adopted diffusion models. Proprietary-model presence is entirely absent from this chart — every trending entry is open-weight — reinforcing Hugging Face's role as the open-ecosystem's discovery and distribution layer rather than a venue for closed-model buzz.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the base model driving this entire week's activity; worth studying directly to understand the multimodal architecture before evaluating the dozens of derivatives.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — a genuinely novel image-text-to-video diffusion model with nearly 4M downloads, worth trying for anyone evaluating open video-generation alternatives to closed offerings.
3. **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** (or the incoai variant) — worth studying for engineers interested in speculative-decoding techniques applied to a brand-new large multimodal model, since two independent implementations emerged almost simultaneously.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
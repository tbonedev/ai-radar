# Hugging Face Trending Models Digest 2026-09-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-23 12:31 UTC

---

# Hugging Face Trending Models Digest — 2026-09-23

## Today's Highlights

Qwen continues to dominate the open ecosystem: **Qwen3.8-27B** leads all 30 trending models with 16,107 likes and 6.9M downloads, and has already spawned a dense tree of GGUF, MLX, and fine-tuned derivatives on this same list. Extreme quantization is a major theme — prism-ml's ternary 2-bit **Bonsai-2-27B** GGUF has racked up 2.8M downloads, and Unsloth's **Qwen3.8-27B-GGUF** tops the entire snapshot at 7.1M downloads. Frontier labs pushed multimodal generation forward with **DeepSeek-V4.1-Flash**, **MiniMax-H3** (image-text-to-video), and Lightricks' **LTX-2.5**, which unifies four video-generation modes in one release. Xiaomi's **MiMo-V2.6** family (Pro, Flash, and a Qwen-distilled variant) shows labs increasingly shipping full tiered families rather than single checkpoints.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,644 | 570,909 | A fast image-text-to-text variant in DeepSeek's V4.1 line built for low-latency multimodal chat. It reflects DeepSeek's continued rapid iteration on its flagship series. |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,107 | 6,912,469 | The most-liked and most-downloaded model in this snapshot, an image-text-to-text conversational model anchoring the Qwen3.8 family. It has already spawned a dense web of GGUF, MLX, and fine-tuned derivatives elsewhere on this list. |
| [Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,446 | 39,009 | A 29B conversational text-generation model from XingChen-AGI's Xing4.0 line. Its quick traction suggests growing interest in Chinese foundation models beyond the usual Qwen/DeepSeek names. |
| [MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 430 | 4,070 | Xiaomi's RL-tuned multimodal text-generation flagship in the MiMo-V2.6 series. It anchors a family that also includes Flash and distilled variants trending this week. |
| [MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 409 | 13,243 | The lighter, faster sibling of MiMo-V2.6-Pro-RL, also RL-tuned for multimodal generation. Its higher download count relative to the Pro model suggests demand for cheaper inference over top-end quality. |
| [AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 284 | 2,254 | Yandex's 80B foundation base model for its Alice assistant, using custom architecture code. It's a rare open base-model release from a major non-US, non-Chinese assistant maker. |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,626 | 807,550 | An experimental Flash variant tagged `qwen4_exp`, hinting at next-generation Qwen architecture work. Its strong likes-to-downloads ratio suggests the community is closely watching it as a Qwen4 preview. |
| [Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 533 | 3,787 | A Qwen3.8-based text-generation model positioned by Altworld as a distinct product with literary branding. Early traction hints at a writing/creative-focused use case. |
| [NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 1,011 | 13,009 | A 9B text-generation model explicitly tagged for agentic workflows. Its likes outpace many larger models here, pointing to demand for compact, agent-ready open models. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 1,927 | 28,407 | Qwen's latest text-to-image model supporting both generation and editing. It has already spun off multiple community GGUF and ComfyUI repackagings within the same trending window. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 600 | 2,220,609 | A ComfyUI-ready single-file packaging of Qwen-Image-2.1 for direct use in diffusion pipelines. Its 2.2M downloads against just 600 likes mark it as high-utility infrastructure rather than a novel model. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,854 | 1,638,605 | Lightricks' latest video model, supporting image-to-video, text-to-video, video-to-video, and image-text-to-video in one release. Its modality breadth and 1.6M+ downloads make it one of the most versatile open video generators trending today. |
| [YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 979 | 22,415 | A 3B music-generation model adding symbolic planning and agentic editing to the original YuE lineage. It's one of the few dedicated music-generation models on the board this week. |
| [ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 482 | 6,934 | A 9B vision-language model emphasizing spatial reasoning, a less common multimodal specialization. It signals continued investment in VLMs beyond pure chat use cases. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,616 | 3,664,216 | MiniMax's image-text-to-video model combining diffusion with strong multimodal conditioning. With 3.6M downloads it's among the most-adopted video generators in this snapshot. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 2,874 | 0 | A text-classification model built around "calibrated-decisions" and a "system-one" design, targeting decision reliability over raw accuracy. Despite zero recorded downloads, it has the second-highest like count in this snapshot, suggesting strong pre-adoption visibility. |
| [laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 202 | 0 | The multilingual extension of laya, built on an mmBERT backbone for cross-lingual calibrated classification. It extends convaiinnovations' decision-calibration approach beyond English. |
| [openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 495 | 0 | An NLI cross-encoder built on Qwen3.5 for entailment-style classification and reranking. It offers an open alternative to proprietary cross-encoder NLI services. |
| [Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 552 | 0 | A compact 1B model specialized for structured, constrained, and parallel decoding, optimized for Apple Silicon via MLX. It targets on-device structured-output generation rather than general chat. |
| [Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 326 | 3,708 | NetEase Youdao's speech-recognition model built on a Qwen3 ASR backbone with an "R2T2" recognition scheme. It reflects continued investment in open Chinese-language ASR from an education-tech company. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,915 | 2,815,979 | A ternary (2-bit) GGUF quantization of a 27B model for llama.cpp, pushing extreme compression while staying usable. Its 2.8M downloads make it the most-downloaded quantized model here, reflecting huge demand for ultra-low-bit local inference. |
| [Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,303 | 350,678 | An uncensored GGUF quantization of Qwen-Image-2.1 packaged for ComfyUI via comfyui-gguf. Its 350K+ downloads within days of the base model's release show how fast the community repackages new image models. |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,592 | 1,414,991 | A GGUF quantization of Qwen3.8-27B using ISTA-DASLab's GSQ/RCO mixed-precision scheme. It represents research-driven pursuit of higher-fidelity low-bit quantization over naive rounding. |
| [MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 379 | 3,253 | A 9B distillation of the MiMo-V2.6 family onto a Qwen backbone, trading capability for a much smaller footprint. It completes Xiaomi's MiMo-V2.6 release into Pro, Flash, and Distill tiers. |
| [Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 347 | 48,214 | The MLX/Apple Silicon counterpart to prism-ml's ternary 2-bit Bonsai-2-27B quantization. It shows the same extreme-quantization technique ported across both llama.cpp and MLX ecosystems. |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,547 | 7,134,167 | Unsloth's official GGUF quantization of Qwen3.8-27B, with 7.1M downloads — the single most-downloaded model in this entire snapshot. It underscores Unsloth's role as the default fast-path for getting new base models onto consumer hardware. |
| [Qwen3.8-27B-TURBO-Fable-Cold-Fusion-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,105 | 1,452,915 | An elaborately-branded uncensored fine-tune/merge of Qwen3.8-27B distributed as GGUF. Its 1.45M downloads show sustained community appetite for uncensored merges despite the maximalist naming. |
| [Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 552 | 17,837 | A "Swift" fine-tuned, image-text-to-text-capable variant of Qwen3.8-27B from ukisai. It has a companion GGUF release also trending this week. |
| [Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 249 | 80,659 | ISTA-DASLab's GSQ/RCO quantization applied to the experimental Qwen3.8-Flash-Next model. Its quick availability shows how fast the quantization research community now iterates on preview releases. |
| [Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 367 | 168,762 | The llama.cpp GGUF build of ukisai's Swift-Qwen3.8-27B fine-tune, tagged for "efficient-thinking". It's one of several independent quantizations of Qwen3.8 derivatives competing for the same local-inference audience. |

## Ecosystem Signal

Qwen3.8-27B is the clear gravitational center of this snapshot — it directly anchors at least six other entries (Unsloth's GGUF, ISTA-DASLab's GSQ/RCO GGUF, DavidAU's uncensored merge, ukisai's Swift fine-tune and its GGUF, plus Qwen3.8-Flash-Next). This mirrors a broader pattern: base-model releases from Qwen, DeepSeek, and Xiaomi's MiMo are followed within days by a wave of community quantizations and merges, with Unsloth and ISTA-DASLab acting as the two dominant "official-adjacent" quantization pipelines. Extreme compression is trending sharply — prism-ml's ternary 2-bit approach, ported to both GGUF and MLX, suggests growing appetite for sub-4-bit inference on consumer and Apple Silicon hardware. Open-weight activity dwarfs anything proprietary here; every entry is openly licensed. Video and image generation (LTX-2.5, MiniMax-H3, Qwen-Image-2.1) are maturing into multi-modality-in-one-model releases rather than single-purpose tools, while niche specialization (calibrated classification, ASR, structured decoding) continues alongside the LLM race.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the ecosystem's current anchor model; studying it (and its derivative tree) is the fastest way to understand where the broader open-source stack is headed.
2. **[Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — a rare, heavily-adopted (2.8M downloads) demonstration of practical ternary/2-bit quantization at 27B scale, worth studying for anyone pushing local-inference efficiency.
3. **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — the broadest open video-generation release this week (four modalities in one model), a strong candidate for hands-on experimentation in generative video pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
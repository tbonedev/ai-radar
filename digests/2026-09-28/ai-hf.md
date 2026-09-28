# Hugging Face Trending Models Digest 2026-09-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-28 14:53 UTC

---

# Hugging Face Trending Models Digest — 2026-09-28

## Today's Highlights

Qwen dominates the board today from two directions: **Qwen3.8-27B** is the clear breakout with 16,465 likes and 6.8M downloads, while the **Qwen-Image-2.1** diffusion model has spawned an entire quantization/fine-tune ecosystem (Comfy-Org, unsloth, ISTA-DASLab, Viggle, and multiple community GGUF packagers all shipping derivatives within days of release). XiaomiMiMo continues its aggressive multi-variant release cadence with three MiMo-V2.6 models (Pro-RL, Flash-RL, Distill-Qwen-9B) covering the full latency/quality spectrum. On the frontier-lab side, **DeepSeek-V4.1-Flash** and **Lightricks LTX-2.5** (image-to-video) show strong momentum, and extreme low-bit quantization is having a moment with **prism-ml's 2-bit ternary GGUF** pulling in 3.4M downloads. A notable ecosystem risk signal: an "Uncensored" Qwen-Image GGUF fork is trending high on likes, underscoring how quickly safety-tuned base models get stripped downstream.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,465 | 6,844,348 | Qwen's flagship image-text-to-text conversational model and by far the most-liked release today. Its 6.8M downloads reflect rapid adoption as a general-purpose base for both chat and vision-language fine-tunes. |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,845 | 668,537 | A fast-inference variant of DeepSeek's V4.1 line with native image-text-to-text support alongside text generation. Strong early likes suggest it's positioned as a low-latency multimodal alternative to the full V4.1 model. |
| [Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,789 | 45,834 | A 29B mixture-style conversational model from XingChen-AGI's Xing series. Solid early traction points to growing interest in Chinese-lab conversational models outside the usual Qwen/DeepSeek names. |
| [MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 571 | 76,518 | The high-end, RL-tuned flagship of Xiaomi's MiMo-V2.6 multimodal-capable text generation family. Part of a coordinated multi-tier release alongside Flash-RL and Distill variants. |
| [MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 504 | 28,842 | The speed-optimized sibling to MiMo-V2.6-Pro-RL, trading some capability for lower latency. Its release alongside Pro and Distill variants shows Xiaomi targeting the full deployment spectrum in one drop. |
| [AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 353 | 3,650 | Yandex's 80B foundation base model for its Alice assistant stack, using custom code and an A3B (activated-3B) sparse architecture. Early-stage likes/downloads suggest it's just landing with the community. |
| [Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 755 | 7,478 | A Qwen3.8-text-based generative model from Altworld, likely fine-tuned for long-form or literary writing given the name. Modest but growing traction as a niche text-generation entrant. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,556 | 58,693 | Qwen's official text-to-image and image-editing diffusion model, the base for a large wave of community GGUF and LoRA derivatives seen elsewhere in this digest. Its downstream popularity (millions of downloads across forks) is the real signal of its impact. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,386 | 1,595,377 | A versatile video diffusion model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video in one checkpoint. High likes and 1.6M downloads make it one of the strongest video-generation releases this week. |
| [ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,702 | 11,738 | A 9B vision-language model emphasizing spatial reasoning, positioning it for robotics/embodied-AI or spatial-QA use cases. Strong like count relative to its download count suggests early researcher interest ahead of broader adoption. |
| [MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 535 | 9,994 | A distilled, Qwen3.5-based image-text-to-text member of the MiMo-V2.6 family, aimed at smaller-footprint multimodal deployment. Completes Xiaomi's three-tier MiMo-V2.6 release alongside Pro-RL and Flash-RL. |
| [Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 319 | 0 | A design-focused text-to-image model from Ant Group's inclusionAI, just published (zero downloads so far but already drawing likes). Signals a push toward domain-specific (design/UI) image generation rather than general photorealism. |
| [LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 255 | 1,840 | Apple's 9B vision-language model built on the Qwen3.5 architecture, notable simply for being a rare open weight release from Apple. Early-stage numbers but high-signal given the source. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,227 | 0 | A text-classification model tagged "system-one" and "calibrated-decisions," suggesting fast, intuitive-style decision scoring. Extremely high likes with zero downloads indicates a brand-new, buzz-driven launch rather than proven adoption yet. |
| [TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 652 | 27,904 | A Qwen2.5-VL-based OCR specialist for image-text-to-text extraction tasks. Represents the growing trend of fine-tuning general VLMs into narrow, production-grade OCR tools. |
| [Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,359 | 19,963 | A streaming automatic speech recognition model designed for effectively unbounded-length audio input. Its "Infinite" streaming framing targets long-form transcription use cases like meetings and podcasts. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,795 | 1,655,818 | A research-grade quantization of Qwen3.8-27B using GSQ/RCO mixed-precision techniques from the Institute of Science and Technology Austria. 1.6M downloads shows strong demand for academically-validated compression methods on the trending Qwen3.8 base. |
| [Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 437 | 26,428 | NVIDIA's speaker diarization model built on the NeMo framework with audio-frame classification. Fills a specialized niche (who-spoke-when) adjacent to the broader ASR trend seen elsewhere in this digest. |
| [Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 442 | 9,336 | A Qwen3-ASR-based speech recognition model from NetEase Youdao's Confucius series, using an "R2T2" training recipe. Part of a broader cluster of ASR releases trending today alongside Edge0 and NVIDIA. |
| [Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 287 | 577 | A Gemma-based unified model combining image-text-to-text and text-classification capabilities. Early-stage but notable for packaging multimodal understanding and classification in one checkpoint. |
| [CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 446 | 1,271 | An 8B contrastive-learning-based reranker/verifier for text-ranking tasks. Targets retrieval and RAG pipelines that need a dedicated relevance-scoring model rather than a general LLM. |
| [Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 237 | 1,006 | A multilingual "decision-model" text-classification system from SupersonicLabs. Positioned similarly to `laya` in the emerging category of decision/judgment-scoring models. |
| [GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 222 | 24,250 | A token-classification extractor built on the GLiNER2 architecture for intent and text classification tasks. Solid download count relative to likes suggests it's already being used in production extraction pipelines. |
| [openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 617 | 0 | A Qwen3.5-based NLI cross-encoder for text classification, just published with no downloads yet. Likely an open community counterpart to more specialized commercial classification/judgment models. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,222 | 3,457,124 | An aggressive 2-bit ternary GGUF quantization of a 27B model for llama.cpp, with 3.4M downloads — the highest download count in today's list. Demonstrates strong demand for extreme compression that keeps large models runnable on consumer hardware. |
| [Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,197 | 1,062,921 | A community GGUF conversion of Qwen-Image-2.1 with safety tuning removed, built for ComfyUI workflows. High engagement (2,197 likes, 1M+ downloads) reflects the well-known pattern of "uncensored" forks quickly outpacing the base model in some communities. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 817 | 4,351,753 | A single-file diffusion packaging of Qwen-Image-2.1 for direct ComfyUI use, with 4.35M downloads — the highest in the entire dataset. Shows that packaging/format convenience (not just model quality) drives massive adoption. |
| [Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 366 | 175,907 | A LoRA-based "turbo" acceleration fine-tune of Qwen-Image-2.1 for faster text-to-image and image-to-image generation. Part of the broader wave of speed-focused LoRAs building on the Qwen-Image base. |
| [Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 278 | 220,231 | Unsloth's quantized GGUF build of Qwen-Image-2.1, leveraging their reputation for efficient fine-tuning and quantization tooling. Solid downloads reflect trust in Unsloth's quantization quality within the fine-tuning community. |
| [Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 306 | 158,806 | An fp8-quantized GGUF of just the Qwen-Image-2.1 text encoder for ComfyUI pipelines. A narrow but practical optimization letting users mix-and-match encoder precision independent of the diffusion backbone. |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,795 | 1,655,818 | (See Specialized Models — research-grade mixed-precision GGUF quantization of the trending Qwen3.8-27B, also fits the quantization category.) |

## Ecosystem Signal

Today's data shows **Qwen as the dominant gravitational center** of the open ecosystem: Qwen3.8-27B leads all models by likes, and Qwen-Image-2.1 has already generated at least seven distinct downstream derivatives (official ComfyUI packaging, unsloth GGUF, academic quantizations, LoRA turbos, and an uncensored fork) within the digest window — a textbook case of a strong open-weight base model triggering rapid community iteration. **Open-weight momentum remains strong** across Chinese labs (Qwen, DeepSeek, XiaomiMiMo, XingChen-AGI) and is now visibly extending to non-traditional players like Apple (LensVLM) and Yandex (AliceAI), suggesting open releases are becoming a normalized strategy even for companies without prior open-source LLM footprints. **Quantization activity is intensifying at the extreme end** — prism-ml's 2-bit ternary GGUF pulled 3.4M downloads, and Comfy-Org's single-file Qwen-Image packaging hit 4.35M, indicating that deployment convenience and aggressive compression, not just raw capability, are now primary downloads drivers. The presence of an "uncensored" fork trending highly alongside the official release is a recurring governance signal worth monitoring.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear consensus pick this week with 16K+ likes and 6.8M downloads; worth studying both as a capable vision-language conversational model and as the base architecture (`qwen3_5`) now underpinning several other trending releases (Apple's LensVLM, Altworld's Hemmingway-1).
2. **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — one of the few models supporting text-to-video, image-to-video, video-to-video, *and* image-text-to-video in a single checkpoint; worth trying for anyone evaluating consolidated video-generation pipelines instead of stitching together task-specific models.
3. **[Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — its 2-bit ternary quantization achieving 3.4M downloads makes it a strong case study for anyone researching extreme model compression and its real-world quality/size tradeoffs on consumer hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
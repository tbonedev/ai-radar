# Hugging Face Trending Models Digest 2026-09-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-20 11:59 UTC

---

# Hugging Face Trending Models Digest — 2026-09-20

## Today's Highlights

Qwen continues to dominate the trending charts: **Qwen3.8-27B** tops the list with 15,817 likes and over 7.3M downloads, and its ecosystem has spawned a dense cluster of GGUF quantizations, MLX ports, and community fine-tunes. **DeepSeek-V4.1-Flash** is the other major release of the week, already forked into an uncensored FP8 variant within days of launch. Video generation is heating up, with Lightricks' **LTX-2.5** and MiniMax's **MiniMax-H3** family both drawing strong engagement. Extreme quantization is a clear theme — **Ternary-Bonsai-2-27B** ships in both 2-bit GGUF and MLX form, reflecting growing demand for edge-deployable LLMs. Tencent's **AuK** zero-shot TTS model also broke into the trending list, signaling continued momentum in open speech synthesis.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,817 | 7,331,932 | The top-trending model this week, a 27B image-text-to-text conversational model from the Qwen3.5 architecture family. Its downloads far outstrip any other release, cementing it as the base for a wide derivative ecosystem. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,488 | 3,109,084 | A fast conversational variant in Zhipu's GLM-5 series built on the glm5_next architecture. Strong download numbers suggest it's being adopted as a lightweight production chat model. |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,374 | 496,684 | The flash-tier release of DeepSeek's V4.1 line, supporting both text and image-text-to-text generation. It's already spawned community forks within days, a sign of fast ecosystem uptake. |
| [Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,761 | 5,910,102 | Meta's well-established instruction-tuned 8B model remains a trending staple over a year after release. Its consistent 5.9M downloads reflect its role as a default baseline for fine-tuning and benchmarking. |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,474 | 761,112 | An experimental "next-gen" flash model tagged qwen4_exp, hinting at early Qwen4 architecture work. It's drawing attention as a preview of Qwen's upcoming generation. |
| [Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,537 | 76,669 | A 35B MoE model (3B active) built on qwen3_5_moe, optimized for edge inference. Its MoE design targets efficient deployment without sacrificing scale. |
| [MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,612 | 420,622 | The latest compact model in OpenBMB's MiniCPM line, aimed at efficient on-device text generation. Its llama-based architecture keeps it easy to integrate with existing tooling. |
| [Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 497 | 10,962 | A speed-optimized fine-tune of Qwen3.8-27B focused on efficient thinking/inference. Part of a growing "Swift" derivative line built directly on the trending Qwen3.8 base. |
| [Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 780 | 12,617 | A 29B conversational MoE model (4B active) from XingChen-AGI's Xing4.0 series. Notable for strong early likes relative to its still-modest download count, suggesting fresh community interest. |
| [NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 973 | 11,913 | A 9B agentic text-generation model built on the qwen3_5_text backbone. Tagged specifically for agentic workflows, positioning it for tool-use and multi-step task scenarios. |
| [Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 205 | 895 | An InternLM preview model using the glm_moe_dsa architecture, accompanied by a fresh arXiv paper. Bilingual (zh/en) support points to continued research investment from InternLM. |
| [Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 464 | 0 | A small 1B Qwen2.5 fine-tune using RLCD with structured/constrained decoding for Apple Silicon (MLX). Interesting for its focus on parallel decoding efficiency despite zero recorded downloads so far. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,509 | 4,057,444 | MiniMax's H3 image-text-to-video diffusion model supports text-to-video and image-to-video generation. Its 4M+ downloads make it one of the most-adopted video generation models trending this week. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,492 | 1,609,559 | Lightricks' latest video diffusion model supports image-to-video, text-to-video, video-to-video, and image-text-to-video in a single-file diffusion format. Its versatility across video generation modes drives strong download numbers. |
| [YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 894 | 17,403 | A 3B music generation model featuring symbolic planning and agentic editing capabilities. Its ability to plan compositions symbolically before generation sets it apart from typical end-to-end audio models. |
| [Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 555 | 242,751 | A community video-generation fork of MiniMax-H3 supporting text-to-video, image-to-video, and video-to-video. Its rapid adoption (242K downloads) shows how quickly derivative video models spread once a strong base ships. |
| [ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 209 | 3,750 | A 9B vision-language model emphasizing spatial reasoning as a multimodal capability. It targets tasks requiring geometric/spatial understanding beyond typical caption-style VLMs. |
| [AuK](https://huggingface.co/tencent/AuK) | tencent | 336 | 3,471 | Tencent's zero-shot text-to-speech model supports voice cloning without speaker-specific fine-tuning. Its entry into the trending list reflects renewed interest in open TTS from major labs. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 798 | 0 | A text-classification model built around "calibrated-decisions," suggesting a focus on decision-confidence calibration rather than raw accuracy. High likes with zero downloads indicate strong early buzz ahead of practical adoption. |
| [openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 256 | 0 | An NLI cross-encoder built on the Qwen3.5 backbone for natural language inference tasks. Its cross-encoder design targets high-precision pairwise text comparison use cases like re-ranking. |
| [yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4) | Mothersuperior | 158 | 0 | A LoRA-based audio tokenizer built for the YuE2 music generation ecosystem. It fills a specialized niche as tooling infrastructure supporting the broader YuE2 model family. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,356 | 1,908,396 | An extreme 2-bit ternary GGUF quantization of a 27B model, built for llama.cpp inference. Its 1.9M downloads make it one of the most-adopted ultra-low-bit quantizations trending this week. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,405 | 6,941,478 | Unsloth's GGUF quantization of the trending Qwen3.8-27B base model. With 6.9M downloads, it's become the default way most users run Qwen3.8-27B locally. |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,452 | 1,217,204 | A GGUF quantization of Qwen3.8-27B using ISTA-DASLab's GSQ-RCO mixed-precision method. It positions itself as a research-grade alternative to standard quantization for accuracy-sensitive deployments. |
| [DavidAU Qwen3.8-27B TURBO Fable-Cold-Fusion GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 989 | 1,301,417 | An uncensored community fine-tune/merge of Qwen3.8-27B combining multiple "heretic" abliteration and coder-focused tweaks, distributed as GGUF. Its long, descriptive name reflects the layered, experimental nature of community merge culture. |
| [Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 321 | 136,668 | The GGUF-quantized, llama.cpp-ready release of ukisai's efficient-thinking Swift-Qwen3.8-27b fine-tune. It rounds out a full pipeline from fine-tune to quantized deployment artifact. |
| [DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 317 | 34,688 | An uncensored FP8-quantized fork of DeepSeek-V4.1-Flash, released within days of the original. It demonstrates how quickly the alignment-removal community reacts to major new base model releases. |
| [Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 267 | 30,043 | The Apple Silicon MLX counterpart to Ternary-Bonsai-2-27B-gguf, also at 2-bit ternary precision. Its parallel release across GGUF and MLX formats shows deliberate multi-platform edge targeting. |
| [Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 181 | 42,965 | ISTA-DASLab's GSQ-RCO quantization applied to the experimental Qwen3.8-Flash-Next model. It extends their mixed-precision quantization method to Qwen's newest preview architecture. |
| [penclaw-GLM-5.3-abliterated](https://huggingface.co/audnai/penclaw-GLM-5.3-abliterated) | audnai | 167 | 670 | An abliterated (safety-guardrail-removed) fine-tune of GLM-5.3-Flash. Its low download count relative to likes suggests it's newly released and still gaining traction. |

## Ecosystem Signal

The Qwen3.5/3.8 family is the clear center of gravity this week, anchoring not just the top-trending base model but an entire derivative tree — Swift variants, GSQ-RCO quantizations, unsloth's GGUF, and DavidAU's multi-technique "Heretic" merge all build directly on Qwen3.8-27B within days of its release. This mirrors the pattern seen with DeepSeek-V4.1-Flash, which already has an uncensored FP8 fork from dealignai. Open-weight models continue to dominate trending activity entirely — no proprietary/closed model appears in the top 30, reinforcing that community mindshare tracks open releases from Qwen, DeepSeek, Meta, GLM, and MiniMax. Quantization activity is especially intense: GGUF remains the dominant distribution format, but MLX (Apple Silicon) ports are appearing in parallel for the same releases, and prism-ml's ternary 2-bit work signals a push toward extreme compression for edge/consumer hardware. Fine-tuning trends skew toward uncensoring/abliteration (DavidAU, dealignai, audnai) and efficiency-focused variants (ukisai's "Swift" line), rather than domain specialization.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the week's clear anchor model, with likes and downloads far outpacing everything else; understanding it is prerequisite to understanding most of the rest of the trending list.
2. **[Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — worth studying for anyone interested in extreme low-bit quantization; 2-bit ternary at 1.9M downloads is a strong signal this technique is production-viable, not just a research curiosity.
3. **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — the most format-versatile video model trending (image-to-video, text-to-video, video-to-video, image-text-to-video in one release), making it a good single entry point for exploring current open video generation capability.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
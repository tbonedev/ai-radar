# Hugging Face Trending Models Digest 2026-10-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-09 14:05 UTC

---

# Hugging Face Trending Models Digest — 2026-10-09

## Today's Highlights

The Qwen 3.8 family dominates the board. Qwen3.8-27B leads with 17,322 likes and 6,783,589 downloads, and the Flash-Next variant, Qwen-Image-2.1 and a long tail of GGUF, abliterated and quantized derivatives follow it. Lightricks' LTX-2.5 video model (7,007 likes) and DeepSeek-V4.1-Flash (4,280 likes) are the other major first-party releases. Cloudflare's new `clef` models and Aleph-Alpha's Kolibri-1 MoE reasoner show more labs releasing open weights. Community activity is heavy on uncensored and low-bit quantizations, including ternary 2-bit builds.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,322 | 6,783,589 | Qwen's 27B image-text-to-text conversational model. It is the most-liked and most-downloaded model today, and it is the base for many derivatives. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,053 | 1,751,752 | An experimental "Flash" Qwen variant (`qwen4_exp` architecture) with conversational and multimodal input. It trends as a preview of the next Qwen architecture. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,280 | 1,316,468 | DeepSeek's V4.1 Flash release, with text-generation and image-text-to-text support. Its 1.3M downloads show strong uptake of an open-weight frontier-lab model. |
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 3,399 | 1,536,533 | A 27B vision-language model on the `qwen3_5` architecture. It has over 1.5M downloads. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 829 | 8,474 | A mixture-of-experts reasoning model that is tagged for vLLM. It draws interest as a European-lab open release, though downloads are still low. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,915 | 12,066 | Cloudflare's multimodal model built on `qwen3_5`. The likes-to-downloads ratio suggests curiosity about a CDN and edge provider entering model releases. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 707 | 18,971 | A smaller, faster sibling of clef, also on `qwen3_5`. It is aimed at lower-latency edge deployment. |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 220 | 7,302 | A 3B vision-language model on Liquid's `lfm2_vl` architecture. It targets on-device use. |
| [autotrust/GLM5.3-Flash-E224-DGX-Spark](https://huggingface.co/autotrust/GLM5.3-Flash-E224-DGX-Spark) | autotrust | 553 | 11,534 | A GLM 5.3 Flash MoE build tuned for NVIDIA DGX Spark and vLLM. It trends with people running local hardware. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,007 | 1,687,531 | An open video generation model covering image-to-video, text-to-video and video-to-video. It is the top non-LLM release today. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,142 | 122,311 | Qwen's text-to-image and image-editing model. Its ecosystem of LoRAs and GGUF conversions is already forming. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,332 | 245,270 | A LoRA for Qwen-Image-2.1 editing that does face swapping. It shows how quickly the community builds on new image bases, and it raises misuse concerns. |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 311 | 12,118 | A Turkish text-to-speech model. It is a niche language-specific release. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 230 | 5,558 | An on-device speech recognition model. It is aimed at mobile and edge use. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,289 | 29,185 | Google's second-generation Gemma-based embedding model. It is the main embedding release today. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,417 | 41,468 | A text-classification model for calibrated decisions, tagged "system-one". Its 5,417 likes against 41,468 downloads show unusually high interest for its usage. |
| [autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide) | autotrust | 2,060 | 909,755 | A 26B Gemma 4-based decision model on the "system-one" theme. It has nearly 910K downloads. |
| [autotrust/GEV-26B-Decide-NVFP4](https://huggingface.co/autotrust/GEV-26B-Decide-NVFP4) | autotrust | 166 | 23,254 | An NVFP4-quantized version of GEV-26B-Decide. It targets Blackwell-class GPUs. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,723 | 2,013,268 | An uncensored GGUF of Qwen-Image-2.1 for ComfyUI. It has over 2M downloads, which makes it one of the top community derivatives. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,561 | 4,389,072 | A 27B ternary (2-bit) GGUF for llama.cpp. It has the second-highest downloads on the list, which shows demand for extreme compression. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,083 | 1,490,741 | A mixed-precision GGUF of Qwen3.8-27B using the GSQ and RCO quantization methods. It has nearly 1.5M downloads. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 733 | 3,559,321 | The same GSQ/RCO treatment applied to Flash-Next. Its downloads far exceed its likes, which suggests pipeline or automated use. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,594 | 2,000,216 | An uncensored, coding-oriented merge fine-tune of Qwen3.8-27B with MTP. It passes 2M downloads. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 670 | 38,740 | A 29B MoE with 4B active parameters, in GGUF. Its low active-parameter count makes local inference cheap. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 704 | 29,470 | A Gemma 4-based GGUF and safetensors model aimed at more natural-sounding text. It is a niche stylistic fine-tune. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 481 | 21,406 | A cybersecurity-focused uncensored Qwen3.8 27B GGUF. Its dual-use focus drives interest. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 305 | 2,277 | A 3.0 bits-per-weight EXL3 quantization of an uncensored GLM-5.3. It targets ExLlamaV3 users on limited VRAM. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 208 | 41,582 | A GGUF conversion of embeddinggemma-2 with multimodal embedding support. It followed Google's release quickly. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 165 | 684,487 | An abliterated (refusal-removed) GGUF of Flash-Next built on the GSQ/RCO quantization. It has 684K downloads. |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 152 | 15,274 | A 2-bit 27B GGUF with tool-calling and function-calling support. It aims at agentic use on small hardware. |

## Ecosystem Signal

Qwen is the clear momentum leader. Qwen3.8-27B, Flash-Next and Qwen-Image-2.1 each have a large derivative ecosystem. Cloudflare's `clef` models and several autotrust releases also use the `qwen3_5` architecture, so Qwen's architecture is becoming a common base. Open weights dominate the list. DeepSeek-V4.1-Flash, LTX-2.5 and Kolibri-1 show frontier-grade labs still publishing openly, and no proprietary models appear because the list covers only models hosted on the Hub. Quantization and de-censoring are the main community activity. Ternary 2-bit builds, mixed-precision GSQ/RCO GGUFs, EXL3, NVFP4 and many abliterated or uncensored variants appear within days of the base releases. Several download counts far exceed their likes, for example 3,559,321 downloads against 733 likes, which points to automated or pipeline pulls rather than human interest. Treat raw rankings with some caution.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The reference base for most of today's trending derivatives. Study it first to understand what the ecosystem is building on.
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — A 27B model at 2 bits per weight with 4.39M downloads. It is worth testing for quality against size on llama.cpp.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The strongest open video generation release in the list. It supports several modes (text-, image- and video-to-video), so it suits creative pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
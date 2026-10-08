# Hugging Face Trending Models Digest 2026-10-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-08 14:20 UTC

---

# Hugging Face Trending Models Digest, 2026-10-08

## Today's Highlights

Alibaba's Qwen3.8 family dominates the board. Qwen3.8-27B leads with 17,255 likes and 6.8M downloads, and Qwen3.8-Flash-Next and Qwen-Image-2.1 are also trending. Its derivatives are everywhere: GGUF quantizations, uncensored fine-tunes and a LoRA face-swap built on Qwen-Image-2.1. Lightricks' LTX-2.5 (6,877 likes) is the top video-generation release, and DeepSeek-V4.1-Flash (4,252 likes) shows continued interest in efficient frontier-class open models. Google's embeddinggemma-2 and Aleph-Alpha's Kolibri-1 MoE reasoning model add variety beyond the Qwen wave.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,255 | 6,841,660 | A 27B multimodal conversational model in the Qwen3.8 line. It has the most likes and downloads on the list, and serves as the base for many derivatives. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,035 | 1,640,938 | A faster variant tagged with the experimental `qwen4_exp` architecture. It is trending as an early look at the next Qwen generation. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,252 | 1,282,524 | A lightweight DeepSeek V4.1 model that accepts image and text input. It drew over 1.28M downloads, which signals strong demand for efficient open-weight models. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,918 | 13,076 | A 9B vision-language model focused on spatial reasoning. Its like count is high relative to its downloads, which suggests research and community curiosity. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 800 | 6,777 | A mixture-of-experts reasoning model that is ready to serve with vLLM. It marks a notable European open-weight entry. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 639 | 36,481 | A 29B MoE model with about 4B active parameters, released in GGUF. It targets efficient local inference. |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 154 | 5,370 | A compact 3B vision-language model on Liquid's LFM2-VL architecture. It is aimed at edge deployment. |
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 2,658 | 1,533,034 | A 27B vision-language model built on the qwen3_5 architecture. It has over 1.5M downloads, which is high for a non-lab author. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,864 | 10,874 | A Qwen3.5-architecture vision-language model released by Cloudflare. It is notable as an infrastructure provider publishing its own model. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 681 | 17,587 | A lighter sibling of clef in the same family. It offers a lower-latency option for edge workloads. |
| [autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide) | autotrust | 1,657 | 903,866 | A Gemma4-based 26B model tagged for text classification and "system-one" decisions. It has about 900K downloads. |
| [autotrust/GEV-26B-Decide-NVFP4](https://huggingface.co/autotrust/GEV-26B-Decide-NVFP4) | autotrust | 163 | 19,655 | An NVFP4-quantized build of GEV-26B-Decide. It targets efficient inference on recent NVIDIA hardware. |
| [autotrust/GLM5.3-Flash-E224-DGX-Spark](https://huggingface.co/autotrust/GLM5.3-Flash-E224-DGX-Spark) | autotrust | 226 | 5,422 | A GLM 5.3 Flash MoE variant packaged for vLLM on DGX Spark. It shows interest in running large MoE models on desktop-class hardware. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,877 | 1,688,807 | An open video model that supports image-to-video, text-to-video and video-to-video. It has the second-highest like count on the list. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,117 | 116,957 | A diffusers-compatible text-to-image and image-editing model. It has become a base for community LoRAs and GGUF conversions. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,314 | 243,910 | A LoRA for face swapping on Qwen-Image-2.1 and its edit variant. It reached 243,910 downloads within days of the base model's release. |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 294 | 9,467 | A Turkish text-to-speech model. It stands out as a language-specific speech release. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,112 | 21,148 | The second generation of Google's Gemma-based embedding model. It is the main embedding release of the week. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,375 | 36,328 | A model for calibrated decisions, tagged "system-one". Its 5,375 likes are very high against 36,328 downloads. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 157 | 2,594 | An on-device speech recognition model. It targets mobile and edge use. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,644 | 1,933,066 | A GGUF-quantized uncensored Qwen-Image-2.1 for ComfyUI. It has the most downloads among the community derivatives. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,539 | 4,345,410 | A 27B model compressed to ternary, 2-bit-class weights for llama.cpp. It has 4.3M downloads, the second most on the board. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,060 | 1,517,150 | A mixed-precision GSQ/RCO quantization of Qwen3.8-27B. It comes from an academic quantization lab and has over 1.5M downloads. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 712 | 3,405,442 | The same GSQ/RCO method applied to Flash-Next. Its 3.4M downloads far exceed what its likes would suggest. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,563 | 2,037,446 | An uncensored, coding-oriented community merge of Qwen3.8-27B in GGUF. It has over 2M downloads. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 664 | 492,022 | An abliterated, uncensored GGUF of Flash-Next. It came out quickly after the base model. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 468 | 20,613 | A cybersecurity-focused uncensored 27B GGUF built on Qwen3.8. It targets security researchers running models locally. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 299 | 2,091 | A 3.0 bits-per-weight EXL3 quantization of an uncensored GLM-5.3 MoE. It serves the ExLlamaV3 community. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 185 | 29,692 | A GGUF conversion of embeddinggemma-2 with multimodal embedding tags. It makes the embedding model easy to run locally. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 594 | 23,439 | A Gemma4-based text-rewriting fine-tune available in GGUF and safetensors. It targets making AI text sound more human. |

## Ecosystem Signal

Qwen3.8 is the clear center of gravity. Of the 30 models, about 12 are the Qwen3.8 and Qwen-Image-2.1 releases or direct derivatives, and the family's architecture also underpins models from Cloudflare and autotrust. Qwen3.8-27B's 6.8M downloads show real adoption, not just curiosity.

Open weights dominate completely. DeepSeek, Google, Lightricks and Aleph-Alpha all released openly. Cloudflare's entry suggests infrastructure vendors are starting to ship their own models.

Quantization is the busiest area. It includes ISTA-DASLab's GSQ/RCO mixed precision, ternary 2-bit weights, NVFP4, EXL3 and GGUF. Several quantized builds have more downloads than their likes would suggest, which points to heavy practical use. Uncensored and abliterated variants appeared within days of each base release. Note that the autotrust and convaiinnovations "system-one" models have unusually high likes or downloads, so treat those numbers cautiously.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: the ecosystem's reference model. Try it for a strong multimodal baseline, and study how its derivatives behave.
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**: ternary 2-bit weights at 27B are a good test of how far extreme compression can go on llama.cpp.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: an open video model covering image, text and video input. It is worth trying for creative pipelines and for studying open video generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
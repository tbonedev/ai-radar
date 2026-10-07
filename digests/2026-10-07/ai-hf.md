# Hugging Face Trending Models Digest 2026-10-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-07 14:10 UTC

---

# Hugging Face Trending Models Digest — 2026-10-07

## 1. Today's Highlights

Alibaba's Qwen3.8 family dominates the board. The flagship [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) leads with 17,169 likes and 6.76M downloads, and a large wave of quantizations and fine-tunes surrounds it. Qwen-Image-2.1 is driving a parallel ecosystem of uncensored GGUFs, LoRAs and face-swap tools. [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) is the top video model at 6,742 likes. Cloudflare's first appearance with its [clef](https://huggingface.co/Cloudflare/clef) vision-language models and the arrival of [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) round out the day.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,169 | 6,758,993 | Open-weight 27B multimodal conversational model from the Qwen3.8 line. It is the most-liked and most-downloaded model on the list, and is the base for many derivatives. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,003 | 1,609,433 | Faster Qwen3.8 variant tagged with the experimental `qwen4_exp` architecture. It is trending as a preview of the next Qwen generation. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,207 | 1,255,513 | Flash-tier multimodal release in the DeepSeek V4.1 line. It draws strong downloads at 1.26M, which suggests wide interest in efficient frontier-lab models. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 757 | 5,775 | Mixture-of-experts reasoning model that ships with vLLM support. It has high interest relative to downloads, as a European-lab open release. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,897 | 12,970 | Compact 9B vision-language model focused on spatial reasoning. Its likes-to-downloads ratio is high for its size. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,761 | 9,513 | Cloudflare's image-text-to-text model built on the Qwen3.5 architecture. It is notable as the network provider's entry into open model releases. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 634 | 15,722 | Smaller, faster sibling of clef using the same Qwen3.5 base. It has more downloads than the larger model, which points to demand for lightweight deployment. |
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 1,519 | 1,529,210 | 27B vision-language model on the Qwen3.5 architecture. Its 1.5M downloads are unusually high for a little-known publisher. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,742 | 1,674,291 | Open video model covering image-to-video, text-to-video and video-to-video. It is the top-liked generative video model of the day. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,069 | 109,298 | Image generation and editing model from Qwen, released in diffusers format. It is the base for the many Qwen-Image-2.1 LoRAs and quantizations below. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 648 | 326,801 | Turbo-distilled Qwen-Image-2.1 variant offered as a LoRA and in GGUF. It aims at faster, few-step generation. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,278 | 238,952 | Face-swap LoRA for Qwen-Image-2.1 editing. It has 238,952 downloads, so community editing workflows are adopting it quickly. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 240 | 10,119 | LoRA for MiniMax-H3 that generates 360° orbit camera moves from first and last frames. It is a camera-control adapter for video generation. |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 217 | 2,724 | Turkish text-to-speech model. It adds to the small set of speech models trending. |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 267 | 3,750 | Speech recognition model packaged for MLX on Apple silicon. It targets on-device transcription. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 810 | 7,562 | Google's second-generation Gemma-based embedding model. It follows the original EmbeddingGemma, and its GGUF counterpart is also trending. |
| [autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide) | autotrust | 1,012 | 895,867 | Gemma4-based 26B model tagged for text classification and decision tasks. It has nearly 900K downloads. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,318 | 28,497 | Text classifier tagged for calibrated decisions. Its 5,318 likes against 28,497 downloads is an unusually high ratio, so the attention may be driven by promotion rather than usage. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 443 | 1,798 | PyTorch image classifier linked to an arXiv paper. It is a research release with modest usage so far. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,527 | 1,820,627 | Uncensored GGUF conversion of Qwen-Image-2.1 for ComfyUI. It has 1.8M downloads, which shows strong demand for local image generation. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,509 | 4,271,466 | Ternary 2-bit GGUF of a 27B model for llama.cpp. It has the second-highest downloads on the list at 4.27M. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,018 | 1,546,030 | Mixed-precision GSQ/RCO quantization of Qwen3.8-27B. It is the standard-size entry in ISTA-DASLab's quantization series. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 675 | 3,080,123 | GSQ/RCO quantization of Qwen3.8-Flash-Next. Its 3.08M downloads are far higher than the likes would suggest. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 327 | 553,685 | Coding-oriented, pruned GSQ/RCO variant of Qwen3.8-Flash-Next. It combines pruning with quantization for a smaller footprint. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,529 | 2,088,541 | Uncensored, coding-focused community fine-tune of Qwen3.8-27B. It reaches 2.09M downloads. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 441 | 19,030 | Uncensored, cybersecurity-oriented GGUF built on Qwen3.8. It targets security work, and the lack of safeguards is a dual-use concern. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 613 | 33,633 | GGUF of a 29B mixture-of-experts model with 4B active parameters. It is built for efficient local inference. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 432 | 19,483 | Gemma4-based model, available as GGUF, for making text sound more human. It is a niche writing-style tool. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 277 | 1,903 | 3.0 bits-per-weight EXL3 quantization of an uncensored GLM-5.3 MoE. It serves ExLlamaV3 users who want a large model on limited VRAM. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 143 | 11,470 | Unsloth's GGUF of EmbeddingGemma-2, including multimodal embedding support. It makes the model usable in local llama.cpp pipelines. |

## 3. Ecosystem Signal

Qwen is the dominant family. Its base models, quantizations, fine-tunes, image LoRAs and even third-party releases such as Cloudflare's clef (Qwen3.5 architecture) all build on it. Roughly half of the 30 entries trace back to Qwen weights. Gemma 4 is a distant second, with embeddinggemma-2 and several derivatives, while DeepSeek V4.1 and GLM 5.3 hold the remaining frontier-lab positions.

Open weights clearly lead the list. No proprietary models appear, and companies such as Cloudflare are now publishing open models.

Quantization is the most active area. ISTA-DASLab's GSQ-RCO series appears three times, ternary 2-bit GGUFs reach 4.27M downloads, and EXL3 serves the high-compression end. Uncensored fine-tunes are very common (at least five entries), which raises dual-use concerns. Some like counts look inflated relative to downloads (laya, ZDTaichu5.0-9B), so treat them cautiously.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The reference model for most of today's activity. Study it as the base, and compare it with the quantized variants for your hardware.
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — At 2-bit ternary with 4.27M downloads, it is worth testing for quality against size on llama.cpp.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The leading open video model, with text, image and video input modes. Try it for local video pipelines, along with LoRAs such as the 360° orbit adapter.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
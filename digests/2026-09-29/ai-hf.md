# Hugging Face Trending Models Digest 2026-09-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-29 13:41 UTC

---

# Hugging Face Trending Models Digest, 2026-09-29

## 1. Today's Highlights

Qwen dominates this week's trending list. Qwen3.8-27B leads with 16,531 likes and more than 7M downloads. Qwen-Image-2.1 has also spawned a large derivative ecosystem of GGUF, Comfy-Org, LoRA and text-encoder variants. DeepSeek-V4.1-Flash (3,882 likes) and Lightricks' LTX-2.5 video model (5,487 likes) round out the major first-party releases. Ternary and 2-bit quantization is also getting attention, with Ternary-Bonsai-2-27B-gguf at 3.58M downloads.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,531 | 7,020,239 | A 27B multimodal (image-text-to-text) conversational model from Qwen. It is the most-liked model of the week and also has the highest download count. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,882 | 690,388 | DeepSeek's Flash-tier V4.1 release, with image-text-to-text support. It has strong likes and steady adoption. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,803 | 46,557 | A conversational MoE-style model (29B total, ~4B active by its name). It is trending on its efficiency profile. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 594 | 78,135 | An RL-tuned multimodal text-generation model from Xiaomi. It has the highest downloads in the MiMo V2.6 family this week. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 517 | 39,625 | The lighter Flash variant of the RL-tuned MiMo V2.6 line. It is a faster and cheaper option for multimodal generation. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 560 | 11,131 | A 9B image-text-to-text model distilled onto a Qwen base. It shows MiMo capability being carried into a small footprint. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,894 | 11,836 | A 9B vision-language model focused on spatial reasoning. Its likes are high relative to its downloads. |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 263 | 1,956 | Apple's 9B vision-language model, built on the Qwen3.5 architecture. It is notable as an Apple release on a Qwen base. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,487 | 1,589,098 | An open video model covering image-to-video, text-to-video and video-to-video. It has the strongest likes of the video releases. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,636 | 64,362 | The official Qwen image generation and editing model, released in diffusers format. Most of its traffic flows through the derivatives below. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 842 | 4,699,089 | The ComfyUI-ready single-file packaging of Qwen-Image-2.1. It has the highest downloads of any image variant. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 406 | 190,649 | A turbo LoRA for fast Qwen-Image-2.1 text-to-image and image-to-image generation. It is aimed at low-step inference. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 340 | 0 | A design-focused text-to-image model from inclusionAI. It is brand new, and the 0 downloads probably reflect that. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,463 | 23,674 | A streaming speech recognition model built for unbounded audio. Its likes are high for the ASR category. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 457 | 10,482 | A Qwen3-ASR-based speech recognition model from NetEase Youdao. It shows Qwen's audio stack being adopted by third parties. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,434 | 0 | A text-classification model tagged for calibrated decisions. It has 4,434 likes but no recorded downloads, which is unusual. |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 847 | 30,354 | A Qwen2.5-VL-based OCR model. It has solid adoption for document extraction. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 506 | 1,910 | An 8B contrastive verifier and reranker. It applies contrastive learning to text ranking. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 493 | 30,931 | NVIDIA's speaker diarization and voice activity model, with NeMo and GGUF builds. It is an uncommon example of a diarization model with GGUF support. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 238 | 29,199 | A GLiNER2-based extractor for intent and text classification. Its downloads are high relative to its likes. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 282 | 1,725 | A multilingual decision-model classifier. It joins the wave of "decision" models seen this week. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 306 | 923 | A Gemma4-based unified model tagged for both image-text-to-text and text classification. It has small adoption so far. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,253 | 3,581,027 | A ternary 2-bit GGUF build of a 27B model for llama.cpp. It has 3.58M downloads, the highest of any quantization this week. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,368 | 1,152,523 | An uncensored GGUF of Qwen-Image-2.1 for ComfyUI. It has more than 1.1M downloads. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,820 | 1,678,861 | A mixed-precision GGUF of Qwen3.8-27B made with the GSQ and RCO quantization methods. It comes from an academic lab and has 1.68M downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,266 | 1,726,231 | An uncensored, coding-oriented community fine-tune of Qwen3.8-27B in GGUF format. It has 1.73M downloads. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 769 | 7,880 | A Qwen3.8-based text-generation fine-tune. It has modest adoption. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 319 | 168,249 | A quantized (fp8/GGUF) text encoder for Qwen-Image-2.1 in ComfyUI. It is aimed at lower-VRAM setups. |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 295 | 251,937 | Unsloth's quantized GGUF of Qwen-Image-2.1. It has broad tooling compatibility. |
| [orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B) | orcarouter | 204 | 2,143 | A vLLM-ready Qwen3.8-27B derivative. It is an early-stage quantization or fine-tune. |

## 3. Ecosystem Signal

**Qwen is the gravitational center.** Roughly half of the list is Qwen or built on it. That covers Qwen3.8-27B, Qwen-Image-2.1 and its many variants, Qwen3.5-architecture VLMs from Apple and Xiaomi, plus the Qwen3-ASR and Qwen2.5-VL derivatives. Xiaomi's MiMo V2.6 family (Pro, Flash and a Qwen-9B distill) is the strongest non-Qwen momentum, alongside DeepSeek-V4.1-Flash.

**Open weights dominate.** Every entry here is openly downloadable, and no proprietary models appear.

**Quantization is the volume driver.** GGUF builds account for the biggest download counts. Ternary-Bonsai reached 3.58M downloads, and ISTA-DASLab's mixed-precision GSQ-RCO build reached 1.68M. Uncensored "Heretic" variants are popular on both the LLM and image sides. Unsloth and Comfy-Org packaging shows the image stack maturing around ComfyUI.

**Caveat:** several high-like models show 0 or very low downloads (e.g., laya at 4,434 likes and 0 downloads). Treat those signals with caution.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: It is the community's clear default, and its ecosystem of quantizations and fine-tunes makes it a good base for benchmarking.
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**: Its 2-bit ternary approach at 27B is worth studying for local inference, given the large download count.
3. **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**: It is a practical speech-pipeline component from NVIDIA, with GGUF support for lightweight deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
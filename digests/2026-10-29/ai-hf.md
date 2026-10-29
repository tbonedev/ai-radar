# Hugging Face Trending Models Digest 2026-10-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-29 13:54 UTC

---

# Hugging Face Trending Models Digest — 2026-10-29

## 1. Today's Highlights

DeepSeek-V4.1-Flash-1017 leads the week with 3,692 likes. Its derivatives (GGUF, FP8 and abliterated variants) take four more slots in the top 30. Qwen3.8-27B has the most likes in the list (18,661) and the most downloads among the base language models (7.5M). Lightricks' LTX-2.5 video model (9,789 likes) and an uncensored Qwen-Image-2.1 GGUF (5,290 likes) show strong demand for local-first generation. Smaller releases include Liquid AI's LFM3 family at 1.7B–2B and NVIDIA's 4GB Nemotron-3.5-Bolt, which both target on-device use.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 3,692 | 131,062 | A multimodal (image-text-to-text) Flash model in the DeepSeek V4.1 line. It is trending because quantized and uncensored community versions appeared within days of release. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,661 | 7,509,924 | A 27B vision-language chat model from Qwen. It has the highest likes and downloads among the language models here, which points to wide adoption as a local-deployment size. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,226 | 16,598 | A conversational text-generation model with a new `flint` architecture. Its 1,226 likes on modest downloads suggest interest from researchers, and Unsloth has already published a GGUF build. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 893 | 10,163 | A 4B text-generation model with a custom `spark2_5` architecture. It is trending as a small model that fits consumer hardware. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 750 | 9,655 | A 33B Llama-architecture text-generation model. It is a larger dense option from a smaller lab. |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 478 | 15,738 | A multimodal Flash-tier model in the MiniMax M3 line. It is trending as a lower-cost release from a major Chinese lab. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 444 | 15,885 | The 1.7B text model in Liquid AI's third-generation LFM family. It is aimed at edge devices. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 240 | 57,228 | A Nemotron-3.5 model sized to about 4GB, with GGUF and PyTorch weights. Its downloads are high relative to its likes, which suggests practical on-device use. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 182 | 1,814 | A 2B any-to-any model that handles several modalities in one small network. It is early, with few downloads so far. |
| [LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B) | LiquidAI | 152 | 4,193 | A 2B vision-language model in the LFM3 family. It gives Liquid AI a multimodal option at the same size as its Omni model. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,789 | 2,269,999 | An open video-generation model covering image-to-video, text-to-video and video-to-video. It has the second-highest likes in the list and over 2.2M downloads. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,393 | 1,884,719 | Meta's Segment Anything 3, a mask-generation model with video support. It has nearly 1.9M downloads, which makes it a common building block for vision pipelines. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,290 | 2,172,670 | A GGUF-quantized, uncensored build of Qwen-Image-2.1 for ComfyUI. Its 2.1M+ downloads show demand for image generation on consumer GPUs. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,009 | 832,197 | A ComfyUI single-file release of the Flux 3 "klein" image model, supporting generation and editing. It has over 830K downloads. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,096 | 28,162 | A multi-speaker text-to-speech model from Fish Audio. It is trending for expressive, dialogue-style speech. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 821 | 14,950 | The SFT checkpoint of the MOSS-Image text-to-image model, in diffusers format. It is the official source for the new MOSS-Image family. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 541 | 3,401,045 | An Apache-2.0 ComfyUI single-file packaging of MOSS-Image. It has the highest download count in the list (3.4M) despite modest likes, which reflects pull from ComfyUI workflows. |
| [tencent/Hy-SimulMT-30B-A3B-FP8](https://huggingface.co/tencent/Hy-SimulMT-30B-A3B-FP8) | tencent | 454 | 396 | A 30B-A3B mixture-of-experts translation model in FP8, built for simultaneous machine translation. It is trending on novelty, since downloads are still very low. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 339 | 4,276 | A 30B-A4B mixture-of-experts speech recognition model on NeMo. It applies large-LLM scale to transcription. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 363 | 18,141 | Baidu's second-generation OCR vision-language model. It is trending as part of a wave of document-parsing releases. |
| [openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) | openbmb | 306 | 1,597 | A dedicated OCR and document-parsing model from the MiniCPM team. It is a new release, so downloads are still low. |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 265 | 2,808 | A Qwen3-based text-generation model aimed at DNA and biological sequences. It is notable as a domain model from Hugging Face's bio team. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 260 | 12,237 | A 4B Qwen3.5 fine-tune for generating three.js and other 3D code. It is trending because it focuses on one task at a size that runs locally. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,214 | 1,726,051 | An uncensored, coding-focused GGUF fine-tune of Qwen3.8-27B with MTP (multi-token prediction). It passed 1.7M downloads within a week of the base model's release. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 461 | 1,578,937 | A mixed-precision GGUF quantization of DeepSeek-V4.1-Flash using the GSQ and RCO methods. It has about 1.58M downloads, the most of any DeepSeek derivative. |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 470 | 9,787 | An uncensored FP8 variant of DeepSeek-V4.1-Flash. It is one of several refusal-removed derivatives. |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 332 | 28,763 | An abliterated GGUF build of DeepSeek-V4.1-Flash for llama.cpp. It is the second refusal-removed DeepSeek derivative in the list. |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 330 | 201,035 | Unsloth's GGUF conversion of RecursiveSI/flint. Its 201K downloads far exceed the base model's 16,598. |
| [XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) | XHToken | 235 | 179,258 | The official GGUF release of Spark-X2.6-4B. Its downloads are about 18x the base model's, as users take the llama.cpp-ready build. |
| [unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF) | unsloth | 145 | 90,640 | Unsloth's GGUF build of NVIDIA's Nemotron-3.5-Bolt-E4B. It has more downloads than NVIDIA's own repo (57,228). |

## 3. Ecosystem Signal

**Momentum:** Qwen and DeepSeek lead. Qwen3.8-27B tops the list in likes and base-model downloads, and it already has heavy fine-tuning (the DavidAU build passed 1.7M downloads). DeepSeek-V4.1-Flash-1017 has four community derivatives in the list. Qwen-Image and MOSS-Image show the same pattern in image generation.

**Open weights:** Every model here is open-weight. The momentum is in Chinese labs (DeepSeek, Qwen, MiniMax, Tencent, Baidu, OpenBMB), alongside Western small-model and efficiency work from Liquid AI and NVIDIA.

**Quantization and fine-tuning:** GGUF is the standard way to distribute these models. Of the 30 entries, 11 are GGUF or quantized builds, and several have far more downloads than their base models. Unsloth, ISTA-DASLab and community uncensoring or abliteration work appear repeatedly. ComfyUI packaging is similarly central for image models, and Comfy-Org's MOSS-Image has 3.4M downloads.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: It has the most community traction here (18,661 likes, 7.5M downloads). A 27B vision-language model is a reasonable baseline for local deployment, and it has many fine-tunes to compare against.
2. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)**: The GSQ and RCO mixed-precision approach is worth studying for how it balances quality and size on a large model. Its 1.58M downloads suggest the quantization works well in practice.
3. **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)**: A 2B any-to-any model is a useful test of how much multimodality fits in a small footprint. It is still early (1,814 downloads), so it is a chance to evaluate it before the crowd does.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
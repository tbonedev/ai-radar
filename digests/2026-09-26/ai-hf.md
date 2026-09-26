# Hugging Face Trending Models Digest 2026-09-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-26 12:01 UTC

---

# Hugging Face Trending Models Digest — 2026-09-26

## Today's Highlights

Qwen dominates this window: **Qwen3.8-27B** is the clear engagement leader (16,315 likes, 6.65M downloads), and **Qwen-Image-2.1** has spawned an entire derivative ecosystem — ComfyUI packaging, an uncensored GGUF fork, LoRAs, and a standalone quantized text encoder — that collectively pulls far more downloads than the original release. Video generation takes a step forward with **Lightricks/LTX-2.5**, a single model spanning image-to-video, text-to-video, video-to-video, and image-text-to-video. Xiaomi's **MiMo-V2.6** family ships a full RL-tuned multimodal lineup (Pro, Flash, and a Qwen-distilled variant) simultaneously. Extreme quantization research continues to move huge volumes, led by **prism-ml's ternary 2-bit 27B GGUF**, which tops the entire list in raw downloads. Several new classifier models (laya, openjev) show striking likes-to-downloads mismatches — early hype well ahead of adoption.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,315 | 6,652,309 | Flagship image-text-to-text conversational model and the single highest-engagement release in this window. It has become the reference base for the surrounding quantization and fine-tune ecosystem below. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,712 | 1,073,493 | Tagged `qwen4_exp`, positioning it as an early preview of Qwen's next architecture generation in a fast, low-latency form. Strong likes despite being a "Next" preview suggest active community anticipation of Qwen4. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,760 | 640,577 | An efficient "Flash" variant of DeepSeek V4.1 that adds native image-text-to-text capability. Solid adoption numbers reflect continued demand for lighter-weight DeepSeek releases. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,699 | 43,947 | A 29B conversational model with a 4B-active MoE-style naming convention. Still early in adoption relative to its likes count. |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 336 | 3,336 | Yandex's 80B foundation base model with a 3B-active MoE configuration and custom inference code. One of the few non-Chinese, non-US foundation base releases trending. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 687 | 5,590 | A text-generation model built on the Qwen3.5 text backbone. Literary branding aside, it's an early-stage community release with modest but real downloads. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 513 | 74,497 | RL-tuned "Pro" tier of Xiaomi's MiMo V2.6 multimodal text-generation line. Part of a coordinated multi-tier launch alongside the Flash and Distill variants below. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 471 | 23,000 | The lightweight, faster-inference RL sibling in the MiMo V2.6 lineup. Lower downloads than Pro suggest the flagship variant is currently favored. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,156 | 1,604,804 | A unified video model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video generation. Rare breadth of task coverage in a single checkpoint is driving strong adoption. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,369 | 48,361 | Qwen's official text-to-image and image-editing diffusion model. Its comparatively modest official download count versus the derivatives below shows most real-world usage flows through community repackagings. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 750 | 3,641,785 | A single-file ComfyUI packaging of Qwen-Image-2.1. It pulls roughly 75x the downloads of the original Qwen release, underscoring how much adoption is mediated by ComfyUI distribution. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,245 | 11,063 | A compact 9B vision-language model explicitly targeting spatial reasoning. Notable for punching above its parameter count in likes relative to larger VLMs. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 355 | 19,620 | NVIDIA's speaker diarization / voice-activity-detection model, shipped in both NeMo and GGUF formats. Dual-format release broadens deployment beyond the NeMo toolkit into edge/local pipelines. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 696 | 7,859 | A streaming ASR model whose "Infinite" naming signals design for unbounded-length audio transcription. Still early in downloads but drawing solid community interest. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 418 | 7,155 | An ASR model built on a Qwen3-ASR backbone as part of NetEase Youdao's Confucius model line. Represents continued Chinese enterprise investment in speech recognition. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 243 | 0 | A design-focused text-to-image model from Ant Group's inclusionAI. Zero recorded downloads mark it as a just-published release still pre-adoption. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 3,785 | 0 | A text-classification model tagged "system-one" and "calibrated-decisions," suggesting a novel fast-decision/calibration architecture. It has the highest like count of any non-flagship model here despite zero downloads — pure early-hype signal. |
| [StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR) | StarDoc-AI | 322 | 26,152 | An OCR-specialized model built on the Qwen2.5-VL backbone. Solid download traction reflects steady practical demand for document/OCR tooling. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 587 | 0 | A Qwen3.5-based NLI cross-encoder for text classification. Likes far outpace downloads, indicating attention that hasn't yet converted into usage. |
| [convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 283 | 0 | A multilingual, mmBERT-based extension of the laya classifier line. Shares the same zero-download, hype-first pattern as its sibling model. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 244 | 128 | A small multimodal classifier built on an unreleased "gemma4_unified" base. Its base-model tag hints at community access to unreleased next-gen Gemma internals. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,638 | 6,832,629 | Unsloth's standard GGUF quantization of the flagship Qwen3.8-27B. Downloads nearly match the base model itself, showing quantized local inference is just as popular as the original. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,110 | 3,247,527 | An extreme 2-bit ternary quantization of a 27B model for llama.cpp. It posts the single highest download count of any model in this entire trending window. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,868 | 876,673 | An uncensored GGUF fork of Qwen-Image-2.1 built for ComfyUI. Downloads run roughly 18x higher than the official Qwen-Image-2.1 release itself. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,719 | 1,560,929 | Applies novel GSQ + RCO mixed-precision quantization research to Qwen3.8-27B. Strong downloads suggest researchers and practitioners are actively benchmarking new quantization techniques. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,193 | 1,603,479 | An elaborately merged, uncensored community fine-tune of Qwen3.8-27B stacking multiple fine-tuning techniques. Sizable download count despite the niche "heretic/uncensored" positioning. |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 232 | 170,469 | Unsloth's GGUF quantization extending its quant line from text models into the new Qwen-Image-2.1 diffusion model. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 267 | 137,283 | A standalone fp8-quantized text-encoder component for the Qwen-Image-2.1 ComfyUI pipeline. Shows quantization activity is drilling down to individual pipeline components, not just full models. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 264 | 101,512 | A "turbo" LoRA that accelerates Qwen-Image-2.1 inference. Represents lightweight LoRA-based speed optimization rather than a full retrain. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 484 | 7,905 | Distills the larger MiMo-V2.6 multimodal line down onto a 9B Qwen3.5 backbone. Completes Xiaomi's simultaneous Pro/Flash/Distill release strategy for the MiMo V2.6 family. |

## Ecosystem Signal

Qwen's centrality is the defining pattern this cycle: 9 of the 30 trending entries derive from or extend a Qwen base — spanning the official Qwen3.8-27B and Qwen-Image-2.1 releases, unsloth and ISTA-DASLab quantizations, ComfyUI packaging, an uncensored fork, and a turbo LoRA. This suggests Qwen has become the default substrate for community experimentation rather than just another model family. Every trending model here ships open weights (safetensors or GGUF), with GGUF format especially prominent for local and edge inference via llama.cpp and ComfyUI. Quantization activity is both intense and technically diverse: ternary 2-bit (prism-ml), mixed-precision GSQ/RCO research (ISTA-DASLab), fp8 component-level quantization (pottokao), and standard GGUF (unsloth) are all trending in parallel, with the ternary quant topping total downloads outright. Chinese labs (Qwen, DeepSeek, Xiaomi MiMo, NetEase Youdao, TaichuAI) lead multimodal image-text-to-text output, while Western entrants (Lightricks, NVIDIA, Yandex) cluster around video, audio, and foundation-model niches. Community fine-tuning skews toward "uncensored"/heretic merges over task-specialized tuning, and several new classifiers show high likes with zero downloads — social signal running ahead of real adoption.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear engagement leader and now the base for an entire derivative ecosystem; worth studying both as a model and as a case study in how fast a release can spawn quantizations and forks.
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — pushes 2-bit ternary quantization to over 3.2M downloads, a useful reference point for how far extreme compression can go before quality degrades.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — a rare single model unifying image-to-video, text-to-video, video-to-video, and image-text-to-video, worth testing for consolidated video-generation workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Hugging Face Trending Models Digest 2026-09-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-25 12:31 UTC

---

# Hugging Face Trending Models Digest — 2026-09-25

## Today's Highlights

Qwen's ecosystem dominates this week: **Qwen3.8-27B** tops the chart with 16,243 likes and 6.5M+ downloads, and its release has already spawned a dense quantization tail from unsloth, ISTA-DASLab, and DavidAU. **Qwen-Image-2.1** shows a similar pattern — the base model, a ComfyUI single-file repackage, and an "uncensored" GGUF fork all landed in the top 10. XiaomiMiMo shipped a full **MiMo-V2.6** family in one week (Pro-RL, Flash-RL, and a Distill-Qwen-9B variant), signaling a coordinated multi-size RL-tuned rollout. Elsewhere, **DeepSeek-V4.1-Flash** and Lightricks' **LTX-2.5** video model gained strong traction, while ternary 2-bit and MLX quantizations continue pushing extreme compression for edge inference.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,243 | 6,579,319 | Qwen's flagship conversational model, combining strong text generation with image-text-to-text capability. It leads this week's chart by a wide margin and anchors a large downstream quantization ecosystem. |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,693 | 846,820 | A faster "Flash-Next" preview built on a new `qwen4_exp` architecture tag, hinting at Qwen4 groundwork. Strong early adoption suggests interest in a lighter-weight successor to Qwen3.8. |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,737 | 621,396 | A fast, image-text-to-text variant of DeepSeek's V4.1 line. It's drawing attention as a lower-latency alternative to DeepSeek's full-size flagship models. |
| [Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,664 | 42,950 | A 29B mixture-style ("A4B") conversational text-generation model from XingChen-AGI. Solid early likes-to-download ratio suggests community curiosity ahead of broad deployment. |
| [MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 454 | 6,652 | A 9B distilled version of MiMo-V2.6 built on the Qwen architecture. Part of XiaomiMiMo's coordinated V2.6 family launch alongside Pro-RL and Flash-RL. |
| [MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 486 | 42,062 | The top-tier RL-tuned model in Xiaomi's MiMo-V2.6 lineup, with multimodal tagging alongside text generation. Represents the flagship of a same-week three-model family release. |
| [MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 451 | 20,473 | The lighter, faster RL-tuned sibling to MiMo-V2.6-Pro-RL. Higher downloads than the Pro variant suggest developers are favoring the cheaper option for experimentation. |
| [AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 329 | 2,911 | Yandex's 80B foundation base model using custom code and an "A3B" activation scheme. A rare large-scale open-weight base release from a non-Chinese, non-US lab this week. |
| [Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 651 | 4,978 | A text-generation model built on Qwen3.5 text architecture. Modest download count relative to likes suggests it's still in early evaluation by the community. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,263 | 42,469 | Qwen's second-generation text-to-image model with both generation and editing support. It's the base model behind a wide fan-out of ComfyUI and GGUF derivatives this week. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,056 | 1,598,133 | A versatile video model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video in one release. Its 1.6M downloads make it one of the most heavily used generation models on the list. |
| [ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,043 | 9,498 | A 9B vision-language model emphasizing spatial reasoning as a core capability. Positions itself as a compact multimodal alternative to larger VLMs. |
| [YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 997 | 24,655 | A 3B text-to-audio music generation model with symbolic planning and agentic editing features. Notable for combining music generation with iterative, agent-driven refinement. |
| [Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 237 | 0 | A design-focused text-to-image model from inclusionAI's Ming series. Zero downloads alongside real likes suggest it just published and hasn't seen adoption yet. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 3,539 | 0 | A text-classification model built around "calibrated-decisions" and a "system-one" reasoning tag. High likes with zero downloads suggest strong pre-release buzz ahead of general availability. |
| [Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 312 | 11,459 | NVIDIA's NeMo-based speaker diarization model using audio-frame classification. A specialized addition to the Nemotron line targeting voice-activity and speaker-segmentation workloads. |
| [Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 401 | 5,827 | A Qwen3-ASR-based speech recognition model from NetEase Youdao's Confucius series. Reflects continued investment in Chinese-market ASR built on open base models. |
| [Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 476 | 2,853 | A streaming automatic-speech-recognition model designed for effectively unbounded audio input. The "Infinite" streaming angle differentiates it from fixed-window ASR models. |
| [openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 566 | 0 | An NLI cross-encoder built on Qwen3.5 for classification tasks. Pre-download-stage likes indicate early community interest in an open jailbreak/eval classifier. |
| [laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 258 | 0 | The multilingual variant of convaiinnovations' laya classifier, built on mmBERT. Extends the calibrated-decision classification approach beyond English. |
| [Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 215 | 0 | A merged multimodal text-classification model combining multiple source models. Represents community model-merging activity applied to classification rather than generation. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,602 | 6,938,321 | Unsloth's GGUF quantization of the flagship Qwen3.8-27B, already outpacing the base model's own downloads. Its 6.9M downloads make it the single most-downloaded item in this week's list. |
| [Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,063 | 3,109,078 | A 27B model quantized to 2-bit ternary precision via llama.cpp GGUF. Demonstrates aggressive compression while retaining over 3.1M downloads worth of community trust. |
| [Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,708 | 715,906 | An uncensored GGUF fork of Qwen-Image-2.1 packaged for ComfyUI. High downloads reflect strong demand for unrestricted image-generation variants. |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,681 | 1,510,016 | A research-grade GGUF quantization of Qwen3.8-27B using GSQ/RCO mixed-precision methods. Signals academic interest in advancing quantization techniques beyond standard GGUF recipes. |
| [DavidAU/...-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,170 | 1,546,398 | An elaborately named "Heretic-Uncensored" GGUF fine-tune fusion of Qwen3.8-27B for coding use cases. Over 1.5M downloads show sustained appetite for DavidAU's uncensored, coder-oriented merges. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 707 | 3,266,380 | A diffusion single-file repackaging of Qwen-Image-2.1 for direct ComfyUI use. Its 3.3M downloads outstrip the original base model, underscoring ComfyUI's role as a distribution channel. |
| [Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 371 | 54,097 | The Apple Silicon MLX port of prism-ml's 2-bit ternary Bonsai model. Extends the same extreme-compression approach to local Mac inference. |
| [Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 567 | 0 | A small 1B Qwen2.5 fine-tune using RLCD with structured and constrained parallel decoding, targeting Apple Silicon via MLX. Notable for combining a lightweight base with advanced decoding-time control techniques. |
| [Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 250 | 126,393 | A quantized fp8 GGUF text-encoder component split out from Qwen-Image-2.1 for ComfyUI pipelines. Reflects the trend of modularizing diffusion model components for mix-and-match quantization. |

## Ecosystem Signal

The Qwen family continues to be the ecosystem's center of gravity — Qwen3.8-27B and Qwen-Image-2.1 each anchor a cluster of derivative GGUF, MLX, and ComfyUI repackagings, several of which (unsloth's GGUF, Comfy-Org's single-file build) now out-download their own base models. Chinese labs dominate the list overall — Qwen, DeepSeek, XiaomiMiMo, netease-youdao, and TaichuAI account for the majority of entries — while Western open-weight contributions are comparatively sparse (nvidia, yandex, Lightricks). Quantization activity is intense and increasingly specialized: beyond standard GGUF, this week features ternary 2-bit compression, MLX ports for Apple Silicon, and research-grade mixed-precision (GSQ/RCO) quantization from ISTA-DASLab. A parallel "uncensored"/"heretic" fine-tuning trend is visible across both image and text models, indicating sustained community demand for unrestricted variants outside vendor safety tuning. Multimodal tagging (image-text-to-text) is also creeping into what are functionally text-first LLMs, reflecting vendors' push toward unified vision-language interfaces by default.

## Worth Exploring

- **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear flagship of the week, worth studying both for its own capabilities and for the dense quantization/fine-tune ecosystem it has already spawned.
- **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — one of the most functionally complete video models on the list, supporting image-to-video, text-to-video, and video-to-video in a single release.
- **[Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — a strong case study in extreme 2-bit ternary quantization at 27B scale, relevant for anyone tracking the limits of local-inference compression.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
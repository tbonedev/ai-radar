# Hugging Face Trending Models Digest 2026-09-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-27 12:40 UTC

---

# Hugging Face Trending Models Digest — 2026-09-27

## Today's Highlights

Qwen dominates the charts today: **Qwen3.8-27B** tops the entire board with 16,383 likes and 6.7M downloads, while the **Qwen-Image-2.1** family spawns a sprawling ecosystem of GGUF quants, LoRAs, and ComfyUI packages across five separate listings. Xiaomi's **MiMo-V2.6** line (Pro-RL, Flash-RL, Distill-Qwen-9B) shows a coordinated multi-tier release strategy spanning full, distilled, and multimodal variants. Quantization activity is unusually intense — ternary (2-bit) and mixed-precision GGUF techniques (GSQ-RCO) are being applied to frontier-scale models within days of base-model release. DeepSeek's **V4.1-Flash** and Yandex's **AliceAI-Foundation-80B-A3B** signal continued momentum for large-scale open-weight foundation models from non-US labs.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,383 | 6,727,629 | The single most-liked model in this trending window, a 27B image-text-to-text conversational model built on the qwen3_5 architecture. Its 6.7M downloads make it the de facto reference checkpoint that the rest of the ecosystem (four separate GGUF/quant derivatives below) is built around. |
| [Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,774 | 45,028 | A 29B mixture-of-experts-style conversational model (A4B suggests ~4B active parameters) from a newer Chinese lab. Strong early engagement (1,774 likes) for a first appearance suggests active community sampling of sparse-activation architectures. |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,789 | 651,078 | A fast/distilled variant of DeepSeek's V4.1 line with both text-generation and image-text-to-text capability. Over 651K downloads in the trending window reflects DeepSeek's continued pull as a low-cost, high-throughput open-weight alternative. |
| [MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 542 | 75,079 | The flagship RL-tuned checkpoint in Xiaomi's MiMo-V2.6 family, with multimodal capability layered onto a text-generation backbone. Part of a coordinated three-model release (Pro-RL, Flash-RL, Distill-Qwen-9B) targeting different latency/quality tradeoffs. |
| [MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 487 | 25,661 | The lightweight, low-latency sibling to MiMo-V2.6-Pro-RL, also RL-tuned and multimodal-capable. Positioned for faster inference at the cost of some capability versus the Pro variant. |
| [AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 340 | 3,456 | Yandex's 80B sparse foundation model (custom architecture code required) entering the trending list as a base checkpoint rather than an instruction-tuned release. Signals continued Russian-market investment in large-scale open-weight pretraining. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,445 | 52,804 | Qwen's latest text-to-image and image-editing diffusion model, the base checkpoint behind at least five derivative listings in this digest alone (GGUF quants, LoRAs, ComfyUI packages). Its dual generation/editing capability is driving unusually broad downstream adoption. |
| [MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 514 | 8,839 | A 9B image-text-to-text model distilled from the MiMo-V2.6 line onto a Qwen backbone. Offers a smaller, vision-capable entry point into Xiaomi's MiMo family for resource-constrained deployment. |
| [ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,677 | 11,612 | A 9B vision-language model explicitly tagged for spatial reasoning, an increasingly sought-after VLM capability for robotics and embodied-AI applications. Strong likes-to-download ratio suggests high community interest relative to its current adoption stage. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,279 | 1,601,089 | Lightricks' latest video model supports image-to-video, text-to-video, video-to-video, and image-text-to-video in one single-file diffusion package. 1.6M downloads make it one of the most widely adopted generative video models in this window. |
| [Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 282 | 0 | A brand-new text-to-image model from Ant Group's inclusionAI, explicitly targeting design-oriented image generation. Zero downloads alongside real likes indicates a same-day release still propagating through the Hub's CDN/indexing. |
| [LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 234 | 1,740 | Apple's own 9B vision-language model release, built on a qwen3_5 base. Notable simply for being a rare direct Apple weight release on the Hub rather than a research-paper-only artifact. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 3,999 | 0 | A text-classification model tagged "calibrated-decisions," suggesting a focus on decision-confidence calibration rather than raw accuracy. Nearly 4,000 likes with zero recorded downloads is a striking mismatch, pointing to a very recent release attracting attention before adoption catches up. |
| [Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 967 | 19,434 | A streaming automatic-speech-recognition model whose "Infinite" naming implies unbounded-length audio handling. Positions itself against traditional chunked ASR pipelines for long-form transcription use cases. |
| [TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR) | StarDoc-AI | 524 | 27,837 | A qwen2_5_vl-based OCR model specialized for document text extraction via image-text-to-text. Reflects continued specialization of general VLM backbones for narrow, high-value enterprise tasks like OCR. |
| [Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 388 | 22,514 | NVIDIA's speaker-diarization model built on the NeMo framework with GGUF support for edge deployment. Targets audio-frame-level speaker classification, a common bottleneck in call-center and meeting-transcription pipelines. |
| [CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 355 | 766 | An 8B contrastive-learning-based reranker/verifier model, a category seeing renewed interest as RAG and agentic pipelines need better retrieval verification. Very low downloads relative to likes suggests early-stage community awareness rather than production use yet. |
| [openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 605 | 0 | A cross-encoder NLI-style classification model built on a qwen3.5 backbone. Zero downloads with meaningful likes again suggests a same-day release still propagating. |
| [Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 431 | 8,243 | NetEase Youdao's ASR model built on a qwen3_asr backbone, part of their "Confucius" model line. Targets Chinese-language speech recognition with an R2T2 (likely retrieval/refinement) architecture twist. |
| [Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 263 | 248 | A text-classification model built on a "gemma4_unified" base with image-text-to-text tagging, suggesting a multimodal classifier rather than a pure text model. Very early-stage adoption numbers indicate a fresh community release. |
| [laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 300 | 0 | The multilingual variant of convaiinnovations' laya classifier, built on an mmbert backbone. Extends the calibrated-decision classification approach to non-English languages. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,007 | 964,220 | A community-modified, uncensored GGUF quantization of Qwen-Image-2.1 packaged for ComfyUI. Nearly 1M downloads makes it one of the most-adopted community derivatives in this entire digest, far outpacing many official releases. |
| [Qwen-Image-2.1 (Comfy-Org)](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 791 | 3,987,373 | A ComfyUI-native single-file repackaging of Qwen-Image-2.1, officially tagged as a base-model finetune. At nearly 4M downloads, it's the single most-downloaded model in this entire trending list, underscoring ComfyUI's role as the dominant on-ramp for image-model adoption. |
| [Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,164 | 3,343,748 | A 27B model quantized to 2-bit ternary precision via llama.cpp/GGUF, one of the most aggressive compression approaches on the list. 3.3M downloads shows strong demand for running large models on consumer-grade hardware. |
| [Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 311 | 133,151 | A "turbo" LoRA fine-tune of Qwen-Image-2.1 for faster text-to-image and image-to-image generation. Viggle's speed-focused adaptation targets latency-sensitive creative workflows. |
| [Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 290 | 145,246 | An FP8-quantized GGUF conversion of just the Qwen-Image-2.1 text encoder component, built for ComfyUI pipelines. A narrowly-scoped optimization that lets users swap encoder precision independent of the diffusion backbone. |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,750 | 1,608,439 | A research-grade mixed-precision quantization of the flagship Qwen3.8-27B using a GSQ/RCO scheme from ISTA's DASLab. 1.6M downloads for a research quantization method signals strong practitioner interest in advanced compression research beyond standard GGUF. |
| [Qwen-Image-2.1-GGUF (unsloth)](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 259 | 194,341 | Unsloth's standard GGUF quantization of Qwen-Image-2.1, extending their efficiency tooling from LLMs into diffusion image models. Reflects Unsloth's expanding footprint beyond pure text-generation quantization. |
| [Qwen3.8-27B-GGUF (unsloth)](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,667 | 6,651,662 | Unsloth's GGUF quantization of the chart-topping Qwen3.8-27B, with 6.65M downloads nearly matching the original model's own download count. Demonstrates that a large fraction of Qwen3.8-27B's real-world usage happens through quantized community builds rather than the full-precision original. |

## Ecosystem Signal

Qwen is the dominant gravitational center of today's trending list: **Qwen3.8-27B** and **Qwen-Image-2.1** together anchor over a dozen derivative entries — GGUF quants, LoRAs, text-encoder-only extractions, and ComfyUI repackagings — with community/third-party downloads (abenzerps, Comfy-Org, unsloth, ISTA-DASLab) frequently exceeding the official checkpoints' own traction. This confirms a now-familiar pattern: base-model release velocity from top labs is matched almost immediately by an ecosystem of quantization and packaging work, with **unsloth** and **Comfy-Org** acting as key distribution multipliers. Open-weight momentum remains strong across Chinese labs (Qwen, DeepSeek, Xiaomi MiMo, NetEase Youdao) and is joined by Yandex and Apple entries, while genuinely novel quantization research (ternary 2-bit, GSQ-RCO mixed-precision) is being applied to frontier-scale models within days rather than months of release — a sign that the compression research community has largely closed the gap with base-model release cadence.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear consensus pick given its likes (16,383) and download volume (6.7M); worth studying both directly and via its Unsloth GGUF quant to compare full-precision vs. compressed quality.
2. **[Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — the most technically interesting quantization here, pushing a 27B model down to 2-bit ternary precision; a strong case study in extreme compression tradeoffs.
3. **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — the most capability-dense multimodal release, unifying image-to-video, text-to-video, video-to-video, and image-text-to-video in a single-file package with 1.6M downloads already validating real-world adoption.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
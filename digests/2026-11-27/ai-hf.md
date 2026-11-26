# Hugging Face Trending Models Digest 2026-11-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-26 17:29 UTC

---

# Hugging Face Trending Models Digest — 2026-11-27

## Today's Highlights

Thinking Machines' **Inkling-2-Mini** dominates the board. The base model has 6,181 likes, and at least six community derivatives sit alongside it: GGUF builds, an uncensored variant, an abliterated variant and a quantized MoE build. Qwen3.8-27B is the most-liked text model at 21,834 likes and 6.0M downloads, and its quantized and fine-tuned offshoots also trend. Lightricks' LTX-2.5 leads in video generation (13,525 likes, 3.0M downloads). Chinese labs (Tencent, Baidu, inclusionAI, SenseTime) and Aleph-Alpha also released new MoE and reasoning models.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 6,181 | 96,527 | A multimodal image-text-to-text conversational model built on the `inkling2_loop` architecture. It is the origin of the day's largest derivative wave. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,834 | 6,047,011 | A 27B multimodal chat model from the Qwen family. It has the most likes and downloads of any text model on the list. |
| [inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air) | inclusionAI | 246 | 1,467 | An MIT-licensed vision-language MoE (`bailing_moe_v3_vl`) that ships eval results. The permissive license makes it easy to adopt. |
| [inclusionAI/LingSante-3.1-flash](https://huggingface.co/inclusionAI/LingSante-3.1-flash) | inclusionAI | 200 | 1,487 | A hybrid-architecture (`bailing_hybrid`) text-generation model with custom code. It is a "flash" tier aimed at low-latency use. |
| [Aleph-Alpha/Kolibri-1.1](https://huggingface.co/Aleph-Alpha/Kolibri-1.1) | Aleph-Alpha | 168 | 837 | A reasoning-focused MoE that runs on vLLM. It is a rare European entry on the list. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 721 | 10,479 | A Hunyuan v4 "flash" multimodal model in Transformers format. It has the most likes among the new Chinese-lab releases. |
| [baidu/ERNIE-5.5-Flash-Preview](https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview) | baidu | 321 | 1,193 | A preview of the ERNIE 5.5 MoE line in its fast tier. It signals Baidu's continued open-weight releases. |
| [KRAFTON/Raon-1-mini](https://huggingface.co/KRAFTON/Raon-1-mini) | KRAFTON | 136 | 264 | A small text-generation model from the game publisher KRAFTON. It is an uncommon entry from the gaming industry. |
| [MemTensor/MemT-1.0-Pro](https://huggingface.co/MemTensor/MemT-1.0-Pro) | MemTensor | 135 | 806 | A Nemotron-H-based text model with custom code, apparently aimed at memory-centric use. It adds to the hybrid Mamba-style architecture trend. |
| [sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) | sensenova | 757 | 3,268 | A 9B multimodal model using a "loop" architecture. It is compact enough for local use. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,525 | 3,041,405 | An open video model covering image-to-video, text-to-video and video-to-video. It has the highest like count outside the LLM category. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 935 | 15,244 | An audio-to-audio model for speech denoising and voice isolation. It is a practical tool for audio cleanup. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 1,041 | 10,026 | A 4B full-duplex speech-to-speech model. It stands out because it can listen and speak at the same time. |
| [nvidia/Nemotron-Labs-Image-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B) | nvidia | 237 | 218 | A 30B-total, 3B-active MoE text-to-image model built on the Nemotron-H backbone. It shows NVIDIA moving into image generation. |
| [sand-ai/MAGI-2-preview](https://huggingface.co/sand-ai/MAGI-2-preview) | sand-ai | 258 | 0 | A preview of a model that generates video with audio from text or images. It has no downloads yet, so it is trending on interest alone. |
| [Lakonik/pi-H3](https://huggingface.co/Lakonik/pi-H3) | Lakonik | 310 | 73,578 | A distilled flow-matching model for joint audio-video generation. Its 73,578 downloads suggest quick uptake. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 1,273 | 0 | A metric monocular depth estimator that also handles video depth. It is Apple's follow-up to Depth Pro. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 2,048 | 21,394 | A 3D human mesh recovery and pose estimation model with a DINOv3 backbone. It extends the SAM family into 3D. |
| [llamaindex/OCRia-nano-1](https://huggingface.co/llamaindex/OCRia-nano-1) | llamaindex | 256 | 126 | A small ONNX OCR model that converts PDFs to Markdown. It is designed for lightweight document parsing. |
| [llamaindex/OCRia-1](https://huggingface.co/llamaindex/OCRia-1) | llamaindex | 110 | 419 | A larger Qwen3.5-based OCR and document-to-text model. It is the full-size counterpart of OCRia-nano-1. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 1,441 | 2,445,633 | The Unsloth GGUF build of the Inkling-2-Mini MoE. Its 2.4M downloads are about 25 times the base model's. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 887 | 762,491 | An uncensored LoRA-based GGUF variant of Inkling-2-Mini for llama.cpp. It draws heavy download interest. |
| [orcarouter/Inkling-2-Mini-abliterated-GGUF](https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF) | orcarouter | 249 | 12,157 | An abliterated (refusal-removed) GGUF of Inkling-2-Mini for local use. It is another example of the quick uncensoring cycle. |
| [strata-engine/Inkling-2-Mini-Strata](https://huggingface.co/strata-engine/Inkling-2-Mini-Strata) | strata-engine | 192 | 2,965 | A quantized MoE build of Inkling-2-Mini using the Strata engine. It is an alternative to GGUF-based compression. |
| [prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) | prism-ml | 470 | 59,366 | A 2-bit ternary GGUF of a 27B model for llama.cpp. It pushes extreme compression. |
| [nari-labs/Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) | nari-labs | 181 | 14,337 | A quantized Qwen3.8-27B tuned for coding-agent use. It targets local agentic coding. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 1,131 | 3,844 | A PEFT adapter trained with async GRPO to fit the pi agent harness. Its 1,131 likes are high for so few downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 4,397 | 1,873,950 | A merged, uncensored coding-oriented Qwen3.8-27B GGUF with multi-token prediction. It is the most-liked Qwen community fine-tune. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 1,182 | 189,735 | A fine-tune of MiniMaxAI/MiniMax-H3 under a custom license. It shows that MiniMax-H3 is attracting derivatives. |
| [Sentinel7/h3](https://huggingface.co/Sentinel7/h3) | Sentinel7 | 2,092 | 0 | An unlabeled, not-for-all-audiences repo with no downloads. Its 2,092 likes with zero downloads suggest its ranking may not reflect real usage. |

## Ecosystem Signal

Two families dominate. Inkling-2-Mini has produced at least five community variants in a few days, covering GGUF, uncensored, abliterated and quantized-MoE builds. Qwen3.8-27B is the other, with a large base model plus coding, agent-RL and merged derivatives. Fine-tuning is shifting toward agent harnesses (pi-adapted, NariQ coding agent) and away from plain chat tuning.

Open weights remain the norm. Chinese labs released MoE "flash" tiers, and Aleph-Alpha and NVIDIA released open models of their own. On quantization, ternary 2-bit GGUF and engine-specific formats (Strata) are being tested alongside standard GGUF. Uncensoring happens within days of a release. Some likes-to-downloads ratios, such as Sentinel7/h3 and MAGI-2-preview, point to hype or ranking noise. Treat them cautiously.

## Worth Exploring

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — It is an open video model with 3M downloads and a broad set of modes (text, image and video to video). Try it as a local alternative to closed video APIs.
2. **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** — It is a study case in RL-adapting an open model to a specific agent harness using async GRPO. The PEFT adapter is lightweight to test.
3. **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — A small full-duplex speech-to-speech model is a good way to explore real-time voice agents without a large GPU.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
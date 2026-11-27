# Hugging Face Trending Models Digest 2026-11-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-27 17:10 UTC

---

# Hugging Face Trending Models Digest — 2026-11-28

## Today's Highlights

Thinking Machines' **Inkling-2-Mini** dominates the week. The base model has 6,398 likes, and at least six community derivatives sit in the top 30: GGUF, uncensored, abliterated and mixed-precision quantizations. Lightricks' **LTX-2.5** (13,676 likes) leads video generation, and Alibaba's **Qwen3.8-27B** (21,894 likes, 5.75M downloads) is the most-liked model on the list. Open-weight releases are broad: Apple's DepthPro2, Meta's SAM 3D Body, NVIDIA's Nemotron-Labs-Image and Black Forest Labs' FLUX.3 Klein all appear. Fine-tunes of MiniMax-H3 and Qwen3.8 also trend strongly.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,894 | 5,752,506 | A 27B multimodal (image-text-to-text) chat model from the Qwen3.8 family. It has the most likes and downloads on the list, and many fine-tunes are built on it. |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 6,398 | 155,741 | An image-text-to-text model using the `inkling2_loop` architecture. It is the base for a large share of this week's derivatives. |
| [baidu/ERNIE-5.5-Flash-Preview](https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview) | baidu | 367 | 2,609 | A preview of Baidu's lightweight MoE text-generation model. It extends the ERNIE 5.5 line toward lower-latency use. |
| [Aleph-Alpha/Kolibri-1.1](https://huggingface.co/Aleph-Alpha/Kolibri-1.1) | Aleph-Alpha | 193 | 1,725 | A reasoning-focused MoE model that is tagged for vLLM serving. It is a European open-weight entry among the larger Chinese and US releases. |
| [inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air) | inclusionAI | 277 | 2,403 | A vision-language MoE model (`bailing_moe_v3_vl`) released under the MIT license. It carries eval results on its model card. |
| [KRAFTON/Raon-1-mini](https://huggingface.co/KRAFTON/Raon-1-mini) | KRAFTON | 179 | 1,477 | A small text-generation model from the game publisher KRAFTON. It shows a games company releasing its own open LLM. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,676 | 3,080,701 | An open video model covering image-to-video, text-to-video and video-to-video. It has the most likes of any generation model this week. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 4,740 | 842,966 | A ComfyUI-ready single-file build of FLUX.3 Klein for image generation and editing. The packaging makes it easy to use locally. |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 1,336 | 0 | Apple's metric monocular depth model, now with video depth. It has 1,336 likes with no recorded downloads, which suggests the weights are gated or new. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 2,136 | 21,947 | A Meta model for 3D human mesh recovery and pose estimation, using a DINOv3 backbone. It is trending as a successor to the SAM 3D line. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 1,064 | 10,879 | A 4B full-duplex speech-to-speech model. It can listen and speak at the same time. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 983 | 20,510 | An audio-to-audio model for speech denoising and voice isolation. It is a practical tool for cleaning audio before ASR or voice cloning. |
| [Lakonik/pi-H3](https://huggingface.co/Lakonik/pi-H3) | Lakonik | 341 | 97,525 | A flow-matching distillation for joint text-to-audio-video generation. Its download count is high for a model with 341 likes. |
| [sand-ai/MAGI-2-preview](https://huggingface.co/sand-ai/MAGI-2-preview) | sand-ai | 329 | 0 | A preview of a model that generates audio and video together from text or image inputs. It follows the MAGI line of autoregressive video models. |
| [nvidia/Nemotron-Labs-Image-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B) | nvidia | 303 | 1,692 | A 30B text-to-image model with 3B active parameters, built on the `nemotron_h` architecture. It is NVIDIA's MoE approach applied to image generation. |
| [kandinskylab/Kandinsky-ImageSR-2.0](https://huggingface.co/kandinskylab/Kandinsky-ImageSR-2.0) | kandinskylab | 165 | 582 | A diffusers-based image super-resolution model. It is a focused upscaling release in the Kandinsky family. |
| [inclusionAI/Ming-Image-0.2-Design](https://huggingface.co/inclusionAI/Ming-Image-0.2-Design) | inclusionAI | 138 | 416 | A design-oriented text-to-image model built on a MoE backbone. It is aimed at layout and design generation. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [llamaindex/OCRia-nano-1](https://huggingface.co/llamaindex/OCRia-nano-1) | llamaindex | 319 | 626 | A small ONNX OCR model that converts PDFs to Markdown, for use with LiteParse. It is built for document-parsing pipelines. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 1,161 | 4,362 | A PEFT adapter for Qwen3.8-27B trained with GRPO (async-GRPO, via TRL). It is tuned for the `pi` agent harness. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 4,443 | 1,919,755 | A heavily merged, uncensored, coding-focused GGUF fine-tune of Qwen3.8-27B. It has the most likes of any derivative on the list. |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 1,558 | 3,302,340 | The Unsloth GGUF quantization of the MoE Inkling-2-Mini. It has the highest download count among the quantizations. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 1,326 | 539,421 | A fine-tune of MiniMaxAI/MiniMax-H3 under a custom license. It shows that MiniMax-H3 is also being fine-tuned by the community. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 990 | 1,059,763 | A LoRA-based uncensored GGUF of Inkling-2-Mini for llama.cpp. It passed 1M downloads within a week. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 1,026 | 602,227 | A quantized, uncensored Qwen-Image-2.1 in both safetensors and GGUF. It brings image-model quantization to consumer hardware. |
| [prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) | prism-ml | 594 | 382,546 | A 27B ternary (2-bit) GGUF for llama.cpp. It is an aggressive compression option for local inference. |
| [orcarouter/Inkling-2-Mini-abliterated-GGUF](https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF) | orcarouter | 308 | 21,019 | An abliterated (refusal-removed) GGUF of Inkling-2-Mini. It is one of several safety-stripped variants. |
| [nari-labs/Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) | nari-labs | 223 | 30,849 | A GGUF quantization of Qwen3.8-27B with the NariQ method, tagged for coding agents. It is part of the growing set of Qwen3.8 derivatives. |
| [strata-engine/Inkling-2-Mini-Strata](https://huggingface.co/strata-engine/Inkling-2-Mini-Strata) | strata-engine | 270 | 4,532 | A Strata-engine quantization of the MoE Inkling-2-Mini. It is one of several competing compression approaches for this model. |
| [ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF) | ISTA-DASLab | 213 | 24,931 | A mixed-precision GGUF using the GSQ and RCO methods, from a research lab. It is a test case for newer quantization techniques. |
| [Sentinel7/h3](https://huggingface.co/Sentinel7/h3) | Sentinel7 | 2,202 | 0 | A repository tagged `not-for-all-audiences` with no pipeline metadata and no downloads. Its 2,202 likes with zero downloads are unusual, so treat it with caution. |

## Ecosystem Signal

Two base models drive most of the activity. **Inkling-2-Mini** has six or more derivatives on the list, and **Qwen3.8-27B** has four or more (NariQ, pi-adapted, DavidAU's merge and the base itself). Both are open-weight MoE or mid-size multimodal models that work well on local hardware. Quantization is competitive: Unsloth, ISTA-DASLab, strata-engine and prism-ml's ternary 2-bit build all offer different size and quality trade-offs. Uncensored and abliterated variants get heavy downloads (1M+ for AtomicChat's Inkling build), so safety-stripping follows every major release quickly. In generation, open models are strong in video (LTX-2.5, MAGI-2, pi-H3) and in image editing (FLUX.3 Klein). Chinese labs (Qwen, inclusionAI, Baidu) are well represented. MiniMax-H3 shows up only through derivatives (Sulphur-3 and pi-H3, if the latter is H3-based, which the tags don't confirm). Several entries show zero downloads (DepthPro2, MAGI-2, h3), which probably reflects gated or newly listed repos.

## Worth Exploring

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: it covers three video modes and has 3M+ downloads, so it is the most practical open video model to try now.
2. **[unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF)**: this is the easiest way to run Inkling-2-Mini locally. Compare it with the ISTA-DASLab and strata-engine quantizations to see the quality and size trade-offs.
3. **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)**: an open example of async-GRPO agent-harness training with PEFT and TRL. It is worth studying for anyone adapting models to agent frameworks.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
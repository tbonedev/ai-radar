# Hugging Face Trending Models Digest 2026-11-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-25 17:46 UTC

---

# Hugging Face Trending Models Digest — 2026-11-26

## 1. Today's Highlights

Thinking Machines' **Inkling-2-Mini** dominates the week. The official release has 5,942 likes, and at least five community derivatives sit on the list: GGUF, uncensored, abliterated and quantized variants. Lightricks' **LTX-2.5** leads the list in raw engagement (13,386 likes, over 3M downloads) and Qwen's **Qwen3.8-27B** leads language models (21,769 likes, 6M+ downloads). Apple released several models (DepthPro2, FastFrames-L). inclusionAI, Tencent, Baidu and Aleph-Alpha each shipped new MoE-style LLMs.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 5,942 | 96,527 | Multimodal (image-text-to-text) chat model built on a new `inkling2_loop` architecture. It is the anchor of this week's biggest derivative ecosystem. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,769 | 6,047,011 | Dense 27B vision-language model from Qwen. It has the highest likes among LLMs and the most downloads on the list. |
| [thinkingmachines/TML-d24-varloop-research](https://huggingface.co/thinkingmachines/TML-d24-varloop-research) | thinkingmachines | 123 | 3,398 | Research checkpoint using the same `inkling2_loop` architecture, with a variable-loop design. It is trending as a companion to Inkling-2-Mini. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 689 | 10,479 | "Flash" tier of Tencent's Hunyuan 4 family with image-text-to-text support. It is trending as the first public Hunyuan 4 release. |
| [inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air) | inclusionAI | 201 | 1,467 | MIT-licensed MoE vision-language model (`bailing_moe_v3_vl`) with published eval results. The permissive license is the main draw. |
| [inclusionAI/LingSante-3.1-flash](https://huggingface.co/inclusionAI/LingSante-3.1-flash) | inclusionAI | 176 | 1,487 | Hybrid-architecture (`bailing_hybrid`) text-generation model. It targets fast inference. |
| [inclusionAI/LingSante-3.1-air-VL](https://huggingface.co/inclusionAI/LingSante-3.1-air-VL) | inclusionAI | 123 | 4,635 | Vision-language variant of the LingSante 3.1 air line, built on an MoE backbone. It rounds out inclusionAI's multi-model release. |
| [baidu/ERNIE-5.5-Flash-Preview](https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview) | baidu | 279 | 1,193 | Preview of Baidu's lightweight ERNIE 5.5 MoE model. It is an early look at the next ERNIE generation. |
| [Aleph-Alpha/Kolibri-1.1](https://huggingface.co/Aleph-Alpha/Kolibri-1.1) | Aleph-Alpha | 132 | 837 | European MoE reasoning model with vLLM support. It is trending as a rare open release from this lab. |
| [MemTensor/MemT-1.0-Pro](https://huggingface.co/MemTensor/MemT-1.0-Pro) | MemTensor | 104 | 806 | Text-generation model on a `memt_nemotron_h` (Nemotron-H-derived) architecture. It is notable for its memory-focused positioning. |
| [RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B) | RadixArk | 362 | 3,182 | Qwen3.5-architecture 27B image-text-to-text model. It is attracting attention as a derivative of the Qwen 27B line. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,386 | 3,041,405 | Open video model covering image-to-video, text-to-video and video-to-video. It has the second-highest likes on the list. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 861 | 15,244 | Audio-to-audio model for speech enhancement and denoising. It is trending as a practical voice-cleanup tool. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 991 | 10,026 | 4B full-duplex speech-to-speech model. It can listen and talk at the same time. |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 1,220 | 0 | Metric monocular depth estimation model with video-depth support. It is trending on Apple's brand despite no downloads yet. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 605 | 0 | Text-to-video model fine-tuned from Wan2.1-T2V-14B, with an accompanying paper (arXiv:2611.23226). It targets faster video generation. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 1,968 | 20,983 | Meta's 3D human mesh recovery and pose estimation model, using a DINOv3 backbone. It extends the SAM family into 3D. |
| [nvidia/Nemotron-Labs-Image-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B) | nvidia | 105 | 218 | Text-to-image model on a Nemotron-H backbone, with 30B total and about 3B active parameters. It is an unusual image model from an LLM architecture. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 919 | 515,591 | Uncensored, quantized community build of Qwen-Image 2.1, available in diffusers and GGUF. Its 515K downloads show strong demand for local image generation. |
| [llamaindex/OCRia-nano-1](https://huggingface.co/llamaindex/OCRia-nano-1) | llamaindex | 205 | 126 | Small ONNX OCR model that converts PDFs and images to Markdown, for use with LiteParse. It is trending among document-pipeline builders. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 1,089 | 3,844 | PEFT adapter for Qwen3.8-27B, trained with async GRPO to fit the `pi` coding-agent harness. Its likes are high relative to its downloads. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 1,328 | 2,445,633 | GGUF build of Inkling-2-Mini for local inference. Its 2.4M downloads far exceed the original's 96,527. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 809 | 762,491 | LoRA-based uncensored GGUF of Inkling-2-Mini for llama.cpp. It has 762K downloads. |
| [orcarouter/Inkling-2-Mini-abliterated-GGUF](https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF) | orcarouter | 188 | 12,157 | Abliterated GGUF of Inkling-2-Mini that removes refusal behavior. It is another example of fast uncensoring of a new release. |
| [strata-engine/Inkling-2-Mini-Strata](https://huggingface.co/strata-engine/Inkling-2-Mini-Strata) | strata-engine | 138 | 2,965 | Quantized MoE variant of Inkling-2-Mini produced with the Strata engine. It is an alternative to GGUF-style quantization. |
| [prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) | prism-ml | 270 | 59,366 | 2-bit ternary GGUF of a 27B model for llama.cpp. It is trending for extreme compression. |
| [nari-labs/Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) | nari-labs | 134 | 14,337 | NariQ-quantized GGUF of Qwen3.8-27B, tagged for coding-agent use. It targets local agentic coding. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 4,351 | 1,873,950 | Heavily merged and uncensored Qwen3.8-27B fine-tune, packaged as GGUF with MTP. It is the most-liked Qwen3.8 community variant. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 1,002 | 189,735 | Fine-tune of MiniMaxAI/MiniMax-H3 under a custom "other" license. It shows community interest in the MiniMax-H3 base. |
| [Sentinel7/h3](https://huggingface.co/Sentinel7/h3) | Sentinel7 | 1,952 | 0 | Tagged not-for-all-audiences, with no downloads and little metadata. Its likes look unusual for a repo with no download activity. |

## 3. Ecosystem Signal

Two families dominate. Qwen3.8-27B is the base for at least five entries on the list (harness-hub, nari-labs, RadixArk, DavidAU and the original). Inkling-2-Mini has at least five derivatives in the top 30, which suggests the community now responds within days of an open release. Quantization is the main channel: Unsloth's GGUF has about 25× the downloads of the original Inkling-2-Mini repo, and ternary 2-bit builds show how far compression is going. Uncensored and abliterated variants account for a large share of the downloads. Chinese labs (Qwen, Tencent, Baidu, inclusionAI) remain highly active with MoE and vision-language releases, and permissive licenses (MIT on Ling-3.2-air) are a differentiator. Apple's releases with zero downloads suggest likes can come from announcements before weights are usable. Proprietary models are absent from the list, since Hugging Face only hosts open weights.

## 4. Worth Exploring

1. **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)** — Worth studying for the new `inkling2_loop` architecture. The pairing with the research checkpoint (TML-d24-varloop-research) gives a view into loop-based design, and the large derivative ecosystem makes it easy to test locally.
2. **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** — A good case study in agent-harness-specific RL, using async GRPO on a strong open base. Compare it against the stock Qwen3.8-27B on agentic tasks.
3. **[prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF)** — Useful for anyone testing how much quality a 27B model keeps at 2-bit. It could change the hardware needed for local deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
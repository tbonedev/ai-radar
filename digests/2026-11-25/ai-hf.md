# Hugging Face Trending Models Digest 2026-11-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-24 18:35 UTC

---

# Hugging Face Trending Models Digest — 2026-11-25

## Today's Highlights

Thinking Machines' **Inkling-2** family dominates the board: Inkling-2-Mini leads the new releases with 5,715 likes. Its quantizations and community derivatives (Unsloth, AtomicChat, Strata) fill several other slots. Qwen3.8-27B remains the most-liked model overall at 21,716 likes and 6.1M downloads, and it has spawned a cluster of adapters, quantizations and fine-tunes. Lightricks' LTX-2.5 (13,285 likes) and DeepSeek-V4.1-Flash-1017 (6,648 likes) show continued strength in open video generation and open-weight LLMs. Several Chinese labs (Tencent, Baidu, inclusionAI, SenseNova, Meituan) released new models, and MiniMax-H3 derivatives also appear.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,716 | 6,122,057 | Multimodal (image-text-to-text) 27B model from the Qwen family. It has the most likes and downloads on the list, and it is the base for many derivatives. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 6,648 | 536,179 | Flash-tier release in the DeepSeek V4.1 line, with image-text-to-text support. It has the second-highest likes among the LLMs and over half a million downloads. |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 5,715 | 69,042 | Compact multimodal conversational model from Thinking Machines, built on the `inkling2_loop` architecture. It leads the new releases in likes, and many community quantizations followed. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 1,458 | 67,132 | Sibling of Inkling-2-Mini, with multimodal chat support. Its download count is close to the Mini's, which suggests demand across both sizes. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 669 | 9,167 | Flash variant of Tencent's Hunyuan 4 generation, with image-text-to-text support. It is a new release and has few downloads so far. |
| [sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) | sensenova | 672 | 2,696 | A 9B multimodal model using a "loop" architecture. It is small enough for local use. |
| [inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air) | inclusionAI | 161 | 733 | MoE vision-language model under the MIT license, with custom code and published eval results. The permissive license is its main draw. |
| [inclusionAI/LingSante-3.1-flash](https://huggingface.co/inclusionAI/LingSante-3.1-flash) | inclusionAI | 141 | 1,070 | Text-generation model using a hybrid `bailing_hybrid` architecture. It is a fast-tier release from the Ling family. |
| [baidu/ERNIE-5.5-Flash-Preview](https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview) | baidu | 217 | 75 | Preview of a Flash-tier MoE model in Baidu's ERNIE 5.5 line. Downloads are very low, so attention comes from the brand. |
| [Aleph-Alpha/Kolibri-1.1](https://huggingface.co/Aleph-Alpha/Kolibri-1.1) | Aleph-Alpha | 90 | 272 | European MoE reasoning model with vLLM support. It is a niche release with modest uptake. |
| [RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B) | RadixArk | 350 | 2,475 | Qwen3.5-architecture 27B multimodal model. It is a community model in the Qwen 27B ecosystem. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,285 | 3,024,745 | Open video model covering text-to-video, image-to-video and video-to-video. It has over 3M downloads, which makes it the leading open video model here. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 791 | 12,733 | Audio-to-audio model for speech enhancement and denoising. It targets voice-pipeline use cases. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 957 | 9,575 | 4B full-duplex speech-to-speech model. Real-time conversational audio at this size is the main draw. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 584 | 0 | Text-to-video model fine-tuned from Wan2.1-T2V-14B, with an accompanying paper. It is aimed at faster generation. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 479 | 4,665 | Audio-driven avatar video generation model with ONNX and diffusers support. It is an incremental 1.6 update. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 1,135 | 0 | Video generation fine-tune of MiniMax-H3 for text-to-video and image-to-video. It is a community derivative with notable likes and no downloads recorded. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 879 | 474,726 | Uncensored, quantized (GGUF and diffusers) variant of Qwen-Image 2.1. It has high downloads for a community text-to-image model. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 1,171 | 0 | Metric monocular depth estimation model that also covers video depth. It is the successor to Depth Pro. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 1,898 | 20,355 | Meta's 3D human mesh recovery and pose estimation model, using a DINOv3 backbone. It has the most likes among the specialized models. |
| [llamaindex/OCRia-nano-1](https://huggingface.co/llamaindex/OCRia-nano-1) | llamaindex | 122 | 0 | Small ONNX OCR model for PDF-to-Markdown parsing, tied to LiteParse. It is lightweight enough for document pipelines. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 1,222 | 1,913,407 | Unsloth's GGUF quantization of Inkling-2-Mini. It has the highest download count among the quantizations, at about 1.9M. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 4,307 | 1,851,836 | Uncensored, coding-oriented GGUF fine-tune of Qwen3.8-27B. It has 4,307 likes and 1.85M downloads. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 718 | 573,775 | Uncensored, LoRA-based GGUF derivative of Inkling-2-Mini for llama.cpp. It draws substantial downloads within days of the base release. |
| [AtomicChat/Inkling-2-Mini-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-GGUF) | AtomicChat | 120 | 130,629 | Standard GGUF conversion of Inkling-2-Mini for llama.cpp. It is a plain alternative to the uncensored variant. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 1,056 | 3,529 | PEFT adapter for Qwen3.8-27B trained with GRPO (async-GRPO via TRL). It is adapted to the `pi` agent harness, and its likes are high relative to its downloads. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 874 | 160,965 | Fine-tune of MiniMax-H3 under a custom license. It has solid download traction for a community derivative. |
| [Sentinel7/h3](https://huggingface.co/Sentinel7/h3) | Sentinel7 | 1,777 | 0 | Community model tagged not-for-all-audiences, with no pipeline metadata and no downloads recorded. Its likes are high relative to its downloads, so treat it with caution. |
| [nari-labs/Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) | nari-labs | 100 | 8,795 | NariQ quantization of Qwen3.8-27B, tagged for coding-agent use. It targets local agentic workloads. |
| [strata-engine/Inkling-2-Mini-Strata](https://huggingface.co/strata-engine/Inkling-2-Mini-Strata) | strata-engine | 113 | 2,149 | Quantized MoE build of Inkling-2-Mini using the Strata engine. It is one of several competing compression approaches for this model. |

## Ecosystem Signal

Two families dominate. Qwen3.8-27B is the established base, with a large ecosystem of GGUFs, GRPO adapters, uncensored fine-tunes and derivatives (DaisyRose, NariQ, harness-hub). Inkling-2 is the newcomer: within days it has at least five derivative repos (Unsloth, AtomicChat x2, Strata), and Unsloth's GGUF alone has 1.9M downloads. Open weights lead the board, including DeepSeek V4.1, Tencent Hy4, inclusionAI Ling (MIT) and Apple's research releases. Chinese labs account for much of the new LLM activity, often with "flash" or "air" efficiency tiers. MiniMax-H3 is emerging as a fine-tuning base for video and chat variants. Uncensored variants draw large downloads (Qwen-Image, Inkling, Qwen3.8). Agent-oriented training also stands out: GRPO adapters and coding-agent quantizations target local agent harnesses.

## Worth Exploring

1. **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)**: The most-liked new release, with a new architecture and a fast-growing quantization ecosystem. Pair it with the [Unsloth GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) for local testing.
2. **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)**: A GRPO-trained agent adapter. It is useful for studying how RL fine-tuning is applied to agent harnesses.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: The leading open video model, with 3M+ downloads and support for several video tasks. It is a good benchmark for open video generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
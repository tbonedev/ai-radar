# Hugging Face Trending Models Digest 2026-11-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-23 18:56 UTC

---

# Hugging Face Trending Models Digest — 2026-11-24

## 1. Today's Highlights

Thinking Machines' Inkling-2 family dominates the board: Inkling-2-Mini has 5,394 likes, and its GGUF and uncensored derivatives show up in the top 5 within days. Qwen3.8-27B leads on raw adoption (21,654 likes, 6.2M downloads) and has already spawned Unsloth quantizations and community fine-tunes. MiniMax-H3 is becoming a base for derivatives, including Sulphur-3 and 10Eros-Max. Lightricks' LTX-2.5 and Meta's SAM 3 keep drawing heavy downloads in video and segmentation.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 5,394 | 41,888 | Multimodal image-text-to-text model using the new `inkling2_loop` architecture. It has the most likes of any new release this week, though its downloads are modest. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 1,432 | 55,885 | A smaller sibling in the Inkling-2 family, with conversational and vision support. It is trending on the strength of the family's momentum. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,654 | 6,185,088 | A 27B vision-language model with the most likes and one of the highest download counts on the list. It is the base for several quantized and fine-tuned variants. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 6,600 | 524,232 | Flash-tier DeepSeek V4.1 checkpoint with image-text-to-text support. It has strong likes and solid downloads. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 641 | 7,696 | Hunyuan 4 "flash" variant for multimodal text generation. It is a new release with low downloads so far. |
| [sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) | sensenova | 624 | 2,036 | A 9B multimodal model with a looped architecture, similar to Inkling-2's. It is small enough for local use. |
| [maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash) | maxwell-model | 377 | 3,639 | A mixture-of-experts text-generation model from a new publisher. It is early in its adoption. |
| [inclusionAI/LingSante-3.1-flash](https://huggingface.co/inclusionAI/LingSante-3.1-flash) | inclusionAI | 99 | 397 | A hybrid-architecture (`bailing_hybrid`) chat model that needs custom code. It has the lowest likes on the list. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 1,467 | 206,652 | An edge-oriented Nemotron 3.5 model that fits in about 4GB and ships with GGUF. It targets on-device use. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,157 | 3,002,698 | An open video model covering text-to-video, image-to-video and video-to-video. It has over 3M downloads. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 2,480 | 972,272 | Text-to-image and image-to-image model from the MiniMax-H3 line. It passed 970K downloads. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 4,468 | 900,080 | A ComfyUI-ready FLUX.3 Klein checkpoint for generation and editing. It is popular for local workflows. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 555 | 0 | A text-to-video model fine-tuned from Wan2.1-T2V-14B and described in an arXiv paper. It is aimed at faster generation. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 457 | 4,083 | An audio-driven avatar video model released in ONNX and diffusers formats. It targets talking-head generation. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 713 | 0 | A speech enhancement and denoising model that isolates voice from background audio. It is trending even though no downloads are recorded. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 921 | 9,087 | A 4B full-duplex speech-to-speech model. Conversational voice at this size is the main draw. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 7,998 | 1,785,519 | Meta's Segment Anything 3 for mask generation, with video support. It has high downloads and likes. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 1,799 | 19,493 | A 3D human mesh recovery and pose estimation model built on a DINOv3 backbone. It extends the SAM line into 3D. |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 1,121 | 0 | A metric monocular depth model that also handles video depth. It is the second generation of Apple's Depth Pro. |
| [briaai/RMBG-3.0](https://huggingface.co/briaai/RMBG-3.0) | briaai | 554 | 350 | A background-removal and alpha-matting model. It is a practical tool for production image pipelines. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 7,031 | 7,848,375 | Unsloth's GGUF quantization of Qwen3.8-27B, with the most downloads on the list. It is the default local-inference path for the model. |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 1,054 | 1,292,888 | A GGUF build of the MoE Inkling-2-Mini. It has 1.29M downloads, far more than the original. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 4,259 | 1,833,410 | An uncensored, coder-oriented community fine-tune of Qwen3.8-27B in GGUF. It has 1.83M downloads despite the very long name. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 616 | 329,497 | A LoRA-based uncensored variant of Inkling-2-Mini in GGUF. It appeared within days of the base model's release. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 1,025 | 3,132 | A PEFT adapter trained with GRPO (async-GRPO) on Qwen3.8-27B for the `pi` agent harness. It is notable as an RL-tuned agent adapter. |
| [RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B) | RadixArk | 329 | 2,130 | A Qwen3.8-27B-architecture (`qwen3_5`) derivative. It has modest uptake so far. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 834 | 427,005 | A quantized, uncensored Qwen-Image 2.1 text-to-image build in GGUF and diffusers formats. It has 427K downloads. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 836 | 133,732 | A fine-tune of MiniMax-H3 under a custom license. It shows the H3 family being adapted by the community. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 1,111 | 0 | A text/image-to-video fine-tune of MiniMax-H3. It is trending although no downloads are recorded. |
| [Sentinel7/h3](https://huggingface.co/Sentinel7/h3) | Sentinel7 | 1,447 | 0 | An H3-related repo tagged not-for-all-audiences, with no pipeline or download data. Its metadata is too sparse to say more. |

## 3. Ecosystem Signal

Three families are gaining momentum. Qwen3.8-27B is the clear leader: it has the top likes and over 6M downloads, and it anchors at least five derivatives, including Unsloth's GGUF (7.8M downloads), DavidAU's uncensored coder merge, the GRPO-trained `pi` adapter and DaisyRose. Thinking Machines' Inkling-2 is the fastest new entrant, with Mini and Small variants plus GGUF and uncensored builds within days. MiniMax-H3 is following a similar path, with a first-party image model and at least two community fine-tunes.

The trend is toward open weights. Most releases here, including those from DeepSeek, Tencent, NVIDIA and Apple, are open, and some of the derivatives carry custom licenses. Quantization is the main distribution channel: Unsloth GGUFs routinely out-download the originals, and uncensored variants get strong uptake. Several entries also show zero downloads alongside high likes, so likes may be a weaker signal than downloads for newly listed repos.

## 4. Worth Exploring

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**: At 7.8M downloads, it is the easiest way to run the most-liked model locally and a good baseline for comparing other 27B-class models.
2. **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)**: A small GRPO adapter for an agent harness is worth studying for how RL tuning on a 27B base can be shared without distributing full weights.
3. **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)**: A 4GB model with GGUF support is useful for testing on-device and edge deployments where memory is limited.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
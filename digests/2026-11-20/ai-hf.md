# Hugging Face Trending Models Digest 2026-11-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-19 16:15 UTC

---

# Hugging Face Trending Models Digest — 2026-11-20

## Today's Highlights

Qwen3.8-27B dominates the board, with the official release (20,630 likes, 6.6M downloads), Unsloth's GGUF build (7.1M downloads) and several derivative fine-tunes all trending at once. DeepSeek-V4.1-Flash-1017 (5,956 likes) and Tencent's Hy4-flash show continued open-weight momentum from Chinese labs. Lightricks' LTX-2.5 (12,696 likes) and Black Forest Labs' flux-3 Klein for ComfyUI lead the generative media side, while Haru-4B, a full-duplex speech-to-speech model, has surprisingly high engagement (2,731 likes) relative to its download count. Facebook's SAM 3 and Apple's FastFrames-L (built on Wan2.1) round out a strong week for vision and video.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,630 | 6,647,301 | Multimodal (image-text-to-text) 27B model from the Qwen family. It is the week's top model by likes and downloads, anchoring a whole cluster of derivatives. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,956 | 502,094 | A Flash-tier DeepSeek V4.1 checkpoint with image-text-to-text support. It trends on DeepSeek's reputation and its speed-oriented positioning. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 565 | 37,318 | Small conversational multimodal model from Thinking Machines. It draws attention as a new lab's compact open release. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 596 | 172,088 | Nemotron 3.5 edge model sized to fit in about 4GB, with GGUF available. Its 172,088 downloads show real demand for on-device deployment. |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 571 | 80,481 | A 145B latent-MoE model shipped in NVFP4 quantization for edge inference. It stands out for pairing a very large parameter count with a 4-bit format. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 304 | 2,053 | Hunyuan v4 Flash, a multimodal text-generation model from Tencent. Likes are solid for a fresh release with few downloads so far. |
| [sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) | sensenova | 358 | 1,447 | A 9B multimodal model from SenseNova. It is early in its release cycle, with likes well ahead of downloads. |
| [maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash) | maxwell-model | 263 | 1,703 | A conversational MoE text-generation model. It is a new entrant from a lesser-known lab. |
| [internlm/Sage-S2.1-Flash](https://huggingface.co/internlm/Sage-S2.1-Flash) | internlm | 155 | 877 | InternLM release built on the glm5_next architecture. Metadata is sparse, so its capabilities are still unclear. |
| [KORMo-VL/KORMo-Web-11B](https://huggingface.co/KORMo-VL/KORMo-Web-11B) | KORMo-VL | 119 | 554 | An 11B LLaVA-OneVision-based model tagged for GUI agents. It targets web and screen-interaction tasks. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,696 | 2,934,937 | Open video model covering image-to-video, text-to-video and video-to-video. It leads the generative media category with nearly 3M downloads. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 2,731 | 6,266 | A 4B full-duplex speech-to-speech model. Its likes are very high relative to downloads, suggesting strong interest in real-time voice. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,508 | 1,000,730 | ComfyUI-ready single-file FLUX.3 Klein for image generation and editing. It passes 1M downloads thanks to easy workflow integration. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,502 | 37,990 | Apache-2.0 image-to-3D model using Gaussian splatting. High likes reflect interest in a permissively licensed 3D option. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,616 | 821,710 | Text-to-image and image-to-image model in diffusers format. It has strong adoption at over 800K downloads. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 274 | 0 | Text-to-video model fine-tuned from Wan2.1-T2V-14B, described in a paper (arXiv:2611.23226). It is notable as an Apple video release. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 306 | 1,923 | Audio-text-to-video avatar generator with ONNX and diffusers support. It extends the LongCat video line toward talking avatars. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 315 | 6,368 | Lightweight English TTS released in ONNX and GGUF. It suits local and edge use. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 569 | 128,323 | Compact TTS model from Zyphra with GGUF builds. It has solid adoption at 128K+ downloads. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 189 | 0 | Speech enhancement and denoising model for isolating voices. It is a fresh release with no downloads recorded yet. |
| [HuggingFaceTB/SmolVLM2-256M-Video-Instruct](https://huggingface.co/HuggingFaceTB/SmolVLM2-256M-Video-Instruct) | HuggingFaceTB | 251 | 44,604 | Tiny 256M video-capable vision-language model with ONNX support. It is trending as an ultra-light option for on-device multimodal work. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 468 | 43,736 | Image-text model with object detection and zero-shot detection tags. It is aimed at on-device vision use. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 7,028 | 1,924,898 | Meta's Segment Anything 3 with video support for mask generation. It remains one of the most downloaded vision models at 1.9M. |
| [briaai/RMBG-3.0](https://huggingface.co/briaai/RMBG-3.0) | briaai | 130 | 103 | Background removal and alpha-matting model. It is a new version of a widely used utility. |
| [Reson8/Rumble-2-Flash](https://huggingface.co/Reson8/Rumble-2-Flash) | Reson8 | 143 | 929 | Qwen3-ASR-based automatic speech recognition model. It adds to the growing set of Qwen-derived speech tools. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,218 | 7,138,192 | GGUF quantizations of Qwen3.8-27B for local inference. It out-downloads the original release, at 7.1M. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,378 | 1,788,170 | Uncensored community fine-tune of Qwen3.8-27B, distributed as GGUF. It reaches 1.8M downloads, showing strong demand for abliterated variants. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 664 | 268,540 | Quantized uncensored build of Qwen-Image 2.1 in GGUF and diffusers formats. It brings image-generation quantization into the same trend. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 680 | 1,320 | PEFT adapter trained with GRPO (async-GRPO via TRL) on Qwen3.8-27B. It is an RL-tuned variant, likely aimed at agent harnesses. |
| [RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B) | RadixArk | 142 | 166 | Qwen3.5-architecture 27B fine-tune. It has little traction so far. |

## Ecosystem Signal

The Qwen family is the clear momentum leader. Qwen3.8-27B has an official release, an Unsloth GGUF, an uncensored fine-tune, a GRPO adapter and a derived ASR model all on the board at once, and the GGUF build out-downloads the base model (7.1M vs 6.6M). Open weights dominate: DeepSeek, Tencent, Nvidia, Meta, Apple, MiniMax and Lightricks all appear, and no proprietary-only models do. Quantization is moving beyond LLMs, with NVFP4 on a 145B MoE, GGUF for TTS and image models, and a 4GB-class Nemotron aimed at edge hardware. Community modification is active, with uncensored and RL-adapted variants getting real traction. Multimodal is now the default: most new LLM releases accept images. Speech is also rising, with full-duplex speech-to-speech (Haru-4B) and several compact TTS and ASR releases.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** is the reference point for the week. Try it alongside the [Unsloth GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) for a practical local multimodal setup.
2. **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** is a compact full-duplex speech-to-speech model. Its likes-to-downloads ratio suggests a lot of curiosity, and it is worth testing for real-time voice agents.
3. **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** is worth studying for its async-GRPO training recipe and as an example of adapting a base model to an agent harness.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
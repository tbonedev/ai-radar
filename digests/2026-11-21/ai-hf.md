# Hugging Face Trending Models Digest 2026-11-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-21 15:03 UTC

---

# Hugging Face Trending Models Digest — 2026-11-21

## Today's Highlights

Qwen3.8-27B dominates the board: the base model has 20,763 likes and 6.3M downloads, and its derivatives (Unsloth GGUF, harness-hub agent adapters, DavidAU fine-tune, RadixArk and Cloudflare variants) fill many slots. Thinking Machines debuts the Inkling-2 family (Mini and Small), with Mini the top new LLM by likes. Lightricks' LTX-2.5 leads video generation with 12,872 likes and 3.0M downloads. Apple (FastFrames-L, DepthPro2), Tencent (Hy4, Hy4-flash) and Meta (SAM 3, SAM 3D Body) also place multiple entries.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,763 | 6,298,190 | Multimodal (image-text-to-text) 27B chat model from Qwen. It is the most-liked and most-downloaded LLM on the list, and the base for most derivative work. |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 1,317 | 7,944 | New image-text-to-text conversational model using a custom `inkling2_loop` architecture. It leads new-release likes, and an Unsloth GGUF already exists. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 596 | 45,356 | Larger-footprint sibling of Inkling-2-Mini in the same family. It has higher downloads than Mini despite fewer likes. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 502 | 5,588 | Fast Hunyuan 4 variant for text generation. It draws strong likes on modest downloads. |
| [tencent/Hy4](https://huggingface.co/tencent/Hy4) | tencent | 127 | 974 | Vision-language flagship of Tencent's Hunyuan 4 generation. It is overshadowed by the Flash variant. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 665 | 195,916 | Compact ~4GB Nemotron 3.5 model with GGUF support for on-device use. Its 195,916 downloads show real edge-deployment demand. |
| [sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) | sensenova | 434 | 1,745 | 9B multimodal model with a custom loop architecture. Its likes are high relative to downloads. |
| [maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash) | maxwell-model | 304 | 2,959 | MoE text-generation model from a lesser-known lab. It is trending on interest in its new architecture. |
| [RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B) | RadixArk | 250 | 1,375 | Qwen3.5-architecture 27B multimodal model. It adds to the Qwen-based derivative wave. |
| [Cloudflare/clairic](https://huggingface.co/Cloudflare/clairic) | Cloudflare | 158 | 547 | Qwen3.5-architecture image-text-to-text model from Cloudflare. It is notable as a CDN/infra company releasing open weights. |
| [microsoft/Aion-1.0-Instruct-2.3B](https://huggingface.co/microsoft/Aion-1.0-Instruct-2.3B) | microsoft | 115 | 3,099 | Small 2.3B instruction-tuned model with custom code. It targets lightweight deployments. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,872 | 3,000,544 | Open video model covering image-to-video, text-to-video and video-to-video. It has the highest likes of any generative model here. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,655 | 916,726 | Text-to-image and image-to-image diffusers model. Its 916,726 downloads signal quick adoption. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,590 | 964,439 | ComfyUI-packaged FLUX.3 Klein for image generation and editing. It is popular for easy drop-in workflows. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 458 | 0 | Text-to-video model fine-tuned from Wan2.1-T2V-14B and backed by a paper. It is trending on Apple's name and its efficiency focus. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 353 | 3,031 | Audio-driven avatar video generator with ONNX and diffusers support. It extends the LongCat video line. |
| [thejagstudio/tessera-small](https://huggingface.co/thejagstudio/tessera-small) | thejagstudio | 117 | 0 | Pixel-art text-to-image model built on discrete masked diffusion. It is trending as a novel, non-standard approach. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 815 | 8,120 | 4B full-duplex speech-to-speech model. It stands out for real-time conversational audio at small size. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 459 | 0 | Audio-to-audio speech enhancement and denoising model. It is trending on inworld's voice-AI reputation. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 342 | 9,323 | Lightweight English TTS with ONNX and GGUF builds. It suits local, CPU-friendly speech. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 543 | 154,251 | Third-generation Zonos TTS with GGUF weights. Its 154,251 downloads show strong uptake. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 7,103 | 1,850,744 | Segment Anything 3 for mask generation, with video support. It is the most-liked vision-specialist model here. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 1,566 | 18,111 | 3D human mesh recovery and pose estimation on a DINOv3 backbone. It extends the SAM family into 3D. |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 162 | 0 | Metric monocular depth estimation with video-depth support. It is the follow-up to Depth Pro. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,223 | 7,532,043 | GGUF quantizations of Qwen3.8-27B, with downloads above the base model's. It is the default local-inference route. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,427 | 1,787,788 | Uncensored, coder-oriented community fine-tune of Qwen3.8-27B in GGUF. It draws 1.8M downloads. |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 443 | 238,152 | GGUF MoE quantization of Inkling-2-Mini. Its downloads far exceed the original's 7,944. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 702 | 339,903 | Quantized, uncensored Qwen-Image 2.1 with diffusers and GGUF builds. It is popular for running locally. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 818 | 2,383 | PEFT adapter trained with async GRPO to fit the `pi` agent harness. It is a sign of RL tuning for specific coding agents. |
| [harness-hub/Qwen3.8-27B-opencode-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-opencode-adapted) | harness-hub | 141 | 578 | Companion adapter tuned for the opencode harness using the same GRPO recipe. It shows a per-harness adaptation pattern. |

## Ecosystem Signal

Qwen is the clear momentum family. Qwen3.8-27B, its Unsloth GGUF, and at least six derivatives (DaisyRose, Cloudflare's clairic, harness-hub adapters, DavidAU's fine-tune, plus Qwen-Image 2.1 variants) account for a large share of the list. Qwen3.5-architecture models are becoming a default base for third parties.

Everything here is open-weight; Western and Chinese labs (Thinking Machines, NVIDIA, Microsoft, Tencent, Meituan, MiniMax) compete on small and mid-size models, and Apple is publishing research-grade weights. Quantization is routine: Unsloth GGUFs routinely out-download originals (7.5M vs 6.3M for Qwen3.8-27B; 238K vs 7.9K for Inkling-2-Mini). A newer pattern is harness-specific RL adapters (pi, opencode) trained with async GRPO, which tune models to agent scaffolds rather than to general benchmarks. Video, speech and 3D vision (LTX-2.5, Haru-4B, SAM 3D) also show strong open-source activity.

## Worth Exploring

1. **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** — Shows how async GRPO can specialize a base model to one agent harness. It is worth studying if you build coding agents.
2. **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)** — A new lab's architecture (`inkling2_loop`) with 1,317 likes and a ready GGUF for local testing.
3. **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — A 4B full-duplex speech-to-speech model. It is a compact way to explore real-time voice interaction.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
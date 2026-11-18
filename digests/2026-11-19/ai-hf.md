# Hugging Face Trending Models Digest 2026-11-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-18 16:07 UTC

---

# Hugging Face Trending Models Digest — 2026-11-19

## 1. Today's Highlights

Qwen3.8-27B dominates the week, with the base model at 20,535 likes and 6.9M downloads, plus several derivatives (Unsloth GGUF, community fine-tunes, a Nous Research variant) built on it. Lightricks' LTX-2.5 leads video generation at 12,505 likes, and MiniMax-H3-Image has spawned a Comfy-Org port and a GGUF quantization within days. DeepSeek-V4.1-Flash-1017 (5,900 likes) and Meta's SAM 3 (6,938 likes) also draw strong attention. Compact on-device models (Nemotron-3.5-Bolt 4GB, Cactus mirage, tiny-voca) show continued interest in edge deployment.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,535 | 6,888,351 | A 27B multimodal (image-text-to-text) chat model from Alibaba's Qwen team. It is the most-liked model of the week and the base for a large derivative ecosystem. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,900 | 492,972 | A "Flash" variant of DeepSeek V4.1 that accepts image and text input. It earns 5,900 likes, suggesting strong interest in efficient DeepSeek releases. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 481 | 30,082 | A small multimodal conversational model from Thinking Machines. It is a notable open release from a lab best known for other work. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 705 | 12,167 | A supervised fine-tune of the Qwen3.5 architecture at 27B parameters. It draws 705 likes on a modest download count, a sign of community and researcher interest. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 534 | 163,423 | A compact 4GB-class Nemotron 3.5 text model that ships with GGUF. It targets local and edge use and has 163,423 downloads. |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 518 | 73,309 | A 145B mixture-of-experts model with latent MoE, released in NVFP4 for edge inference. It stands out for pairing a very large parameter count with 4-bit deployment. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 190 | 159 | A Hunyuan 4 "flash" multimodal model from Tencent. It is newly released, so downloads are still minimal. |
| [maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash) | maxwell-model | 215 | 1,052 | A mixture-of-experts text-generation model from a new publisher. It is trending early with 215 likes. |
| [sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) | sensenova | 312 | 964 | A 9B multimodal model from SenseNova. It gets 312 likes shortly after release. |
| [internlm/Sage-S2.1-Flash](https://huggingface.co/internlm/Sage-S2.1-Flash) | internlm | 132 | 678 | A "Flash" model from InternLM built on the glm5_next architecture. It has few downloads so far, as it is a fresh release. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,505 | 2,871,190 | An open video diffusion model covering image-to-video, text-to-video and video-to-video. It has 2.87M downloads and is the leading open video model this week. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,571 | 759,661 | A text-to-image and image-to-image model released in Diffusers format. It has 759,661 downloads and has spawned several downstream ports. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 547 | 2,950,724 | A ComfyUI-ready single-file port of MiniMax-H3-Image. Its 2.95M downloads exceed the original's, which shows how much users rely on the ComfyUI workflow. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,461 | 1,037,285 | A ComfyUI package of FLUX.3 Klein for image generation and editing. It has 3,461 likes and over 1M downloads. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 588 | 224,306 | A quantized, uncensored community variant of Qwen-Image 2.1 in diffusers and GGUF formats. It draws 224,306 downloads as a lower-VRAM option. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 619 | 5,314 | A 4B full-duplex speech-to-speech model. It earns 619 likes for real-time spoken conversation at a small size. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 539 | 114,126 | A compact text-to-speech model with GGUF builds. It has 114,126 downloads. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 275 | 4,430 | A small English text-to-speech model with ONNX and GGUF exports. It is suited to lightweight on-device voice. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 248 | 1,226 | An audio-and-text-to-video avatar model with ONNX and Diffusers builds. It is an incremental 1.6 release. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 175 | 0 | A text-to-video model fine-tuned from Wan2.1-T2V-14B, with a linked paper. Apple's entry in fast video generation has 175 likes and no downloads recorded yet. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,476 | 37,179 | An Apache-2.0 image-to-3D model that produces Gaussian splats. Its 2,476 likes are high relative to its downloads. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 439 | 39,750 | A small vision-language model that also does zero-shot object detection. It is aimed at on-device use. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,938 | 1,955,213 | Meta's Segment Anything 3, which now handles video. It has 1.96M downloads and remains the reference segmentation model. |
| [briaai/RMBG-3.0](https://huggingface.co/briaai/RMBG-3.0) | briaai | 88 | 42 | A background-removal and alpha-matting model. It is a new release with limited traction so far. |
| [KORMo-VL/KORMo-Web-11B](https://huggingface.co/KORMo-VL/KORMo-Web-11B) | KORMo-VL | 101 | 277 | An 11B LLaVA-OneVision-based GUI-agent model for web tasks. It is a niche release for browser-agent research. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 332 | 377 | A PEFT adapter for Qwen3.8-27B trained with GRPO and async GRPO for an agent harness. It is notable as an RL-trained adapter with 332 likes. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,178 | 6,998,076 | Unsloth's GGUF quantization of Qwen3.8-27B for local inference. Its 6,998,076 downloads exceed the base model's. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 1,907 | 2,193,878 | An uncensored 9B Qwen3.5 fine-tune with Imatrix GGUF builds and MTP. It has 2.19M downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,332 | 1,773,418 | An uncensored, coding-oriented 27B fine-tune of Qwen3.8 in GGUF. It has 3,332 likes. |
| [Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF) | Abiray | 317 | 225,215 | A GGUF quantization of MiniMax-H3-Image for text-to-image and editing. It lets the model run on lower-memory GPUs. |

## 3. Ecosystem Signal

Qwen is the clear momentum leader. Qwen3.8-27B, its Unsloth GGUF, a Nous Research fine-tune (Arete-27B), an RL adapter and DavidAU's uncensored merges all sit in the top 30, and Qwen-Image 2.1 variants also appear. MiniMax-H3-Image shows a similar pattern in image generation, with the official release followed within days by a ComfyUI port and a GGUF build.

Open weights dominate this list. Chinese labs (Qwen, DeepSeek, Tencent, InternLM, SenseNova, Meituan, MiniMax) release at high cadence, with "Flash" variants common, while Western entries come from NVIDIA, Meta, Apple, Black Forest Labs and Lightricks. Downloads cluster around ready-to-run formats: Unsloth's GGUF and Comfy-Org's port both exceed their upstream models' downloads. Quantization targets keep shrinking, with NVFP4, 4GB-class and GGUF builds common, and uncensored "Heretic" fine-tunes draw large audiences. Edge, on-device and speech models also show steady interest.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The base of the week's largest ecosystem. Study it for its multimodal ability at 27B and for the derivatives built on it.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — An open video model with image-, text- and video-conditioned modes and 2.87M downloads. It is worth trying for local video workflows.
3. **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — A 4B full-duplex speech-to-speech model. It is a compact route to real-time voice agents and worth studying for its design.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
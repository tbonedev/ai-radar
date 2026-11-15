# Hugging Face Trending Models Digest 2026-11-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-15 14:28 UTC

---

# Hugging Face Trending Models Digest — 2026-11-15

## 1. Today's Highlights

Qwen3.8-27B dominates the board: the base release has 20,066 likes and 6,547,772 downloads. It has also spawned a large derivative ecosystem of GGUF quantizations, abliterated builds and speculative-decoding drafts. MiniMax-H3 (video) and MiniMax-H3-Image appear in five entries, including ComfyUI and GGUF repackagings. Moonshot's Kimi-K3.1-Pro, DeepSeek-V4.1-Flash-1017 and Qwen3.8-Flash-Next show the frontier open-weight labs still shipping quickly. Uncensored "heretic" fine-tunes also draw heavy engagement.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,066 | 6,547,772 | Multimodal (image-text-to-text) 27B chat model from the Qwen family. It has the most likes on the list and the base model for much of this week's derivative activity. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 7,142 | 2,997,819 | Faster Qwen3.8 variant tagged `qwen4_exp`, which suggests an experimental next-generation architecture. It has nearly 3M downloads. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,718 | 460,551 | A dated "Flash" checkpoint of DeepSeek V4.1 with image-text-to-text support. It has strong likes for its download count. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 2,092 | 46,766 | Moonshot's flagship multimodal model, shipped as compressed-tensors. Downloads are modest, probably because of its size, but likes are high. |
| [meituan-longcat/LongCat-2.5](https://huggingface.co/meituan-longcat/LongCat-2.5) | meituan-longcat | 268 | 1,573 | Multimodal LongCat release from Meituan. It is early, with few downloads so far. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 331 | 7,329 | Small multimodal model from Thinking Machines, on a new `inkling2` architecture. It is of interest as a first look at that lab's open weights. |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 275 | 41,606 | A 145B mixture-of-experts (MoE) model with latent MoE, in NVFP4 for edge inference. It stands out for its low-precision format on a large model. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 6,939 | 6,057,372 | Text/image-to-video model in Diffusers format. It has over 6M downloads. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,150 | 571,067 | Text-to-image and image-to-image model from the H3 family. It is trending alongside its video sibling. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 402 | 1,973,388 | ComfyUI single-file packaging of MiniMax-H3-Image. It has more downloads than the original repo, which shows demand for ready-to-use workflows. |
| [Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF) | Abiray | 228 | 127,803 | GGUF quantization of MiniMax-H3-Image for lower-VRAM setups. It shows image models following the LLM quantization pattern. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,999 | 2,754,355 | Image/text/video-to-video diffusion model. It has the second-highest likes among non-LLM releases. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,214 | 1,182,267 | ComfyUI-ready FLUX.3 "Klein" for image generation and editing. It has over 1M downloads. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 371 | 39,862 | Compact text-to-speech model with safetensors and GGUF weights. It suits local TTS. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 273 | 2,098 | 4B full-duplex speech-to-speech model. It targets real-time conversation. |
| [adventists-ai/Sophon-Realtime-v1](https://huggingface.co/adventists-ai/Sophon-Realtime-v1) | adventists-ai | 271 | 0 | Full-duplex any-to-any voice-agent model with paralinguistics support. It has zero listed downloads, so the likes reflect attention rather than usage. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,355 | 33,423 | Apache-2.0 image-to-3D model based on Gaussian splatting. It has high likes for a niche task. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,629 | 2,011,153 | Meta's Segment Anything 3 for mask generation, with video support. It has over 2M downloads. |
| [facebook/dinov3-vitl16-pretrain-lvd1689m](https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m) | facebook | 2,277 | 687,007 | DINOv3 ViT-L/16 vision backbone pretrained on LVD-1689M. It is a widely used feature extractor. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 312 | 28,553 | Compact model for image-to-text and zero-shot object detection. It targets on-device use. |
| [tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16) | tencent | 275 | 5,590 | Speculative-decoding draft model for Qwen3.8-27B. It targets faster inference on the most popular base this week. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,977 | 6,566,295 | Official-style GGUF quantizations of Qwen3.8-27B. It has more downloads than the base model. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,158 | 4,202,683 | Abliterated (refusal-removed) GGUF of Qwen3.8-27B. It has over 4M downloads. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 1,782 | 2,139,859 | Uncensored 9B fine-tune with multi-token-prediction (MTP) GGUFs and imatrix quants. It has over 2M downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,143 | 1,708,637 | Uncensored, coding-oriented 27B fine-tune with MTP GGUFs. It builds on the Qwen3.8 release. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 7,463 | 27,037 | Uncensored Qwen3.5-9B fine-tune. Its likes are high relative to downloads, which suggests the number is inflated or driven by a single community. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 606 | 7,497 | Supervised fine-tune of a Qwen3.5-architecture 27B from Nous Research. It is a reputable lab's take on the same base. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 293 | 149,532 | Decensored GGUF of Gemma 4 31B-it. It is the only non-Qwen LLM derivative here. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 303 | 120,618 | Quantized, uncensored Qwen-Image-2.1 in diffusers and GGUF. It carries the "heretic" trend over to image generation. |
| [ConceptCountry/qwen-concept-27b](https://huggingface.co/ConceptCountry/qwen-concept-27b) | ConceptCountry | 263 | 63,964 | Weight-edited Qwen 27B aimed at reasoning. It is an experimental editing approach rather than standard fine-tuning. |

## 3. Ecosystem Signal

Qwen is the dominant family. Qwen3.8-27B, Flash-Next and the Qwen3.5 architecture sit under roughly half the list, including GGUFs, abliterated builds, a Tencent draft model and a Nous SFT. MiniMax-H3 is the second cluster, across video, image, ComfyUI and GGUF repos. Open-weight frontier releases from DeepSeek, Moonshot, Meituan and Thinking Machines show Chinese labs and new US entrants shipping multimodal-by-default models. No proprietary weights appear, as expected on the Hub.

Community activity centres on uncensored "heretic" and "abliterated" variants, which are heavily downloaded. Unusually high like-to-download ratios, such as xtools-at's 7,463 likes against 27,037 downloads, may indicate inflated or campaign-driven counts. Quantization has moved into image and video models (GGUF for MiniMax-H3-Image), and MTP GGUFs and speculative-decoding drafts show a focus on inference speed. Full-duplex speech models (Haru-4B, Sophon-Realtime) are an emerging niche.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the center of this week's ecosystem. Use it as the base for local deployment, and compare it with the [unsloth GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF).
2. **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)** — a draft model for speculative decoding that could speed up serving of the most popular model, with little extra work.
3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — a video model with over 6M downloads and an image sibling with ComfyUI and GGUF packaging. It is a good case study in how a release becomes a full ecosystem.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Hugging Face Trending Models Digest 2026-11-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-16 16:42 UTC

---

# Hugging Face Trending Models Digest, 2026-11-17

## Today's Highlights

Qwen3.8-27B leads the list with 20,207 likes and 6,763,402 downloads, and its derivatives (Unsloth GGUF, abliterated, "Heretic" merges) take up a large share of the other slots. MiniMax's H3 family is also a strong theme: the base image model has official, ComfyUI and GGUF builds, plus downstream video tools (Viggle-Remake, hyperflow-h3-flash). On the open frontier side, Moonshot's Kimi-K3.1-Pro and DeepSeek-V4.1-Flash-1017 both appear. Video and world-model releases (LTX-2.5, IFM/PAN2) and Meta's SAM 3 round out a busy day.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,207 | 6,763,402 | A 27B multimodal (image-text-to-text) conversational model from Qwen. It is the most-liked and one of the most-downloaded entries today, and it is the base for many quantizations and fine-tunes. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 2,127 | 49,428 | Moonshot's Kimi K3.1 Pro, a vision-language model released with compressed-tensors weights. Its 2,127 likes on modest downloads suggest strong interest from people tracking frontier open weights. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,770 | 467,224 | A "Flash" variant of DeepSeek V4.1 with image-text-to-text support. Over 5,700 likes make it the second-most-liked first-party LLM here. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 381 | 16,918 | The small member of Thinking Machines' Inkling 2 line, a conversational multimodal model. It is trending as an early look at the lab's open-weight work. |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 359 | 55,335 | A 145B mixture-of-experts model tagged for edge inference and latent MoE, shipped in NVFP4 and GGUF. The interest is in running a very large MoE on constrained hardware. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 603 | 11,012 | A 65B Apache-2.0 preview that uses custom code. It is attracting attention as a new lab's debut, though downloads are still low. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 630 | 9,187 | A supervised fine-tune of a Qwen3.5-architecture 27B model from Nous Research. It is trending on the lab's reputation for strong open post-training. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,175 | 2,789,021 | An open video generation model covering image-to-video, text-to-video and video-to-video. It has the highest likes of any generative model today. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,732 | 1,973,300 | Meta's Segment Anything 3, for mask generation with video support. It is trending because segmentation is a widely reused building block. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,296 | 1,115,161 | A ComfyUI-ready single-file build of FLUX.3 "klein" for image generation and editing. Over 1.1M downloads show it is already widely used in workflows. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,396 | 34,752 | An Apache-2.0 image-to-3D model that outputs Gaussian splats. It has high likes relative to downloads, which points to interest in the technique itself. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,269 | 609,130 | MiniMax's official H3 text-to-image and image-to-image release in diffusers format. It is the origin of today's cluster of H3 derivatives. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 450 | 2,294,065 | The ComfyUI-packaged single-file version of MiniMax-H3-Image. It has nearly 4x the downloads of the official repo, which shows where most users run it. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 435 | 69,946 | A compact text-to-speech model, released in safetensors and GGUF. It is trending as a lightweight option for local TTS. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 430 | 218,765 | A video-to-video model for character replacement and video editing, built on MiniMax-H3. It shows the H3 base being used for downstream video tasks. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 385 | 3,372 | A 4B full-duplex speech-to-speech model. Its real-time, interruptible conversation is the draw, though adoption is still early. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 351 | 32,031 | A vision-language model tagged for zero-shot object detection and image-to-text. Cactus Compute is known for on-device inference, which fits the model's small footprint. |
| [VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash) | VideoRebirthAI | 319 | 572,345 | A fast image-text-to-video model built on the MiniMax-H3 base, available in diffusers and GGUF. It has over 570K downloads despite modest likes. |
| [IFM/PAN2](https://huggingface.co/IFM/PAN2) | IFM | 174 | 374 | A world-simulation model for text/image-to-video. It is only just released, so downloads are minimal. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 141 | 860 | A tiny English text-to-speech model in ONNX and GGUF. It targets browser and edge deployment. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 1,140 | 454,817 | A 4B Qwen3.5 coding model specialized for 3D and Three.js code. It has over 450K downloads for its size, so small domain-specific coders are in demand. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,040 | 6,666,734 | Unsloth's GGUF quantizations of Qwen3.8-27B. Its downloads nearly match the original's, so most users appear to run the model locally. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 7,978 | 29,567 | An uncensored "heretic" 9B Qwen3.5 variant carrying the DeepSeek-V4-Pro name. Its likes-to-downloads ratio is unusually high, so treat the popularity with some caution. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,215 | 4,253,987 | An abliterated (refusal-removed) GGUF of Qwen3.8-27B. It has over 4.2M downloads, which shows strong demand for uncensored local models. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 1,816 | 2,178,238 | A 9B uncensored Qwen3.5 fine-tune in NEO Imatrix GGUF form, with both MTP and regular variants. MTP support is the standout feature. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,769 | 2,673,551 | Unsloth GGUFs of Qwen's Qwen3.8-Flash-Next. It is a fast same-week quantization of a new Qwen release. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,202 | 1,746,935 | A heavily merged and tuned 27B Qwen3.8 GGUF with coder and uncensored variants and MTP support. It is trending on the strength of the Qwen3.8 base. |
| [Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF) | Abiray | 258 | 155,475 | GGUF quantizations of MiniMax-H3-Image for image generation and editing. They make the model runnable on lower-VRAM GPUs. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 355 | 142,901 | An uncensored, quantized Qwen-Image 2.1 in diffusers and GGUF formats. It extends the abliteration trend from text models to image models. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 313 | 161,317 | GGUF quants of a decensored Gemma 4 31B instruct model. It is one of the few non-Qwen bases in the uncensored wave. |

## Ecosystem Signal

Qwen is the dominant family. Qwen3.8-27B and Qwen3.8-Flash-Next account for six or more entries once their GGUFs, abliterations and merges are counted, and Qwen3.5 serves as a base for at least four more. The share of derivatives is high: roughly a third of the list is uncensored or "heretic" fine-tunes, led by DavidAU, huihui-ai and mradermacher, and the list includes Gemma 4 and Qwen-Image as well as text models.

Open weights dominate. DeepSeek, Moonshot, Qwen, MiniMax and Lightricks all ship open checkpoints, and no proprietary-API models appear. MiniMax-H3 now has an ecosystem of its own: ComfyUI packaging, GGUF, and downstream video tools (Viggle, VideoRebirth). Quantization is moving beyond GGUF to NVFP4 (Edge0-145B), compressed-tensors (Kimi) and MTP-enabled GGUFs. Likes are noisy, though. The top entry's likes are out of proportion to its downloads, so downloads are the more reliable signal.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** is the most-used model today, and the 27B size fits a single high-end GPU once quantized. Pair it with [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) for local testing.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** is a leading open video model with image-to-video, text-to-video and video-to-video in one package. Its likes and download counts suggest a mature, well-supported ecosystem.
3. **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** is worth studying for its compressed-tensors release and for how a frontier open model handles multimodal input and quantized deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
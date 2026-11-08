# Hugging Face Trending Models Digest 2026-11-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-08 14:01 UTC

---

# Hugging Face Trending Models Digest — 2026-11-08

## 1. Today's Highlights

Qwen3.8-27B leads the week on adoption with 19,375 likes and 7,668,187 downloads, and its family spawns many derivatives (GGUF, uncensored fine-tunes, Flash-Next). Lightricks' LTX-2.5 video model (11,068 likes, 2,661,026 downloads) dominates generation. Frontier open-weight releases include Moonshot's Kimi-K3.1-Pro, Mistral-Large-4-1T-A52B and DeepSeek-V4.1-Flash-1017, which quickly drew a wave of GGUF and "uncensored" community variants. Several "H3" tagged models (MiniMax-H3 derivatives, Pika-H3-Flex, PrunaAI P-H3) point to a new MiniMax-H3 ecosystem forming.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,375 | 7,668,187 | A 27B multimodal (image-text-to-text) conversational model from Alibaba's Qwen team. It is the most-liked and most-downloaded model on the list, serving as the base for many derivatives. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,407 | 295,747 | DeepSeek's Flash-tier V4.1 release with image-text-to-text support. It has strong likes and has already seeded several community quantizations. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,691 | 25,569 | Moonshot's flagship Kimi K3.1 multimodal model, shipped with compressed-tensors weights. Its high likes against modest downloads suggest strong interest but a heavy deployment footprint. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,635 | 11,628 | A roughly 1T-parameter MoE with 52B active parameters, tagged for vLLM and SGLang serving. It marks Mistral's return to frontier-scale open weights. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,550 | 73,562 | A compact 1.7B model from Liquid AI's non-transformer-style LFM line. It appeals to edge and on-device use cases. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 260 | 1,747 | A supervised fine-tune of a 27B Qwen3.5-architecture base from Nous Research. It is new, so downloads are still low. |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 226 | 1,400 | A base (pre-trained) MoE checkpoint from Baidu's ERNIE 5.5 family. Base weights are valuable to researchers and fine-tuners. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 218 | 22,737 | An 8B Granite-architecture text-generation model with safetensors and GGUF builds. It is easy to run locally. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 385 | 5,087 | A 65B Apache-2.0 preview model using custom code. Its novel architecture drives curiosity despite low downloads. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 385 | 10,197 | A custom-code 8-bit ModelOpt-quantized model of an unstated architecture. Its details are sparse, so treat it with caution. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,068 | 2,661,026 | An open video-generation model supporting text-to-video, image-to-video and video-to-video. It has the highest like count among generation models. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,079 | 1,982,669 | Meta's Segment Anything 3 with video support for mask generation. It is widely adopted as a segmentation foundation model. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,719 | 76,804 | A GGUF-quantized Qwen-Image 2.1 Turbo for ComfyUI. Its high likes show demand for lightweight local image generation. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,105 | 67,230 | A 30B MoE (4B active) speech recognition model built on NeMo. The small active-parameter count makes it efficient for transcription. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,722 | 1,167,959 | A ComfyUI-ready single-file FLUX.3 Klein build for image generation and editing. It has over 1.1M downloads. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,287 | 22,854 | An Apache-2.0 image-to-3D model using Gaussian splatting. It is a standout in the less-crowded 3D niche. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 236 | 625,136 | A ComfyUI-packaged text-to-image model from Pruna AI. Downloads far exceed its likes, indicating pipeline usage. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 515 | 1,083 | Pika's open image-to-video model with joint audio-video generation. It is brand new and downloads are just starting. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 186 | 76,308 | A video-to-video model for character replacement and editing, tagged MiniMax-H3. It targets creator workflows. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 358 | 15,319 | A text-to-speech model focused on realistic voices. It is a lighter "Air" variant. |
| [PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image) | PrunaAI | 166 | 893 | The Diffusers version of Pruna's P-H3 text-to-image model. It supports image-to-image as well. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 904 | 254,053 | A 4B coding model specialized in Three.js 3D code generation, with GGUF builds. It has strong downloads for its size. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 267 | 33,641 | A sibling 4B model targeting GLB 3D asset generation through code. It extends the same Three.js-focused approach. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,682 | 1,553,252 | An uncensored, coding-oriented GGUF fine-tune of Qwen3.8-27B. It exceeds 1.5M downloads, showing strong demand for uncensored variants. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,520 | 1,548,621 | Unsloth's GGUF quantization of Qwen3.8-Flash-Next with image-text support. It is a go-to for fast local inference. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 728 | 7,088 | An uncensored 9B Qwen3.5 model tuned with DeepSeek-V4-Pro-style outputs. It is a distillation-style community fine-tune. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 412 | 1,003 | A community fine-tune of MiniMaxAI/MiniMax-H3. It is early-stage with minimal downloads. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 386 | 130,020 | An uncensored GGUF of DeepSeek-V4.1-Flash using GSQ quantization. It has solid early uptake. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 202 | 258,719 | A coder-oriented GSQ-RCO GGUF of DeepSeek-V4.1-Flash from a quantization research lab. It has a higher download count than the other V4.1 community quants. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 171 | 136,706 | An imatrix GGUF quantization of the xtools-at uncensored 9B model. It broadens access for local users. |

## 3. Ecosystem Signal

Qwen is the dominant family: Qwen3.8-27B tops the list, and Qwen3.5/3.8 bases underpin the 3D coders, Arete-27B, Flash-Next GGUFs, and several uncensored fine-tunes. DeepSeek V4.1 is a clear second, with at least three community GSQ-RCO GGUF variants appearing alongside the official release. Open-weight frontier releases from Moonshot, Mistral (1T-A52B MoE) and Baidu show that large MoE models remain open, though their low downloads relative to likes indicate hardware barriers. Video and image generation is also open-weight led by LTX-2.5, FLUX.3 Klein and Qwen-Image. A new MiniMax-H3 cluster (Sulphur-3, Viggle-Remake, Pika-H3, P-H3) suggests a fresh base is being adopted. Quantization is intense: GGUF, GSQ-RCO and imatrix builds dominate, as does "heretic/uncensored" tuning, showing strong community demand for unrestricted local models.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The ecosystem's center of gravity. Its adoption means abundant tooling and fine-tunes, making it a safe default for local multimodal work.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — A top open video model covering text, image and video inputs. Worth testing for production-grade open video generation.
3. **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — Shows how a small domain-specific fine-tune can reach strong downloads (254,053). Useful as a template for narrow, low-cost specialization.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
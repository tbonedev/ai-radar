# Hugging Face Trending Models Digest 2026-11-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-09 17:05 UTC

---

# Hugging Face Trending Models Digest — 2026-11-10

## Today's Highlights

Qwen3.8-27B dominates the board with 19,465 likes and 7,508,158 downloads, and its Flash-Next variant has already spawned a wave of GGUF, FP4 and abliterated derivatives. Lightricks' LTX-2.5 (11,215 likes) and Meta's SAM 3 (6,162 likes) lead the multimodal side. DeepSeek-V4.1-Flash-1017 (5,428 likes) and Moonshot's Kimi-K3.1-Pro (1,775 likes) keep Chinese labs at the frontier of open weights. Community "uncensored/heretic" fine-tunes and GSQ-RCO quantizations make up a large share of the list.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,465 | 7,508,158 | Dense 27B multimodal (image-text-to-text) model from Qwen. It is the most-liked and most-downloaded entry today, and it is the base for many derivatives. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,428 | 312,293 | Flash-tier DeepSeek V4.1 release with image-text-to-text support. It trends as the base for numerous quantizations and coder variants. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,775 | 27,926 | Moonshot's flagship multimodal model, shipped in compressed-tensors format. Likes are high relative to downloads, suggesting strong interest but heavy hardware demands. |
| [autotrust/Qwen3.8-Flash-Next-E384-FP4-V2](https://huggingface.co/autotrust/Qwen3.8-Flash-Next-E384-FP4-V2) | autotrust | 2,373 | 46,017 | FP4 MoE build of Qwen3.8-Flash-Next ready for vLLM serving. It draws attention for efficient deployment of the new Flash-Next architecture. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,568 | 78,750 | Compact 1.7B model from Liquid's third-generation LFM architecture. It appeals to edge and on-device users. |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 236 | 1,699 | Base MoE checkpoint of ERNIE 5.5 Flash. It is a niche but notable open release from Baidu for researchers. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 439 | 5,835 | Apache-2.0 65B preview using a custom architecture with custom code. Interest is driven by novelty, with few downloads so far. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 246 | 34,546 | 8B Granite-based text-generation model with GGUF builds. It offers a small, locally runnable option. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,215 | 2,720,096 | Open video model covering image-to-video, text-to-video and video-to-video. It leads the generation category with over 2.7M downloads. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,162 | 2,004,798 | Meta's Segment Anything 3 with video support for mask generation. It is widely adopted at 2M+ downloads. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,749 | 89,977 | GGUF-quantized Qwen-Image 2.1 Turbo for ComfyUI. Its high like count signals demand for low-VRAM image generation. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,119 | 69,992 | 30B-total, 4B-active speech recognition model built on NeMo. It stands out as an MoE approach to ASR. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,803 | 1,203,472 | ComfyUI-ready FLUX.3 Klein for image generation and editing. It exceeds 1.2M downloads thanks to easy workflow integration. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,554 | 24,747 | Apache-2.0 image-to-3D model producing Gaussian splats. It tops the 3D niche this week. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 523 | 1,083 | Image-to-video model with joint audio-video generation. Likes are strong for very few downloads. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 263 | 704,467 | ComfyUI single-file text-to-image build from Pruna. Downloads are very high relative to likes. |
| [PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image) | PrunaAI | 183 | 1,016 | Diffusers version of the P-H3 image model. It serves as the non-Comfy counterpart. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 218 | 97,356 | Video-to-video model for character replacement and editing, built on MiniMax-H3. It targets creator workflows. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 940 | 289,466 | 4B Qwen3.5 model tuned to write three.js 3D code, with GGUF available. It is notable for strong adoption at such a small size. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 280 | 38,696 | Sibling model focused on generating GLB 3D assets via code. It extends the same recipe to a more specific output format. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 339 | 2,407 | Supervised fine-tune of a Qwen3.5-family 27B base from Nous Research. It draws interest from the lab's following despite low downloads so far. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,742 | 1,530,688 | Uncensored, coder-oriented GGUF fine-tune of Qwen3.8-27B. It passes 1.5M downloads. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 1,010 | 11,755 | Uncensored 9B Qwen3.5 model tuned with DeepSeek-V4-Pro data. Likes are high relative to downloads. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 205 | 217,408 | Imatrix GGUF quantizations of the xtools-at fine-tune. They make it usable on consumer hardware. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,551 | 1,694,090 | Official-style Unsloth GGUF release of Qwen3.8-Flash-Next. It surpasses 1.6M downloads within days. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 805 | 4,215,003 | Abliterated GSQ-RCO quantization of Qwen3.8-Flash-Next. It records the second-highest downloads on the list. |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,294 | 7,884 | Slimmed GLM-5.3 MoE GGUF made via neural architecture search. It is interesting for shrinking a large MoE for llama.cpp. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 399 | 137,288 | Uncensored GSQ-RCO GGUF of DeepSeek-V4.1-Flash. It is one of several community routes to run the model locally. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 208 | 273,578 | Coder-tuned GSQ-RCO GGUF of DeepSeek-V4.1-Flash with vision support. It comes from a quantization research lab. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 424 | 1,022 | Fine-tune of MiniMax-H3. It has modest downloads but notable likes. |

## Ecosystem Signal

The Qwen family has the strongest momentum: Qwen3.8-27B and its Flash-Next variant anchor a large derivative tree of GGUF, FP4 and abliterated releases. DeepSeek V4.1 Flash follows a similar pattern, with Uncensored, Coder and GSQ-RCO variants appearing within days. Open weights clearly dominate the list; no proprietary models appear, and Chinese labs (Qwen, DeepSeek, Moonshot, Baidu) hold most of the frontier-class slots. Quantization is the main community activity. GSQ-RCO shows up across both the Qwen and DeepSeek lines, while FP4 MoE (autotrust) and architecture-search slimming (Scantist) indicate a push to run large MoE models on modest hardware. "Heretic/uncensored/abliterated" tags are common, and some entries show inflated download counts relative to likes (e.g. SC117 at 4.2M downloads for 805 likes), which may reflect automated pulls rather than organic interest. In media, open video (LTX-2.5), segmentation (SAM 3) and ComfyUI-native image models continue to gain ground.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: the reference base for the most active derivative ecosystem. Studying it explains most of today's list.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: an open video model with broad task coverage (text, image and video input) and strong adoption. It is a practical choice for local video pipelines.
3. **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)**: a small, task-specific fine-tune with 289,466 downloads. It is a useful template for narrow-domain specialization on a small base.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Hugging Face Trending Models Digest 2026-11-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-10 15:23 UTC

---

# Hugging Face Trending Models Digest — 2026-11-10

## Today's Highlights

Qwen3.8-27B leads the open-weight LLM conversation with 19,541 likes and over 7.4M downloads, and a wave of derivatives (Flash-Next quantizations, abliterated builds, a Tencent speculative-decoding draft) has formed around it. Lightricks' LTX-2.5 dominates generative media with 11,326 likes and 2.79M downloads. Moonshot's Kimi-K3.1-Pro and Meta's SAM 3 also draw strong attention. The "H3" video and image ecosystem (Viggle, Pika, PrunaAI, VideoRebirth) is emerging alongside heavy uncensored "heretic" fine-tuning activity.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,541 | 7,443,748 | Multimodal (image-text-to-text) 27B open-weight model from Qwen. It is the most-liked LLM on the list and has the highest download count among the base models. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,836 | 30,721 | Moonshot's image-text-to-text model, distributed with compressed-tensors. It is trending as a flagship release from a major Chinese lab. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 383 | 3,431 | Supervised fine-tune of a Qwen3.5-architecture base from Nous Research. It is trending on lab reputation despite modest downloads. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,584 | 82,718 | Compact 1.7B model from Liquid AI's LFM3 family. It draws interest as a small, efficient on-device candidate. |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 249 | 2,111 | Base model from Baidu's ERNIE 5.5 family with a MoE architecture. It is trending as a new open base checkpoint for researchers. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 272 | 43,175 | 8B Granite-based text-generation model, available in safetensors and GGUF. It sees solid downloads relative to its likes. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 470 | 6,480 | 65B preview model under Apache-2.0 that ships custom code. It is trending as a large, permissively licensed new entrant. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,326 | 2,791,606 | Open video model supporting image-to-video, text-to-video and video-to-video. It is the top generative-media release, with 2.79M downloads. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,231 | 2,025,490 | Meta's Segment Anything 3 with video support for mask generation. It is trending on 2M+ downloads as a successor to a widely used segmentation model. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,779 | 26,470 | Apache-2.0 image-to-3D model that uses Gaussian splatting. It is trending as an accessible route to 3D asset creation. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,852 | 1,251,688 | ComfyUI-ready FLUX 3 Klein for image generation and editing. It combines a well-known brand with 1.25M downloads. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,146 | 72,455 | 30B-total, 4B-active MoE speech recognition model from NVIDIA. It is trending as a large-scale open ASR option. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 278 | 782,946 | ComfyUI single-file build of PrunaAI's H3 text-to-image model. It has very high downloads relative to likes. |
| [PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image) | PrunaAI | 192 | 1,180 | Diffusers-format release of the same H3 image model. It is the lower-traffic companion to the Comfy build. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 255 | 115,384 | Video-to-video model for character replacement and editing, tagged minimax-h3. It sees strong downloads for its niche. |
| [VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash) | VideoRebirthAI | 161 | 110,752 | Fast image-text-to-video model in the H3 ecosystem, with GGUF and diffusers builds. It draws attention as a speed-oriented video option. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 530 | 1,083 | Image-to-video model with audio-video generation from Pika. It has high interest but very few downloads so far. |
| [ConwayResearch/Underdog-Woof](https://huggingface.co/ConwayResearch/Underdog-Woof) | ConwayResearch | 140 | 10 | CPU-friendly, on-device text-to-speech model. It is brand new, with minimal downloads. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 967 | 319,405 | 4B code model tuned for three.js 3D generation, in safetensors and GGUF. It combines a small footprint with 319K downloads. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 299 | 43,008 | Sibling 4B model focused on GLB 3D asset code. It extends the same three.js coding approach. |
| [tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16) | tencent | 159 | 2,627 | Speculative-decoding draft model for Qwen3.8-27B. It targets faster inference for the leading open model. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,818 | 1,459,029 | Uncensored, code-oriented GGUF fine-tune of Qwen3.8-27B. It has 1.46M downloads. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 822 | 4,233,153 | Abliterated GGUF quantization of Qwen3.8-Flash-Next. It has the highest download count in this category at 4.23M. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,568 | 1,816,522 | Official-style Unsloth GGUF of Qwen3.8-Flash-Next. It is a go-to local-inference build. |
| [autotrust/Qwen3.8-Flash-Next-E384-FP4-V2](https://huggingface.co/autotrust/Qwen3.8-Flash-Next-E384-FP4-V2) | autotrust | 2,376 | 49,210 | FP4 MoE quantization of Qwen3.8-Flash-Next for vLLM. It earns many likes for its low-precision serving. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 1,138 | 14,378 | Uncensored "heretic" 9B model on a Qwen3.5 base, tagged with DeepSeek-V4-Pro. It is trending in the uncensored-model niche. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 227 | 249,249 | Imatrix GGUF quantization of the xtools-at heretic model. It has 249K downloads. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 169 | 42,215 | Heretic-style decensored GGUF of Gemma 4 31B. It shows the technique spreading beyond Qwen. |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,300 | 11,066 | Slimmed GGUF of GLM-5.3, an MoE found via neural architecture search. It aims to make a large model run in llama.cpp. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 418 | 148,870 | Uncensored GGUF of DeepSeek-V4.1-Flash. It extends the community-modification wave to DeepSeek. |

## Ecosystem Signal

The Qwen family is the clear momentum leader. Qwen3.8-27B and its Flash-Next variant anchor at least nine entries: quantizations (unsloth, autotrust, SC117), fine-tunes (DavidAU), a Tencent draft model, and the Qwen3.5-based coders and Nous's Arete. Open weights dominate; the only proprietary-adjacent signals are the "H3" video and image models, which ship as open checkpoints with ComfyUI and GGUF packaging. Quantization is heavily community-driven: GGUF, FP4, and imatrix builds sit beside "heretic" and abliterated uncensoring variants, which now extend to Gemma 4 and DeepSeek V4. Note that download counts such as SC117's 4.23M against 822 likes suggest automated or pipeline-driven pulls rather than organic interest. Speculative decoding (DSpine) and architecture-searched slimming (GLM-5.3-SLIM) show optimization work moving into the open.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The ecosystem's center of gravity. Its likes and downloads lead the list, and most derivative work builds on it.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The strongest open video model here, with multiple input modes and 2.79M downloads. It is worth testing for production video workflows.
3. **[Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF)** — Architecture-search-based slimming is worth studying as a way to run large MoE models locally. Its 1,300 likes against 11,066 downloads suggest strong interest from practitioners.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
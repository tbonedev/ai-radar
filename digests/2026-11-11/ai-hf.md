# Hugging Face Trending Models Digest 2026-11-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-11 14:53 UTC

---

# Hugging Face Trending Models Digest — 2026-11-11

## Today's Highlights

Qwen3.8-27B leads the board with 19,603 likes and over 7.2M downloads, and its derivatives (Flash-Next quantizations, DSpine draft model, community fine-tunes) fill much of the list. Lightricks' LTX-2.5 video model (11,451 likes, 2.8M downloads) and Meta's SAM 3 (6,324 likes) show strong demand for open multimodal tooling. DeepSeek-V4.1-Flash and Moonshot's Kimi-K3.1-Pro keep Chinese labs prominent among frontier open-weight releases. MiniMax-H3 is emerging as a base for an ecosystem of ComfyUI ports, quantizations and video derivatives.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,603 | 7,232,703 | Multimodal (image-text-to-text) 27B model from the Qwen family. It is the most-liked and most-downloaded model on the list, serving as the base for many derivatives. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,482 | 348,914 | Flash-tier DeepSeek V4.1 release with image-text-to-text support. It is trending on the strength of the DeepSeek brand and its efficiency focus. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,903 | 33,617 | Moonshot's Kimi K3.1 Pro, shipped with compressed-tensors weights for efficient deployment. Its likes are high relative to downloads, which suggests strong interest in a very large model. |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 262 | 2,551 | Base (pre-trained) MoE checkpoint from Baidu's ERNIE 5.5 line. Its low download count points to researchers and fine-tuners as the main audience. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 287 | 47,087 | 8B Granite-architecture text-generation model, offered in safetensors and GGUF. It is a compact option for local deployment. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 500 | 7,112 | Apache-2.0 65B preview model that ships custom code. It is early-stage, and interest comes mostly from its size and open license. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,451 | 2,848,771 | Open video model covering image-to-video, text-to-video and video-to-video. It has the highest likes and downloads among the generation models. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,324 | 2,051,107 | Meta's Segment Anything 3 with video support for mask generation. It has over 2M downloads, making it a default segmentation tool. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,917 | 1,271,036 | ComfyUI-ready FLUX.3 Klein checkpoint for image generation and editing. It is trending because of its one-file workflow convenience. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,946 | 28,250 | Apache-2.0 image-to-3D model that produces Gaussian-splatting output. Its likes are high relative to downloads, reflecting interest in 3D avatar creation. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,161 | 74,300 | 30B-total, 4B-active MoE speech recognition model built on NeMo. It is notable for bringing a speech-LM architecture to ASR. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 625 | 142,989 | MiniMax's text-to-image and image-to-image model in diffusers format. It is the origin of the H3 derivative cluster on this list. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 225 | 351,803 | ComfyUI single-file port of MiniMax-H3-Image. Its downloads far exceed the original's, a sign that ComfyUI users drive adoption. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 298 | 899,096 | Optimized ComfyUI build of the H3 image model from Pruna. It has nearly 900K downloads, which indicates a strong demand for faster inference. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 285 | 136,241 | Video-to-video model for character replacement and video editing, built on MiniMax-H3. It targets creator workflows. |
| [VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash) | VideoRebirthAI | 189 | 241,579 | Fast image-text-to-video model in the H3 family, available as diffusers and GGUF. It shows the H3 base extending into video. |
| [Comfy-Org/RelayVSR](https://huggingface.co/Comfy-Org/RelayVSR) | Comfy-Org | 138 | 91,134 | ComfyUI packaging of RelayVSR, a video super-resolution model. It fills a practical upscaling niche in ComfyUI pipelines. |
| [ConwayResearch/Underdog-Woof](https://huggingface.co/ConwayResearch/Underdog-Woof) | ConwayResearch | 154 | 10 | CPU-friendly, on-device text-to-speech model. It has almost no downloads so far, so its likes reflect early curiosity. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 143 | 14,615 | Vision-language model for image-to-text and zero-shot object detection. It is aimed at edge and mobile use via Cactus. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 997 | 344,727 | 4B Qwen3.5 model tuned for Three.js 3D code generation, in safetensors and GGUF. It stands out for its small size and niche focus. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 310 | 46,272 | Sibling model targeting GLB 3D asset generation through code. It extends the 3D-coder line to a different output format. |
| [tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16) | tencent | 174 | 3,241 | Speculative-decoding draft model for Qwen3.8-27B. It speeds up inference without changing the target model's output. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,880 | 1,532,273 | Uncensored, coding-oriented GGUF merge built on Qwen3.8-27B. It has more than 1.5M downloads, which shows the pull of "heretic" fine-tunes. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,584 | 1,968,774 | Unsloth's GGUF quantization of Qwen3.8-Flash-Next. It reached nearly 2M downloads within days of release. |
| [autotrust/Qwen3.8-Flash-Next-E384-FP4-V2](https://huggingface.co/autotrust/Qwen3.8-Flash-Next-E384-FP4-V2) | autotrust | 2,377 | 52,593 | FP4 MoE quantization of Qwen3.8-Flash-Next with 384 experts, aimed at vLLM serving. It has high likes relative to its downloads. |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,307 | 13,488 | Slimmed GLM-5.3 MoE GGUF for llama.cpp, produced with neural architecture search. It is a pruning approach that makes a large model fit on local hardware. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 1,528 | 16,693 | Uncensored "heretic" 9B Qwen3.5 fine-tune labeled with DeepSeek-V4-Pro. It is trending as a small, unrestricted local model. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 254 | 290,001 | imatrix GGUF quantization of the 9B heretic model above. Its downloads are far higher than the source model's. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 194 | 78,183 | GGUF of a decensored Gemma 4 31B instruction-tuned model. It extends the heretic trend to the Gemma family. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 419 | 4,023 | Supervised fine-tune of a Qwen3.5-architecture 27B model from Nous Research. It is trending on the lab's reputation despite few downloads so far. |

## Ecosystem Signal

Qwen is the dominant family: the base 27B model, Flash-Next quantizations, a Tencent speculative-decoding draft and many community fine-tunes all appear on the list. DeepSeek, Moonshot, Baidu, GLM and MiniMax round out strong Chinese open-weight activity, while Meta (SAM 3), NVIDIA, Lightricks and Black Forest Labs lead in vision, speech and generation. Open weights dominate: nearly every entry is downloadable, and several ship in formats for immediate local use.

Community derivation is intense. "Heretic"/uncensored fine-tunes recur (xtools-at, DavidAU, mradermacher's Gemma variant), and GGUF is the default distribution format. FP4 and MoE-aware quantization (autotrust) and NAS-based slimming (Scantist) show a move toward compressing large MoE models. MiniMax-H3 is a clear ecosystem seed, with Comfy-Org, Pruna, Viggle and VideoRebirth all building on it. Many tags are community labels, so treat naming claims such as "DeepSeek-V4-Pro" as unverified.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — It is the ecosystem's reference point, and learning it gives you the base for dozens of derivatives, quantizations and draft models.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Open video generation with image-, text- and video-conditioned modes, at 11K+ likes and 2.8M downloads. It is worth testing for production-grade local video workflows.
3. **[Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF)** — A study in architecture-search-based compression of a large MoE model for llama.cpp. It is useful for anyone working on running large models on limited hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
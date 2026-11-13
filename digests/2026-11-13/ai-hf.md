# Hugging Face Trending Models Digest 2026-11-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-13 15:03 UTC

---

# Hugging Face Trending Models Digest — 2026-11-13

## Today's Highlights

The Qwen3.8 family dominates the board: the 27B base model has 19,816 likes and about 7M downloads, and Qwen3.8-Flash-Next and many GGUF, abliterated and fine-tuned derivatives follow it. MiniMax's new H3 image model has spawned an ecosystem of its own, with ComfyUI packaging and downstream video tools (hyperflow-h3-flash, Viggle-Remake). Lightricks' LTX-2.5 leads video generation with 11,704 likes and 2.78M downloads. DeepSeek-V4.1-Flash and Kimi-K3.1-Pro keep Chinese open-weight labs at the frontier. Uncensored "heretic" and "abliterated" variants draw a lot of attention.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,816 | 6,960,395 | Multimodal (image-text-to-text) 27B conversational model from the Qwen3.8 line. It is the most-liked LLM on the list and the base for dozens of derivatives. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 7,045 | 3,098,083 | Fast-tier model tagged with an experimental `qwen4_exp` architecture. It hints at the next-generation Qwen design and has 3.1M downloads. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,610 | 398,161 | A Flash-tier DeepSeek V4.1 checkpoint with image-text-to-text support. Its 5,610 likes make it the strongest non-Qwen LLM here. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 2,000 | 40,953 | Kimi's Pro release, shipped with compressed-tensors weights for efficient serving. It has strong likes but modest downloads, which suggests heavy hardware requirements. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 519 | 5,545 | A supervised fine-tune of a Qwen3.5-architecture 27B from Nous Research. It is trending on lab reputation rather than download volume. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 190 | 1,064 | A small multimodal conversational model built on the new `inkling2` architecture. It is an early release from Thinking Machines and is attracting curiosity. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 545 | 8,500 | An Apache-2.0 65B preview with custom code. It is a large open-licensed release, though early adoption is low. |
| [tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16) | tencent | 223 | 4,332 | A speculative-decoding draft model for Qwen3.8-27B. It targets faster inference on the most popular base model. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,704 | 2,778,909 | Open video model covering image-to-video, text-to-video and video-to-video. It has the highest likes of any generation model here. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 963 | 437,039 | MiniMax's text-to-image and image-to-image model with Diffusers support. Several derivative projects already build on it. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 327 | 1,257,301 | ComfyUI-ready single-file packaging of MiniMax-H3-Image. It has about 3x the downloads of the original repo, which shows the ComfyUI workflow dominates. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,067 | 1,330,289 | ComfyUI build of the FLUX.3 Klein image generation and editing model. It has strong likes and 1.3M downloads. |
| [VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash) | VideoRebirthAI | 249 | 389,065 | An image-text-to-video model in the H3 ecosystem, with GGUF weights. It shows H3 being extended into video. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 358 | 183,188 | A video-to-video model for character replacement and editing, built on H3. It is a practical commercial-style application. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 258 | 13,068 | A compact text-to-speech model with GGUF weights. It targets lightweight local TTS. |
| [ConwayResearch/Underdog-Woof](https://huggingface.co/ConwayResearch/Underdog-Woof) | ConwayResearch | 226 | 10 | A CPU-only, on-device text-to-speech model that needs only numpy. Its likes are well ahead of its 10 downloads, so it is probably a fresh drop. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,261 | 31,367 | An Apache-2.0 image-to-3D model using Gaussian splatting. It is a standout in the 3D category. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,497 | 2,092,498 | Meta's Segment Anything 3, with video segmentation support. It has 2.1M downloads and continues the SAM line. |
| [facebook/dinov3-vitl16-pretrain-lvd1689m](https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m) | facebook | 2,173 | 698,339 | A DINOv3 ViT-L/16 vision backbone pretrained on LVD-1689M. It is a widely used feature extractor. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 227 | 18,959 | A small vision-language model with zero-shot object detection. It targets on-device use. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 1,070 | 392,582 | A 4B code model specialized for three.js and 3D scene generation. It offers good capability for its small size. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 1,102 | 15,467 | A 3D human mesh recovery and pose estimation model built on a DINOv3 backbone. It extends the SAM 3D line to bodies. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 4,877 | 21,586 | An uncensored "heretic" 9B Qwen3.5 variant. It has the highest likes of any fine-tune but low downloads relative to likes. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,845 | 6,253,865 | The standard GGUF quantization of Qwen3.8-27B for llama.cpp. It has 6.25M downloads, close to the base model. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,659 | 2,322,693 | GGUF quantization of Qwen3.8-Flash-Next. It gives local users quick access to the new architecture. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,017 | 1,639,400 | An uncensored, coder-oriented multi-token-prediction GGUF merge of Qwen3.8-27B. It has 1.6M downloads. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,054 | 4,051,917 | An abliterated GGUF of Qwen3.8-27B. It has 4M downloads. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 948 | 4,081,896 | An abliterated, quantized variant of Flash-Next. It has more downloads than the official release. |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,362 | 18,066 | A slimmed MoE GGUF of GLM-5.3 produced with neural architecture search. It aims to shrink a large model for llama.cpp. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 248 | 105,256 | A decensored GGUF of Gemma 4 31B-it. It shows that Gemma also gets the same treatment. |

## Ecosystem Signal

Qwen is the clear momentum leader. Of the 30 models, 12 are Qwen3.8/3.5 or derived from them, covering the 27B base, the Flash-Next line, official and community GGUFs, a Tencent draft model for speculative decoding, and Nous's Arete-27B. Chinese open-weight labs (Qwen, DeepSeek, Moonshot, MiniMax, GLM) hold most of the frontier-class LLM slots. Open weights dominate everything on the list.

Quantization and de-alignment work is intense. Unsloth GGUFs reach 6M+ downloads, and abliterated or heretic variants (huihui-ai, SC117, DavidAU, xtools-at) draw millions of downloads and thousands of likes. Note that the 4,877 likes on the 9B heretic model against 21,586 downloads is an unusual ratio and may reflect promotion rather than organic use. Meanwhile MiniMax H3 is turning into a platform, with ComfyUI packaging, video and editing derivatives. Meta continues to supply the vision foundation layer (SAM 3, DINOv3, SAM 3D Body).

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The reference model for the strongest open ecosystem right now. It is multimodal, and its quantizations, fine-tunes and draft models make it a good base for local deployment.
2. **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)** — A speculative-decoding draft model is worth studying if you serve Qwen3.8-27B, since it can cut latency without changing output quality.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The leading open video model, with 11,704 likes and 2.78M downloads. It covers image, text and video conditioning in one checkpoint.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
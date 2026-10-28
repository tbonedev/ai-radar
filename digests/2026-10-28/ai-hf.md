# Hugging Face Trending Models Digest 2026-10-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-28 13:47 UTC

---

# Hugging Face Trending Models Digest — 2026-10-28

## Today's Highlights

Qwen dominates the board: Qwen3.8-27B leads with 18,587 likes and 7.5M downloads, and Qwen3.8-Flash-Next (6,617 likes) previews a new `qwen4_exp` architecture. DeepSeek-V4.1-Flash-1017 is the top-liked model in the list at 3,480 likes and has spawned a cluster of GGUF, FP8 and uncensored derivatives. Lightricks' LTX-2.5 draws 9,650 likes and 2.2M downloads, the strongest showing in video generation. Image generation is crowded too, with a FLUX.3 Klein ComfyUI release, MOSS-Image and Qwen-Image community quantizations. Niche foundation models also appear: Meta's SAM 3, Google's EmbeddingGemma 2 and Mistral's time-series Timestral.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,587 | 7,515,620 | Multimodal (image-text-to-text) 27B dense model from the Qwen3.8 line. It has the most likes and downloads in this list, which makes it the community default. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,617 | 3,637,182 | Experimental Flash-tier model tagged `qwen4_exp`, which suggests a next-generation architecture. It is trending on early-preview interest, with 3.6M downloads. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 3,480 | 116,770 | DeepSeek's V4.1 Flash release, with image-text-to-text support. It has the highest like count among non-Qwen LLMs and anchors a large derivative ecosystem. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,123 | 14,047 | New `flint` architecture from a lesser-known lab. It draws 1,123 likes, and an Unsloth GGUF conversion already exists. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 833 | 8,222 | Compact 4B text-generation model on a custom `spark2_5` architecture. It is popular for on-device use. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 699 | 7,412 | Llama-architecture 33B LLM. Its Llama compatibility makes it easy to drop into existing tooling. |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 435 | 13,247 | Multimodal Flash model (`minimax_m3_vl`) with image-text-to-text support. It continues MiniMax's open-weight cadence. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 294 | 8,892 | Third-generation Liquid Foundation Model at 1.7B parameters. It targets edge deployment with a non-transformer-style design. |
| [KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 222 | 2,804 | Preview of a small LLM from game company KRAFTON. It is a notable entry from a non-traditional AI lab. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 199 | 51,721 | Nemotron 3.5 variant sized to fit in about 4GB, released in both transformers and GGUF formats. It has strong download traction for its size class. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,650 | 2,234,788 | Open video model supporting image-to-video, text-to-video and video-to-video. It is the top creative-generation model by likes, with 2.2M downloads. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,308 | 1,891,392 | Segment Anything 3 with video support for mask generation. It has strong adoption at 1.9M downloads. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,909 | 798,943 | ComfyUI single-file release of FLUX.3 Klein for image generation and editing. It is trending on ready-to-run workflow support. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,072 | 26,740 | Multi-speaker text-to-speech model built on the `fish_omni` architecture. It targets expressive dialogue and drama-style narration. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 795 | 14,282 | Supervised fine-tuned text-to-image model in the MOSS-Image family, released in diffusers format. It follows the Base model's wide adoption. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 517 | 3,095,436 | Apache-2.0 ComfyUI packaging of MOSS-Image. Its 3.1M downloads are among the highest here, driven by one-click workflow use. |
| [tencent/Hy-SimulMT-30B-A3B-FP8](https://huggingface.co/tencent/Hy-SimulMT-30B-A3B-FP8) | tencent | 250 | 165 | 30B MoE (3B active) simultaneous-translation model in FP8. Its download count is still very low, but it is an unusual real-time machine-translation release. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,987 | 282,912 | Second-generation Gemma-based embedding model. It is popular for retrieval and RAG pipelines. |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 426 | 13,828 | Mistral's 209M-parameter time-series forecasting foundation model. It is a first foray into a non-language modality for the lab. |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 352 | 8,218 | Science-oriented MoE model on the `qwen3_5_moe` base with image-text-to-text support. It targets scientific reasoning. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 300 | 8,357 | Second-generation OCR model from Baidu, with a vision-language interface. It aims at long and complex document parsing. |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 239 | 2,305 | DNA-focused model built on the Qwen3 architecture. It signals Hugging Face's own push into biology. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,231 | 2,182,980 | Uncensored GGUF-quantized Qwen-Image 2.1 for ComfyUI. It shows strong demand for low-VRAM, unrestricted image generation. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,185 | 1,725,108 | Uncensored, coding-oriented GGUF fine-tune of Qwen3.8-27B. It reaches 1.7M downloads, which shows how quickly Qwen3.8 derivatives spread. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 420 | 1,377,570 | Mixed-precision GGUF quantization of DeepSeek-V4.1-Flash using GSQ and RCO methods. It has an unusually high download-to-like ratio, which points to heavy practical use. |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 434 | 9,150 | FP8 uncensored variant of DeepSeek-V4.1-Flash. It is one of several refusal-removal derivatives of the model. |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 303 | 178,000 | Unsloth's GGUF conversion of RecursiveSI/flint. It drew 178,000 downloads quickly, well ahead of the base model's 14,047. |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 290 | 27,056 | Abliterated GGUF build of DeepSeek-V4.1-Flash for llama.cpp. It extends the refusal-removal trend to local inference. |
| [XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) | XHToken | 210 | 147,273 | GGUF release of Spark-X2.6-4B from the same author. Its downloads are about 18x the original's. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 204 | 6,944 | Qwen3.5-4B fine-tune for Three.js and 3D code generation, in GGUF format. It is a niche but practical coding specialist. |

## Ecosystem Signal

Qwen is the clear momentum leader. Qwen3.8-27B and Flash-Next hold two of the top spots, and derivatives such as DavidAU's 27B fine-tune and the Qwen-Image quantization show the family is the default base for community work. The `qwen4_exp` tag suggests the next generation is close.

DeepSeek-V4.1-Flash is the second hub. At least four derivatives appear (GGUF, FP8 and two uncensored/abliterated builds), which suggests the weights are open and easy to modify.

The entries are almost all open-weight. The list shows no proprietary models, and the major labs (Qwen, DeepSeek, MiniMax, Google, Meta, Nvidia, Mistral) are all represented.

Quantization is the main community activity. GGUF downloads far exceed the base-model downloads for the 4B Spark and for flint. Refusal-removal ("uncensored", "abliterated", "heretic") is common. Small-footprint releases such as Nemotron Bolt (4GB) and LFM3-1.7B point to growing edge demand. Video, segmentation and time-series models show the open ecosystem extending beyond text.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: It is the community's clear favorite, and its size is practical for single-GPU use. It is a good baseline for multimodal and coding work.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: An open video model covering text-, image- and video-to-video in one checkpoint. It is the most accessible way to try current open video generation.
3. **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)**: A small time-series foundation model that runs cheaply, which makes it easy to benchmark against your own forecasting baselines. It is also a good way to see how a language-model lab approaches a new modality.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
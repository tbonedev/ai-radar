# Hugging Face Trending Models Digest 2026-10-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-27 12:56 UTC

---

# Hugging Face Trending Models Digest, 2026-10-27

## Today's Highlights

DeepSeek-V4.1-Flash-1017 leads the week with 3,295 likes. Its derivatives (GGUF, abliterated and FP8 uncensored builds) appear in the list within days of release. Qwen3.8-27B has the most likes of any model here (18,502) and 7.5M downloads, and a Qwen-based uncensored fine-tune also trends. Lightricks' LTX-2.5 video model (9,511 likes, 2.16M downloads) and Meta's SAM 3 (5,209 likes) show strong demand in generative video and segmentation. Small specialist releases include Mistral's Timestral-209M for time-series forecasting, Google's embeddinggemma-2 and two OCR models.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 3,295 | 105,667 | A multimodal (image-text-to-text) Flash model in the DeepSeek V4.1 line. It tops the language-model list on likes and has already spawned several community quantizations. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,502 | 7,522,728 | A 27B image-text-to-text conversational model from Qwen. It has the most likes and downloads in this digest, which suggests broad adoption at a size that runs on a single high-end GPU. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 945 | 10,574 | A conversational text-generation model on its own `flint` architecture. It has drawn attention from a relatively unknown lab, and Unsloth has already published GGUFs. |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 398 | 11,075 | A multimodal vision-language model in the MiniMax M3 line. It is a lighter "Flash" variant for cheaper inference. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 626 | 4,785 | A 33B Llama-architecture text model. Its likes are high relative to its downloads, which points to interest from people studying it. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 743 | 6,191 | A compact 4B text-generation model on a custom `spark2_5` architecture. It stands out for its likes at a small parameter count. |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 324 | 6,613 | A mixture-of-experts model built on the Qwen3.5 MoE architecture, with image-text input. It is likely aimed at scientific use given the lab's focus. |
| [ornith-ai/Ornith-1.5-122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B) | ornith-ai | 193 | 76,295 | A 122B Qwen3.5 MoE-based model. Its downloads are high relative to its likes, so it is being tried widely despite its size. |
| [KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 202 | 2,208 | A preview of the first small language model in KRAFTON's Raon family. It is notable as a gaming company's entry into foundation models. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 166 | 44,651 | An edge-oriented Nemotron 3.5 model sized to fit in about 4GB, released in both PyTorch and GGUF. It targets on-device deployment. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,511 | 2,163,739 | An open video model covering text-to-video, image-to-video and video-to-video. It has the second-most likes in the digest and over 2M downloads. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,209 | 1,876,779 | Meta's SAM 3 segmentation model with video support. It has nearly 1.9M downloads, so it is a standard component in vision pipelines. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,791 | 750,694 | A ComfyUI-packaged FLUX.3 Klein model for image generation and editing. It has 750K downloads, which suggests many users pulled it directly into ComfyUI workflows. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 769 | 13,253 | A supervised fine-tuned text-to-image model in diffusers format. It is the research-side checkpoint behind the ComfyUI MOSS-Image release. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 493 | 2,760,550 | A single-file ComfyUI packaging of MOSS-Image under Apache-2.0. It has 2.76M downloads, more than the original checkpoint, because it is easy to use in ComfyUI. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,048 | 24,996 | A multi-speaker text-to-speech model from Fish Audio. It is trending for expressive speech aimed at dialogue and drama. |
| [Comfy-Org/Fibo-2.0](https://huggingface.co/Comfy-Org/Fibo-2.0) | Comfy-Org | 199 | 170,383 | A ComfyUI single-file packaging of Bria's Fibo-2.0-dev. It references arXiv 2511.06876 and makes the model easy to run locally. |
| [briaai/Fibo-2.0-dev](https://huggingface.co/briaai/Fibo-2.0-dev) | briaai | 175 | 1,420 | Bria's source Fibo 2.0 dev checkpoint for text-to-image and image editing. It is the upstream of the Comfy-Org repackage. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,959 | 256,852 | The second generation of Google's Gemma-based embedding model. It has nearly 3K likes, so the market for compact embedding models is still active. |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 408 | 12,334 | A 209M-parameter foundation model for time-series forecasting. It is unusual for Mistral, which is known for language models, to ship one. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 446 | 5,368 | An OCR model with ONNX weights and CPU support. It targets low-cost document processing without a GPU. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 163 | 513 | Baidu's second-generation OCR model, based on a vision-language approach. It is new, with few downloads so far. |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 212 | 1,595 | A Qwen3-based model tagged for DNA sequences, from Hugging Face's biology group. It reflects a trend of adapting LLM backbones to genomics. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,147 | 2,201,569 | A GGUF-quantized, uncensored build of Qwen-Image 2.1 for ComfyUI. It has 2.2M downloads, mainly from users who want to run it on consumer GPUs. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,137 | 1,713,544 | An uncensored, code-oriented GGUF fine-tune of Qwen3.8-27B. It has 1.7M downloads, which shows demand for Qwen derivatives. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 371 | 1,105,751 | A mixed-precision GGUF of DeepSeek-V4.1-Flash using the GSQ and RCO methods. It has 1.1M downloads, more than the base model's 105,667. |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 278 | 149,888 | Unsloth's GGUF quantization of RecursiveSI/flint. It has about 150K downloads, much more than the base model's 10,574. |
| [XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) | XHToken | 177 | 104,927 | The author's own GGUF release of Spark-X2.6-4B. It has about 105K downloads, versus roughly 6K for the original. |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 251 | 13,441 | An abliterated (refusal-removed) GGUF of DeepSeek-V4.1-Flash for llama.cpp. It is one of three DeepSeek-derived variants in the list. |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 397 | 8,282 | An FP8 uncensored variant of DeepSeek-V4.1-Flash. It is for users who want higher fidelity than GGUF. |

## Ecosystem Signal

Qwen and DeepSeek are gaining the most momentum. Qwen3.8-27B leads the list on likes and downloads and is the base for several community fine-tunes, including one with 1.7M GGUF downloads. DeepSeek-V4.1-Flash-1017 has at least three derivatives (GGUF, abliterated, FP8) in the same week. Open weights dominate. Every entry is openly downloadable, and mostly major Chinese labs lead the likes, with Western contributions from Google, Meta, Mistral, NVIDIA and Black Forest Labs.

Quantizations get far more downloads than their base models: ISTA-DASLab's DeepSeek GGUF has about 10x the base downloads, and the Unsloth and XHToken GGUFs show similar ratios. Uncensored and abliterated variants appear on both LLMs and image models. ComfyUI repackaging (Comfy-Org MOSS-Image, Fibo-2.0, FLUX.3 Klein) shows that ComfyUI is now a primary distribution channel for image models. Small specialist models for OCR, time series and embeddings are also appearing.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: It has the strongest adoption signal in this digest, and 27B is a practical size for local or single-GPU use. Its many derivatives make it a good base to study and fine-tune.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: An open video model that handles text-, image- and video-conditioned generation in one checkpoint. Try it to see how far open video generation has come.
3. **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)**: At 209M parameters it is cheap to run, and it applies foundation-model methods to time-series forecasting. It is a good place to benchmark against traditional forecasting approaches.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Hugging Face Trending Models Digest 2026-11-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-14 13:55 UTC

---

# Hugging Face Trending Models Digest — 2026-11-14

## Today's Highlights

The Qwen3.8 family dominates this week's chart: Qwen3.8-27B leads on likes (19,945) and downloads (6,757,964), with the Flash-Next variant, an unsloth GGUF, and several abliterated and uncensored fine-tunes following close behind. MiniMax's new H3 image model has spawned an ecosystem of its own, including Comfy-Org packaging, Viggle's video remake and HyperFlow's fast video model. Lightricks' LTX-2.5 (11,857 likes, 2.78M downloads) and Meta's SAM 3 remain strong in vision and video. Frontier open-weight releases from DeepSeek (V4.1-Flash) and Moonshot (Kimi-K3.1-Pro) also appear on the list.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,945 | 6,757,964 | A 27B multimodal (image-text-to-text) chat model from the Qwen3.8 line. It tops this week's chart in both likes and downloads, and acts as the base for many derivative quantizations and fine-tunes. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 7,112 | 3,031,222 | A faster Qwen3.8 variant tagged `qwen4_exp`, which suggests an experimental architecture. It draws strong adoption (3M+ downloads) as a preview of what comes next. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,690 | 434,013 | A multimodal Flash-tier release in the DeepSeek V4.1 line. Its high like-to-download ratio points to strong interest from people studying the model. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 2,068 | 43,687 | Moonshot's Pro-tier multimodal model, shipped with compressed-tensors weights. Its modest downloads likely reflect the hardware needed to run it. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 585 | 6,191 | A supervised fine-tune of the Qwen3.5 architecture from Nous Research. It is new and low on downloads, but the Nous name draws attention. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 288 | 3,647 | A small multimodal conversational model on a new `inkling2` architecture. It is an early release from Thinking Machines that is attracting curiosity. |
| [meituan-longcat/LongCat-2.5](https://huggingface.co/meituan-longcat/LongCat-2.5) | meituan-longcat | 260 | 1,254 | Meituan's multimodal LongCat release, with a custom `pro_v` architecture. It was only just published, so downloads are still minimal. |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 243 | 33,819 | A 145B latent-MoE model quantized to NVFP4 for edge inference. It is trending as an example of large-MoE deployment on Blackwell-class hardware. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 585 | 10,328 | A 65B Apache-2.0 preview model that ships custom code. The permissive license is a draw for builders. |
| [adventists-ai/Sophon-Realtime-v1](https://huggingface.co/adventists-ai/Sophon-Realtime-v1) | adventists-ai | 256 | 0 | A full-duplex speech-to-speech model for voice agents that models paralinguistics. It has 0 downloads so far, so its likes reflect interest rather than usage. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,857 | 2,777,667 | A video generation model covering image-to-video, text-to-video and video-to-video. It is the top-liked generative media model this week. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,082 | 517,948 | MiniMax's text-to-image and image-to-image model, distributed in Diffusers format. It is the origin of the `minimax-h3` ecosystem. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 372 | 1,615,613 | A ComfyUI single-file packaging of MiniMax-H3-Image. It has about 3x the downloads of the original repo, which shows how much users prefer ready-to-use workflows. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,145 | 1,292,519 | A ComfyUI-ready Klein build of FLUX.3 for image generation and editing. It is trending because it is easy to use in ComfyUI. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 395 | 196,821 | A video-to-video model for character replacement and video editing, built on minimax-h3. It is an application-level use of the H3 base. |
| [VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash) | VideoRebirthAI | 289 | 440,150 | A fast image-text-to-video model in the minimax-h3 family. It reaches 440K downloads, which shows demand for faster video generation. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 279 | 96,251 | A quantized, uncensored derivative of Qwen-Image 2.1 in Diffusers and GGUF formats. It is trending because users want to run it locally without filters. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 328 | 19,743 | A compact text-to-speech model available in safetensors and GGUF. It is a lightweight TTS option for local deployment. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,328 | 32,619 | An Apache-2.0 image-to-3D model that outputs Gaussian splats. Its likes are high relative to its downloads, so it is mostly being bookmarked. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,575 | 2,065,427 | Meta's Segment Anything 3, with video support. It has more than 2M downloads, which makes it a standard segmentation tool. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 1,166 | 15,747 | A 3D human mesh recovery and pose estimation model built on a DINOv3 backbone. It extends the SAM 3 family into 3D body understanding. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 293 | 24,452 | A compact vision-language model for image-to-text and zero-shot object detection. It targets on-device use. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 1,115 | 416,680 | A 4B code model specialized for Three.js and 3D web code. It has 416K downloads despite being small, because it can run on modest hardware. |
| [tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16) | tencent | 269 | 4,873 | A draft model for speculative decoding against Qwen3.8-27B. It targets inference speedups for the week's most popular base model. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 7,252 | 24,470 | An uncensored "heretic" fine-tune of a Qwen3.5 9B model. Its 7,252 likes against 24,470 downloads is an unusually high ratio, which suggests that likes are being driven by something other than usage. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,910 | 6,422,783 | The unsloth GGUF quantization of Qwen3.8-27B. It has 6.4M downloads, nearly matching the base model, so it is the main way people run it locally. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,124 | 4,094,475 | An abliterated (refusal-removed) GGUF of Qwen3.8-27B. It reached 4M+ downloads, which shows large demand for uncensored variants. |
| [DavidAU/Qwen3,8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,102 | 1,657,783 | An uncensored, coding-oriented GGUF merge of Qwen3.8-27B with MTP (multi-token prediction) support. It has 1.66M downloads. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 1,755 | 2,139,868 | A 9B uncensored GGUF with NEO Imatrix quantization and MTP. It has 2.1M downloads, which makes it a popular small local model. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 284 | 116,423 | A GGUF quantization of a decensored Gemma 4 31B instruct model. It is the only Gemma-based entry on the list. |

## Ecosystem Signal

Qwen is the strongest family this week. Qwen3.8-27B anchors a large derivative layer: the unsloth GGUF (6.4M downloads), abliterated variants, DavidAU merges, Tencent's speculative-decoding draft model and the experimental Flash-Next. Open weights dominate, and frontier-scale releases from DeepSeek and Moonshot continue the trend. Uncensored and "heretic" fine-tunes are unusually prominent, with at least six entries, and their download counts are often in the millions. Media generation is clustering around MiniMax H3: the base model, the ComfyUI repackaging, Viggle's remake and HyperFlow's fast variant all appear. Packaging matters, too. ComfyUI single-file builds and GGUF often out-download the original repos. Finally, the top entry has 7,252 likes against 24,470 downloads, so some of the likes may not reflect real usage.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — This is the base for most of the week's local-model activity. Study it first to understand what the rest of the derivatives build on.
2. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — The `qwen4_exp` tag points to architectural changes that may preview the next generation, and 3M downloads suggest it is usable now.
3. **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)** — A speculative-decoding draft model is a practical way to speed up the most popular local model. It is also a good reference for how to train draft models.

One correction: in the DavidAU Qwen3.8 row above, the display text has a typo ("Qwen3,8"). The link is correct, and the name should read `DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF`.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
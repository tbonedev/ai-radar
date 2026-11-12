# Hugging Face Trending Models Digest 2026-11-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-12 15:44 UTC

---

# Hugging Face Trending Models Digest — 2026-11-12

## 1. Today's Highlights

The Qwen3.8 family dominates the board: the 27B dense model, the Flash-Next variant, and a wave of GGUF, uncensored, and speculative-decoding derivatives all trend at once. MiniMax's H3 generation is the other big story, with the base video model (6.4M downloads), an image model, and several community adaptations. Lightricks' LTX-2.5 (11,588 likes) and Moonshot's Kimi-K3.1-Pro round out the major releases. Community "heretic"/uncensored fine-tunes continue to draw heavy attention.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,697 | 7,094,218 | Dense 27B multimodal (image-text-to-text) model from Qwen. It has the most likes of any LLM today and over 7M downloads. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 7,009 | 3,193,031 | Faster "Flash" tier that uses a new `qwen4_exp` architecture tag. It hints at next-generation Qwen design and is already past 3M downloads. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,968 | 37,486 | Moonshot's flagship multimodal model, released with compressed-tensors weights. Interest is high relative to its early download count. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 463 | 4,669 | Supervised fine-tune of a Qwen3.5-architecture 27B base from Nous Research. It is a new release with early community interest. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 526 | 7,667 | Apache-2.0 65B preview model that ships with custom code. Large open weights drive the attention despite low downloads. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 319 | 49,861 | 8B Granite-architecture text-generation model with GGUF builds. It targets compact local deployment. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,588 | 2,782,513 | Open video model covering image-to-video, text-to-video and video-to-video. It has the second-highest likes on the board. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 6,831 | 6,466,331 | Open text/image-to-video model in the Diffusers format. It is the most downloaded model in the generation category and anchors a growing H3 ecosystem. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 828 | 306,718 | Text-to-image and image-to-image sibling in the H3 family. It extends the line beyond video. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 282 | 835,593 | ComfyUI-ready single-file packaging of MiniMax-H3-Image. Its downloads are well above the original's, showing demand for workflow-ready builds. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,003 | 1,296,849 | FLUX.3 Klein for image generation and editing, packaged for ComfyUI. It is the strongest image-editing entry today. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,198 | 29,904 | Apache-2.0 image-to-3D model that outputs Gaussian splats. It draws strong likes for a niche task. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 323 | 152,819 | Video-to-video character replacement built on MiniMax-H3, with GGUF builds. It shows third parties building on H3. |
| [VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash) | VideoRebirthAI | 230 | 326,487 | Faster image/text-to-video variant in the H3 ecosystem. It is offered in Diffusers and GGUF formats. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 215 | 8,543 | Compact text-to-speech model with GGUF weights. It is the latest in the Zonos line. |
| [ConwayResearch/Underdog-Woof](https://huggingface.co/ConwayResearch/Underdog-Woof) | ConwayResearch | 205 | 10 | On-device, CPU-only text-to-speech model. It has almost no downloads yet but strong early likes. |
| [Comfy-Org/RelayVSR](https://huggingface.co/Comfy-Org/RelayVSR) | Comfy-Org | 190 | 107,527 | ComfyUI packaging of the RelayVSR video super-resolution model. It is used as a workflow upscaler. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,430 | 2,070,504 | Meta's Segment Anything 3 for mask generation, with video support. It is the top vision model by likes. |
| [facebook/dinov3-vitl16-pretrain-lvd1689m](https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m) | facebook | 2,142 | 703,532 | DINOv3 ViT-L/16 self-supervised backbone for image features. It is widely used as a vision encoder. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 1,035 | 368,236 | 4B coding model specialized for Three.js and 3D code. It is small enough for local use. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 190 | 16,133 | Vision-language model with zero-shot object detection. It targets on-device use. |
| [tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16) | tencent | 207 | 3,738 | Draft model for speculative decoding of Qwen3.8-27B. It speeds up inference without changing outputs. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,787 | 6,097,719 | Unsloth's GGUF quantizations of Qwen3.8-27B. It is the most downloaded quantization on the board. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 4,643 | 18,933 | Uncensored 9B fine-tune on a Qwen3.5 base, tagged with DeepSeek-V4-Pro. Its likes are very high relative to its downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,960 | 1,599,836 | Uncensored, coding-oriented GGUF merge of Qwen3.8-27B with MTP. It has 1.6M downloads. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,624 | 2,146,470 | GGUF quantizations of Qwen3.8-Flash-Next. They became available quickly after the base release. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 926 | 4,120,281 | Abliterated GGUF of Qwen3.8-Flash-Next. It has over 4M downloads. |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,349 | 15,693 | Slimmed GLM-5.3 MoE found through neural architecture search, in GGUF form. It aims to shrink a large MoE for local use. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 235 | 96,342 | Decensored GGUF of Gemma-4-31B-it. It shows the heretic treatment spreading beyond Qwen. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 302 | 314,842 | imatrix GGUF quantizations of the trending xtools-at uncensored 9B. It makes the model easy to run locally. |

## 3. Ecosystem Signal

Qwen is the clear momentum leader. Its 27B and Flash-Next releases sit at the top, and about a third of the list is derived from them (GGUFs, abliterations, a Tencent draft model). The `qwen4_exp` tag on Flash-Next suggests an architecture shift is coming.

MiniMax-H3 is forming a video/image ecosystem. Viggle, VideoRebirthAI and Comfy-Org all build on it, which is how a Llama-style open-weight ecosystem forms.

Nearly every notable release is open-weight. Quantization is the dominant community activity. Unsloth ships GGUFs within days, and mradermacher and others follow. Uncensored "heretic" and "abliterated" variants are a major pull, covering Qwen, DeepSeek and Gemma bases. The like counts on some uncensored fine-tunes far exceed their download counts, so treat them as hype signals rather than adoption.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: the reference model for this week's wave. Its 27B size fits a single high-end GPU, and the many derivatives make it a good base for comparing quantizations.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: a top open video model with unified image, text and video inputs. It is worth testing against the MiniMax-H3 family.
3. **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)**: a speculative-decoding draft model worth studying for serving speedups on Qwen3.8-27B.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
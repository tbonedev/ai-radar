# Hugging Face Trending Models Digest 2026-09-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-21 13:34 UTC

---

# Hugging Face Trending Models Digest — 2026-09-21

## Today's Highlights

The week is dominated by the **Qwen3.8-27B** family, which tops the charts with 15,922 likes and over 7.1M downloads and has already spawned a dense ecosystem of quantizations (GGUF, MLX), speed-tuned variants (Swift-Qwen3.8), and uncensored fine-tunes. Flagship multimodal chat models — **DeepSeek-V4.1-Flash**, **GLM-5.3-Flash**, and **Qwen3.8-Flash-Next** — continue the shift toward native image-text-to-text architectures as the default for general-purpose assistants. Extreme quantization is a standout theme: **prism-ml/Ternary-Bonsai-2-27B** ships in both GGUF and MLX 2-bit ternary formats and has racked up 2.2M+ downloads, signaling strong demand for edge-deployable large models. Video and image generation also saw major releases, with **Lightricks/LTX-2.5** and **MiniMaxAI/MiniMax-H3** pushing image/text-to-video quality, and **Qwen/Qwen-Image-2.1** advancing text-to-image editing.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,922 | 7,153,238 | The top-trending model this week by a wide margin, Qwen3.8-27B is a vision-language conversational model that has become the base for a large downstream ecosystem of quantizations and fine-tunes. Its 7.1M+ downloads make it the most widely adopted open model in this snapshot. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,528 | 774,778 | A next-generation "Flash" variant (tagged `qwen4_exp`) hinting at an early Qwen4 experimental architecture, built for low-latency multimodal conversation. Strong early adoption at 774K+ downloads suggests interest in previewing Qwen's next model generation. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,507 | 3,309,565 | A fast, image-text-to-text conversational model in the GLM-5 series, notable for combining high likes with over 3.3M downloads. It reflects continued momentum for Zhipu's GLM line as a mainstream open alternative to Qwen and DeepSeek. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,485 | 512,120 | DeepSeek's efficient "Flash" multimodal chat model, supporting image-text-to-text input at lower cost than the full V4.1. It has already attracted derivative fine-tunes within days of trending, evidence of rapid community uptake. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,019 | 18,394 | A 29B-parameter mixture-of-experts conversational model with ~4B active parameters (A4B), aiming for large-model quality at small-model inference cost. Its MoE sparsity pattern is a notable efficiency angle among this week's new base models. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 217 | 5,078 | A 9B vision-language model specializing in spatial reasoning, positioning it for robotics and embodied-AI style tasks rather than general chat. It's an early-stage release but notable for tackling a capability gap (spatial grounding) most general VLMs skip. |
| [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 221 | 978 | A preview release using a `glm_moe_dsa` architecture with an accompanying arXiv paper, suggesting InternLM is experimenting with a new sparse MoE design ahead of a full release. Bilingual (zh/en) support points to continued focus on Chinese-English model quality. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,636 | 460,533 | The latest entry in OpenBMB's efficient small-model MiniCPM line, a 2B dense model built on a Llama-style architecture. Its 460K+ downloads for such a compact model highlight continued demand for edge- and mobile-friendly LLMs. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 1,193 | 6,523 | Qwen's updated text-to-image and image-editing diffusion model, built on the `diffusers` library. It's already spawned ComfyUI and GGUF packagings within the same trending window, a strong early signal of ecosystem tooling support. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,614 | 1,626,742 | A versatile video diffusion model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video generation in a single-file diffusion format. With 1.6M+ downloads, it's one of the most-adopted video generation models this week. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,550 | 4,046,917 | MiniMax's flagship image-text-to-video model, combining strong likes (5,550) with the highest download count among video models tracked here (4M+). Its `diffusers`-native support suggests it's built for easy integration into existing generation pipelines. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 936 | 18,759 | A 3B text-to-audio/music-generation model featuring symbolic planning and agentic editing capabilities, allowing more structured, controllable music composition than typical end-to-end generators. It represents a niche but technically distinctive approach to AI music generation. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 1,485 | 0 | A text-classification model tagged "calibrated-decisions," suggesting it's designed for confidence-calibrated decision outputs rather than raw classification. High likes despite zero recorded downloads point to strong community interest ahead of wider adoption. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 384 | 0 | An open NLI cross-encoder built on a Qwen3.5 backbone, targeting natural language inference and entailment tasks. Cross-encoders like this are commonly used for reranking and fact-verification pipelines. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 202 | 1,864 | An automatic speech recognition model built on a Qwen3-ASR backbone, part of NetEase Youdao's Confucius model line. It targets specialized ASR use cases rather than general-purpose transcription. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,650 | 2,227,879 | A ternary (2-bit) GGUF quantization of a 27B model, the most-downloaded entry in this category at 2.2M+. It demonstrates that extreme low-bit quantization can retain enough usability to drive mass adoption for local/llama.cpp inference. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,448 | 7,039,006 | Unsloth's GGUF quantization of Qwen3.8-27B, with downloads (7M+) nearly matching the original base model. It's become the de facto standard way most users run Qwen3.8-27B locally. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,510 | 1,292,471 | A GGUF quantization of Qwen3.8-27B using GSQ/RCO mixed-precision quantization techniques from the research group behind GPTQ-style compression. Its 1.3M+ downloads show demand for research-grade quantization methods beyond standard GGUF. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,029 | 1,348,712 | An elaborately merged and uncensored GGUF fine-tune of Qwen3.8-27B combining multiple community techniques ("Heretic," "Cold Fusion," coder-tuned variants). Despite the niche positioning, it pulled 1.3M+ downloads, reflecting strong demand for uncensored/merged local models. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 329 | 35,493 | An FP8-quantized, alignment-stripped version of DeepSeek-V4.1-Flash, released within days of the base model. It's part of a growing trend of rapid "uncensoring" of newly released flagship models. |
| [abenzerps/Qwen-Image-2.1-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-GGUF) | abenzerps | 360 | 33,232 | A GGUF quantization of Qwen-Image-2.1 packaged for ComfyUI-GGUF, enabling the image model to run on lower-VRAM consumer hardware. It's part of the fast-growing tooling layer around Qwen's new image model. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 385 | 535,365 | A single-file diffusion packaging of Qwen-Image-2.1 optimized for direct use in ComfyUI, with 535K+ downloads. It shows how quickly image/video base models get repackaged for the ComfyUI workflow ecosystem. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 522 | 16,514 | A speed-optimized ("Swift") fine-tune of Qwen3.8-27B aimed at faster inference while retaining the base model's multimodal chat capabilities. It's an early example of latency-focused derivative tuning for the Qwen3.8 family. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 338 | 144,372 | The GGUF-quantized, llama.cpp-ready version of Swift-Qwen3.8-27B, tagged for "efficient-thinking." It pairs the speed-tuned fine-tune with local-inference accessibility. |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 299 | 36,744 | The Apple Silicon MLX counterpart to Ternary-Bonsai-2-27B, using the same 2-bit ternary quantization scheme for on-device inference on Macs. It extends the model's extreme-compression approach to a second major local-inference runtime. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 203 | 53,094 | A GSQ/RCO mixed-precision GGUF quantization of the newly released Qwen3.8-Flash-Next, showing how quickly research quantization groups target fresh flagship releases. It brings the same compression techniques used on Qwen3.8-27B to Qwen's next-gen preview model. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 586 | 268,296 | A community fine-tuned variant of MiniMax-H3 focused on video generation, with 268K+ downloads shortly after the base model's release. It reflects fast community iteration on newly released video diffusion models. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 494 | 0 | An MLX-formatted Qwen2.5-1B variant tuned with RLCD (RL from Contrastive Distillation) for structured and constrained generation on Apple Silicon. It targets parallel/constrained decoding use cases rather than general chat. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 256 | 834 | A Qwen3.8-based fine-tune apparently targeting creative/literary writing style, given its name and text-generation focus. It's an early-stage niche fine-tune with modest but growing adoption. |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 987 | 12,260 | A 9B agentic fine-tune built on a Qwen3.5-text base, tagged specifically for agent-style task execution. Its relatively high likes-to-downloads ratio suggests strong early community curiosity about its agentic tuning. |

## Ecosystem Signal

The **Qwen3.8** family is the clear center of gravity this week — it anchors not just the top base model but a sprawling downstream ecosystem of GGUF/MLX quantizations, speed-tuned ("Swift") variants, and uncensored merges, several of which individually crack a million-plus downloads. **DeepSeek-V4.1-Flash** shows the same pattern forming within days of release, already spawning an uncensored FP8 variant. Open-weight models dominate entirely in this snapshot — no proprietary/closed entries appear, reinforcing that trending activity on HF is driven almost exclusively by openly-licensed releases from Qwen, DeepSeek, MiniMax, GLM, and community labs. Quantization activity is especially intense: beyond routine GGUF conversions, **prism-ml's ternary 2-bit** scheme (available in both GGUF and MLX) signals growing appetite for extreme compression that still preserves usability at 27B scale. Video generation (LTX-2.5, MiniMax-H3) and image generation (Qwen-Image-2.1) are also seeing fast tooling turnaround — ComfyUI packagings and GGUF variants appear within the same week as the base releases, showing a maturing, rapid-response quantization/packaging pipeline across the community.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear ecosystem anchor this week (15,922 likes, 7.1M+ downloads); worth studying both as a capability benchmark and as a case study in how fast a base model spawns derivative quantizations and fine-tunes.
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — a rare production-grade ternary 2-bit quantization at 27B scale with 2.2M+ downloads; a good test case for how far extreme compression can go before quality degrades noticeably.
3. **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen's updated image generation/editing model, worth trying given the immediate ComfyUI and GGUF ecosystem support that formed around it, indicating strong practical usability out of the gate.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
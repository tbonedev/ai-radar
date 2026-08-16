# Hugging Face Trending Models Digest 2026-08-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-16 07:27 UTC

---

# Hugging Face Trending Models Digest — August 16, 2026

## Today's Highlights

The week's trending list is dominated by two flagship families going head-to-head: Alibaba's **Qwen3.8-27B** and Moonshot AI's **Kimi-K3**, each pulling in roughly 10,000 likes and spawning an immediate wave of GGUF/FP8/NVFP4 derivatives from `unsloth` and others within days of release. MiniMax also had a strong showing, with **MiniMax-H3** (image-text-to-video) racking up over 2.2M downloads on its own and another 12.8M via the `Comfy-Org` ComfyUI-packaged variant — by far the highest download count on the board. DeepSeek's **DeepSeek-V4-Flash-0731** shows the "flash" distilled tier again outperforming the "pro" tier in community adoption (3,430 vs. 506 likes). Community fine-tuning activity is heavily concentrated on quantization and "uncensored" derivatives of the two leading base models, underscoring how fast the ecosystem now moves from base-model release to optimized, redistributable artifacts.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,741 | 2,100,680 | Moonshot AI's latest flagship model, topping the weekly likes chart despite a relatively young release. Its `compressed-tensors` tag signals native efficient-inference support, likely driving fast community adoption. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,922 | 91,917 | Qwen's new 27B conversational flagship, built on the `qwen3_5` architecture with native image-text-to-text support. It's already the seed model for a dozen quantized and fine-tuned spin-offs across the trending list. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,430 | 1,798,247 | The lighter-weight "Flash" variant of DeepSeek-V4, favored for faster inference. It's outpacing the "Pro" tier nearly 7-to-1 in likes, suggesting the community prioritizes speed/cost over raw capability for most workloads. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 985 | 6,381 | A massive 2.4T-parameter MoE variant of Qwen3.8 with 95B active parameters. Its low download count relative to likes suggests it's being watched closely but is still too large for most local deployments. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 633 | 135,448 | A compact 2.6B liquid foundation model aimed at edge and on-device text generation. Its small footprint makes it attractive for resource-constrained deployments. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 154 | 62,965 | The full-precision BF16 release of NVIDIA's Nemotron-H "Lightning" MoE model. Its NVFP4-quantized sibling is already trending separately, showing NVIDIA pushing dual-precision releases as standard practice. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 272 | 4,832 | A small hybrid-architecture ("bailing_hybrid") model with custom code, MIT-licensed. Notable for permissive licensing in a field increasingly dominated by "other"/restrictive licenses. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 168 | 240 | A preview release of the dots3 text-generation architecture with very low download counts so far. Early-stage interest suggests it's a niche or research-stage model still gaining visibility. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,994 | 2,212,155 | MiniMax's flagship image-text-to-video generation model, and the seed for the largest cluster of derivatives (Turbo, LoRA, ComfyUI packages) on this list. Its 2.2M+ direct downloads make it one of the most-adopted video generation models this week. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,593 | 246,454 | A 30B multimodal conversational model with strong early download traction relative to its likes count. It has already spawned GGUF quantizations from two separate community groups. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 961 | 378,439 | A versatile video generation model supporting image-to-video, text-to-video, and video-to-video in a single-file diffusion format. Its broad task coverage in one checkpoint is driving strong download numbers. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 785 | 5,079 | A dedicated text-to-music generation model from MiniMax, extending the company's generative lineup beyond video. Still early in downloads, but likes suggest strong anticipation for AI music generation quality. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 200 | 16,829 | A compact 2.9B text-to-image diffusion model packaged for ComfyUI. Its small size targets accessible local image generation. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 150 | 4,598 | A 3B vision-language variant of LiquidAI's LFM2.5 family. Extends the compact-model line into multimodal image-text-to-text use cases. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,364 | 12,790,850 | A ComfyUI-ready single-file build of MiniMax-H3, and by far the most-downloaded item on this entire list at 12.8M downloads. Illustrates how packaging for popular UI tools can dwarf even the base model's own adoption. |
| [DavidAU/...-Uncensored-Heretic-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,065 | 2,983,500 | An elaborately-named "uncensored" fusion fine-tune of Qwen3.6-27B in GGUF format, combining several community fine-tuning techniques (Heretic, NEO, MTP). Its high download count shows strong demand for uncensored, locally-runnable variants. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,288 | 867,963 | Unsloth's quantized GGUF build of the new Qwen3.8-27B flagship, already among the most-downloaded quantizations this week. Reflects the now-standard same-week turnaround from base release to llama.cpp-compatible quant. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 766 | 0 | A LoRA adapter for accelerating MiniMax-H3 video generation, covering text-to-video, text-to-audio, and audio-video tasks. Zero downloads recorded so far despite strong likes suggests very recent publication. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 530 | 211,917 | A "Turbo" distilled/accelerated variant of MiniMax-H3 supporting text-to-video, image-to-video, and reference-to-video. Aimed at faster inference for the popular base video model. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 441 | 682,188 | GGUF quantization of the Muse-Glimmer-30B multimodal model. High download-to-like ratio indicates it's primarily a practical local-inference tool rather than a headline release. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 441 | 123,157 | Qwen's own official FP8 quantization of Qwen3.8-27B, offered alongside the full-precision release. Shows model providers increasingly shipping quantized variants day-one rather than leaving it entirely to the community. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 360 | 0 | Another ComfyUI-oriented packaging of MiniMax-H3 from a well-known ComfyUI contributor. Zero downloads suggests a very fresh upload still gaining traction. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 286 | 321,049 | The original publisher's own GGUF quantization of Muse-Glimmer-30B, competing directly with unsloth's community build. Notably tagged with two arXiv references, pointing to accompanying research papers. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 278 | 170,554 | NVIDIA's own NVFP4 quantization of its Nemotron-H Lightning MoE model, achieving nearly 3x the downloads of the BF16 original. Highlights growing demand for NVIDIA's native FP4 format on Blackwell-class hardware. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 230 | 0 | A community "uncensored" FP8 fine-tune of the new Qwen3.8-27B, published within days of the base model. Zero downloads so far but notable for how quickly uncensored variants follow major releases. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 214 | 12,737 | A specialized LoRA for MiniMax-H3 tuned for photorealistic people generation in video. Targets a common commercial use case (realistic human video synthesis). |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 200 | 10,745 | Qwen's official FP8 quantization of its massive 2.4T-parameter MoE model, aimed at making the otherwise-unwieldy model more deployable. Still low downloads given the model's enormous size even after quantization. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 180 | 90,924 | Unsloth's NVFP4 quantization of Qwen3.8-27B, complementing its GGUF release for NVIDIA FP4-native hardware. Shows unsloth covering multiple quantization formats for the same popular base model. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 169 | 173,741 | A GGUF/stable-diffusion.cpp-compatible quantization of MiniMax-H3 for local video generation. Extends unsloth's quantization efforts beyond LLMs into video diffusion models. |

## Ecosystem Signal

This week's trending list reveals a "release-then-quantize-within-days" pattern accelerating further: both Qwen3.8-27B and MiniMax-H3 already have four-plus derivative variants (GGUF, FP8, NVFP4, LoRA) climbing the charts alongside their base models. Model providers themselves — Qwen, NVIDIA, and DeepSeek — are increasingly shipping official quantized variants (FP8, NVFP4) at or near launch, rather than ceding that ground entirely to `unsloth` and other community quantizers, though unsloth remains the dominant third-party quantizer across nearly every major release. Open-weight momentum is strongly with Chinese labs this week: Qwen, Kimi (Moonshot), DeepSeek, and MiniMax collectively account for the majority of both likes and downloads, while Western entrants (Liquid AI, NVIDIA, Meta-adjacent "meta-models") play a smaller but steady role. ComfyUI-packaged builds (`Comfy-Org`, `Kijai`) continue to drive outsized download numbers for video models — Comfy-Org's MiniMax-H3 build alone out-downloaded the original 5-to-1 — underscoring that UI-tool integration, not just model quality, now drives real-world adoption at scale. "Uncensored" community fine-tunes remain a persistent, fast-following niche for every major chat-capable release.

## Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — This week's single highest-liked model; worth studying both for its `compressed-tensors` native efficiency approach and to gauge whether Moonshot AI is closing the gap with Qwen/DeepSeek on mindshare.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The clear center of gravity for this week's video-generation activity, with a dozen derivative packages built around it; a good reference point for current state-of-the-art open video generation and how the ComfyUI ecosystem packages it.
3. **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)** — Worth a look for teams targeting NVIDIA Blackwell-class hardware; it's a useful case study in first-party NVFP4 quantization outperforming the BF16 original in downloads.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
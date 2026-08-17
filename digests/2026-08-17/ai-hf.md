# Hugging Face Trending Models Digest 2026-08-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-17 07:48 UTC

---

# Hugging Face Trending Models Digest — 2026-08-17

## Today's Highlights

Qwen's **Qwen3.8-27B** tops the week with 10,427 likes and has already spawned a dense derivative tree — GGUF, FP8, NVFP4 and uncensored variants all cracking the top 30. Moonshot AI's **Kimi-K3** is right on its heels with 10,773 likes and 2.1M+ downloads, the strongest single-day showing yet for the Kimi line. The biggest download number in the entire list, however, belongs to tooling rather than a base model: Comfy-Org's ComfyUI packaging of **MiniMax-H3** pulled in 13,406,892 downloads. DeepSeek's V4 family (Pro and Flash checkpoints) and NVIDIA's Nemotron-3.5-Lightning both shipped parallel full-precision and quantized releases, reinforcing that dual-format launches are now standard practice.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,019 | 7,932 | Qwen's large MoE text model (~2.4T total / ~95B active params), sibling to the flagship 27B VL model. Downloads are still low, reflecting its recent, text-only-focused release. |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 549 | 21,873 | The "Pro" tier of DeepSeek's V4 line, dated 08/13. Early adoption is modest compared to its Flash sibling below. |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,474 | 1,872,232 | A faster/lighter V4 checkpoint dated 07/31 with far broader uptake than the Pro variant. Its download count suggests Flash is becoming the default choice for cost-sensitive DeepSeek deployments. |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 286 | 5,727 | A tiny MIT-licensed model using the bailing_hybrid architecture with custom code. Still an early-stage release with limited download traction. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,773 | 2,136,775 | Moonshot AI's latest Kimi generation, shipped natively in compressed-tensors format. It edges out even Qwen3.8-27B in likes, making it the single most-liked model this week. |
| [dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 190 | 393 | An early preview of the dots3 architecture. Very low likes/downloads indicate this is a first look rather than a production release. |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 648 | 141,009 | Liquid AI's efficient LFM2 family update at 2.6B params. Solid mid-tier adoption fits its positioning as an edge/on-device text model. |
| [Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 160 | 66,253 | The full-precision BF16 release of NVIDIA's Nemotron-H hybrid architecture. It trails its own NVFP4 quantized sibling in both likes and downloads, signaling users increasingly prefer pre-quantized checkpoints. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,427 | 267,725 | The week's single most-liked model, a vision-language conversational model built on the qwen3_5 architecture. It anchors a large derivative ecosystem of GGUF/FP8/NVFP4/uncensored builds listed below. |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,639 | 292,973 | A new vision-language model on the novel "muse_glimmer" architecture. Downloads already outstrip its like count, hinting at strong pull from downstream quantizers. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,044 | 424,099 | A multi-task video model covering image-to-video, text-to-video and video-to-video generation. Its download velocity continues Lightricks' momentum in creator-facing video tools. |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 865 | 8,639 | A diffusers-based text-to-music generation model. Still early in its adoption curve but has already spawned a dedicated ComfyUI packaging. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,050 | 2,307,541 | MiniMax's flagship image-text-to-video model. Its ComfyUI port (see Fine-tunes table) went on to become the single most-downloaded artifact in this entire digest, at 13,406,892 downloads. |
| [Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 225 | 20,860 | A compact community-built text-to-image diffusion model. Its presence in the trending list shows continued appetite for lightweight open image generators from outside major labs. |
| [LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 154 | 5,512 | The smallest vision-language entry in the list at 3B params. Positioned for edge/on-device multimodal deployment. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,518 | 1,945,635 | Unsloth's GGUF quantization of the flagship Qwen3.8-27B for llama.cpp-style local inference. It has the highest download count of any Qwen3.8-27B derivative, confirming GGUF as the dominant local-deployment path. |
| [Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 498 | 352,971 | Qwen's own first-party FP8 quantization of its flagship model. Official backing drives strong uptake for GPU-native low-precision serving. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 463 | 718,178 | Unsloth's GGUF port of Muse-Glimmer-30B. Downloads already exceed the base model's like count, showing GGUF demand extends well beyond the Qwen ecosystem. |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 369 | 4,285 | A community "uncensored" FP8 fine-tune of Qwen3.8-27B. Small but part of a fast-growing wave of unrestricted local-chat fine-tunes around this base model. |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 570 | 239,206 | A distilled, turbo-accelerated version of MiniMax-H3 for faster video generation. Targets real-time or low-latency i2v/r2v workflows. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 302 | 357,877 | The model's own org shipping an official GGUF release, backed by two arXiv papers. First-party GGUF support typically accelerates community adoption. |
| [Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 294 | 196,326 | NVIDIA's own NVFP4 quantization of its Nemotron-H hybrid model. It outpaces the BF16 original in both likes and downloads, underscoring NVFP4's traction on Blackwell-class hardware. |
| [MiniMax-H3 (ComfyUI)](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,393 | 13,406,892 | A diffusion-single-file ComfyUI packaging of MiniMax-H3. Its 13.4M downloads are the highest of any model in this digest, showing how much adoption now flows through workflow-tool integration. |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,102 | 3,020,070 | An elaborate community "Heretic" uncensored merge with MTP support, in GGUF format. Despite the niche framing, it ranks among the most-downloaded derivatives in the list. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 237 | 183,988 | Another uncensored GGUF fine-tune of Qwen3.8-27B, built via the llama.cpp toolchain. Adds to the growing cluster of unrestricted local-chat variants. |
| [MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 233 | 16,103 | A LoRA adapter tuned for photorealistic people generation on MiniMax-H3. A niche but focused stylistic-control add-on. |
| [Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 214 | 276,269 | Unsloth's NVFP4, safetensors-native quantization of the flagship model. Rounds out the format coverage (GGUF/FP8/NVFP4) now available for Qwen3.8-27B. |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 211 | 11,311 | Qwen's official FP8 quant of the large MoE variant. Uptake is far lower than the 27B FP8, reflecting the MoE model's smaller overall audience. |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 779 | 0 | A LoRA targeting the Turbo-accelerated H3 pipeline, spanning text-to-video and audio-video. High like count despite no recorded downloads suggests a very recent upload. |
| [MiniMax-Music-3 (ComfyUI)](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 156 | 0 | A ComfyUI packaging of MiniMax-Music3, mirroring the pattern set by the H3 Comfy port. Brand-new listing with downloads not yet accrued. |

*No models in this batch fit Specialized Models (code, math, medical, embeddings) — the table is omitted.*

## Ecosystem Signal

This week's trending list is dominated by two flagship releases — Qwen's **Qwen3.8-27B** and MiniMax's **H3** video model — which together anchor over a dozen derivative uploads spanning GGUF, FP8, NVFP4 and LoRA formats. This "hub-and-spoke" pattern, where a single lab release triggers a wave of Unsloth/community requantizations within days, is now the default lifecycle for any high-likes base model. Open-weight activity remains heavily concentrated among Chinese labs (Qwen, DeepSeek, MiniMax, Moonshot/Kimi, dots-studio, inclusionAI), while NVIDIA and LiquidAI represent the main non-Chinese open contributions, both shipping efficiency-focused releases (NVFP4 quantization, sub-3B edge models). Fine-tune activity skews heavily toward "uncensored"/"abliterated" community merges of Qwen3.8-27B, suggesting sustained demand for unrestricted local chat models. ComfyUI packaging (Comfy-Org) is proving to be a major download multiplier — its MiniMax-H3 port alone out-downloaded every base model in the list — showing that workflow-tool integration, not just raw model quality, is now a primary driver of adoption at scale.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the week's top trending model and the clear ecosystem anchor; worth studying both as a strong open vision-language model and as a live case study in how fast a derivative ecosystem (GGUF/FP8/NVFP4/uncensored) forms around a hit release.
2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** via its **[Comfy-Org ComfyUI port](https://huggingface.co/Comfy-Org/MiniMax-H3)** — the download leader of the entire dataset at 13.4M; the best entry point for anyone doing hands-on image/video generation work this week.
3. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — near-top likes with native compressed-tensors quantization support, making it worth exploring as an efficient-to-serve alternative to Qwen3.8-27B.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
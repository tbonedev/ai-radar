# Hugging Face Trending Models Digest 2026-08-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-18 07:33 UTC

---

# Hugging Face Trending Models Digest — August 18, 2026

## Today's Highlights

The Hugging Face trending charts are dominated by two release cycles: Qwen's **Qwen3.8-27B** vision-language flagship and its 2.4T-parameter MoE sibling **Qwen3.8-2.4T-A95B**, and MiniMax's video/music generation duo **MiniMax-H3** and **MiniMax-Music3**. DeepSeek shipped two V4 checkpoints (Pro-0813 and Flash-0731) that are pulling nearly 2M and 25K downloads respectively, signaling strong infra-side adoption of the faster Flash variant. Moonshot AI's **Kimi-K3** matched Qwen3.8-27B almost like-for-like on likes (10.8K vs 10.9K), making it the week's most-liked multimodal chat model. The list is also unusually top-heavy with derivative artifacts — GGUF/FP8/NVFP4 quantizations and "uncensored" fine-tunes of Qwen3.8-27B and MiniMax-H3 make up over half of all 30 entries, reflecting how fast the community re-packages flagship open-weight drops. Comfy-Org's single-file conversion of MiniMax-H3 leads the entire board on raw downloads at over 14 million.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,044 | 9,465 | A 2.4-trillion-parameter MoE text model with 95B active parameters, the largest sparse LLM Qwen has shipped to date. It's trending as developers begin evaluating whether its active-parameter efficiency can rival dense flagship models at inference time. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,505 | 1,978,298 | The low-latency variant of DeepSeek V4, optimized for throughput over raw capability. Its near-2M download count — far outpacing the Pro variant — shows the ecosystem prioritizing serving cost for production deployments. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 578 | 25,006 | The full-capability counterpart to DeepSeek's Flash release, targeting maximum reasoning quality. Early adoption is modest relative to Flash, suggesting most current downloaders are prioritizing speed over peak accuracy. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 310 | 6,266 | A compact entry in Ant Group's Ling series using a hybrid "bailing" architecture with custom inference code. It's gaining early attention as a lightweight alternative for constrained-deployment conversational use cases. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 171 | 69,833 | The full-precision release of NVIDIA's Lightning-tier Nemotron model, a 30B MoE with 3B active parameters. It's the reference checkpoint behind the more heavily downloaded NVFP4 quant below. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 210 | 633 | An early preview checkpoint from dots-studio's dots3 line, still in limited release with minimal download volume. It's showing up on trending purely on community likes, suggesting curiosity about the next-gen dots architecture. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,860 | 415,039 | Qwen's flagship 27B vision-language model and the single most-liked release this week. It anchors an entire ecosystem of downstream quantizations and fine-tunes that fill much of this trending list. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,810 | 2,163,953 | Moonshot AI's latest vision-language model, using compressed-tensors for efficient storage and feature-extraction support alongside chat. It nearly matches Qwen3.8-27B in likes while pulling 5x the downloads, making it the most-adopted VLM this cycle. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,103 | 2,403,238 | MiniMax's flagship image/text-to-video diffusion model, supporting both image-to-video and text-to-video generation. It has spawned the largest derivative cluster on this list — Turbo, LoRA, ComfyUI and finetune variants all trending simultaneously. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,668 | 334,099 | A 30B vision-language chat model built on a custom "muse_glimmer" architecture. Its unsloth GGUF port is already trending independently, indicating fast community uptake for local inference. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,145 | 465,529 | A versatile video diffusion model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video in one checkpoint. Its multi-task flexibility distinguishes it from single-purpose video generators on the list. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 918 | 10,375 | A dedicated text-to-music diffusion model from MiniMax, extending the company's generative lineup beyond video. Early download volume is modest, but its ComfyUI single-file port is already trending in parallel. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 235 | 23,202 | A compact 2.9B text-to-image diffusion model packaged for direct ComfyUI use. Its small size relative to typical diffusion models makes it notable as an accessible, locally-runnable option. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 164 | 6,816 | A 3B-parameter vision-language model from Liquid AI's LFM2.5 family, targeting edge and on-device multimodal inference. Its small footprint positions it as a lightweight alternative to the 27B-30B VLMs dominating the chart. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,694 | 2,727,609 | Unsloth's GGUF conversion of Qwen3.8-27B for llama.cpp-based local inference. It leads all Qwen3.8-27B derivatives on downloads, underscoring how quickly the community moves flagship releases to CPU/edge-friendly formats. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,410 | 14,015,769 | A ComfyUI-ready single-file build of MiniMax-H3, and the single highest-download entry on the entire board at over 14 million. Its dominance highlights ComfyUI as the primary distribution channel for video-diffusion adoption. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,124 | 3,033,928 | An elaborately-named community fusion fine-tune of Qwen3.6-27B combining multiple "Heretic" uncensoring and merge techniques into a GGUF build. Its 3M+ downloads show sustained demand for heavily customized, restriction-reduced local models. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,223 | 0 | A utility repo of corrected Jinja chat templates for Qwen3.5 models, packaged for MLX users. Its near-zero download count paired with over 1,200 likes suggests it's being bookmarked as a reference fix rather than pulled programmatically. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 592 | 264,351 | A speed-optimized "Turbo" distillation of MiniMax-H3 supporting text-to-video, image-to-video, and reference-to-video generation. It's aimed at cutting inference steps for faster video generation workflows. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 538 | 495,646 | Qwen's own official FP8 quantization of the 27B flagship, trading precision for reduced memory footprint. Its near half-million downloads make it the most-adopted official quant of the model. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 462 | 15,812 | A community FP8 quantization of Qwen3.8-27B with alignment restrictions removed. It's one of several uncensored variants of the same base model competing for adoption this week. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 473 | 755,125 | Unsloth's GGUF port of meta-models' Muse-Glimmer-30B VLM, enabling local llama.cpp inference. Its 755K downloads trail only Qwen3.8-27B-GGUF among Unsloth's quant releases this cycle. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 341 | 357,701 | A GGUF-format uncensored fine-tune of Qwen3.8-27B with multi-token prediction (MTP) support retained. Its 357K downloads reflect continued demand for restriction-reduced local chat models. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 245 | 378,177 | Unsloth's NVFP4 quantization of Qwen3.8-27B, targeting NVIDIA's newer low-precision inference format. It rounds out Unsloth's coverage of the model across GGUF, FP8-adjacent, and NVFP4 formats. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 221 | 12,295 | Qwen's official FP8 quantization of its 2.4T-parameter MoE model, easing deployment of an otherwise massive checkpoint. Adoption is still early relative to the BF16 base release. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 311 | 231,271 | NVIDIA's own NVFP4-quantized build of its Lightning Nemotron model, pulling over 3x the downloads of the BF16 original. It signals NVIDIA hardware users defaulting straight to the low-precision format for deployment. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 167 | 256,988 | ComfyUI's single-file packaging of MiniMax-Music3 for direct workflow use. It extends Comfy-Org's pattern of fast-following MiniMax's generative releases with ready-to-use conversions. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 246 | 18,562 | A LoRA adapter for MiniMax-H3 tuned toward photorealistic human subjects. It's part of a growing wave of style-specific LoRAs built on top of the base video model. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 244 | 0 | A community fine-tune of MiniMax-H3 for text/image-to-video generation. Its zero recorded downloads alongside meaningful likes suggests very recent publication with limited pull traffic so far. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 790 | 0 | A LoRA adapter combining MiniMax-H3's video generation with audio-video synchronization for faster "Turbo" output. Its high like count with no recorded downloads points to a just-released, closely-watched adapter. |

## Ecosystem Signal

This week's chart is a study in the "one release, ten derivatives" pattern: Qwen3.8-27B and MiniMax-H3 alone account for roughly a third of all 30 trending entries once GGUF, FP8, NVFP4, LoRA, and uncensored variants are counted. That density shows the open-weight ecosystem's re-packaging velocity has become the dominant trending signal, often outweighing genuinely novel architectures. Momentum is clearly with Qwen (multiple model sizes and precisions), MiniMax (video/music generation), and DeepSeek's V4 line, while smaller labs like LiquidAI and inclusionAI compete on efficiency-per-parameter rather than raw scale. Quantization activity is intense and fragmented across formats — GGUF still leads for CPU/llama.cpp users, but NVFP4 is emerging as NVIDIA's preferred low-precision path, with official (Qwen, NVIDIA) and community (unsloth) quants now shipping almost simultaneously with base releases. "Uncensored" and "abliterated" fine-tunes remain a persistent, well-downloaded niche layered onto whichever base model is currently trending, most visibly around Qwen3.8-27B this cycle. Open-weight releases continue to dominate this list entirely — no proprietary/API-only entries appear, reinforcing that trending activity on the Hub tracks locally-deployable models.

## Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — Nearly matches Qwen3.8-27B on likes while pulling over 5x the downloads; its compressed-tensors format and feature-extraction support make it worth benchmarking against Qwen for both quality and deployment efficiency.
2. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — The clearest signal of what the market wants from a frontier lab release right now: a fast, high-adoption variant outpacing its "Pro" sibling by nearly 80x in downloads.
3. **[LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B)** — At 3B parameters, it's the most accessible VLM on this list for anyone wanting to prototype multimodal features without 27B+ hardware requirements.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
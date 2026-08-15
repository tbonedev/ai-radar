# Hugging Face Trending Models Digest 2026-08-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-15 07:26 UTC

---

# Hugging Face Trending Models Digest — 2026-08-15

## Today's Highlights

The board is dominated by three major model families: Alibaba's **Qwen3.8-27B** series, Moonshot's **Kimi-K3**, and MiniMax's **H3** video-generation stack. Qwen3.8-27B tops the likes count at 9,307 despite near-zero downloads, suggesting a same-day release still propagating through mirrors, while Kimi-K3 leads outright with 10,690 likes and nearly 2M downloads. MiniMax-H3 has become the week's most-derived model — its Comfy-Org packaging alone logged **11.7M+ downloads**, with turbo, LoRA, and community NSFW/stylistic variants spinning off within days. DeepSeek shipped a coordinated dual release (V4-Flash and V4-Pro), and quantization activity is intense: unsloth, unofficial FP8/NVFP4 builds, and GGUF conversions of Qwen3.8-27B and Muse-Glimmer-30B are already trending alongside their base weights.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 932 | 3,832 | A large sparse MoE variant of Qwen3.8 (2.4T total / 95B active params) targeting frontier-scale reasoning. It's the flagship counterpart to the dense 27B release trending alongside it. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,395 | 1,606,491 | A lighter, latency-optimized member of the DeepSeek-V4 family, already past 1.6M downloads. Its speed-first positioning makes it a fast-follower favorite for production deployments. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 449 | 245 | The higher-capability sibling to V4-Flash, released just two weeks later. Early adoption is modest, consistent with a just-published flagship checkpoint. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,690 | 1,974,635 | The most-liked model on the board, combining conversational and feature-extraction capability with compressed-tensors support out of the box. Its near-2M downloads signal it's already a go-to general-purpose model for the community. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 240 | 2,283 | A compact model built on the "bailing_hybrid" architecture with custom code, aimed at efficient on-device or edge inference. Its small footprint is drawing early interest despite limited downloads so far. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 622 | 124,172 | A 2.6B-parameter entry in Liquid AI's LFM2.5 line, built for efficient text generation on constrained hardware. Its 124K+ downloads reflect steady uptake as a lightweight assistant backbone. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 145 | 11 | A preview build of the dots3-note text-generation model, evidently just published given single-digit downloads. Its image-text-to-text pipeline hints at note-taking or multimodal-assistant use cases. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 145 | 34,137 | The full-precision BF16 release of NVIDIA's Nemotron 3.5 "Lightning" MoE model, paired with an NVFP4 quantized sibling also trending. It anchors NVIDIA's continued push into efficient MoE architectures. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,307 | 2 | The dense flagship of the Qwen3.8 family with vision-language (image-text-to-text) capability. Its 9,307 likes against just 2 downloads points to a release so fresh that mirrors haven't caught up yet. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,528 | 165,300 | A 30B vision-language model already spawning both GGUF and unofficial quantized derivatives. Its 165K downloads make it one of the more practically-deployed multimodal releases this week. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,935 | 1,997,541 | MiniMax's flagship image/text-to-video diffusion model, sitting at nearly 2M downloads and spawning the largest derivative ecosystem on the board (Turbo, LoRA, ComfyUI packagings). It's effectively the reference video-generation checkpoint of the week. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 879 | 207,830 | An image-to-video model supporting text-to-video, video-to-video, and image-text-to-video pipelines in a single-file diffusion format. Its versatility across generation modes is driving strong early downloads. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 695 | 63 | A text-to-music diffusion model extending MiniMax's generative lineup beyond video into audio. Downloads are still low, consistent with a newly published checkpoint riding on the MiniMax brand's momentum. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 498 | 149,865 | A distilled/accelerated ("Turbo") variant of MiniMax-H3 supporting text-, image-, and reference-to-video generation. Its 150K downloads show real demand for faster inference over the base model. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,330 | 11,768,622 | The ComfyUI-packaged, single-file build of MiniMax-H3 — and by far the most-downloaded model on the entire board at 11.7M+ downloads. It underscores how workflow-tool packaging drives adoption far beyond the base checkpoint. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 346 | 0 | Another ComfyUI-oriented repackaging of MiniMax-H3 from a well-known workflow contributor. Zero recorded downloads suggests it's a just-published node/weights bundle. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 174 | 10,106 | A 2.9B text-to-image diffusion model packaged for single-file/ComfyUI use. It's carving a niche as a lightweight community-driven image generator. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 135 | 1,794 | A compact 3B vision-language extension of the LFM2.5 line. It brings multimodal understanding to Liquid AI's efficiency-focused model family. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 933 | 0 | Unsloth's GGUF conversion of the freshly-released Qwen3.8-27B, already the third most-liked entry despite zero downloads. It shows how fast the quantization community mobilizes around a flagship drop. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 420 | 596,774 | A GGUF quantization of Muse-Glimmer-30B with nearly 600K downloads, making it one of the most-used quantized builds this week. It enables consumer-hardware inference of the 30B vision-language model. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 354 | 0 | An official FP8 quantization of Qwen3.8-27B for efficient GPU inference. Its presence alongside the base and GGUF builds shows Qwen shipping a full precision-tier lineup at launch. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 751 | 0 | A LoRA adapter for MiniMax-H3-Turbo spanning text-to-video and text-to-audio use cases. It's part of the rapid community fine-tuning wave around the MiniMax-H3 base model. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,027 | 2,891,524 | A heavily-tuned, uncensored community fine-tune/merge of Qwen3.6-27B in GGUF format, with 2.9M downloads. Its popularity reflects sustained demand for unrestricted local-inference fine-tunes. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 273 | 228,364 | The official GGUF build of Muse-Glimmer-30B, complementing the unsloth conversion of the same model. Its 228K downloads show strong local-deployment interest. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 261 | 119,572 | The NVFP4-quantized release of Nemotron 3.5 Lightning, NVIDIA's own low-precision format for its 30B MoE model. Downloads are outpacing the BF16 sibling, highlighting demand for NVIDIA-native quantization. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 187 | 9,060 | A LoRA fine-tune of MiniMax-H3 specialized for photorealistic people generation. It's one of several niche stylistic adapters emerging from the H3 ecosystem. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 188 | 9,334 | An FP8 quantization of the large 2.4T/95B-active MoE variant of Qwen3.8, easing deployment of the frontier-scale model. Early adoption is modest relative to the base checkpoint. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 313 | 473 | A community text-to-video fine-tune built on MiniMax-H3. It's one of many independent derivatives illustrating how quickly the H3 base model attracts niche community customization. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 158 | 136,774 | A GGUF conversion of MiniMax-H3 for stable-diffusion.cpp-based local video generation. Its 136K downloads extend the H3 base model's reach to CPU/edge inference setups. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 139 | 0 | An unofficial NVFP4 quantization of Qwen3.8-27B, rounding out the model's precision-tier coverage (FP8, GGUF, NVFP4) within days of release. |

## Ecosystem Signal

The week's clearest signal is **rapid multi-format proliferation**: a flagship release (Qwen3.8-27B, MiniMax-H3, Muse-Glimmer-30B) now generates official and community GGUF, FP8, and NVFP4 variants within days, reflecting a maturing, standardized quantization tooling chain (unsloth remains the dominant community packager). Open-weight momentum is strong across Chinese labs — Qwen, DeepSeek, Kimi/Moonshot, and MiniMax collectively account for the majority of top-20 likes and downloads, continuing to out-pace Western open releases (Meta's "Muse-Glimmer" and NVIDIA's Nemotron being the main counterweights). Video generation is the hottest modality: MiniMax-H3's ComfyUI packaging alone exceeds 11.7M downloads, with an entire derivative economy (Turbo distillations, realism LoRAs, stylistic community fine-tunes) forming around a single base checkpoint in under two weeks. Fine-tuning activity skews toward uncensoring/merging community checkpoints (e.g., the DavidAU Qwen3.6 "Heretic" GGUF) alongside legitimate efficiency work, underscoring that open-weight ecosystems now serve both production and permissive-customization use cases simultaneously.

## Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — the most-liked model this week with nearly 2M downloads; worth studying as the current reference point for general-purpose conversational + feature-extraction models built on compressed-tensors.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** (and its [Comfy-Org packaging](https://huggingface.co/Comfy-Org/MiniMax-H3)) — the clear center of gravity for video generation right now, with the richest derivative ecosystem on the board; a good model to benchmark against for anyone evaluating open video-gen quality or building ComfyUI workflows.
3. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — despite near-zero downloads so far, its 9,307 likes and immediate GGUF/FP8/NVFP4 coverage suggest it will be the dominant open vision-language model within days; worth tracking as mirrors catch up.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
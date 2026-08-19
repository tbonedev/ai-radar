# Hugging Face Trending Models Digest 2026-08-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-19 07:34 UTC

---

# Hugging Face Trending Models Digest — 2026-08-19

## Today's Highlights

Qwen's **Qwen3.8-27B** vision-language release dominates this week's trending list, topping likes and spawning over a dozen quantized/fine-tuned derivatives within days — a sign of how fast the community pipeline turns around a strong open-weight release. Moonshot AI's **Kimi-K3** and DeepSeek's twin **V4-Pro / V4-Flash** drops signal continued momentum from Chinese labs in the frontier open-weight race. On the generation side, **MiniMax-H3** is the breakout multimodal model, with its ComfyUI-packaged build alone pulling nearly 14.7M downloads, while **MiniMax-Music3** extends the family into text-to-music. The quantization/fine-tune long tail remains large and increasingly includes "uncensored"/abliterated variants of the same base models, reflecting a persistent niche demand alongside mainstream adoption.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,075 | 11,212 | A large sparse MoE (2.4T total / 95B active parameters) text-generation model, the flagship-scale sibling of the dense Qwen3.8-27B. Trending as developers evaluate its reasoning/agentic capability against DeepSeek and Kimi's frontier releases. |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 608 | 30,985 | The higher-capacity variant in DeepSeek's V4 family, aimed at maximum-quality conversational and reasoning tasks. Part of a coordinated Pro/Flash dual release strategy that lets users trade latency for quality. |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,533 | 2,123,462 | The faster, lighter-weight sibling of DeepSeek-V4-Pro, and by far the more downloaded of the two. Its download-to-like ratio suggests heavy production/inference adoption rather than just community buzz. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,833 | 2,226,898 | Moonshot AI's latest Kimi-series model, built on `compressed-tensors` for efficient deployment at scale. One of the two highest-liked releases this week, underscoring sustained interest in Moonshot's model line. |
| [dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 224 | 1,120 | An early preview build of the `dots3` architecture family from dots-studio. Low download count relative to likes suggests it's being watched ahead of a fuller release rather than deployed yet. |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 322 | 9,990 | A compact entry in inclusionAI's "Ling" hybrid-architecture (`bailing_hybrid`) series, aimed at lightweight deployment. Notable for `custom_code` support, indicating a non-standard architecture requiring bespoke inference code. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,247 | 665,513 | The base image-text-to-text release of Qwen's new 27B model and the single most-liked model this week. Its popularity is driving a wave of community GGUF, FP8, NVFP4 and MLX derivatives across the rest of this list. |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 985 | 11,745 | MiniMax's third-generation text-to-music diffusion model. Extends the MiniMax family beyond video/chat into full music generation, already picked up for ComfyUI packaging (see Comfy-Org/MiniMax-Music-3). |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,250 | 503,632 | Lightricks' updated video model supporting image-to-video, text-to-video and video-to-video in one checkpoint. High download count relative to likes points to strong production use in creative-tooling pipelines. |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,688 | 384,097 | A new 30B image-text-to-text conversational model from meta-models. Already has an official unsloth GGUF quantization, suggesting fast community validation of a fresh model family. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,156 | 2,855,539 | MiniMax's flagship image-text-to-video generation model. Its ComfyUI-packaged variant (Comfy-Org/MiniMax-H3) has separately racked up nearly 14.7M downloads, making the H3 family one of the most-deployed video generators on the Hub right now. |
| [Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 257 | 24,893 | A compact 2.9B text-to-image diffusion model built for single-file/ComfyUI workflows. Its small size targets accessible, consumer-hardware image generation. |
| [LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 178 | 9,101 | Liquid AI's compact 3B vision-language model, continuing its "Liquid Foundation Model" line focused on efficient edge deployment. Notable for targeting strong multimodal capability at a fraction of the parameter count of the week's other VLMs. |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 614 | 300,279 | A distilled/accelerated ("Turbo") variant of MiniMax-H3 supporting text-to-video, image-to-video and reference-to-video. Aimed at cutting inference latency for the popular H3 base model. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,865 | 3,561,466 | Unsloth's GGUF quantization of Qwen3.8-27B for llama.cpp-based local inference. Its 3.5M+ downloads far outpace its likes, reflecting heavy use as an infrastructure dependency rather than a standalone discovery. |
| [Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 573 | 741,011 | Qwen's own official FP8 quantization of the 27B base model, optimized for efficient GPU serving. High official-channel downloads indicate production inference adoption. |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 553 | 45,465 | A community abliterated (safety-filter-removed) FP8 build of Qwen3.8-27B. Part of a broader wave of "uncensored" derivatives that appeared within days of the base model's release. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 433 | 558,767 | Another abliterated GGUF build of Qwen3.8-27B, using multi-token prediction (mtp) for llama.cpp inference. Its download count shows meaningful uptake despite being an unofficial fine-tune. |
| [Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 368 | 0 | An MLX-format abliterated build of Qwen3.8-27B targeting Apple Silicon inference. Zero recorded downloads despite notable likes suggests it's newly published and not yet indexed. |
| [Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 269 | 523,919 | Unsloth's NVFP4 quantization of Qwen3.8-27B, targeting NVIDIA's newer low-precision inference format. Sizable download volume shows fast adoption of next-gen quant formats alongside the more established GGUF/FP8. |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 230 | 27,745 | A further community abliterated GGUF variant with "aggressive" multi-token prediction tuning and multimodal/vision support. Illustrates how quickly derivative chains stack on top of each other in the Qwen ecosystem. |
| [Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,267 | 0 | A utility repo providing corrected Jinja chat templates for Qwen models, distributed in MLX-friendly form. High likes with zero downloads point to a reference/documentation resource rather than a deployable model. |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 228 | 13,344 | Official FP8 quantization of Qwen's large 2.4T/A95B MoE model, easing deployment of an otherwise very large checkpoint. Still early in downloads relative to the dense 27B quantizations. |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,149 | 3,020,528 | An elaborately merged/fine-tuned "Heretic" fusion build on the prior Qwen3.6-27B generation, with 3M+ downloads. Its scale of adoption shows DavidAU's merge-heavy fine-tunes remain a consistently popular corner of the Hub. |
| [MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 185 | 285,444 | Comfy-Org's single-file ComfyUI packaging of MiniMax-Music3. Makes the new music-generation model directly usable in ComfyUI workflows without manual conversion. |
| [Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 179 | 12,854 | A quantized GGUF fine-tune ("Ridge") of Qwen3.8-27B for llama.cpp deployment. Modest but steady traction as one of many community derivatives of the base model. |
| [10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 270 | 0 | A community fine-tune built on the MiniMax-H3 video-generation base model. Zero downloads with notable likes suggests early-stage listing rather than established usage. |
| [MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,429 | 14,641,908 | Comfy-Org's ComfyUI-packaged build of MiniMax-H3, and by a wide margin the most-downloaded item on this week's list. Shows how packaging a strong base model for a popular UI tool can massively amplify reach. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 484 | 787,276 | Unsloth's GGUF quantization of the new Muse-Glimmer-30B model, released quickly after the base model's debut. Strong early download numbers mirror the fast quant turnaround seen with Qwen3.8-27B. |
| [Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 154 | 134,149 | Yet another abliterated GGUF build of the dense Qwen3.8-27B model. Its existence alongside several similar releases (orcarouter, JonathanColetti, HauhauCS) shows redundant, parallel community efforts targeting the same base model. |

## Ecosystem Signal

The week is dominated by two release cycles: Qwen's **Qwen3.8** family (both the dense 27B VLM and the 2.4T/A95B MoE) and MiniMax's expansion from video (H3) into music (Music3). Qwen3.8-27B in particular has become a magnet for derivative work — official FP8 quants, unsloth's GGUF/NVFP4 builds, and no fewer than five separate "abliterated"/uncensored community fine-tunes appeared within days, showing both healthy tooling support and a persistent appetite for safety-filter removal that trails nearly every major open-weight release. DeepSeek's dual Pro/Flash V4 strategy and Moonshot's Kimi-K3 confirm continued fast-cadence competition among Chinese labs. Quantization formats are diversifying beyond GGUF/FP8 into NVFP4 and MLX, reflecting broader hardware targets (NVIDIA low-precision cores, Apple Silicon). ComfyUI packaging (Comfy-Org) continues to be a major amplifier for generation models — its MiniMax-H3 build alone accounts for the single highest download count this week, well ahead of any language model.

## Worth Exploring

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — one of the two highest-liked releases this week; worth benchmarking against Qwen3.8 and DeepSeek-V4 for frontier open-weight reasoning/agentic performance.
2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the clear download leader of the week (14.6M via its ComfyUI packaging); a strong pick for anyone evaluating current open video-generation quality.
3. **[LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B)** — a compact 3B vision-language model worth studying for edge/on-device multimodal deployment, where the 27B-class models in this list aren't practical.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
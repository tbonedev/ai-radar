# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 23:22 UTC

---

# Hugging Face Trending Models Digest — August 11, 2026

## Today's Highlights

MiniMax-H3 dominates this week's trending list — its base release, ComfyUI conversion, and over a dozen LoRAs and quantizations collectively account for roughly two-thirds of trending models, signaling a major image-text-to-video release with unusually fast ecosystem uptake. On the language model front, Moonshot AI's Kimi-K3 leads with 10,468 likes, while DeepSeek-V4-Flash-0731 posts the highest raw download count (954,441) among new releases, and Meta's FLUX.1-dev continues to top downloads/likes among established models with 14,076 likes. Notable specialized releases include NVIDIA's VoiceChat-11B for conversational audio and Mistral's Shieldstral-1.0-3B, a compact safety/guardrail model. Quantization and fine-tuning activity is intense around both MiniMax-H3 (NVFP4, INT4/INT8, GGUF, LoRA) and Qwen3-VL-32B "Heretic" uncensored variants, reflecting the community's rapid push to make large releases runnable and customizable within days.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,468 | 1,510,032 | Kimi-K3 is Moonshot AI's latest large conversational model, leading the entire trending list by likes. Its compressed-tensors format points to native efficient-inference support out of the box. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,052 | 954,441 | DeepSeek-V4-Flash is a fast-inference variant of DeepSeek's flagship V4 line, already the most-downloaded new model this week. Its rapid uptake suggests strong demand for lower-latency DeepSeek deployments. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 488 | 89,680 | LFM2.5-2.6B extends Liquid AI's efficient "liquid foundation model" architecture to a compact 2.6B size. Its small footprint targets on-device and edge deployment scenarios. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 310 | 1,344 | Maple-preview is an early mixture-of-experts causal LM from newcomer lab deepgrove. Early-stage traction despite minimal downloads suggests interest in its MoE architecture. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 287 | 5,261 | Ling-3.0-flash is a fast hybrid-architecture ("bailing_hybrid") conversational model with custom inference code. It represents continued iteration in inclusionAI's Ling model family. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,421 | 47,468 | MiniMax-H3 is a new image-text-to-video foundation model supporting both text-to-video and image-to-video generation. It's the clear anchor of this week's trends, spawning over a dozen derivative repos across ComfyUI, LoRA, and quantization formats. |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,076 | 480,762 | FLUX.1-dev remains the most-liked model on this list, underscoring its staying power as a leading open text-to-image generator. Its continued high download volume shows sustained production use well after initial release. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 683 | 0 | Muse-Glimmer-30B is a 30B image-text-to-text conversational model, notable for zero downloads despite meaningful likes — typical of a just-published base model awaiting quantized derivatives. It already has two GGUF conversions trending alongside it. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 259 | 15,087 | A "Turbo" speed-optimized derivative of MiniMax-H3 supporting text-to-video, image-to-video, and reference-to-video (r2v). It's part of the fast-growing lightx2v toolchain built around the MiniMax-H3 release. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 151 | 617 | BigBang-v1 is a Qwen3.5-MoE-based image-text-to-text conversational model from a new entrant lab. Early likes-to-downloads ratio suggests curiosity-driven interest ahead of broader adoption. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,001 | 2,921,751 | Unlimited-OCR is Baidu's image-text-to-text OCR model, already the second-most-downloaded model in this digest with nearly 3M pulls. Its strong adoption reflects demand for high-throughput document/text extraction pipelines. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 295 | 597 | An 11B voice-chat model from NVIDIA's Nemotron Labs, citing three arXiv papers including a 2026 reference, indicating a freshly published research-backed release. It targets real-time conversational audio applications. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 221 | 6,343 | Shieldstral-1.0-3B is a compact Mistral3-based safety/guardrail model with native vLLM support. Its small 3B size targets low-overhead content moderation and safety filtering in production pipelines. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,143 | 6,009,639 | A single-file ComfyUI-ready conversion of MiniMax-H3, and by far the most-downloaded model in the entire digest at over 6 million pulls. This confirms ComfyUI as the primary distribution channel for community video-generation adoption. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,859 | 2,439,083 | An uncensored "Heretic" GGUF fine-tune/merge of Qwen3.6-27B via Unsloth tooling, with over 2.4M downloads. Its heavy download volume shows strong community demand for unrestricted, locally-runnable chat variants. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 636 | 199,167 | Unsloth's GGUF quantization of DeepSeek-V4-Flash-0731, enabling local/llama.cpp inference of DeepSeek's newest fast model. Nearly 200K downloads within days shows how quickly the quantization pipeline follows major base-model drops. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 598 | 0 | A Turbo-speed LoRA adapter for MiniMax-H3 covering text-to-video and text-to-audio generation. Zero downloads with meaningful likes suggests a just-published adapter gaining early attention. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 439 | 0 | An INT8-quantized, ComfyUI-integrated "Heretic" fine-tune of Qwen3-VL-32B combining uncensoring with H3-related tooling. Its naming shows the trend of stacking multiple community modifications (quantization, uncensoring, workflow integration) into single releases. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 256 | 0 | Another ComfyUI-focused conversion of MiniMax-H3 from prolific ComfyUI model porter Kijai. Reflects the pattern of multiple independent ComfyUI packagings emerging for the same base model within days. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 250 | 0 | A pruned, ComfyUI-packaged version of the MiniMax-H3 Turbo LoRA adapter. Part of the broader wave of lightweight, workflow-ready MiniMax-H3 derivatives. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 248 | 0 | A community text-to-video fine-tune of MiniMax-H3 under an Apache-2.0 license with inference-endpoint support. Illustrates how quickly individual creators are customizing the base model for niche use cases. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 199 | 0 | Unsloth's GGUF conversion of Meta's Muse-Glimmer-30B, enabling local inference of the new multimodal base model ahead of significant download volume. Signals imminent llama.cpp/local-runtime support for the model. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 183 | 0 | An experimental variant/build of MiniMax-H3 from Kijai, likely testing alternative ComfyUI integration approaches. Reinforces Kijai's role as a key early adopter for new video-gen model architectures. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 184 | 89,611 | Official GGUF quantization of LFM2.5-2.6B for llama.cpp deployment, with download volume nearly matching the base model itself. Shows strong demand for locally-runnable Liquid models. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 151 | 0 | An NVFP4-quantized text-encoder combining Qwen3-VL-32B "Heretic" with MiniMax-H3 ComfyUI tooling. Represents cutting-edge low-bit quantization (NVFP4) being applied to cross-model text encoders. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 142 | 0 | The official GGUF release of Muse-Glimmer-30B, citing two 2026 arXiv papers. Its official-author status (vs. third-party unsloth conversion) suggests Meta is directly supporting local-inference formats for this release. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 192 | 174,862 | A GGUF quantization set for MiniMax-H3 built for ComfyUI, already at nearly 175K downloads. High download volume relative to its recency indicates strong demand for quantized, locally-runnable video generation. |
| [SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 114 | 2,129 | Mach-1-Additive-35B applies experimental ternary/additive quantization to a Qwen3.5-MoE base — an unusual compression approach beyond standard INT/GGUF formats. Its research-oriented tagging suggests this is an exploratory efficiency technique rather than a production-ready release. |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | A PEFT/LoRA adapter specialized for rewriting prompts to better suit MiniMax-H3 generation. Highlights how the ecosystem is building auxiliary tooling, not just the base model, to improve output quality. |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | A multi-format quantization (NVFP4, INT4, INT8) of MiniMax-H3 supporting the full video-generation pipeline, with over half a million downloads. Its download count shows aggressive community demand for maximally compressed, hardware-flexible variants. |

## Ecosystem Signal

MiniMax-H3 is the clear momentum leader this week — a single image-text-to-video base model has spawned at least 15 derivative repos across ComfyUI packagings, LoRA adapters, and quantization formats (GGUF, NVFP4, INT4/INT8), with the Comfy-Org conversion alone pulling over 6M downloads. This mirrors the pattern seen with prior major open-weight video/image releases: the base model ships, and within days the community races to make it runnable on consumer hardware via ComfyUI and quantized formats. On the language model side, open-weight releases (Kimi-K3, DeepSeek-V4-Flash, Ling-3.0-flash, LFM2.5) dominate the trending list with no proprietary models appearing at all, reflecting continued strength of the open LLM ecosystem. Quantization activity is notably diverse this week — beyond standard GGUF/INT8, NVFP4 and experimental ternary/additive quantization (Mach-1-Additive-35B) point to growing interest in next-generation low-bit formats. "Heretic" uncensored fine-tunes (Qwen3.6-27B, Qwen3-VL-32B) also continue to draw meaningful download volume, indicating sustained demand for guardrail-removed community variants alongside official safety-focused releases like Shieldstral.

## Worth Exploring

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the base model driving nearly two-thirds of this week's trending activity; worth studying both for its video-generation capabilities and as a case study in how fast open ecosystems mobilize around a major release.
2. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — the most-downloaded new LLM this week, offering a speed-optimized entry point into DeepSeek's V4 architecture with immediate GGUF support via unsloth.
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — a specialized OCR model with nearly 3M downloads, worth evaluating for production document-extraction pipelines given its unusually high adoption relative to its release visibility.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
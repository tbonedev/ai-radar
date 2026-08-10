# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 22:29 UTC

---

## Today's Highlights

Moonshot AI's **Kimi-K3** is the standout release of the week — its 10,467 likes make it the most-liked model on the entire list, backed by over 1.5M downloads. The bigger structural story, though, is **MiniMax-H3**: the base video model and its ComfyUI ports, LoRAs, and quantizations from at least eight independent authors account for 18 of the 30 trending repos, an unusually fast and broad community absorption. DeepSeek's **V4-Flash-0731** shipped to nearly a million downloads and was already GGUF-quantized by Unsloth within the same window. Meanwhile Black Forest Labs' **FLUX.1-dev**, despite being an older release, remains the single highest-liked model overall (14,076), confirming its staying power as the default open text-to-image base. Smaller efficiency-focused releases — LiquidAI's LFM2.5-2.6B, the ternary-quantized Mach-1-Additive-35B — show continued appetite for cheaper-to-run alternatives alongside frontier-scale models.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,047 | 954,441 | DeepSeek's fast, lower-latency conversational V4 variant. Nearing a million downloads in its first trending week, it's already been picked up by Unsloth for GGUF quantization. |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 488 | 89,680 | A compact 2.6B model from Liquid AI's LFM2 hybrid-architecture line, built for efficient on-device inference. Its GGUF port is trending in parallel, underscoring demand for small models that run well outside the cloud. |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 309 | 1,344 | An early-preview causal-LM from newcomer lab Deepgrove using a mixture-of-experts architecture. Its high likes-to-download ratio suggests the community is watching a new MoE entrant closely before adoption. |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 287 | 5,261 | A fast variant of InclusionAI's Ling 3.0 series built on a hybrid "bailing" architecture. Traction is modest but signals continued cadence from InclusionAI's model family. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,419 | 47,468 | MiniMax's flagship image/text-to-video diffusion model and clear center of gravity of this week's list. It has already spawned at least a dozen derivative repos — ComfyUI ports, LoRAs, quantizations — elsewhere in this digest. |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 666 | 0 | A 30B vision-language chat model from the "meta-models" org. Hundreds of likes with zero downloads suggests early buzz ahead of wider or gated release. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,467 | 1,510,032 | Moonshot AI's latest image-text-to-text model, shipped with compressed-tensors support out of the box. It's the most-liked model on this week's entire list, with 1.5M+ downloads pointing to rapid production adoption. |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 295 | 597 | An 11B voice-chat model from NVIDIA's Nemotron Labs, citing arXiv papers as recent as 2026. Early-stage traction reflects growing but still-niche interest in open speech-conversational models. |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 149 | 617 | A Qwen3.5-MoE-based image-text-to-text chat model from debut org endless-frontier. Modest but genuine early engagement for a first release. |
| [FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,076 | 480,762 | Black Forest Labs' open text-to-image diffusion model remains the single highest-liked entry on this week's list. Its enduring popularity well after initial release confirms its status as the default open baseline for image generation. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 221 | 6,343 | A compact 3B safety/guardrail model from Mistral AI, built for vLLM serving with Mistral's structured tokenizer. Its size and "Shield" branding point to content-moderation and guardrail use cases rather than general chat. |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,001 | 2,921,751 | Baidu's OCR-focused vision-language model, already at nearly 3M downloads. The high likes-and-downloads combination signals it's becoming a go-to open OCR solution for production pipelines. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,142 | 6,009,639 | Official ComfyUI single-file conversion of MiniMax-H3 for local video-generation workflows. Its 6M+ downloads dwarf the base model's, showing most users consume MiniMax-H3 through ComfyUI rather than directly. |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 596 | 0 | A turbo-distillation LoRA for MiniMax-H3 that adds text-to-audio capability alongside video. Zero downloads with meaningful likes suggests it's newly posted and being watched ahead of adoption. |
| [Qwen3.6-27B-Fable-Fusion-711-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,857 | 2,439,083 | A heavily-merged, uncensored GGUF fine-tune of Qwen3.6-27B combining multiple "Heretic" abliteration techniques. High downloads reflect continued strong demand in the uncensored/roleplay fine-tuning community. |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 439 | 0 | An INT8-quantized, uncensored ComfyUI build fusing Qwen3-VL-32B with MiniMax-H3 components. Reflects a trend of merging vision-language and video-generation weights into single deployable packages. |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 259 | 15,087 | A turbo-distilled, faster-inference MiniMax-H3 variant supporting text-to-video, image-to-video, and reference-to-video. Meaningful downloads show real usage for latency-sensitive generation. |
| [MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 256 | 0 | A ComfyUI-oriented repackaging of MiniMax-H3 from prolific community converter Kijai, known for fast ports of new video models. No downloads yet, but likes show the community tracking it closely. |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 250 | 0 | A pruned, ComfyUI-packaged version of the MiniMax-H3 Turbo LoRA adapter. Part of the fast-growing cluster of community tooling built around MiniMax-H3. |
| [PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 248 | 0 | An Apache-2.0-licensed community fine-tune of MiniMax-H3 for text-to-video generation. One of several independent fine-tunes appearing within days of the base model's release. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 194 | 0 | Unsloth's GGUF quantization of the Muse-Glimmer-30B vision-language model for local/CPU inference. Follows Unsloth's routine pattern of same-week GGUF ports for notable releases. |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 636 | 199,167 | Unsloth's GGUF build of DeepSeek's V4-Flash-0731, already pulling significant downloads. Cites a fresh 2026 arXiv paper, indicating close ties to DeepSeek's original research release. |
| [MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 183 | 0 | An experimental Kijai variant of MiniMax-H3, likely testing alternate ComfyUI pipeline configurations. Reflects the rapid, iterative tooling cycle around the base model. |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 183 | 89,611 | Official llama.cpp-compatible GGUF build of LiquidAI's LFM2.5-2.6B. Downloads roughly matching the base model suggest most users adopt the quantized version directly. |
| [Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 151 | 0 | An NVFP4-quantized text-encoder build combining Qwen3-VL-32B with MiniMax-H3 for ComfyUI pipelines. Shows NVFP4 (Nvidia's 4-bit float format) gaining traction as a quantization target alongside GGUF. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 135 | 0 | GGUF quantization of Muse-Glimmer-30B citing multiple 2026 arXiv papers. Newly posted, with downloads yet to catch up to its likes. |
| [MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 192 | 174,862 | A GGUF quantization set explicitly built on and quantizing the Comfy-Org MiniMax-H3 build. Solid downloads make it one of the more-adopted MiniMax-H3 quantization efforts. |
| [Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 114 | 2,129 | A 35B model using an experimental "additive ternary" quantization scheme on a Qwen3.5-MoE backbone. Represents ongoing research into extreme low-bit quantization beyond standard INT4/INT8. |
| [MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | A PEFT LoRA adapter that rewrites prompts specifically to improve MiniMax-H3 video output. A narrow but practical utility tool in the fast-growing MiniMax-H3 ecosystem. |
| [Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | A multi-format quantization (NVFP4, INT4, INT8) of MiniMax-H3 covering text-to-video, image-to-video, and video-to-video. Its 530K+ downloads make it one of the most-adopted quantized MiniMax-H3 variants despite modest likes. |

## Ecosystem Signal

This week's list is dominated by a single release: MiniMax-H3 and its derivatives account for 18 of 30 trending repos — ComfyUI conversions, turbo LoRAs, and NVFP4/INT4/INT8 quantizations from at least eight independent community authors, all within days of launch. That speed of downstream tooling has become the norm for major open video models, echoing how prior Wan- and CogVideo-class releases were absorbed. On the language side, DeepSeek's V4-Flash-0731 and Moonshot's Kimi-K3 show Chinese labs continuing to lead open-weight releases by both likes and raw downloads, with Unsloth's same-week GGUF port of DeepSeek confirming the now-standard "release then quantize" pipeline. Every model on this list is open-weight — no proprietary/API-only entries appear, consistent with Hugging Face's role as the open-weight venue. Quantization activity is also pushing past the INT4/INT8 floor: NVFP4 and ternary/additive schemes both appear this week, suggesting the community is actively exploring lower-bit formats for large models rather than settling on GGUF alone.

## Worth Exploring

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — the most-liked model this week with production-scale (1.5M+) downloads; the current frontier open multimodal chat model worth benchmarking directly.
2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — understanding the base model explains the other 17 entries in this digest; the fastest-growing tooling ecosystem of the week.
3. **[LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** — a small, efficient model with both safetensors and GGUF builds ready out of the box, good for on-device or latency-sensitive experiments.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
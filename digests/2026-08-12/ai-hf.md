# Hugging Face Trending Models Digest 2026-08-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-11 23:40 UTC

---

# Hugging Face Trending Models Digest — 2026-08-12

## Today's Highlights

MiniMax-H3, MiniMaxAI's new image-text-to-video foundation model, dominates today's board — it tops the likes count and has spawned an entire derivative ecosystem of LoRAs, ComfyUI conversions, and quantizations within days of release. On the language side, Moonshot AI's Kimi-K3 leads with over 10,500 likes and 1.5M+ downloads, while DeepSeek-V4-Flash-0731 shows strong adoption (1M+ downloads) as a lightweight flash variant. Baidu's Unlimited-OCR is a standout specialized release with 4,018 likes and nearly 2.9M downloads, signaling strong enterprise interest in document/OCR pipelines. The community fine-tune scene remains extremely active around MiniMax-H3 and DeepSeek-V4, with unsloth, Comfy-Org, and lightx2v all shipping same-week derivatives.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,525 | 1,565,484 | Moonshot AI's flagship conversational model, released with compressed-tensors support for efficient inference. It leads today's board by a wide margin in likes, reflecting strong community anticipation around Kimi's next-generation architecture. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,148 | 1,048,685 | A fast, lighter-weight variant of DeepSeek-V4 aimed at low-latency conversational use cases. Its million-plus downloads make it one of the most widely adopted new checkpoints this week. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 303 | 6,148 | Part of Ant Group's Ling-3.0 "bailing_hybrid" family, tuned for fast conversational inference with custom code support. It's trending alongside its tiny sibling, suggesting a coordinated multi-size release. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 150 | 0 | The smallest member of the Ling-3.0 hybrid-attention family, MIT-licensed for permissive deployment. Zero downloads so far suggest it just landed and is still being indexed. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 549 | 93,668 | LiquidAI's compact 2.6B "liquid" architecture model optimized for efficient edge/on-device text generation. Strong download numbers relative to its small size point to real-world deployment interest. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 331 | 2,049 | A preview-stage mixture-of-experts causal LM from a newer lab, deepgrove. Early likes-to-download ratio suggests curiosity-driven interest ahead of a broader release. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,566 | 59,368 | MiniMax's new image-text-to-video foundation model supporting text-to-video and image-to-video generation via diffusers. It's the clear ecosystem anchor of the week, having already spawned a dozen-plus derivative repos across ComfyUI, LoRA, and quantized formats. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,084 | 0 | A 30B image-text-to-text conversational model built on a new "muse_glimmer" architecture. Zero downloads with high likes indicates strong pre-release buzz ahead of weight availability. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 325 | 653 | An 11B voice-chat model from NVIDIA's Nemotron Labs, backed by multiple recent arXiv papers. It signals NVIDIA's continued push into real-time conversational audio models. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 185 | 39 | The latest LTX video diffusion release supporting image-to-video, text-to-video, and video-to-video in a single-file format. Multi-modality-in-one-checkpoint design makes it attractive for unified video pipelines. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 335 | 20,376 | A turbo-distilled, faster-inference variant of MiniMax-H3 supporting t2v/i2v/r2v generation. Its download count already outpaces the base model, suggesting practitioners favor the accelerated version for production. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 166 | 708 | A Qwen3.5-MoE-based image-text-to-text conversational model from a new entrant lab. Early-stage traction reflects interest in MoE-based vision-language architectures. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,018 | 2,892,191 | Baidu's document/OCR-focused image-text-to-text model, built for high-volume text extraction. Nearly 2.9M downloads make it one of the most-adopted models on the entire board today. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 228 | 6,769 | A 3B Mistral3-based safety/guardrail model ("Shieldstral") designed for content moderation with vLLM support. Its release underscores growing demand for lightweight, deployable safety classifiers alongside general-purpose LLMs. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,211 | 6,798,796 | A ComfyUI single-file conversion of MiniMax-H3 for direct use in visual workflows. Its 6.8M downloads dwarf every other model on the board, showing ComfyUI packaging drives the bulk of real-world MiniMax-H3 adoption. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,894 | 2,521,093 | An uncensored, "Heretic"-merged GGUF fine-tune of Qwen3.6-27B built with Unsloth tooling. Over 2.5M downloads make it the most-adopted community fine-tune this week. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 648 | 207,990 | Unsloth's GGUF quantization of DeepSeek-V4-Flash for local/llama.cpp inference. Strong downloads reflect continued demand for CPU/edge-friendly DeepSeek deployments. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 648 | 0 | A LoRA adapter targeting turbo-mode acceleration for MiniMax-H3, covering both video and audio outputs. High likes despite zero downloads suggest it just shipped. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 457 | 0 | An INT8-quantized, Heretic-merged Qwen3-VL-32B packaged for ComfyUI with H3 integration. Reflects the ongoing trend of stacking uncensoring merges with aggressive quantization for local use. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 302 | 0 | Unsloth's GGUF build of the newly-trending Muse-Glimmer-30B, enabling local inference ahead of wider weight distribution. Early likes track the parent model's pre-release buzz. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 275 | 0 | A community ComfyUI-oriented packaging of MiniMax-H3 from a well-known ComfyUI node maintainer. Part of the rapid multi-repo tooling response to MiniMax-H3's release. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 272 | 0 | A pruned, ComfyUI-ready packaging of the MiniMax-H3 Turbo LoRA adapter. Shows the ecosystem converging on ComfyUI as the default distribution format for H3 derivatives. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 263 | 0 | An Apache-2.0-licensed community text-to-video fine-tune built on MiniMax-H3. Illustrates how quickly permissively-licensed base models attract niche community fine-tunes. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 202 | 0 | The official GGUF release of Muse-Glimmer-30B, backed by recent arXiv research citations. Official (rather than third-party) GGUF distribution is notable for a same-week release. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 200 | 111,942 | Official llama.cpp-compatible GGUF quantization of LFM2.5-2.6B. Downloads already exceed 100K, well ahead of many other quantized releases today. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 191 | 0 | An experimental variant/branch of MiniMax-H3 tooling from the same ComfyUI-focused maintainer. Reflects active iteration on H3 workflow support rather than a stable release. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 118 | 19,250 | NVIDIA's NVFP4-quantized 30B Nemotron-H "Lightning" variant, targeting Blackwell-class inference efficiency. Signals continued NVIDIA investment in native FP4 quantization formats. |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 129 | 353 | A PEFT LoRA adapter specialized for rewriting prompts to better suit MiniMax-H3 generation. A niche but practical utility addition to the H3 tooling stack. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 110 | 0 | A realism-focused LoRA for MiniMax-H3 specialized in human/people generation, from inference platform fal. Extends the H3 ecosystem into style-specific fine-tunes. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 159 | 0 | An NVFP4-quantized Qwen3-VL-32B merge incorporating MiniMax-H3 text-encoder components, packaged for ComfyUI. Exemplifies the trend of cross-model text-encoder swapping in quantized community merges. |

## Ecosystem Signal

MiniMax-H3 is the clear momentum leader this week — its base release, Turbo variant, and no fewer than nine third-party LoRAs/ComfyUI packages/quantizations appear in the same trending window, an unusually fast and dense derivative response. DeepSeek-V4-Flash and Kimi-K3 show similar patterns of rapid open-weight adoption, each already exceeding a million downloads within days. Open-weight releases dominate the list entirely — every trending entry is a self-hostable checkpoint, reinforcing that community mindshare currently favors open, remixable models over closed APIs. Quantization activity is heavy and multi-format: GGUF (llama.cpp), NVFP4 (NVIDIA Blackwell), INT8, and compressed-tensors all appear, with unsloth and Comfy-Org acting as the primary distribution hubs for local-inference-ready weights. Fine-tuning activity skews toward "uncensoring" merges (Heretic-branded) and style/domain LoRAs rather than capability-extending training, suggesting the community layer is currently more focused on customization and workflow integration (ComfyUI) than on pushing raw model capability.

## Worth Exploring

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the ecosystem's clear center of gravity; worth studying both as a video foundation model and as a case study in how fast a derivative tooling ecosystem (LoRAs, ComfyUI ports, turbo distillations) can form around a strong open release.
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — with nearly 2.9M downloads, this is a production-proven OCR model worth benchmarking for document-processing pipelines.
3. **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)** — a good reference point for teams evaluating native NVFP4 quantization on next-gen NVIDIA hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
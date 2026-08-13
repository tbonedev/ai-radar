# Hugging Face Trending Models Digest 2026-08-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-13 08:16 UTC

---

# Hugging Face Trending Models Digest — 2026-08-13

## Today's Highlights

Moonshot AI's **Kimi-K3** tops the trending list by a wide margin (10,593 likes), signaling strong interest in its next-generation architecture. The biggest ecosystem story, however, is **MiniMax-H3**: the base video-generation model and its derivatives — LoRAs, Turbo distillations, ComfyUI ports, and GGUF quantizations — occupy nearly half of the top-30 list, with the Comfy-Org mirror alone racking up 6.8M downloads. On the LLM side, **DeepSeek-V4-Flash-0731** and **Qwen3.8-2.4T-A95B** continue the trillion-parameter MoE race from Chinese labs, while NVIDIA is shipping **Nemotron 3.5 Lightning** in both BF16 and NVFP4 precisions for enterprise inference. Community fine-tuning activity remains dominated by unsloth's GGUF conversions and a wave of "Heretic"-style uncensored/ablated variants.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/moonshotai/Kimi-K3) *(see note)* | moonshotai | — | — | *(listed under Kimi-K3 below; link corrected)* |

*(Note: correcting the row above — table regenerated below with correct links.)*

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,593 | 1,565,484 | Moonshot AI's flagship model and the most-liked release this week by a large margin. Its compressed-tensors packaging suggests native efficient deployment, driving both high engagement and over 1.5M downloads. |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,266 | 1,048,685 | A fast, distilled variant of DeepSeek's V4 line aimed at lower-latency inference. Strong download volume (1M+) indicates rapid production adoption right after release. |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 626 | 978 | A massive 2.4T-parameter MoE model with ~95B active parameters, pushing Qwen's scaling frontier. Low initial downloads reflect its size and freshness rather than lack of interest. |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 120 | 15,740 | The full-precision BF16 release of NVIDIA's Nemotron-H hybrid architecture at 30B/A3B active. Serves as the reference checkpoint for the NVFP4 quantized variant also trending. |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 320 | 6,148 | A fast-inference member of inclusionAI's Bailing-hybrid Ling-3.0 family. Custom-code architecture points to a non-standard hybrid design optimized for throughput. |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 199 | 0 | The smallest Ling-3.0 variant, targeting edge and low-resource deployment. Companion release to Ling-3.0-flash, rounding out a size-tiered model family. |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 592 | 93,668 | Liquid AI's compact 2.6B "liquid" architecture model, already at nearly 94K downloads. Strong efficiency-per-parameter makes it attractive for on-device use cases. |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 347 | 2,049 | A preview-stage mixture-of-experts causal LM from a smaller lab. Early traction despite preview status suggests interest in its MoE routing approach. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,762 | 1,575,808 | The base image/text-to-video diffusion model anchoring a huge derivative ecosystem (LoRAs, Turbo variants, ComfyUI ports, GGUFs). Over 1.5M downloads confirm it as one of the most actively deployed open video generators right now. |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,340 | 0 | A 30B image-text-to-text conversational vision-language model. High likes with zero downloads suggest a very recent, buzzworthy release still awaiting broad adoption. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 605 | 39 | Lightricks' updated video generation model supporting image-to-video, text-to-video, and video-to-video in one checkpoint. Its diffusion-single-file format simplifies deployment for creative tools. |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 185 | 708 | A Qwen3.5-MoE-based image-text-to-text conversational model. Notable for building a multimodal chat model on top of an established MoE backbone. |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 358 | 653 | An 11B voice-chat model backed by three arXiv papers, indicating a research-driven speech interaction architecture. Represents NVIDIA's push into conversational audio beyond text LLMs. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,270 | 6,798,796 | ComfyUI-ready repackaging of the MiniMax-H3 base model, by far the highest download count in this digest (6.8M). Demonstrates how packaging for a popular UI tool can drive adoption beyond the original release. |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,970 | 2,521,093 | An elaborately-tuned, uncensored GGUF fine-tune of Qwen3.6-27B with over 2.5M downloads. High engagement reflects continued community demand for ablated/"heretic"-style community models. |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 669 | 207,990 | Unsloth's GGUF quantization of DeepSeek's Flash model, enabling local/CPU inference. Nearly 208K downloads within days shows fast community conversion of frontier releases. |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 707 | 0 | A turbo-distillation LoRA adapter for faster MiniMax-H3 inference, adding text-to-audio capability. Part of the broader wave of speed-focused adapters around the H3 base model. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 374 | 0 | Unsloth's quantized GGUF build of Muse-Glimmer-30B for local deployment. Released alongside the base model, indicating rapid same-week quantization turnaround. |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 479 | 0 | An INT8-quantized, ComfyUI-integrated "Heretic" fine-tune of Qwen3-VL-32B. Combines vision-language capability with community ablation techniques and workflow-tool packaging. |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 426 | 20,376 | A full turbo fine-tune (not just a LoRA) of MiniMax-H3 supporting text-to-video, image-to-video, and reference-to-video. Meaningful download count shows real usage beyond the adapter-only variants. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 247 | 0 | The official meta-models GGUF quantization of Muse-Glimmer-30B, citing two arXiv papers. An official (rather than community) quantized release for the model. |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 138 | 3,851 | The FP8-quantized companion to Qwen's 2.4T MoE model, cutting memory footprint for large-scale serving. Essential for making a model of this size practically deployable. |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 215 | 19,250 | NVIDIA's own NVFP4 quantization of Nemotron 3.5 Lightning, its newest low-precision format. Higher downloads than the BF16 original suggest inference cost is the primary adoption driver. |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 310 | 0 | A pruned, ComfyUI-packaged version of the MiniMax-H3 Turbo LoRA. Reflects continued fragmentation of the H3 ecosystem into tool-specific distributions. |
| [MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 142 | 781 | Unsloth's GGUF conversion of MiniMax-H3 for stable-diffusion.cpp-based local video generation. Extends the base model's reach to CPU/edge inference stacks. |
| [MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 296 | 0 | A community ComfyUI-format conversion of MiniMax-H3 from a well-known ComfyUI model porter. One of several parallel ComfyUI packagings competing for the same use case. |
| [PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 291 | 0 | A community fine-tune of MiniMax-H3 for text-to-video, released under Apache-2.0. Illustrates how quickly niche community variants proliferate around a popular open video base model. |
| [MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 150 | 0 | A LoRA from fal.ai focused on improving photorealistic people generation with MiniMax-H3. Targets a specific quality gap (human realism) in the base video model. |
| [MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 218 | 0 | An experimental variant/build of MiniMax-H3 from the same porter as the comfy conversion above. Likely a staging ground for upcoming ComfyUI feature support. |
| [MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 144 | 353 | A PEFT LoRA adapter that rewrites prompts to better suit MiniMax-H3's generation style. A niche but practical utility addition to the H3 tooling ecosystem. |

## Ecosystem Signal

The dominant theme this week is **MiniMax-H3's** ecosystem gravity: the base video model spawned at least a dozen trending derivatives — Turbo LoRAs, ComfyUI ports, GGUF quantizations, realism-focused adapters, and a prompt-rewriter — outpacing even flagship LLM releases in sheer entry count. This mirrors the Stable Diffusion playbook, where community tooling around a strong open base model compounds its reach (Comfy-Org's mirror alone hit 6.8M downloads). On the language-model side, DeepSeek and Qwen continue trading blows at the trillion-parameter MoE frontier, both shipping quantized (FP8/GGUF) companions same-week — quantization-on-release is now standard practice rather than an afterthought. Open weights dominate the entire list; no proprietary/API-only entries appear. NVIDIA's parallel BF16/NVFP4 releases of Nemotron 3.5 Lightning signal growing enterprise emphasis on precision-tiered inference options. Unsloth remains the most prolific quantizer, touching DeepSeek, MiniMax, and Muse-Glimmer in the same week, while "Heretic"/uncensored fine-tunes continue to draw outsized community engagement relative to their download counts.

## Worth Exploring

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — the week's most-liked model by a wide margin; worth studying for what's driving Moonshot AI's momentum.
2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — not just the model itself but its surrounding ecosystem (Turbo, LoRAs, GGUF, ComfyUI) is a case study in how open video models achieve rapid community-driven distribution.
3. **[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — a pragmatic, already-quantized frontier model worth benchmarking for production latency-sensitive workloads.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
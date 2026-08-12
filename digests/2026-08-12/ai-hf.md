# Hugging Face Trending Models Digest 2026-08-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-12 08:13 UTC

---

# Hugging Face Trending Models Digest — 2026-08-12

## Today's Highlights

Moonshot AI's **Kimi-K3** tops the leaderboard with 10,542 likes, cementing itself as this week's most-discussed open-weight release, while **DeepSeek-V4-Flash-0731** backs that up with over 1M downloads, signaling strong production adoption. The biggest ecosystem story is **MiniMaxAI/MiniMax-H3**, a text/image-to-video foundation model that has spawned a dense cluster of LoRAs, ComfyUI packages, and turbo variants — the Comfy-Org repackaging alone has pulled in 6.8M downloads, dwarfing the base model's own numbers. Baidu's **Unlimited-OCR** posted the second-highest download count (2.9M) among this batch, pointing to sustained enterprise interest in document/OCR pipelines. On the efficiency side, LiquidAI, NVIDIA, and inclusionAI all shipped compact-to-mid-size LLMs (LFM2.5-2.6B, Nemotron-3.5-Lightning-30B-A3B-NVFP4, Ling-3.0-flash/tiny) aimed at low-latency inference. Community fine-tuning remains highly active, with unsloth GGUF conversions and "uncensored"/"heretic" derivatives appearing across nearly every major base model within days of release.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,542 | 1,565,484 | Moonshot AI's flagship model, using compressed-tensors for efficient serving. It leads the entire trending list by a wide margin, reflecting strong developer interest in its architecture and performance claims. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,183 | 1,048,685 | A fast, lightweight variant of DeepSeek-V4 optimized for lower-latency inference. Its million-plus download count shows it's already being pulled into production pipelines at scale. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 337 | 2,049 | An early-preview causal-LM built on a mixture-of-experts architecture. It's gaining attention as a smaller lab's entry into the MoE space worth watching for future full releases. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 164 | 19,250 | A 30B nemotron_h model natively shipped in NVFP4 precision for efficient GPU inference. It highlights NVIDIA's push toward native low-precision formats rather than post-hoc quantization. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 232 | 6,769 | A compact 3B guardrail/safety model built on the Mistral3 architecture with vLLM support. Its small size makes it practical to deploy alongside larger generation models as a moderation layer. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 309 | 6,148 | A fast-inference entry in the Ling-3.0 "bailing_hybrid" family with custom code support. It targets latency-sensitive conversational use cases. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 165 | 0 | The smallest member of the Ling-3.0 lineup, released under MIT license. Its early-stage download count suggests it's just landing on the radar alongside its flash sibling. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,632 | 59,368 | A text/image-to-video diffusion model that has become the base for an entire downstream ecosystem this week. Its image-text-to-video pipeline supports both text and image conditioning for video generation. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,148 | 0 | A 30B image-text-to-text conversational vision-language model. Zero downloads despite strong likes suggests it's newly published and still propagating to mirrors/quantizers. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 353 | 39 | A versatile video model supporting image-to-video, text-to-video, and video-to-video in one diffusion-single-file package. Its multi-task flexibility makes it notable despite still-low download numbers. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 335 | 653 | An 11B voice-chat model backed by multiple NVIDIA research papers (arXiv citations included). It signals continued investment in real-time conversational voice AI. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 172 | 708 | A qwen3_5_moe-based image-text-to-text conversational model. Its MoE backbone paired with vision input points to an ambitious multimodal reasoning target. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,027 | 2,892,191 | Baidu's document/OCR-focused image-text-to-text model, the second-highest download count in this batch. Its scale of adoption suggests it's being integrated into real document-processing pipelines rather than just experimentation. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,228 | 6,798,796 | A diffusion-single-file ComfyUI build of MiniMax-H3. Its 6.8M downloads — far exceeding the base model's own — show ComfyUI packaging is the dominant distribution channel for this model. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,915 | 2,521,093 | A heavily fine-tuned, uncensored GGUF merge of Qwen3.6-27B built with Unsloth tooling. Its 2.5M downloads make it one of the most-pulled community fine-tunes this cycle. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 667 | 0 | A turbo-speed LoRA adapter for MiniMax-H3 adding text-to-audio capability alongside video. It extends the base model into an audio-video generation combo. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 655 | 207,990 | Unsloth's GGUF quantization of DeepSeek-V4-Flash for local/llama.cpp inference. Its rapid 200K+ downloads show how quickly the community converts frontier releases for consumer hardware. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 469 | 0 | An INT8-quantized, "heretic" (censorship-removed) fine-tune of Qwen3-VL-32B packaged for ComfyUI. It exemplifies the fast-moving uncensored-fine-tune subculture layered onto vision-language models. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 367 | 20,376 | A turbo-speed derivative of MiniMax-H3 supporting text-to-video, image-to-video, and reference-to-video (r2v). Its expanded task coverage builds on the base model's video generation core. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 321 | 0 | Unsloth's GGUF conversion of Meta's Muse-Glimmer-30B for local deployment. It's freshly published, tracking closely behind the original model's release. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 284 | 0 | A ComfyUI-oriented repackaging of MiniMax-H3 from a well-known ComfyUI node maintainer. It reflects continued community effort to make the video model workflow-ready. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 286 | 0 | A pruned LoRA adapter version of the MiniMax-H3 Turbo model for ComfyUI. It targets faster generation within existing ComfyUI pipelines. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 275 | 0 | An Apache-2.0 licensed community fine-tune of MiniMax-H3 for text-to-video generation. It's one of several niche-audience fine-tunes riding the base model's popularity. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 212 | 0 | The official GGUF release of Muse-Glimmer-30B, backed by two arXiv papers. Its first-party quantization complements the third-party unsloth conversion released in parallel. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 207 | 111,942 | The official GGUF build of LiquidAI's LFM2.5-2.6B for llama.cpp. Its 111K downloads show solid adoption for edge/local deployment of Liquid's small-model line. |
| [mistralai's Shieldstral aside, lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 135 | 353 | A PEFT LoRA specialized in rewriting prompts to improve MiniMax-H3 video generation quality. It's a niche but practical utility adapter for the H3 ecosystem. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 123 | 0 | A LoRA fine-tuned for realistic people generation with MiniMax-H3. It targets a specific visual-fidelity use case within the broader H3 ecosystem. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 118 | 781 | A stable-diffusion.cpp-compatible GGUF quantization of MiniMax-H3. It extends the video model's reach to lightweight, CPU-friendly local inference. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 198 | 0 | An experimental variant repository for MiniMax-H3 from a prolific ComfyUI contributor. It likely serves as a testbed for upcoming H3 workflow improvements. |

## Ecosystem Signal

MiniMax-H3 is this week's clear gravitational center: beyond the base model's own 3,632 likes, it has spawned at least a dozen derivative repos — turbo LoRAs, ComfyUI packagings, prompt-rewriter adapters, and niche fine-tunes — with the Comfy-Org packaging alone pulling 6.8M downloads, nearly 115x the base model's downloads. This gap illustrates a broader pattern: infrastructure/tooling integration (ComfyUI, GGUF) now drives adoption far more than the base model release itself. Open-weight momentum continues unabated, with DeepSeek, Kimi, Liquid, NVIDIA, and inclusionAI all shipping competitive text models this week — no proprietary-only releases cracked the trending list. Quantization activity is dominated by Unsloth, which shipped GGUF conversions for DeepSeek-V4-Flash, LFM2.5, Muse-Glimmer-30B, and MiniMax-H3 within days of their originals. A persistent "uncensored/heretic" fine-tuning subculture also remains visible (DavidAU's Qwen3.6 merge, ethanfel's Qwen3-VL variant), showing sustained community demand for guardrail-removed derivatives even as first-party safety models like Shieldstral-1.0-3B ship in parallel.

## Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — the week's most-liked model by a wide margin; worth studying for its compressed-tensors serving approach and understanding why it's resonating so strongly with the community.
2. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — with over 1M downloads, it's a good benchmark for evaluating "flash" speed/quality tradeoffs in frontier open-weight models.
3. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — the most practical entry point into the MiniMax-H3 ecosystem, with by far the largest real-world adoption footprint for hands-on video generation experimentation.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
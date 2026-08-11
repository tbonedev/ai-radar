# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-11 08:07 UTC

---

# Hugging Face Trending Models Digest — 2026-08-11

## Today's Highlights

The week's dominant story is **MiniMax-H3**, a text/image-to-video diffusion model that has spawned an entire derivative ecosystem — ComfyUI packages, LoRAs, TAE/VAE components, and INT8/NVFP4 quantizations — accounting for roughly half of today's 30 trending repos. On the language model side, **DeepSeek-V4-Flash-0731** posted a massive 954,441 downloads, signaling fast production adoption, while **Kimi-K3** leads all models in engagement with 10,488 likes. Meta's **Muse-Glimmer-30B** vision-language model and its GGUF/quantized variants also broke through despite zero downloads so far, suggesting a same-day release still propagating to mirrors. Elsewhere, **black-forest-labs/FLUX.1-dev** remains the single most-liked model in the set (14,085 likes), underscoring its staying power as the default open text-to-image baseline, and Baidu's **Unlimited-OCR** shows strong traction (4,009 likes, 2.9M downloads) in the specialized-model space.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,093 | 954,441 | A fast, lightweight variant of DeepSeek V4 optimized for lower-latency conversational use. Its near-million download count already dwarfs its likes, indicating rapid backend/production integration rather than just community browsing. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,488 | 1,510,032 | Moonshot AI's latest flagship model, shipped with compressed-tensors support for efficient serving. It leads the entire trending list in likes, reflecting strong community anticipation for the K-series' next generation. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 504 | 89,680 | A compact 2.6B-parameter model from Liquid AI's LFM2 hybrid architecture line, aimed at efficient on-device or edge deployment. Its solid download-to-like ratio suggests it's already being pulled into real workloads. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 293 | 5,261 | A fast variant of the Ling 3.0 "bailing hybrid" conversational model requiring custom code to run. It's an early-stage release still building visibility outside its niche community. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 225 | 6,343 | A compact 3B safety/guardrail model built on the Mistral3 architecture with native vLLM support. Its naming and tagging point to a dedicated content-moderation or safety-classification use case rather than general chat. |
| [SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 116 | 2,129 | A 35B Qwen3.5-MoE-based model using an experimental "additive/ternary" weight scheme, likely targeting extreme compression or efficiency research. Its research-oriented tags suggest a proof-of-concept rather than production-ready release. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 320 | 1,344 | A preview-stage causal-LM built on a mixture-of-experts architecture from a smaller lab. Low download count relative to likes points to early curiosity ahead of a fuller release. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,085 | 475,396 | The most-liked model in today's set, FLUX.1-dev remains the community's default open-weight text-to-image diffusion baseline. Its continued high engagement despite being an established release shows durable ecosystem reliance. |
| [openai/whisper-large-v3](https://huggingface.co/openai/whisper-large-v3) | openai | 6,132 | 4,813,358 | OpenAI's flagship open speech-recognition model, and the highest-downloaded model in the entire list at 4.8M. It continues to serve as the de facto standard for automatic speech transcription pipelines. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,472 | 47,468 | A new image/text-to-video diffusion model that has become the ecosystem's center of gravity, spawning over a dozen derivative repos in this list alone. Its 47,468 downloads combined with heavy ComfyUI/LoRA activity signal a major open video-generation release. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,488 | 1,510,032 | Tagged image-text-to-text, this release extends the Kimi line into vision-language territory alongside its conversational strength. It combines top-tier likes with over 1.5M downloads, indicating both hype and real usage. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 867 | 0 | A 30B vision-language conversational model from Meta's model line, tagged image-text-to-text. Zero downloads alongside hundreds of likes suggests a just-published repo still propagating before wider pulls begin. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 263 | 15,087 | A "Turbo" speed-optimized variant of MiniMax-H3 supporting text-to-video, image-to-video, and reference-to-video generation. Its early download count shows the community is already prioritizing faster inference variants of the base model. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 157 | 617 | A conversational vision-language model built on a Qwen3.5-MoE backbone. Modest but growing traction suggests it's an emerging entrant in the open VLM space. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 307 | 597 | An 11B voice-chat model from NVIDIA's Nemotron Labs, backed by multiple recent arXiv papers. Its research pedigree suggests a push toward real-time conversational speech AI. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,009 | 2,921,751 | Baidu's dedicated OCR model built for high-throughput document and text extraction at scale. Nearly 2.9M downloads make it one of the most heavily used specialized models in today's list. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,170 | 6,009,639 | The ComfyUI-packaged, single-file conversion of MiniMax-H3, and by far the most-downloaded repo in this entire digest at over 6M pulls. It shows the packaging/tooling layer often outpaces the base model in raw distribution. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,872 | 2,439,083 | An elaborately-named uncensored GGUF fine-tune/merge of Qwen3.6-27B using the "Heretic" de-alignment technique. Its 2.4M downloads show strong demand for unrestricted local-inference variants. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 642 | 199,167 | Unsloth's GGUF quantization of DeepSeek-V4-Flash-0731 for local/llama.cpp inference. Nearly 200K downloads confirm the base model's popularity is carrying through to its quantized form. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 611 | 0 | A LoRA adapter enabling faster "turbo" inference on top of MiniMax-H3 for both text-to-video and text-to-audio. Its emergence just after the base model shows how quickly the community iterates on acceleration techniques. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 446 | 0 | An INT8-quantized, ComfyUI-ready "Heretic" fine-tune of Qwen3-VL-32B combined with H3 conditioning. It reflects the crossover trend of applying uncensoring techniques to vision-language models. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 236 | 0 | Unsloth's GGUF quantization of Meta's newly-released Muse-Glimmer-30B vision-language model. Its rapid appearance alongside the base model shows the quantization pipeline reacting within the same release cycle. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 257 | 0 | A community fine-tune of MiniMax-H3 for text-to-video generation, Apache-2.0 licensed. It's another data point in the breadth of independent tuning activity around the H3 base model. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 255 | 0 | A pruned, ComfyUI-formatted version of the Turbo LoRA adapter for MiniMax-H3. It targets creators who want faster generation directly inside node-based workflows. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 263 | 0 | A ComfyUI-oriented conversion of MiniMax-H3 from a well-known video-workflow contributor. Minimal metadata suggests an in-progress or minimal-viable conversion repo. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 186 | 0 | An experimental branch of the same MiniMax-H3 ComfyUI conversion effort, likely testing alternate configurations. It underscores active, ongoing tuning of the H3 pipeline within the ComfyUI community. |
| [Kijai/MiniMax-H3-TAE](https://huggingface.co/Kijai/MiniMax-H3-TAE) | Kijai | 104 | 0 | A tiny autoencoder (TAE) component supporting faster preview/decoding for MiniMax-H3 workflows. It's a supporting utility rather than a standalone model, reflecting the depth of the H3 tooling ecosystem. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 187 | 89,611 | The official GGUF quantization of LFM2.5-2.6B for llama.cpp deployment. Its download count nearly matches the unquantized base model, suggesting most users are opting for the compressed form. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 168 | 0 | An officially-published GGUF variant of Muse-Glimmer-30B, backed by multiple arXiv references. Its same-day release alongside the base model points to a coordinated launch strategy. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 156 | 0 | An NVFP4-quantized "Heretic" fine-tune combining Qwen3-VL-32B with MiniMax-H3 as a text encoder for ComfyUI. It illustrates the growing use of NVIDIA's FP4 format for aggressive VRAM savings. |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 119 | 268 | A specialized LoRA that rewrites user prompts to better suit MiniMax-H3's generation process. It's a niche but practical addition aimed at improving output quality without touching the base model. |

## Ecosystem Signal

MiniMax-H3 is the clear momentum leader today, with over a dozen derivative repos (ComfyUI conversions, LoRAs, TAE components, NVFP4/INT8 quantizations) appearing within days of the base release — a pattern typically reserved for major open video-generation drops. Open-weight releases dominate this list entirely; even NVIDIA, Meta, Mistral, and Baidu are shipping openly-licensed weights rather than closed APIs, reinforcing open-weight models as the default distribution mode for 2026. Quantization activity is intense and fast-follow: GGUF conversions for DeepSeek-V4-Flash, LFM2.5, and Muse-Glimmer-30B all appeared alongside their base models, while "Heretic" uncensoring fine-tunes (applied to both Qwen3.6-27B and Qwen3-VL-32B) show a persistent underground demand for de-aligned local models. Vision-language convergence is also notable — Kimi-K3, Muse-Glimmer-30B, and BigBang-v1 all ship as image-text-to-text conversational models, suggesting multimodality is becoming the default expectation for new flagship chat releases rather than a specialized branch.

## Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — highest community engagement (10,488 likes) combined with 1.5M downloads makes it the strongest signal of a genuinely significant new LLM/VLM release worth benchmarking.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — not just the model but its surrounding ecosystem (Comfy-Org's 6M-download conversion, Turbo LoRAs, NVFP4 quants) makes it the most practically accessible new video-generation stack to experiment with today.
3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — near-million downloads against modest likes suggests it's already quietly powering production systems, making it worth evaluating for latency-sensitive deployments.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
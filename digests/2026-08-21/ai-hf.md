# Hugging Face Trending Models Digest 2026-08-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-21 07:38 UTC

---

# Hugging Face Trending Models Digest — 2026-08-21

## Today's Highlights

Qwen's **Qwen3.8-27B** vision-language release dominates this week's list, triggering an unusually fast wave of GGUF/MLX/FP8/NVFP4 quantizations and "uncensored"/abliterated derivatives from more than a dozen independent orgs (unsloth, orcarouter, huihui-ai, OBLITERATUS, Blackfrost-AI, and others) within days of launch. MiniMaxAI shipped two new generative models — **MiniMax-Music3** for text-to-music and **MiniMax-H3** for image/text-to-video — both already spawning community turbo and fine-tuned variants. DeepSeek continued its V4 cadence with Pro and Flash checkpoints, while Moonshot AI's **Kimi-K3** and Lightricks' **LTX-2.5** video model each posted strong engagement. Overall, the week skews heavily toward rapid ecosystem tooling around one flagship release rather than a broad spread of new base models.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,808 | 1,373,584 | Qwen's new flagship vision-language conversational model, and the single most-referenced base model on the platform this week. It anchors an entire downstream ecosystem of over a dozen quantizations and fine-tunes released within days. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,892 | 2,349,853 | Moonshot AI's latest Kimi generation model, built with compressed-tensors for efficient serving. It ranks second overall by likes, showing Kimi's continued strength as a leading non-Chinese-Western open alternative. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,583 | 2,547,549 | A faster, lighter checkpoint in DeepSeek's V4 family aimed at lower-latency deployment. Its download count already exceeds the larger Pro variant, suggesting strong demand for speed-optimized inference. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 689 | 43,287 | The higher-capability counterpart to DeepSeek-V4-Flash, targeting maximum quality over speed. It's a newer release (0813) with lower adoption so far as the ecosystem evaluates the quality/latency tradeoff against Flash. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,126 | 14,592 | A massive 2.4T-parameter mixture-of-experts variant (95B active) of the Qwen3.8 line, aimed at frontier-scale reasoning workloads. Its low download count relative to likes reflects the steep hardware requirements for a model this large. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 241 | 1,713 | A 35B mixture-of-experts model (3B active) built on the Qwen3.5 MoE architecture, blending text and image-text-to-text capability. As a newer independent lab entry, it's an early-stage release still building adoption. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,257 | 3,308,673 | MiniMax's new image/text-to-video foundation model, supporting both text-to-video and image-to-video generation. Its high download count and fast-following turbo/fine-tune derivatives signal it's already becoming a base for downstream video work. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,432 | 611,825 | A versatile video model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video in a single-file diffusion format. Its broad task coverage makes it one of the most flexible generation models trending this week. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,722 | 478,622 | A 30B conversational image-text-to-text model built on a custom "muse_glimmer" architecture, distinct from the Qwen ecosystem dominating this list. Its strong likes-to-download ratio suggests high community interest relative to its release maturity. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,132 | 14,471 | A dedicated text-to-music generation model, the third generation in MiniMax's music line. It extends MiniMax's generative footprint beyond video into full music-generation diffusion. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 157 | 12,235 | A speculative-decoding acceleration artifact ("DFlash2") built on top of Qwen3.8-27B, aimed at reducing inference latency without retraining the base model. It reflects fast-moving inference-optimization research tracking the newest releases. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 169 | 348 | A compact automatic-speech-recognition model built on the Qwen3 architecture. As a niche ASR entry among mostly text/vision/video models this week, it stands out for targeting audio transcription specifically. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,401 | 5,126,652 | Unsloth's GGUF quantization of Qwen3.8-27B for local/CPU inference via llama.cpp. Its 5.1M downloads make it the single most-downloaded artifact in this entire trending set, well above the original weights. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 691 | 76,109 | An FP8-quantized, safety-filter-removed ("abliterated") variant of Qwen3.8-27B for faster GPU inference. It's one of several near-simultaneous uncensored releases from the same author across formats. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 638 | 1,517,643 | Qwen's own official FP8 quantization of the flagship model, offering reduced memory footprint with minimal quality loss. Its download count already surpasses the full-precision original, reflecting demand for efficient serving. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 526 | 979,768 | A GGUF-quantized, uncensored fine-tune of Qwen3.8-27B built for llama.cpp, tagged with "mtp" (multi-token prediction). Nearly 1M downloads make it one of the most-adopted community derivatives of the base model. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 379 | 268,258 | An "aggressive" multi-token-prediction GGUF variant combining uncensoring with multimodal/vision support. It's one of several competing community approaches to speeding up and de-restricting the same base model. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 311 | 831,483 | Unsloth's NVFP4 quantization targeting NVIDIA's newer FP4 hardware acceleration path. Its high download count despite being a narrower-format release shows early NVFP4 hardware adoption. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 327 | 4,415 | A multi-format (MLX/safetensors/GGUF) abliterated release of Qwen3.8-27B distributed across several runtimes at once. Its low download count relative to likes suggests it's a newer entrant still gaining traction. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 228 | 55,074 | A llama.cpp-quantized "Ridge" variant of Qwen3.8-27B, one of many independent GGUF conversions competing for the same local-inference audience. It differentiates mainly on quantization methodology rather than fine-tuning. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 251 | 52,382 | The GGUF counterpart to orcarouter's FP8 uncensored release, giving llama.cpp users the same abliterated behavior. It rounds out orcarouter's multi-format coverage of the same fine-tune. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 179 | 53,691 | The quantized GGUF release of ornith-ai's Ornith-1.5 MoE model, enabling local deployment of the 35B-A3B architecture. It's an MIT-licensed, endpoints-compatible option for self-hosting. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 211 | 187,008 | A well-known abliteration author's GGUF release of Qwen3.8-27B, part of huihui-ai's long-running series of safety-filter-removed conversions. Nearly 190K downloads show the brand recognition huihui-ai has built for this niche. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 208 | 10,540 | The full-precision safetensors companion to huihui-ai's GGUF abliterated release, for users wanting the unquantized version. Its far lower download count versus the GGUF variant underscores how strongly the community favors quantized formats. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 195 | 326,638 | A GGUF release using the "Heretic" abliteration technique on Qwen3.8-27B. Its 326K downloads despite modest likes suggest strong direct-link/tool-integration usage over organic discovery. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 185 | 186,470 | Another independent GGUF abliteration of the 27B dense model, explicitly tagged "dense" to distinguish it from the MoE variants also trending. It's one of at least six competing uncensored GGUF conversions of the same base model this week. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 739 | 2,628 | An MLX-format uncensored conversion targeting Apple Silicon inference. It leads orcarouter's three-format (MLX/FP8/GGUF) release strategy for the same fine-tune, by likes. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 662 | 380,072 | A distilled "turbo" acceleration of MiniMax-H3 supporting t2v/i2v/r2v generation with faster inference. Its 380K downloads just days after MiniMax-H3's own release show how quickly the video-generation community iterates on new base models. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 300 | 0 | A fine-tune of MiniMax-H3 for image/text-to-video generation, explicitly built on the MiniMax-H3 base model. Its zero recorded downloads alongside notable likes suggest a very recent listing still propagating through the download pipeline. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,345 | 0 | A community-maintained fix for broken Jinja chat templates affecting Qwen3.5/Qwen3.8 models. Its high likes with zero downloads (it's a template artifact, not weights) reflect how many users hit templating issues with the new release. |

## Ecosystem Signal

This week's trending list is a case study in how fast the open-weight ecosystem swarms a strong base model: **Qwen3.8-27B** alone accounts for roughly two-thirds of the 30 slots once its official FP8 variant, third-party GGUF/MLX/NVFP4 quantizations, and abliterated/"uncensored" fine-tunes are counted — a pattern echoing past major Llama and Qwen-VL launches. Notably, several of the highest-download entries (unsloth's GGUF at 5,126,652 downloads) are quantizations rather than the original weights, confirming that local/edge deployment via llama.cpp and MLX remains the dominant consumption path for large releases. Abliteration has become a fast, near-standardized community pipeline — huihui-ai, OBLITERATUS, "Heretic," HauhauCS, and Blackfrost-AI all shipped variants within days of the base release — which signals strong demand for less-restricted local models even as it raises ongoing safety considerations. Outside the Qwen ecosystem, DeepSeek's V4 family, Moonshot's Kimi-K3, and MiniMax's video/music generation lines show open-weight competition remains intense elsewhere, with generative video (LTX-2.5, MiniMax-H3, Minimax-h3-Turbo) a particularly active sub-area.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the source of nearly the entire trending list this week; understanding this release explains the surge of quantizations and fine-tunes surrounding it.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — a new video-generation foundation model already spawning turbo-distilled and fine-tuned derivatives, a good signal of where community energy is heading in generative video.
3. **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** — a speculative-decoding research release on the flagship model, useful for anyone studying inference-speed optimization techniques applied to newly launched large models.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
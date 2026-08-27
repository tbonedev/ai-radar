# Hugging Face Trending Models Digest 2026-08-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-27 18:03 UTC

---

# Hugging Face Trending Models Digest — 2026-08-28

## Today's Highlights

Qwen's release cadence dominates this week's board: **Qwen3.8-27B** and **Qwen3.8-Flash-Next** together anchor an entire downstream ecosystem of GGUF conversions, abliterated/"uncensored" variants, and MLX ports — 15 of the 30 trending repos are derivatives of these two base models. **Qwen3.8-27B** itself leads on raw adoption with 3.46M downloads and 13,004 likes, while `unsloth/Qwen3.8-27B-GGUF` has already outpaced it in downloads (7.76M) as the default quantized runtime for local inference. On the frontier-lab side, **moonshotai/Kimi-K3** and **deepseek-ai/DeepSeek-V4-Flash-0731** post strong likes-to-download ratios typical of fresh flagship drops, and **MiniMaxAI/MiniMax-H3** shows the video-generation category is still growing fast (4.86M downloads). Community "uncensored"/abliterated fine-tunes of Qwen3.8-27B are unusually prevalent this cycle, suggesting the base model's safety tuning is seen as aggressive enough to invite rapid circumvention work.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,004 | 3,457,687 | The flagship 27B release in the Qwen3.8 line, positioned as a general-purpose conversational and vision-language model. It leads the entire trending board on likes, and its download count already anchors a sprawling fine-tune/quant ecosystem. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,035 | 2,829,554 | Moonshot AI's latest Kimi-series model, tagged for multimodal feature extraction with compressed-tensors support out of the box. Nearly 3M downloads in its first trending week signals strong immediate uptake from the local-inference community. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 3,903 | 4,810 | A lighter, faster "Flash" variant in the Qwen3.8 family aimed at low-latency multimodal conversation. Despite modest downloads so far, it already has a dedicated Unsloth GGUF port, hinting at fast community adoption ahead. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,758 | 3,959,575 | A fast-tier checkpoint in DeepSeek's V4 line, dated to a July 31 training snapshot. Nearly 4M downloads reflect DeepSeek's continued pull as a default open-weight choice for production deployments. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,268 | 34 | Zhipu's newest GLM-5.3 Flash checkpoint, built on the `glm5_next` architecture with image-text-to-text capability. Downloads are still tiny relative to likes, typical of a same-day release that hasn't propagated to mirrors yet. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 463 | 88,102 | A 35B mixture-of-experts model (A3B active-parameter design) built on the Qwen3.5 MoE architecture. Its GGUF sibling already has more downloads than the source weights, suggesting most users are consuming it quantized. |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 178 | 4,232 | An 8B "native multimodal" model using a Mixture-of-Transformers (MoT) design and any-to-any pipeline tagging. It's an early-stage architecture bet worth watching for how MoT compares to standard MoE for multimodal fusion. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,528 | 4,855,095 | MiniMax's H3 video generation model supporting text-to-video and image-to-video pipelines via Diffusers. Nearly 4.9M downloads make it the most-downloaded generative (non-LLM) model on the board this week. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,921 | 912,729 | The latest LTX video model from Lightricks, supporting image-to-video, text-to-video, and video-to-video in a single-file diffusion checkpoint. Its breadth of supported pipelines makes it one of the more versatile video tools trending right now. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,272 | 19,726 | A dedicated text-to-music diffusion model, the third generation in MiniMax's music line. It extends MiniMax's generative footprint beyond video into full audio composition. |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 144 | 3,344 | A unified ControlNet adapter for MiniMax-H3 built on the `videox_fun` framework, adding conditioned video-to-video and text-to-video control. It shows Alibaba's PAI team is already building tooling on top of MiniMax's newly released video model. |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 178 | 4,477 | A compact 0.1B-parameter text-to-speech preview model. Its small footprint targets edge/low-resource TTS deployment rather than top-tier voice quality. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 119 | 240 | The second-generation Breeze text-to-speech model, tagged for both text-generation and TTS pipelines. Very early download numbers suggest this is a fresh, still-propagating release. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 273 | 4,149 | A compact ASR-tagged model built on the Qwen3 architecture, aimed at speech recognition workloads. Its small size targets fast, local transcription rather than server-scale deployment. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,501 | 0 | A community patch providing corrected Jinja chat templates for Qwen models on MLX. Its 1,501 likes against zero recorded downloads show how much friction — and community goodwill — template bugs generate around major releases. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,055 | 7,758,790 | Unsloth's official GGUF quantization of Qwen3.8-27B, and the single most-downloaded repo on the entire board at 7.76M downloads. It's become the de facto way most users actually run the model locally, well ahead of the source weights. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 838 | 509,270 | An abliterated (refusal-removed) fine-tune of Qwen3.8-27B distributed in MLX, safetensors, and GGUF formats simultaneously. Half a million downloads for a single-purpose safety-stripped variant underscores strong demand for uncensored local models. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,205 | 273,577 | An FP8-quantized "uncensored" fine-tune of Qwen3.8-27B, one of five orcarouter variants trending this week across formats. FP8 targets users running on modern GPUs wanting near-full-precision quality at half the memory. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 776 | 1,666,948 | A GGUF uncensored fine-tune of Qwen3.8-27B with multi-token-prediction (MTP) support via llama.cpp. At 1.67M downloads, it's the most-downloaded uncensored Qwen3.8-27B variant, ahead of every other abliterated fork. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 676 | 938,219 | An aggressively-tuned uncensored GGUF fine-tune of Qwen3.8-27B with multimodal/vision tags retained. Nearly a million downloads for a niche community fork shows how deep the appetite for uncensored multimodal variants runs. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,161 | 83,352 | The MLX-format build of orcarouter's uncensored Qwen3.8-27B, targeting Apple Silicon inference. It's the second of orcarouter's five simultaneous format releases of the same fine-tune. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 487 | 188,460 | orcarouter's GGUF build of the same uncensored Qwen3.8-27B fine-tune, rounding out their multi-format release strategy (safetensors, FP8, MLX, GGUF). Publishing every quant format in parallel appears to be a deliberate distribution tactic for this author. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 398 | 1,355,482 | Huihui-ai's well-known abliteration pipeline applied to Qwen3.8-27B and shipped as GGUF. huihui-ai is a repeat, established abliteration publisher, and 1.35M downloads reflect that existing reputation. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 322 | 1,469,059 | The official GGUF quantization of ornith-ai's own Ornith-1.5-35B-A3B MoE model. It has 17x the downloads of the unquantized source weights, reinforcing that GGUF is the primary consumption format for MoE models this size. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 258 | 238,691 | A heavily customized "Cold-Fusion GAIN" merge/fine-tune of Qwen3.8-27B with MTP support, built on DavidAU's signature experimental training recipe. It exemplifies the long tail of highly specific community merges layered on top of a single popular base model. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 198 | 18,598 | The original full-precision safetensors release of orcarouter's uncensored Qwen3.8-27B fine-tune, from which the FP8, MLX, and GGUF variants above were derived. It has the lowest download count of the five orcarouter formats, confirming quantized builds are what users actually want. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 233 | 1,586,469 | A smaller 9B GGUF quantization in the Ornith-1.5 family, sized for consumer hardware. Its download count actually exceeds the larger 35B GGUF sibling, suggesting the smaller model is the more practical everyday pick. |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 138 | 2,836 | A 2-bit quantized fine-tune of Qwen3.8-27B from EschaLabs, pushing compression to extreme levels. Low downloads relative to other Qwen3.8-27B forks suggest 2-bit precision is a niche, quality-sensitive tradeoff most users skip. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 437 | 4,354 | Unsloth's GGUF quantization of the newly released Qwen3.8-Flash-Next multimodal model. Its rapid appearance alongside the base model shows Unsloth's quantization turnaround has become nearly same-day. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 184 | 0 | Unsloth's GGUF build of Zhipu's brand-new GLM-5.3-Flash, published essentially simultaneously with the source model. Zero downloads so far marks it as the freshest quantization on the board. |

## Ecosystem Signal

This week's board is a case study in how a single flagship release reshapes the entire trending surface: **Qwen3.8-27B** and its Flash-Next sibling account for half of all 30 trending repos once GGUF, MLX, FP8, and abliterated derivatives are counted — a pattern that increasingly defines what "trending" means on the Hub (base-model virality, not diversity). Open-weight releases dominate outright; there is no proprietary/API-only entry in the top 30, reinforcing that Qwen, DeepSeek, Kimi, GLM, and MiniMax are setting the pace for openly available frontier and near-frontier models. The standout signal is the volume of "uncensored"/abliterated fine-tunes targeting one base model simultaneously — at least seven distinct groups (orcarouter, OBLITERATUS, HauhauCS, JonathanColetti, huihui-ai, DavidAU) shipped Qwen3.8-27B safety-removal variants within the same window, several publishing the same fine-tune across four formats at once. Quantization remains the dominant distribution channel overall: GGUF builds routinely out-download their source safetensors repos, in some cases by 15-20x, confirming that most end users consume these models through llama.cpp-compatible runtimes rather than full-precision weights.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear anchor model of the week; understanding it directly explains the majority of other entries on this list, and its 3.46M downloads make it a safe bet for production experimentation.
2. **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** — worth studying purely for its Mixture-of-Transformers architecture, a less common design choice for native multimodal fusion that could offer a useful comparison point against standard MoE approaches.
3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — the most practical entry point for anyone wanting to actually run the week's flagship model locally, given it's already the single most-downloaded repo on the board.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
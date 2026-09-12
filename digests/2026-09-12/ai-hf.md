# Hugging Face Trending Models Digest 2026-09-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-12 11:26 UTC

---

# Hugging Face Trending Models Digest — 2026-09-12

## Today's Highlights

The week is dominated by the **Qwen3.8-27B** family, which vaults to the top of the pack with 14,803 likes and a staggering 7.7M downloads for the base checkpoint alone — already spinning off official Flash/NVFP4 variants and a wave of community GGUF re-releases. **DeepSeek** and **Zhipu (zai-org/GLM-5.3)** continue their cadence of near-simultaneous vision-language releases, while **MiniMax-H3** and **Lightricks LTX-2.5** show video generation remains a hot lane with multi-million download counts. A notable undercurrent this week: several "abliterated"/"uncensored" fine-tunes of Qwen3.8-27B and GLM-5.3 are trending hard on likes, reflecting sustained community demand for safety-stripped variants alongside official releases. Quantization tooling is also front and center, with ISTA-DASLab, unsloth, and nvidia all shipping same-day compressed builds of the Qwen3.8 flagship.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,803 | 7,726,687 | Qwen's new flagship vision-language model, leading all trending entries by a wide margin on both likes and downloads. Its rapid uptake has already spawned official Flash/NVFP4 variants and multiple community GGUF conversions within the same week. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) is listed under Multimodal | — | — | — | — |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,128 | 604,992 | A faster, next-gen variant built on the experimental `qwen4_exp` architecture, positioned as Qwen's low-latency conversational option. Strong early likes suggest it's being adopted as a drop-in replacement for lighter-weight chat workloads. |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,962 | 15,150,566 | The 2019 OpenAI classic remains a top-30 trending model purely on download volume, underscoring its enduring role as a teaching baseline and lightweight test harness. Its presence alongside 2026-era frontier models highlights how foundational tooling never fully cycles out. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,264 | 1,333,574 | Zhipu's efficient conversational variant of GLM-5.3 built on the new `glm5_next` architecture. Its 1.3M downloads indicate quick adoption as a cost-efficient alternative to the full GLM-5.3 line. |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 1,889 | 140,636 | DeepSeek's latest Flash-tier vision-language model, iterating on the V4 architecture with the new `deepseek_v41` format. High likes relative to download count suggest it's early in its adoption curve but drawing strong community attention. |
| [MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,222 | 102,334 | A compact 2B-parameter Llama-architecture model from OpenBMB's MiniCPM line, aimed at efficient on-device deployment. It's trending well above its size class, reflecting continued demand for small, capable local models. |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,126 | 19,733 | A 4B general-purpose LLM built on the new `spark2_5` architecture. Solid likes-to-download ratio suggests it's gaining early community interest ahead of wider benchmarking. |
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 875 | 484,422 | An experimental vision-augmented checkpoint of DeepSeek's V4 Flash line, testing multimodal capability ahead of a broader release. Nearly half a million downloads for an "Exp" tag indicates high community curiosity despite its experimental status. |
| [Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 706 | 3,581 | A compact MoE model in Nex AGI's N2.5 series, built on the `qwen3_5_moe` architecture with vision-language support. Its inclusion alongside the larger Nex-N2.5-Pro suggests a coordinated small/large model family launch. |
| [Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 606 | 30,081 | The larger sibling in Nex AGI's N2.5 MoE family, offering stronger capability at the cost of size. Higher download count than its "mini" counterpart suggests users are prioritizing capability over efficiency for this line. |
| [Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 318 | 1,596 | A 35B MoE model (3B active parameters) shipped in MLX format, explicitly targeting edge-inference use cases on Apple Silicon. Its preview status and low download count mark it as an early-stage release worth watching as edge-optimized MoE designs mature. |
| [K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 294 | 5,616 | A 36B MoE model (4B active) introducing the new `k2_horizon` architecture family. Still early in adoption, it represents a new entrant into the sparse-MoE LLM space. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,175 | 4,860,709 | MiniMax's flagship image/text-to-video diffusion model, combining strong image and video generation in one checkpoint. Nearly 4.9M downloads make it one of the most widely adopted video-generation models on the Hub this week. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,552 | 1,601,007 | Lightricks' latest video diffusion model supporting image-to-video, text-to-video, and video-to-video in a single-file diffusion format. Its broad task coverage and 1.6M downloads reflect strong production-tool adoption (Lightricks powers consumer video apps). |
| [Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 326 | 114,141 | A community video-generation build based on the MiniMax-H3 architecture, focused on image-to-video and video-to-video tasks. Its rapid download count shows the community quickly building on top of MiniMax's newly released base. |
| [YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 277 | 2,304 | A 3B text-to-audio model specializing in music generation with symbolic planning and agentic editing capabilities. Its niche focus on structured, editable music generation sets it apart from typical end-to-end audio models. |
| [Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 195 | 0 | A video-to-video model for character replacement and video editing from Viggle, known for viral character-animation tools. Zero recorded downloads alongside real likes suggests a very fresh listing gaining attention before wider distribution. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,840 | 253,739,900 | The long-standing sentence-embedding workhorse, still pulling over 253M downloads — by far the largest download count in this list. Its continued dominance shows embedding infrastructure remains far stickier than generative model churn. |
| [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 747 | 784,262 | Google's third-generation time-series foundation model for forecasting tasks, now in native PyTorch format. Nearly 800K downloads indicate strong enterprise interest in pretrained forecasting over training bespoke models. |
| [mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 464 | 12,122 | A 300M wav2vec2-based pretraining checkpoint from Meta's Massively Multilingual Speech project. Its continued relevance reflects ongoing use as a base for multilingual speech fine-tuning. |
| [VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 213 | 2,494 | A 7B streaming ASR/transcription model from Microsoft's VibeVoice line, targeting real-time speech-to-text. Its streaming-first design differentiates it from batch-oriented transcription models. |
| [Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 179 | 3,761 | A 4B vision-language model purpose-built for autonomous driving and motion planning. It marks Qwen's expansion beyond general chat/vision into a vertical robotics application. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,922 | 11,529,203 | Unsloth's GGUF quantization of the new Qwen3.8-27B flagship, already outpacing the original model's downloads at 11.5M. It's the go-to local-inference format for the week's most talked-about base model. |
| [Qwen3.8-27B-Uncensored-...-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,113 | 2,078,044 | A community "uncensored" fine-tune and GGUF quantization of Qwen3.8-27B with multi-token prediction. Over 2M downloads in the same week as the base model's release shows how fast fine-tuning communities iterate on new flagships. |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 854 | 729,683 | A research-grade mixed-precision quantization of Qwen3.8-27B using GSQ/RCO quantization techniques from ISTA-DASLab. Its academic provenance signals interest in pushing quantization quality beyond standard GGUF recipes. |
| [Qwen3.8-27B-TURBO-...-Heretic-Uncensored-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 501 | 665,911 | A heavily merged/fine-tuned, safety-stripped GGUF variant of Qwen3.8-27B combining multiple community techniques ("Heretic", "Cold-Fusion"). Its 665K downloads reflect the long tail of experimental community merges around every major open-weight release. |
| [GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 396 | 30,068 | An FP8-quantized, refusal-removed fine-tune of GLM-5.3 marketed toward cybersecurity use cases. Its tags signal it's part of the broader trend of domain-branded "abliterated" community fine-tunes. |
| [Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 217 | 260,350 | A llama.cpp-ready GGUF merge/quantization built on the Qwen3.8-27B-Flash line with vision support. It extends the local-inference ecosystem around Qwen3.8 to lighter Flash-tier weights. |
| [Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 213 | 89,924 | NVIDIA's official NVFP4 quantization of Qwen3.8-Flash-Next using their Model Optimizer toolkit. It signals NVIDIA's continued push to get same-day optimized formats out for major open releases on their own hardware stack. |
| [MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 184 | 87,316 | The official GGUF release of OpenBMB's MiniCPM5-2B, enabling efficient local/edge deployment. Official (rather than community) quantization support suggests OpenBMB is prioritizing on-device use cases for this line. |

## Ecosystem Signal

The Qwen3.8-27B launch is the clearest momentum signal this week: within days it has an official base model, an official Flash-Next variant, an NVIDIA NVFP4 build, and at least four independent GGUF quantizations/fine-tunes — a pattern that shows how quickly the open-weight ecosystem now converges around a single flagship release. DeepSeek and GLM (zai-org) continue shipping vision-language variants at a similar cadence, reinforcing a broader shift toward multimodal-by-default chat models rather than text-only LLMs. Quantization activity remains intense and increasingly specialized: beyond standard GGUF, this week features research-grade mixed-precision (GSQ/RCO) and vendor-native NVFP4 formats appearing same-day as base releases. A more concerning thread is the volume of "abliterated"/"uncensored"/refusal-removed fine-tunes trending on likes (HauhauCS, DavidAU, dealignai), which shows sustained demand for safety-stripped variants of every major open release — worth monitoring from a governance standpoint. Meanwhile, legacy infrastructure (gpt2, all-MiniLM-L6-v2) continues to post enormous download counts, a reminder that production usage lags well behind the trending frontier.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear center of gravity this week; worth studying both for its own capabilities and as a case study in how fast an ecosystem (official variants, vendor quantizations, community fine-tunes) forms around a single release.
2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — a top-tier video generation model with nearly 4.9M downloads; a strong benchmark for anyone evaluating current image/text-to-video quality.
3. **[timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — a rare non-LLM, non-diffusion entry in the trending list; worth a look for anyone building forecasting pipelines who wants to skip training a bespoke time-series model.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
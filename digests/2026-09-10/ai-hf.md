# Hugging Face Trending Models Digest 2026-09-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-10 12:01 UTC

---

# Hugging Face Trending Models Digest — 2026-09-10

## Today's Highlights

The trending chart is dominated by the **Qwen3.8** family — the base [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) leads all 30 models with 14,577 likes and 7.3M downloads, and it has already spawned a dense derivative ecosystem of GGUF quantizations, uncensored fine-tunes, and NVFP4 builds within the same week. DeepSeek continues rapid iteration with two V4-series vision releases ([DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) and [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)), signaling an aggressive multimodal cadence. Video generation is a clear growth area: [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) has 5,080,204 downloads and has already attracted community finetunes and animation tools built on top of it. Finally, the "uncensored"/abliterated fine-tune trend is highly visible, with at least four separate Qwen3.8-27B abliterated GGUF variants trending simultaneously.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,029 | 42,289 | A compact 2B llama-architecture text-generation model from the MiniCPM lineage aimed at efficient on-device deployment. Its small footprint combined with strong likes-per-download ratio suggests developers are actively evaluating it for edge use cases. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,035 | 15,930 | A 4B-parameter text-generation model built on the new "spark2_5" architecture. It is trending on likes despite modest download volume, indicating early community interest ahead of broader adoption. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 622 | 2,444 | A mixture-of-experts model based on the qwen3_5_moe architecture from newcomer lab nex-agi. Its MoE design and multimodal-capable tags suggest it targets efficient inference with multimodal upside. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 576 | 3 | The larger "Pro" sibling to Nex-N2.5-mini, released under Apache 2.0. Near-zero downloads against solid likes suggest it just launched and is being watched rather than yet deployed. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 267 | 4,488 | A 36B model using a novel "k2_horizon" architecture with a MoVA (mixture-of-vision-architecture-style) design pattern. It's a smaller research-lab release gaining early traction for its distinctive architecture. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,796 | 552,019 | The full-size GLM-5.3 conversational model using the glm_moe_dsa MoE architecture. It anchors a broader GLM-5.3 release wave that includes Flash and cybersecurity-tuned variants trending elsewhere on the chart. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 824 | 6 | A fast image-text-to-text variant of DeepSeek's V4.1 line, just published (downloads still in single digits). It signals DeepSeek's push toward lighter-weight, low-latency multimodal inference. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,577 | 7,322,476 | The clear breakout release of the week: a 27B image-text-to-text conversational model with by far the highest likes and downloads on the chart. It has already become the base model for a dozen-plus community quantizations and fine-tunes appearing elsewhere in this digest. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,315 | 1,740,572 | A versatile diffusion video model supporting image-to-video, text-to-video, and video-to-video in one checkpoint. Its 1.7M downloads reflect strong adoption in the generative-video tooling community. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 252 | 96,682 | A community video-generation variant built on the MiniMax-H3 architecture, supporting text-to-video and image-to-video. Its rapid download count underscores how quickly the MiniMax-H3 ecosystem is attracting derivatives. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,060 | 564,079 | A next-generation "qwen4_exp" experimental image-text-to-text model positioned as Qwen's forward-looking flash-tier release. It's already popular enough to have spawned its own NVFP4-quantized and GGUF derivatives. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 852 | 400,892 | An experimental vision-enabled flash model in the DeepSeek-V4 family, distinct from the V4.1 release. Strong early downloads (400K+) suggest developers are actively testing DeepSeek's vision roadmap. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,105 | 5,080,204 | A flagship image-text-to-video diffusion model with over 5 million downloads, making it one of the most-adopted generative video models on the platform. It is already the base model for multiple community finetunes and animation tools trending this week. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,213 | 1,023,103 | A faster, image-text-to-text variant of GLM-5.3 using the newer glm5_next architecture. Its 1M+ downloads make it the most widely adopted model in the GLM-5.3 release family. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 525 | 8,227 | A second-generation text-to-speech model from BreezeBlue built on a transformers-based architecture. It's trending as one of the few dedicated TTS releases on this week's chart. |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 138 | 0 | A video-to-video diffusion model specialized for character replacement and animation editing. Zero downloads with active likes indicates a brand-new release just gaining visibility. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 704 | 483,787 | Google's third-generation time-series forecasting foundation model, pretrained for general forecasting tasks. Nearly half a million downloads shows strong enterprise interest in foundation models for non-language domains. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 182 | 2,065 | A 7B streaming automatic-speech-recognition model from Microsoft's VibeVoice line. Its streaming-first design targets real-time transcription workloads. |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 144 | 2,759 | Qwen's first entry into autonomous-driving and motion-planning models, a notable domain expansion beyond chat and vision. As a first-version 4B release, it's an early signal of Qwen diversifying into robotics/AV applications. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 760 | 614,850 | A research-grade GGUF quantization of Qwen3.8-27B using GSQ/RCO mixed-precision techniques. Its 614K downloads reflect strong demand for advanced quantization methods beyond standard GGUF. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,809 | 11,127,203 | Unsloth's GGUF quantization of the flagship Qwen3.8-27B, with an extraordinary 11.1 million downloads — the highest download count on the entire chart. It's become the de facto standard way the community runs Qwen3.8-27B locally. |
| [DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 426 | 517,644 | An elaborately merged and uncensored GGUF fine-tune of Qwen3.8-27B combining multiple community techniques ("Heretic," "Cold-Fusion," MTP). Over half a million downloads show sustained demand for heavily customized, refusal-removed model merges. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 363 | 24,303 | An FP8-quantized, abliterated fine-tune of GLM-5.3 specialized for cybersecurity use cases with refusal behavior removed. It illustrates the growing niche of domain-specific, safety-stripped quantized releases. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 186 | 62,813 | NVIDIA's official NVFP4 quantization of Qwen3.8-Flash-Next using their Model Optimizer toolkit. It demonstrates hardware vendors racing to ship optimized formats for newly released flagship models. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 178 | 192,107 | A llama.cpp-compatible GGUF vision fine-tune blending Qwen3.8-27B with Flash-tier speed optimizations. Nearly 200K downloads shows healthy adoption for a community merge. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 280 | 39 | A community finetune of MiniMax-H3 for text-to-video, explicitly tagged as a base-model finetune. Its very early download count marks it as a fresh addition to the fast-growing MiniMax-H3 derivative family. |
| [HauhauCS/Qwen3.8-27B-Uncensored-...-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,069 | 1,908,917 | An aggressive uncensored GGUF fine-tune of Qwen3.8-27B with multimodal vision support, approaching 2M downloads. It's among the most-downloaded uncensored variants, reflecting strong demand for unrestricted local multimodal chat. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 144 | 51,179 | The official GGUF quantization of MiniCPM5-2B for efficient local inference. It pairs with the base model release to give the MiniCPM5 line both full-precision and quantized deployment paths. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 854 | 314,894 | Another abliterated GGUF variant of Qwen3.8-27B, one of at least four such uncensored quantizations trending this week. Its 314K downloads confirm sustained community appetite for restriction-free versions of the flagship model. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 867 | 1,053,823 | Unsloth's GGUF quantization of the newer Qwen3.8-Flash-Next model, already past 1M downloads shortly after the base model's release. It shows Unsloth's consistent pattern of rapidly quantizing every major Qwen release. |

## Ecosystem Signal

The Qwen3.8 family is the dominant gravitational center of this week's chart, appearing directly or as a derivative base in roughly a third of all 30 trending models — spanning research quantizations (ISTA-DASLab), commercial hardware optimization (NVIDIA NVFP4), community uncensoring (three separate abliterated GGUFs), and speed-tier variants (Flash-Next). This pattern shows open-weight releases now trigger an ecosystem response within days, with Unsloth and independent GGUF publishers acting as the primary distribution layer for local inference. Video generation is the other clear momentum area: MiniMax-H3 (5M+ downloads) and Lightricks' LTX-2.5 (1.7M) are each spawning their own finetune and tooling derivatives (Viggle-Animate, OpenVDN, Minimax-h3_Singularity), suggesting video diffusion is entering the same "base model + community ecosystem" flywheel that text LLMs went through. Proprietary-adjacent labs (DeepSeek, Qwen, GLM/zai-org, MiniMax) continue to open-weight release aggressively, keeping the open ecosystem competitive with closed frontier labs. Quantization activity remains GGUF-centric, though NVFP4 and FP8 releases signal growing hardware-vendor investment in day-one optimized formats.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear anchor model of the week by every metric (likes, downloads, derivative count); understanding it is prerequisite to understanding most of the rest of this digest's fine-tune activity.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — with 5M+ downloads and an already-forming derivative ecosystem, it's the best vantage point for tracking where open video generation is heading.
3. **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — a rare non-language foundation model gaining real traction; worth studying as a signal of Hugging Face's growing role beyond chat/vision models.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
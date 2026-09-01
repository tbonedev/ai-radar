# Hugging Face Trending Models Digest 2026-09-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-01 12:18 UTC

---

# Hugging Face Trending Models Digest — 2026-09-01

## Today's Highlights

Qwen and zai-org (GLM) dominate this week's trending list, with **Qwen3.8-27B** pulling in 13,523 likes and nearly 5 million downloads as the standout base release, while Unsloth's GGUF build of that same model tops the entire chart with 9,354,057 downloads. **Moonshot AI's Kimi-K3** is the biggest draw outside the Qwen/GLM orbit, racking up 11,125 likes on a compressed-tensors multimodal release. Video generation is heating up, with Lightricks' **LTX-2.5** and MiniMax's **H3** (5.5M downloads) both drawing strong engagement for text/image-to-video workflows. Community fine-tuning activity is unusually heavy this cycle, dominated by "uncensored"/abliterated variants of Qwen3.8-27B from orcarouter, HauhauCS, JonathanColetti and huihui-ai — a sign the newly released Qwen3.8 family is being aggressively adapted within days of launch.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,437 | 94,403 | Full-size GLM-5.3 text model on a new `glm_moe_dsa` architecture. Trending as the flagship non-Flash release alongside its lighter sibling. |
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 371 | 3,516 | Tencent's early preview of the next-generation Hunyuan (`hy_v4`) model. Still under 4K downloads but notable as a first look at Tencent's upcoming foundation model line. |
| [phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 179 | 6,813 | Early-alpha "phone" LLM built on Nvidia's Nemotron-H architecture from the Pipecat voice-agent team. Niche release, but a notable step toward telephony-oriented conversational models. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,575 | 207,941 | Qwen's newest fast-tier multimodal chat model on an experimental `qwen4_exp` architecture. Strong early likes signal high anticipation for the successor to the Qwen3.8 line's flash tier. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,845 | 441,348 | Lightweight, high-throughput sibling of GLM-5.3 for multimodal conversation. Its download count already outpaces the full-size model, suggesting demand for cheaper inference. |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,523 | 4,960,483 | The week's most-liked and most-downloaded base model, a 27B multimodal conversational checkpoint on the `qwen3_5` architecture. Its scale of adoption anchors an entire ecosystem of downstream quantizations and fine-tunes. |
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 419 | 17,893 | Experimental vision-enabled variant of DeepSeek's V4-Flash model. Early-stage but signals DeepSeek pushing its flash-tier line into multimodal territory. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,415 | 1,232,274 | A unified video model supporting image-to-video, text-to-video and video-to-video in one checkpoint. Over 1.2M downloads reflect strong demand for versatile open video generation. |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 279 | 3,086 | Second-generation text-to-speech model from BreezeBlue. Modest traction so far, but notable as one of the few dedicated TTS entries this week. |
| [FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 225 | 0 | A distilled, 4-step (data-free) fast video generation preview. Its "VSA" data-free distillation approach targets dramatically reduced video generation latency. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,728 | 5,532,597 | MiniMax's H3 multimodal image/text-to-video model, one of the highest-liked releases this week. Over 5.5M downloads make it one of the most-adopted video generation models tracked. |
| [Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 176 | 1,130 | Thomson Reuters' first small conversational model, built on a `qwen3_5_moe` backbone. Very early traction, but notable as a media/enterprise entrant into open multimodal chat models. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,125 | 2,783,061 | Moonshot AI's latest Kimi flagship, using a compressed-tensors backbone for efficient serving. Among the most-liked releases this week, reflecting sustained interest in Kimi's frontier-scale models. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 124 | 0 | Google's third-generation TimesFM, a pretrained foundation model for time-series forecasting. A rare non-LLM entry, showing continued interest in domain-specific foundation models. |
| [Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 175 | 130,086 | GGUF-quantized 35B MoE (`qwen35moe`-based) coding model built for local inference via llama.cpp. Imatrix calibration suggests a focus on preserving code-generation quality at reduced precision. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 648 | 431,339 | GGUF quantization of Qwen's new Flash-Next model. Strong early downloads show fast demand for lightweight local builds of a just-released flagship. |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,308 | 9,354,057 | The single most-downloaded artifact in this week's entire list. Unsloth's GGUF build of Qwen3.8-27B has been pulled over 9.3M times, underscoring how fast the community standardizes on quantized local builds. |
| [GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 315 | 63,718 | Unsloth's GGUF conversion of GLM-5.3-Flash. Extends the quantized-local-inference pattern to zai-org's new model family alongside the Qwen builds. |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 988 | 805,791 | Abliterated (safety-filter-removed) variant of Qwen3.8-27B. Rapid uptake (nearly 806K downloads) follows the now-familiar pattern of uncensoring releases right after major model drops. |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 823 | 1,276,092 | GGUF uncensored fine-tune of Qwen3.8-27B combined with aggressive multi-token-prediction tuning for faster inference. Over 1.27M downloads shows strong appetite for speed-optimized uncensored variants. |
| [Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 178 | 130,451 | Qwen's own official FP8 quantization of Flash-Next. A lower-precision, production-ready alternative straight from the source lab rather than the community. |
| [MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 173 | 32,893 | Alibaba PAI's acceleration LoRAs fine-tuned on MiniMax-H3 for faster video generation. A specialized efficiency fine-tune backed by a companion arXiv paper, rather than a capability change. |
| [Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,256 | 121,028 | MLX-formatted uncensored build of Qwen3.8-27B for Apple Silicon. Part of orcarouter's multi-format release wave for this model. |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,336 | 316,128 | FP8-quantized uncensored Qwen3.8-27B, the most-liked of orcarouter's several Qwen3.8-27B variants released this cycle. |
| [Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 159 | 64,325 | Uncensored GGUF build of the newer Flash-Next model. Extends orcarouter's abliteration pipeline beyond the 27B model to Qwen's flash tier. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 619 | 254,529 | Plain GGUF format of orcarouter's Qwen3.8-27B uncensored lineup, aimed at llama.cpp-based local inference. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 883 | 2,143,289 | A competing uncensored GGUF release of Qwen3.8-27B with MTP tuning, pulling over 2.1M downloads. Evidence that multiple independent groups are racing to uncensor the same base model. |
| [GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 139 | 2,576 | orcarouter extends its uncensoring pipeline to zai-org's GLM-5.3-Flash. Uptake is still minimal compared to their Qwen releases. |
| [MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 383 | 0 | Experimental, likely workflow-tool-oriented variant of MiniMax-H3 from a well-known video-model tinkerer. Zero recorded downloads but meaningful likes suggest early community anticipation. |
| [Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 485 | 1,869,259 | huihui-ai's established abliteration line applied to Qwen3.8-27B in GGUF format. Substantial download volume reflects the brand's track record on prior uncensored releases. |

## Ecosystem Signal

The week is dominated by two Chinese frontier families — **Qwen3.8** (both the 27B dense/MoE model and the new Flash-Next line) and zai-org's **GLM-5.3** — which together account for roughly half the trending list once derivative quantizations and fine-tunes are counted. Open-weight momentum remains overwhelming: every model in this list ships with downloadable weights, and the fastest-growing download counts belong entirely to community quantizers (Unsloth's Qwen3.8-27B-GGUF alone exceeds 9.3M downloads) rather than the original labs. Quantization activity has diversified beyond GGUF into FP8 and MLX formats, indicating growing demand for hardware-specific deployment (Apple Silicon via MLX, accelerator-native FP8). The standout trend is the speed and volume of "uncensored"/abliterated fine-tuning — at least five distinct groups (OBLITERATUS, HauhauCS, orcarouter, JonathanColetti, huihui-ai) released safety-filter-removed Qwen3.8-27B variants within days of the base model's debut, several already surpassing 1M downloads. Video generation (LTX-2.5, MiniMax-H3, FastVideo) continues gaining independent traction alongside text models, with LoRA-based acceleration fine-tunes emerging as a distinct sub-ecosystem.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear base-model leader by likes and downloads; worth studying as the reference architecture that the entire week's quantization/fine-tuning ecosystem is built around.
2. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — highest-liked model outside the Qwen/GLM cluster; worth trying for its compressed-tensors efficiency approach to serving a large multimodal model.
3. **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — worth exploring for teams evaluating open video generation, given its broad task coverage (image-to-video, text-to-video, video-to-video) in a single checkpoint.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
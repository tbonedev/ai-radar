# Hugging Face Trending Models Digest 2026-09-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-03 11:53 UTC

---

# Hugging Face Trending Models Digest — 2026-09-03

## Today's Highlights

The week is dominated by two competing open-weight model families: Alibaba's **Qwen3.8** line (Flash-Next and 27B) and Zhipu's **GLM-5.3** line (base and Flash), both shipped as vision-language (image-text-to-text) models by default rather than text-only. [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) is the single most-liked release on the Hub this week, and its GGUF quantization from Unsloth already exceeds 9.5M downloads. Video generation is also heating up, with [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) and [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) both crossing the 1M+ download mark within days of release. A striking share of this week's trending list — roughly a third — consists of community GGUF/FP8 quantizations and "abliterated"/uncensored fine-tunes of the new Qwen and GLM checkpoints, led by the prolific publisher `orcarouter`. Legacy staples (GPT-2, BERT, all-MiniLM-L6-v2) remain firmly on the list, a reminder of how much production infrastructure still runs on models from years ago.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,561 | 151,021 | GLM-5.3 is Zhipu's text-only flagship using a mixture-of-experts architecture (glm_moe_dsa) built for high-throughput conversational reasoning. It's already the base checkpoint behind several Flash and quantized derivatives elsewhere in this digest. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 405 | 4,449 | Hy4-preview is an early preview in Tencent's Hunyuan line, offering a first look at the architecture succeeding earlier Hunyuan releases. Download counts are modest, typical of a preview-stage checkpoint. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 202 | 11,526 | Built on Nvidia's Nemotron-H hybrid architecture, phonellm-alpha-1 is an alpha-stage LLM purpose-built for real-time voice/phone-call agents. Its telephony focus makes it a notable entrant in the growing voice-agent tooling space. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 146 | 1,514 | Spark-X2.5-4B is a compact 4B-parameter text-generation model aimed at lightweight local deployment. It's an early-stage release still building download traction. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,559 | 14,071,683 | The original GPT-2 remains a perennial trending entry with 14M+ downloads, still widely used as a lightweight baseline for research and fine-tuning experiments. Its continued presence alongside 2026's frontier models highlights its role as the field's most durable reference implementation. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,764 | 263,287 | Qwen3.8-Flash-Next is Alibaba's newest fast, vision-capable chat model on an experimental qwen4 architecture. It's already spawned multiple community GGUF and uncensored derivatives within days of release. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,994 | 517,902 | GLM-5.3-Flash is the lightweight, vision-language variant of GLM-5.3 on the glm5_next architecture. Its 517K+ downloads outpace the full GLM-5.3 model, reflecting demand for a faster, cheaper multimodal option. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,759 | 5,254,882 | Qwen3.8-27B is the most-liked model in this digest, a mid-size vision-language model on the qwen3_5 architecture with over 5.2M downloads. Its popularity has fueled an entire ecosystem of GGUF, FP8, and abliterated fine-tunes throughout this list. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 520 | 54,571 | This experimental checkpoint extends DeepSeek's V4 line with vision input support alongside text generation. It marks DeepSeek's continued push into multimodal territory after text-only V4 releases. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,630 | 1,293,463 | LTX-2.5 is a versatile video diffusion model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video generation in one checkpoint. Its 1.29M downloads make it one of the most-adopted video generators trending this week. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 371 | 3,861 | Breeze-TTS-2 is a transformer-based text-to-speech model, the second generation in BreezeBlue's TTS line. It's gaining early traction as an open alternative for speech synthesis pipelines. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,831 | 5,092,067 | MiniMax-H3 is a text/image-to-video diffusion model with over 5M downloads, one of the most widely adopted video generators on the Hub. Its popularity has already spawned distilled fast-inference variants and experimental ComfyUI conversions. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 250 | 0 | A data-free, 4-step distilled preview of MiniMax-H3 designed for dramatically faster video generation with minimal quality loss. Despite no recorded downloads yet, it signals fast-moving efficiency work built directly on MiniMax's video model. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 323 | 46,862 | TimesFM 3.0 is Google's pretrained foundation model for time-series forecasting, now in a native PyTorch release. It continues Google's push toward general-purpose forecasting usable without task-specific training. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,415 | 246,135,287 | This compact sentence-embedding model remains the single most-downloaded model on the Hub at over 246M downloads. It's the de facto default for semantic search, clustering, and RAG pipelines industry-wide. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,870 | 58,556,227 | BERT-base-uncased remains a foundational fill-mask/encoder model with 58.5M+ downloads, still widely used as a backbone for classification and embedding tasks. Its continued relevance nearly a decade after release underscores encoder models' staying power. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,056 | 6,761,868 | DistilBERT offers a ~40%-smaller, faster alternative to BERT while retaining most of its language understanding performance. It continues to see steady adoption for latency-sensitive fill-mask and encoding workloads. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 740 | 535,984 | Unsloth's GGUF quantization of Qwen3.8-Flash-Next enables local/CPU inference via llama.cpp-compatible runtimes. Its 535K+ downloads reflect strong demand for running Qwen's newest flash model outside the cloud. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,410 | 9,553,042 | This GGUF quantization of Qwen3.8-27B has racked up 9.5M+ downloads, the highest download count in this entire digest. It shows how quickly the community packages new flagship releases for local inference. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 193 | 100,110 | This checkpoint applies ISTA-DASLab's GSQ-RCO mixed-precision quantization to Qwen3.8-27B, targeting better accuracy retention than standard GGUF quantization. It shows research-grade quantization techniques reaching practical releases fast after a base model launch. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 340 | 75,195 | Unsloth's GGUF build of GLM-5.3-Flash brings Zhipu's fast multimodal model to local llama.cpp-based deployments. It's part of Unsloth's rapid same-week quantization coverage of every major new release. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 880 | 1,336,061 | This community fine-tune combines uncensoring with aggressive multi-token-prediction tuning on Qwen3.8-27B, already drawing 1.3M+ downloads. It reflects a fast-growing niche of aggressive uncensored tuning around each new Qwen release. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,037 | 848,781 | An abliterated (safety-layer-removed) variant of Qwen3.8-27B distributed in MLX, safetensors, and GGUF formats for broad platform coverage. Its multi-format strategy has helped it reach nearly 850K downloads quickly. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 200 | 85,105 | Another abliterated GGUF build, this time of the newer Qwen3.8-Flash-Next model. orcarouter appears repeatedly in this digest as a prolific publisher of uncensored quantizations across both Qwen and GLM families. |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 158 | 4,477 | An FP8-quantized, abliterated version of GLM-5.3-Flash aimed at GPU-efficient inference without safety guardrails. It extends orcarouter's uncensoring pipeline beyond Qwen to Zhipu's GLM line. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 667 | 262,325 | A GGUF-format abliterated build of the flagship Qwen3.8-27B, one of several competing uncensored quantizations of this model this week. Its 262K downloads show sustained demand despite competition from similar releases. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 399 | 0 | Kijai, known for packaging video/diffusion models for ComfyUI workflows, has published an experimental variant of MiniMax-H3 with no pipeline tag or downloads recorded yet. It signals early community tooling work around MiniMax's new video model. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 932 | 2,244,539 | This llama.cpp-format uncensored GGUF of Qwen3.8-27B, also MTP-tuned, has attracted over 2.2M downloads — the highest among the uncensored Qwen3.8-27B variants here. It illustrates strong demand for guardrail-free local deployments of flagship open models. |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 196 | 154,626 | Tiel-Coder-35B-A3B-GGUF is an imatrix-quantized GGUF build of a 35B mixture-of-experts coding model on the qwen35moe architecture. It's carving out a niche as a locally-runnable coding assistant quantization. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,380 | 321,518 | orcarouter's FP8 abliterated build of Qwen3.8-27B is the publisher's most-liked release in this digest, offering GPU-optimized uncensored inference. Together with their four other entries here, orcarouter is the most prolific uncensored-model publisher trending this week. |

## Ecosystem Signal

Chinese labs continue to set the pace for open-weight releases: Qwen, GLM, DeepSeek, and Tencent's Hunyuan all shipped major checkpoints in the same window, and all default to open weights rather than API-only access — proprietary models are notably absent from this list entirely. A defining trend is the collapse of the line between "chat model" and "vision-language model": nearly every new flagship (Qwen3.8-Flash-Next, Qwen3.8-27B, GLM-5.3-Flash) ships as image-text-to-text by default. Quantization and fine-tuning activity is intense and fast: GGUF dominates as the distribution format of choice, and a striking ~30% of trending entries are uncensored/abliterated derivatives of this week's two flagship base models, led by the single publisher `orcarouter`. Video generation is a clear rising category, with LTX-2.5 and MiniMax-H3 both crossing millions of downloads and already attracting distillation (FastVideo) and tooling (Kijai/ComfyUI) work. Legacy encoder and baseline models (BERT, GPT-2, MiniLM) still post the largest absolute download counts, underscoring how much production infrastructure remains built on pre-LLM-era foundations.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the week's most-liked model and the hub of an entire derivative ecosystem (GGUF, FP8, abliterated); worth studying both as a capable mid-size VLM and as a case study in how fast the community iterates on a new release.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — a single checkpoint covering four video generation modes (image-to-video, text-to-video, video-to-video, image-text-to-video) with 1.29M downloads, making it a strong all-in-one option for teams exploring video generation.
3. **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — a foundation model for time-series forecasting in a far less crowded space than chat/vision models, worth a look for anyone doing forecasting work who wants to skip task-specific training.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
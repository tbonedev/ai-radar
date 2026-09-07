# Hugging Face Trending Models Digest 2026-09-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-07 13:14 UTC

---

# Hugging Face Trending Models Digest — 2026-09-07

## Today's Highlights

Qwen's **Qwen3.8-27B** and its **Qwen3.8-Flash-Next** sibling dominate this week's chart, together anchoring a sprawling downstream ecosystem of GGUF quantizations, uncensored fine-tunes, and NVFP4 builds — a sign that Qwen has become the default base model for the community fine-tuning pipeline. On the generation side, **MiniMax-H3** and **Lightricks LTX-2.5** are pushing image/text-to-video quality, while **DeepSeek-V4-Flash-Vision-Exp** and **zai-org's GLM-5.3** family show the frontier-lab race extending into vision-language territory. Classic infrastructure models (`bert-base-uncased`, `all-MiniLM-L6-v2`, `gpt2`, `clip-vit-base-patch32`) continue to rack up massive cumulative downloads, underscoring their role as embedding/production workhorses even as attention shifts to newer releases. Notably, a large share of this week's fine-tune activity is "abliterated"/uncensored variants of Qwen3.8-27B, reflecting sustained community demand for restriction-removed checkpoints alongside official releases.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,711 | 14,629,637 | The original GPT-2 remains a foundational text-generation baseline used for teaching, benchmarking, and lightweight prototyping. Its continued high weekly likes reflect enduring use as a reference model years after release. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,744 | 442,064 | GLM-5.3 is zai-org's latest text-generation model built on the `glm_moe_dsa` mixture-of-experts architecture. It's trending alongside its Flash variant as developers evaluate the GLM family's conversational and reasoning performance. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 658 | 7,216 | Spark-X2.5-4B is a compact 4B-parameter LLM gaining traction for its efficiency-focused footprint. Its low download-to-like ratio suggests early community interest ahead of broader adoption. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 193 | 2,226 | K2-Horizon-MoVA-36B-A4B is a 36B text-generation model using a mixture-of-vision/attention (MoVA)-style architecture per its `k2_horizon` tag. It's a newer entrant still building visibility relative to downloads. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,194 | 6,416,358 | Qwen3.8-27B is this week's most-liked model by a wide margin, extending the Qwen3.5 architecture into image-text-to-text territory. Its 6.4M+ downloads and role as base model for a dozen community fine-tunes make it the ecosystem's current center of gravity. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,989 | 4,990,034 | MiniMax-H3 is a diffusers-based image-text-to-video model spanning both text-to-video and image-to-video generation. Its near 5M downloads and multiple community derivatives (see fine-tunes below) signal strong adoption as a video-gen backbone. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,964 | 474,693 | Flash-Next is Qwen's faster, next-generation `qwen4_exp` image-text-to-text model, positioned as a lighter-weight complement to the flagship 27B. It's already spawned NVFP4 and GGUF quantized builds within days of release. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,017 | 1,584,382 | LTX-2.5 is a versatile diffusion model supporting image-to-video, text-to-video, and video-to-video generation in a single-file format. Its broad task coverage and 1.5M+ downloads make it a go-to for video generation pipelines. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,123 | 784,005 | GLM-5.3-Flash is the faster, vision-capable counterpart to GLM-5.3, built on the `glm5_next` architecture. It's outpacing the base GLM-5.3 in downloads, suggesting demand for lower-latency multimodal inference. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 782 | 251,611 | This experimental vision variant extends DeepSeek-V4 into image-text-to-text generation. As an "Exp" release, it signals DeepSeek is actively iterating on multimodal capability ahead of a stable V4 vision launch. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 468 | 6,754 | Breeze-TTS-2 is a text-to-speech model built on transformers/safetensors infrastructure. Its early-stage download count reflects a newer release still gaining discovery among speech-synthesis users. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,576 | 251,367,312 | This lightweight sentence-embedding model remains the most-downloaded model on this entire trending list at over 251M downloads. It's the de facto default for semantic search and RAG pipelines needing fast, low-cost embeddings. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,991 | 50,747,373 | The original BERT base model continues to serve as a fill-mask and fine-tuning foundation across NLP tasks. Its 50M+ downloads confirm it's still a default starting checkpoint for classification and embedding work. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,211 | 20,496,047 | CLIP ViT-B/32 remains the standard zero-shot image classification and multimodal retrieval model. Its sustained 20M+ downloads reflect continued use as a vision-language embedding backbone. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,041,011 | DistilBERT offers a distilled, faster alternative to BERT for fill-mask and downstream fine-tuning. Its consistent download volume shows it's still favored where inference latency matters more than peak accuracy. |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 543 | 271,713 | TimesFM 3.0 is Google's pretrained time-series forecasting foundation model. Its growing likes-to-download ratio suggests rising interest in foundation-model approaches to forecasting outside the usual NLP/vision domains. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 264 | 12,213 | MMS-300M is a wav2vec2-based multilingual speech pretraining model from Meta's Massively Multilingual Speech project. It's used as a base for downstream ASR and speech-classification fine-tunes across many languages. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 134 | 1,144 | VibeVoice-ASR-Streaming-7B is a 7B streaming speech-recognition/transcription model. Its low download count paired with trending presence suggests a fresh release drawing early attention for real-time ASR use cases. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,620 | 10,479,045 | Unsloth's GGUF quantization of Qwen3.8-27B leads the fine-tune/quant category with over 10M downloads — more than the base model itself. It's the go-to format for running Qwen3.8-27B locally via llama.cpp-compatible tools. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,117 | 1,024,582 | An abliterated (refusal-removed) fine-tune of Qwen3.8-27B distributed in mlx, safetensors, and gguf formats for broad platform compatibility. Its million-plus downloads show strong demand for uncensored variants of the flagship model. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 988 | 1,629,754 | Another uncensored GGUF fine-tune of Qwen3.8-27B, this one applying "aggressive" multi-token-prediction tuning with vision support. Its 1.6M downloads outpace its likes, indicating it's more downloaded than discussed. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 818 | 868,243 | Unsloth's quantized build of the newer Flash-Next model, already accumulating nearly 900K downloads within days of the base model's release. It shows how quickly the quantization pipeline now follows official Qwen drops. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 768 | 292,633 | Yet another uncensored/abliterated GGUF variant of Qwen3.8-27B. Its presence alongside several similar entries highlights how crowded and competitive the "uncensored Qwen" fine-tune niche has become. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 492 | 403,292 | A research-grade quantization applying GSQ (group-scale quantization) and RCO mixed-precision techniques to Qwen3.8-27B. It represents the more academically-driven end of the quantization spectrum, distinct from community abliteration efforts. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 273 | 258,896 | A heavily customized "Heretic Uncensored" fine-tune merge of Qwen3.8-27B combining multiple tuning techniques. Its elaborate naming reflects DavidAU's signature style of stacking fine-tune experiments into single releases. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 239 | 18,602 | An FP8-quantized, abliterated fine-tune of GLM-5.3 marketed toward cybersecurity use cases. It's one of the few non-Qwen entries in this category, suggesting the uncensored-fine-tune trend is spreading beyond the Qwen ecosystem. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 218 | 0 | A fresh fine-tune of MiniMax-H3 for text-to-video generation, with downloads not yet registered. Its appearance on the trending list despite zero downloads points to like-driven early buzz ahead of wider release. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 134 | 60,343 | A llama.cpp-compatible GGUF merge/fine-tune blending Qwen and Opus-style tuning ("Qwopus") for vision-capable inference. Its name signals a cross-model merge experiment rather than a straightforward quantization. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 129 | 18,068 | NVIDIA's official NVFP4 quantization of Flash-Next, built with their Model Optimizer toolkit. It's notable as one of the few official (non-community) quantized releases in this batch, targeting NVIDIA hardware efficiency. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 126 | 26,731 | A community fine-tune of MiniMax-H3 for video generation. Its presence reinforces MiniMax-H3's emergence as a base model attracting its own derivative ecosystem, mirroring the Qwen pattern in the video domain. |

## Ecosystem Signal

The clearest trend this week is **Qwen3.8-27B's consolidation as the community's default open-weight base model** — it anchors at least eight of the thirty trending entries, from official releases to GGUF quants to a wave of "uncensored"/abliterated fine-tunes (OBLITERATUS, HauhauCS, orcarouter, DavidAU). This mirrors Llama's earlier role but with a notably heavier skew toward refusal-removal fine-tunes, a niche that's now spreading to GLM-5.3 as well (dealignai's cybersecurity FP8 build). Quantization activity is bifurcating between community tooling (unsloth's GGUF builds, consistently outdownloading base models) and vendor-official efforts (NVIDIA's NVFP4, ISTA-DASLab's research-grade GSQ/RCO). In generation, MiniMax-H3 is emerging as a second "base model with derivatives" pattern outside the LLM space, suggesting video-gen models are entering the same fine-tune/remix cycle text models went through. Meanwhile, legacy infrastructure models (BERT, MiniLM, CLIP, GPT-2) hold steady at the top of cumulative downloads, a reminder that production embedding and encoder workloads are far stickier than the fast-moving chat/generation frontier.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear center of this week's ecosystem; worth studying both as a strong image-text-to-text model and as a case study in how quickly an open release spawns a quantization/fine-tune supply chain.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — a video-generation model showing the same derivative-ecosystem dynamics as Qwen, useful for tracking how open video models mature relative to open LLMs.
3. **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — a rare non-NLP/vision entry; worth a look for teams exploring foundation-model approaches to forecasting rather than bespoke time-series architectures.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
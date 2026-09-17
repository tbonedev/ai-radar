# Hugging Face Trending Models Digest 2026-09-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-17 12:23 UTC

---

Here's the digest based on the data provided:

## Today's Highlights

Qwen continues to dominate the Hugging Face trending charts, with the flagship **Qwen3.8-27B** pulling in over 7.4M downloads and 15K+ likes, and spawning a dense cluster of community derivatives (Swift, GGUF quantizations, GSQ-RCO mixed-precision builds) that together account for nearly a quarter of today's list. DeepSeek and MiniMax both shipped next-generation multimodal releases (**DeepSeek-V4.1-Flash**, **MiniMax-H3**) that are already being forked into uncensored and uncensored+quantized variants within hours of release — a pattern that's become the norm for major open-weight drops. Video and audio generation remain active fronts, with Lightricks' **LTX-2.5** and Tencent's **AuK** TTS model both trending. Meanwhile, foundational classics (GPT-2, BERT, DistilBERT, CLIP, MiniLM) continue to rack up massive cumulative download counts, underscoring their enduring role as default building blocks.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,259 | 37,131 | A Qwen3.5-based MoE model (35B total, ~3B active) packaged for MLX and edge inference. Trending as developers look for large-capacity models that stay cheap to run locally. |
| [MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,528 | 329,713 | The latest entry in OpenBMB's compact MiniCPM line, built on a Llama-style architecture at 2B parameters. Strong download-to-like ratio suggests it's being pulled heavily into production small-model pipelines rather than just browsed. |
| [NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 2,197 | 19,789 | A 4B agentic model built on the Qwen3.5 text backbone, tuned for tool-use and task orchestration. Its likes-to-downloads ratio points to early community buzz outpacing broad adoption so far. |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,251 | 28,347 | A general-purpose 4B LLM from XHToken's Spark line. Modest but steady traction places it among the mid-tier small models competing in the sub-5B space. |
| [Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,680 | 5,887,953 | Meta's instruction-tuned 8B workhorse remains a top download draw nearly two years after release. Its continued dominance shows how sticky a well-supported mid-size open model can be as a fine-tuning base. |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,131 | 15,558,794 | The original GPT-2 remains a default teaching and baseline model, still pulling in over 15M downloads. Its persistence highlights how much tooling, tutorials, and legacy pipelines still depend on it. |
| [Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 200 | 0 | A small 1B Qwen2.5 fine-tune using RLCD (RL from Contrastive Distillation) with MLX-optimized constrained/parallel decoding. Zero downloads with active likes suggests it's newly published and still gaining visibility. |
| [Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 826 | 7,347 | A compact MoE model from Nex-AGI built on the Qwen3.5 MoE architecture. Early-stage traction places it as a newer entrant in the crowded small-MoE space. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,939 | 390,657 | DeepSeek's fast-tier vision-language model, supporting image-text-to-text generation. High download volume relative to its release recency signals rapid infrastructure integration by serving providers. |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,477 | 7,456,257 | Qwen's flagship 27B vision-language model and the single most-liked and most-downloaded entry on today's list. Its dominance is driving an entire downstream ecosystem of quantizations and fine-tunes elsewhere in this digest. |
| [YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 684 | 11,626 | A 3B music-generation model supporting symbolic planning and agentic editing of compositions. Positions itself at the intersection of generative audio and multi-step creative-agent workflows. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,167 | 1,602,865 | Lightricks' latest video generation model, supporting image-to-video, text-to-video, and video-to-video in a single-file diffusion checkpoint. Broad task coverage and strong downloads make it a leading open video-gen option. |
| [AuK](https://huggingface.co/tencent/AuK) | tencent | 282 | 3,024 | Tencent's zero-shot text-to-speech model with voice-cloning support. Still early in adoption but notable for coming from a major lab entering the open TTS space. |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,342 | 706,052 | A next-generation "qwen4_exp" architecture preview, signaling Qwen's experimental successor line. High likes relative to downloads suggest strong anticipation ahead of a full release. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,403 | 4,576,471 | MiniMax's H3 image-text-to-video model built on Diffusers, combining strong multimodal understanding with video synthesis. High download count makes it one of the most heavily adopted video-gen releases this week. |
| [Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 207 | 1,223 | A newer vision-language entrant from Agnes-AI. Low volume so far marks it as an early-stage release still building traction. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,413 | 2,446,115 | Zhipu/Z.ai's fast-tier GLM vision-language model in the glm5_next series. Solid download numbers reflect GLM's continued strength as a leading Chinese open-weight lab. |
| [ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 164 | 476 | A 9B vision-language model emphasizing spatial reasoning. Still nascent in adoption but notable for targeting a less-crowded multimodal-reasoning niche. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,040 | 255,618,777 | The de facto standard sentence-embedding model, with an extraordinary 255M+ downloads. Its multi-framework support (PyTorch, TF, Rust, ONNX) keeps it embedded in RAG and search pipelines everywhere. |
| [mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 563 | 22,039 | Meta's Massively Multilingual Speech pretraining checkpoint based on wav2vec2. Continues to serve as a base for low-resource-language speech fine-tuning. |
| [bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,363 | 47,631,021 | The original BERT checkpoint remains a top fill-mask and embedding baseline nearly a decade after release. Its cross-framework support keeps it relevant for classic NLP tasks and teaching. |
| [clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,556 | 21,776,108 | OpenAI's CLIP model remains the standard for zero-shot image classification and vision-language embedding. Still a default building block for multimodal retrieval systems. |
| [distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,469 | 7,456,019 | A distilled, lighter BERT variant retaining strong fill-mask performance. Popular where inference cost matters more than squeezing out the last point of accuracy. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,231 | 1,027,602 | A GGUF quantization of Qwen3.8-27B using GSQ/RCO mixed-precision techniques. Over 1M downloads shows strong demand for research-grade quantization methods applied to flagship models. |
| [Qwen3.8-27B-...-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 826 | 1,116,038 | An elaborately-merged, decensored GGUF fine-tune of Qwen3.8-27B combining multiple community techniques (Unsloth tooling, "Heretic" ablation). High downloads reflect the enduring appetite for unrestricted, locally-runnable chat models. |
| [Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 358 | 3,221 | A community fine-tune of Qwen3.8-27B from ukisai, also released as a separate GGUF build. Modest traction so far for what appears to be an efficiency- or speed-oriented variant. |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,242 | 8,205,000 | Unsloth's GGUF build of Qwen3.8-27B, explicitly linked as a quantized derivative of the base model. Over 8M downloads makes it the single most-downloaded model in today's list, reflecting Unsloth's role as the go-to source for optimized local-inference builds. |
| [DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 254 | 32,011 | An FP8-quantized, decensored fine-tune of DeepSeek-V4.1-Flash. Demonstrates how quickly major lab releases get re-packaged by the community for both efficiency and reduced guardrails. |
| [Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 467 | 181,811 | A community fine-tune of MiniMax-H3 targeting video generation. Solid download numbers suggest the base model's video quality is attracting derivative experimentation. |
| [Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 210 | 72,862 | The GGUF-quantized companion to ukisai's Swift-Qwen3.8-27b fine-tune, built for llama.cpp with efficient-thinking optimizations. Higher downloads than its non-quantized counterpart show the usual pull toward locally-runnable formats. |

## Ecosystem Signal

Qwen3.8-27B is clearly the center of gravity this cycle: it's the top base model by likes and downloads, and it alone spawned five distinct derivatives (GSQ-RCO quantization, Unsloth GGUF, two ukisai "Swift" variants, plus indirect competition from Qwen's own Flash-Next preview). This mirrors a broader pattern — GGUF quantization remains the dominant community activity, appearing across four of today's seven fine-tune/quant entries, confirming llama.cpp-compatible local inference as the default distribution channel for community work. Decensoring/"uncensored" fine-tunes (DavidAU's Heretic build, dealignai's UNCENSORED-FP8) continue to appear within days of major releases from DeepSeek and Qwen, an established but persistent trend. Open-weight labs (Qwen, DeepSeek, MiniMax, GLM/Z.ai, MiniCPM) collectively outnumber closed releases in this list entirely — no proprietary API-only model appears. Legacy foundational models (GPT-2, BERT, CLIP, MiniLM) still post download counts an order of magnitude above most new releases, a reminder that raw popularity metrics favor infrastructure incumbency over novelty.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear center of this week's ecosystem; worth studying both directly and via its quantized/fine-tuned derivatives to understand current best practices in post-training and compression.
2. **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — a single checkpoint covering image-to-video, text-to-video, and video-to-video is unusually broad task coverage for an open video model, worth trying for anyone evaluating open alternatives to closed video-gen APIs.
3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — the most-downloaded model on the list; a practical starting point for anyone wanting to run the Qwen3.8-27B family locally with minimal setup.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
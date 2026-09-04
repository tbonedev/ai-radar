# Hugging Face Trending Models Digest 2026-09-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-04 11:56 UTC

---

# Hugging Face Trending Models Digest — 2026-09-04

## Today's Highlights

Qwen's **Qwen3.8** family dominates the board, anchoring both of the top multimodal releases (Qwen3.8-27B, Qwen3.8-Flash-Next) and spawning seven separate downstream GGUF/quant/fine-tune variants — the clearest sign of which base model the community has rallied around this week. zai-org's **GLM-5.3** and **GLM-5.3-Flash** post strong likes-to-download ratios, suggesting early enthusiast interest ahead of broader production adoption. On the generative side, **MiniMax-H3** leads video models with over 5M downloads, while **Lightricks/LTX-2.5** pushes further into unified image/video/text-to-video pipelines. Away from chat models, **google/timesfm-3.0-pytorch** signals continued momentum for dedicated time-series foundation models, and the perennial workhorses (BERT, DistilBERT, MiniLM, GPT-2, CLIP) continue to rack up download counts an order of magnitude above any new release, underscoring how much production inference still runs on small, mature models.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,648 | 303,534 | A text-generation model built on the new `glm_moe_dsa` MoE architecture. Its high likes-to-download ratio suggests it's fresh and being closely watched by early adopters. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 421 | 3,524 | A compact 4B-parameter general-purpose LLM on the `spark2_5` architecture. Its small footprint makes it attractive for edge and low-resource deployment experimentation. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 420 | 5,684 | A preview release of Tencent's Hunyuan-v4 text-generation model. Being a preview build, it's drawing early testers curious about Tencent's next-gen Hunyuan direction. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,617 | 14,607,268 | The original GPT-2 remains a staple teaching and benchmarking model years after release. Its 14.6M downloads show it's still the default choice for lightweight experimentation and tooling tests. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,877 | 5,739,341 | The flagship 27B vision-language model in the Qwen3.8 line, built on the new `qwen3_5` architecture. It's the clear center of gravity this week, having already spawned at least seven community GGUF and fine-tuned derivatives. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,890 | 5,118,457 | A unified image-text-to-video diffusion model supporting both text-to-video and image-to-video generation. It leads all video models on the board by both likes and downloads, and already has a community fine-tune. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,839 | 351,374 | A faster, lighter vision-language sibling to Qwen3.8-27B on the experimental `qwen4_exp` architecture. It's already been quantized to GGUF by unsloth within the same week, reflecting rapid ecosystem uptake. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,031 | 654,957 | A faster multimodal variant of GLM-5.3 on the new `glm5_next` architecture. It's drawing both official and community (unsloth, orcarouter) quantization support in parallel. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,728 | 1,399,511 | A single-file diffusion model spanning image-to-video, text-to-video, video-to-video, and image-text-to-video generation. Its breadth of supported modalities in one checkpoint makes it a versatile pick for video-generation pipelines. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 572 | 133,024 | An experimental vision-enabled variant of DeepSeek-V4-Flash on the `deepseek_v4` architecture. As DeepSeek's first flagged vision experiment in this line, it's being watched as a signal of the V4 roadmap. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 409 | 5,388 | A text-to-speech model on the custom `breeze` architecture. It's one of the few dedicated TTS entries trending this week, standing out in a board otherwise dominated by text and vision models. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 260 | 0 | A distilled, data-free 4-step variant of MiniMax-H3 aimed at drastically faster video generation. Zero recorded downloads despite notable likes suggests it just landed and hasn't yet been pulled into workflows. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,472 | 253,789,790 | The go-to lightweight sentence-embedding model for semantic search and RAG pipelines. Its 253M+ downloads dwarf every other model on this list, cementing its status as production infrastructure. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,916 | 58,675,189 | The foundational BERT encoder remains a default fill-mask and fine-tuning base years after release. Nearly 59M downloads reflect its continued role as a teaching and baseline model. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,141 | 20,569,141 | OpenAI's CLIP model remains the standard zero-shot image classification and image-text embedding backbone. Over 20M downloads show it's still widely embedded in multimodal retrieval systems. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,097 | 7,067,963 | A distilled, lighter BERT variant retaining most of its fill-mask performance. Its 7M+ downloads show it's still preferred where inference cost matters more than peak accuracy. |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 405 | 105,304 | Google's third-generation pretrained foundation model for time-series forecasting. It's carving out a specialized niche distinct from the LLM/multimodal mainstream, appealing to forecasting and analytics teams. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 185 | 12,823 | A 300M-parameter wav2vec2-based pretraining checkpoint from Meta's Massively Multilingual Speech project. It serves as a base for multilingual speech-recognition fine-tuning across low-resource languages. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 209 | 18,874 | An alpha-stage LLM built on Nemotron-H, purpose-tuned for real-time phone/voice-agent conversation. Its niche framing for telephony use cases sets it apart from general-purpose chat models. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,468 | 9,951,693 | Unsloth's official GGUF quantization of Qwen3.8-27B for local/CPU inference. Nearly 10M downloads make it by far the most-used derivative of the week's flagship base model. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,066 | 928,393 | An abliterated (safety-guardrail-removed) fine-tune of Qwen3.8-27B, shipped in MLX, safetensors, and GGUF formats. Multi-format packaging and nearly 1M downloads show strong demand for uncensored variants of the flagship model. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 913 | 1,463,966 | An "aggressive" uncensored GGUF fine-tune of Qwen3.8-27B using multi-token prediction. Its 1.4M+ downloads place it among the most-adopted uncensored Qwen3.8 derivatives despite being a niche community fork. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 771 | 702,251 | Unsloth's GGUF conversion of the Qwen3.8-Flash-Next vision-language model. Its rapid release alongside the base model shows how tightly unsloth's quantization pipeline now tracks Qwen launches. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 696 | 276,706 | Another abliterated GGUF quantization of Qwen3.8-27B, one of several competing "uncensored" variants trending this week. Its emergence alongside OBLITERATUS and HauhauCS versions shows multiple groups racing to strip guardrails from the same base model. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 267 | 206,575 | A research-grade GGUF quantization of Qwen3.8-27B using GSQ/RCO mixed-precision techniques. Its academic provenance signals interest in pushing quantization quality beyond standard community conversions. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 216 | 97,994 | An abliterated GGUF build of Qwen3.8-Flash-Next. It extends orcarouter's uncensoring efforts from the 27B model down to the lighter Flash-Next variant. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 350 | 85,158 | Unsloth's official GGUF conversion of GLM-5.3-Flash. Its release shows unsloth's quantization coverage extending beyond Qwen to the newly launched GLM-5.3 family. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 148 | 95,226 | A heavily merged, "heretic"-style uncensored fine-tune of Qwen3.8-27B combining multiple experimental techniques. The elaborate naming reflects the long tail of highly customized community merges built on the same base checkpoint. |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 167 | 7,782 | An FP8-quantized, abliterated fine-tune of GLM-5.3-Flash. It shows the uncensoring trend expanding from Qwen onto the newly released GLM-5.3 family within the same week. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 148 | 0 | A community fine-tune of MiniMax-H3 for text-to-video generation. Zero downloads despite likes suggests it's a just-published derivative still gaining traction. |

## Ecosystem Signal

**Qwen3.8-27B** is unmistakably this week's center of gravity: it's the base model for at least seven of the eleven fine-tune/quantization entries, spanning official unsloth GGUFs, research quantization (ISTA-DASLab), and a cluster of independent "uncensored"/abliterated forks (OBLITERATUS, HauhauCS, orcarouter, DavidAU). That last cluster is worth flagging on its own — guardrail-removal fine-tunes now appear within days of a flagship release, and the same pattern is already repeating for GLM-5.3-Flash via orcarouter's FP8 abliterated build. Open-weight releases dominate the board entirely: GLM-5.3, Qwen3.8, DeepSeek-V4-Vision-Exp, MiniMax-H3, and Hy4-preview all ship weights directly to Hugging Face, with no proprietary/API-only entries in the top 30. Meanwhile, legacy production models — BERT, DistilBERT, MiniLM, GPT-2, CLIP — continue to out-download every new release by 10-100x, a reminder that the frontier and the production floor are two very different markets moving at different speeds.

## Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the base model anchoring this week's entire downstream ecosystem; understanding it directly explains most of the quantization/fine-tune activity elsewhere on the board.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the clear leader in open video generation by both likes and downloads, and already spawning its own fine-tune community.
- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — a differentiated pick outside the LLM/multimodal crowd, worth studying for teams working on forecasting rather than chat or generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
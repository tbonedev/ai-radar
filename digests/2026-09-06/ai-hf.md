# Hugging Face Trending Models Digest 2026-09-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-06 11:29 UTC

---

# Hugging Face Trending Models Digest — 2026-09-06

## Today's Highlights

The Qwen3.8 family dominates this week's trending list, with **Qwen3.8-27B** pulling in over 14K likes and 6.19M downloads as the new flagship open-weight vision-language model, closely trailed by the lighter **Qwen3.8-Flash-Next**. Zhipu's **GLM-5.3** and **GLM-5.3-Flash** post strong numbers as a credible open alternative in the conversational-multimodal space, while **DeepSeek-V4-Flash-Vision-Exp** signals DeepSeek's continued push into vision-augmented reasoning. On the generative side, Lightricks' **LTX-2.5** and MiniMax's **MiniMax-H3** are driving momentum in text/image-to-video. The most striking trend, however, is downstream: the moment Qwen3.8-27B and Qwen3.8-Flash-Next shipped, the community produced a dozen-plus GGUF quantizations and "uncensored"/abliterated derivatives within the same week, dwarfing the base releases in raw entry count.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 703 | 209,191 | An experimental "Flash" variant of DeepSeek-V4 adding image-text-to-text capability on top of the fast inference line. It's trending as an early look at how DeepSeek is folding vision into its efficiency-focused model tier. |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,067 | 6,190,807 | Qwen's new 27B flagship conversational vision-language model, and by far the most-liked release this week. Its download volume already exceeds 6M, making it the de facto base model the rest of the community is building GGUF and quantized variants on top of. |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 572 | 5,477 | A compact 4B text-generation model from a smaller lab, positioned as an efficient standalone LLM rather than a Qwen derivative. It's gaining early attention as a lightweight alternative for constrained-hardware deployment. |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,931 | 432,966 | The faster, next-generation "Flash" sibling to Qwen3.8-27B, also vision-conversational. It's become the second most forked base for community quantizations, reflecting demand for a lower-latency Qwen3.8 option. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,086 | 761,364 | Zhipu's fast, image-text-to-text variant of GLM-5.3, aimed at low-latency multimodal chat. Its download count suggests it's already being adopted for production-style conversational deployments. |
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,726 | 410,074 | The full-size GLM-5.3 text-generation model built on the `glm_moe_dsa` MoE architecture. It rounds out Zhipu's push to offer an open-weight competitor across both flagship and flash tiers. |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,705 | 14,612,342 | OpenAI's original GPT-2, still pulling in massive download volume years later. Its persistence in the trending list underscores how deeply it's embedded as a teaching and baseline-testing model across the ecosystem. |
| [K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 182 | 1,723 | A 36B mixture-of-vision-and-attention (MoVA) text-generation model from IFM, early-stage but drawing niche interest. It represents a smaller lab experimenting with novel MoE-style architectures outside the mainstream families. |
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 443 | 6,441 | A preview release of Tencent's Hunyuan v4 text-generation model. Its early-stage download numbers suggest cautious community evaluation ahead of a full release. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,916 | 1,526,928 | Lightricks' latest video generation model, supporting image-to-video, text-to-video, and video-to-video in a single-file diffusion checkpoint. Its 1.5M+ downloads make it one of the most-adopted open video generation models this cycle. |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 452 | 6,357 | A second-generation text-to-speech model from BreezeBlue built on a transformer backbone. It's an emerging niche entrant in the open TTS space, still early in adoption. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,947 | 4,986,349 | MiniMax's image-text-to-video model combining diffusion-based video synthesis with multimodal conditioning. Nearly 5M downloads and almost 5K likes make it one of the top generative video releases this week, and it's already spawning downstream fine-tunes. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 475 | 144,455 | Google's third-generation foundation model for time-series forecasting, released in PyTorch. It's notable as one of the few non-language, non-vision foundation models trending, reflecting growing interest in pretrained forecasting. |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,561 | 253,029,336 | The long-standing go-to sentence-embedding model, with an extraordinary 253M downloads. Its continued dominance shows it remains the default choice for lightweight semantic search and RAG pipelines. |
| [bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,987 | 52,338,347 | The original BERT encoder, still fetching over 52M downloads. It persists as a foundational fill-mask and fine-tuning base across countless downstream NLP tasks. |
| [mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 263 | 12,464 | Meta's Massively Multilingual Speech pretraining checkpoint based on wav2vec2. It's a specialized speech-representation base used for building ASR across hundreds of languages. |
| [distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,054,316 | A distilled, lighter-weight version of BERT retaining most of its fill-mask performance. Its 7M+ downloads reflect ongoing demand for efficient encoder models in production NLP. |
| [clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,210 | 20,579,479 | OpenAI's classic CLIP model for zero-shot image classification and image-text embedding. With over 20M downloads, it remains a standard building block for multimodal retrieval and classification pipelines. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 437 | 348,389 | A mixed-precision GGUF quantization of Qwen3.8-27B using ISTA-DASLab's GSQ-RCO method. It's trending for offering a research-grade compression approach rather than a standard round-to-nearest quantization. |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,559 | 10,311,462 | Unsloth's official GGUF conversion of Qwen3.8-27B, already the most-downloaded quantized artifact in this batch at over 10M downloads. It cements Unsloth's role as the fastest and most trusted source for day-one llama.cpp-compatible releases. |
| [Qwen3.8-27B-TURBO-Fable-Cold-Fusion...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 233 | 211,018 | An elaborately-named "Heretic" uncensored fine-tune/merge of Qwen3.8-27B combining multiple experimental tuning passes. It exemplifies the long-tail of aggressive community merges chasing uncensored, "max capability" variants. |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 804 | 823,733 | Unsloth's GGUF quantization of the Flash-Next variant, extending their day-one coverage beyond the 27B model. It's seeing solid adoption as the go-to local-inference format for the faster Qwen3.8 tier. |
| [vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 197 | 0 | A text-to-video fine-tune of MiniMax-H3 from OpenVDN, freshly published with no download data yet. Its appearance so soon after the base model signals fast community iteration on video generation weights. |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 971 | 1,568,315 | An "aggressive" uncensored GGUF fine-tune of Qwen3.8-27B with multi-token prediction (MTP) support. Its 1.5M+ downloads show real demand for unrestricted local chat models, not just novelty interest. |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,101 | 995,160 | An abliterated (safety-layer-removed) version of Qwen3.8-27B shipped in MLX, safetensors, and GGUF formats simultaneously. Multi-format support makes it convenient across Mac, server, and llama.cpp deployments alike. |
| [Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 121 | 22,128 | A community vision-capable merge/quantization referencing both Qwen and Opus naming conventions, packaged for llama.cpp. It's a smaller-scale entrant reflecting the wide experimentation happening on top of the Qwen3.8 base. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 734 | 287,720 | Another abliterated GGUF build of Qwen3.8-27B, from a different community maintainer than OBLITERATUS's version. The overlap illustrates how quickly multiple independent uncensoring efforts converge on the same base model. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 992 | 2,499,368 | Yet another uncensored GGUF fine-tune of Qwen3.8-27B, this one with MTP support and nearly 2.5M downloads — the highest of the uncensored variants. Its popularity suggests it has become the community's preferred unrestricted build. |
| [Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 105 | 13,321 | NVIDIA's official NVFP4 quantization of Qwen3.8-Flash-Next via Model Optimizer (ModelOpt). It's notable as the one enterprise-grade, hardware-vendor-backed quantization among a field of community GGUF conversions. |
| [Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 241 | 112,720 | An abliterated GGUF build of the smaller Flash-Next model, extending orcarouter's uncensoring work beyond the 27B tier. It shows the same uncensoring pattern now spreading to lighter, faster models. |

## Ecosystem Signal

The Qwen3.8 family (27B and Flash-Next) has clearly become this cycle's dominant open-weight base, with the sheer volume of derivative GGUF, MLX, and NVFP4 builds — 12 of 30 trending entries — outpacing even the original releases in count. This mirrors the classic post-Llama pattern: once a strong open base drops, Unsloth ships day-one quantizations within hours, followed by a wave of independent "uncensored"/abliterated variants (at least six distinct ones here) chasing users who want unrestricted local chat. GLM-5.3 and DeepSeek's vision-flash experiment show China's labs continuing to compete directly with Qwen at the flagship tier, keeping the open-weight race genuinely multi-vendor rather than single-lab. Meanwhile, legacy staples — GPT-2, BERT, DistilBERT, MiniLM, CLIP — still post tens to hundreds of millions of downloads, a reminder that production infrastructure moves far slower than the trending charts suggest. NVIDIA's NVFP4 quantization stands out as the rare hardware-vendor-endorsed compression format amid an otherwise grassroots GGUF ecosystem.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear center of gravity this week; worth studying both as a capability benchmark and as the base spawning the entire quantization/fine-tune ecosystem below it.
2. **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — a genuinely multi-task video model (image-to-video, text-to-video, video-to-video) in a single-file diffusion checkpoint, worth trying for anyone evaluating open video generation.
3. **[timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — a rare non-language foundation model trending; useful for teams exploring pretrained time-series forecasting as an alternative to bespoke models.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
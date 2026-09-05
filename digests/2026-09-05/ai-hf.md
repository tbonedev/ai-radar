# Hugging Face Trending Models Digest 2026-09-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-05 11:06 UTC

---

# Hugging Face Trending Models Digest — 2026-09-05

## Today's Highlights

Qwen3.8-27B leads the week decisively with 13,988 likes and over 6M downloads, cementing itself as the reference open vision-language model — and it has already spawned a dense ecosystem of GGUF quantizations and "uncensored" community fine-tunes. MiniMax-H3 and Lightricks' LTX-2.5 show continued momentum in open video generation, while zai-org's GLM-5.3 and GLM-5.3-Flash push a dense/multimodal MoE pair into direct competition with Qwen and DeepSeek. Long-tail classics (gpt2, bert-base-uncased, all-MiniLM-L6-v2, distilbert) remain on the chart purely on download volume, underscoring how entrenched they remain as default building blocks years after release. Notably, roughly a third of this week's list consists of "uncensored"/abliterated fine-tunes of Qwen3.8 and GLM-5.3, reflecting strong grassroots demand for guardrail-stripped variants of the newest frontier open weights.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 498 | 4,755 | A compact 4B-parameter general-purpose LLM from a lesser-known lab. It's trending as an efficient small-footprint option for low-cost local inference and experimentation. |
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,711 | 370,417 | zai-org's flagship text model, using a "glm_moe_dsa" sparse-attention MoE architecture as the non-vision counterpart to GLM-5.3-Flash. It's already surpassed 370K downloads, positioning it as a direct rival to Qwen and DeepSeek's text-only offerings. |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,662 | 14,739,982 | OpenAI's original GPT-2 remains a perennial baseline, still pulling nearly 14.7M downloads. Its continued presence seven years after release reflects deep entrenchment in tutorials, tokenizer testing, and lightweight fine-tuning demos rather than new excitement. |
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 438 | 6,195 | A preview build of Tencent's next Hunyuan-series language model, marking continued Chinese-lab investment in open large-model releases. Early counts reflect its preview status, but it's one to watch as the hunyuan line iterates. |
| [K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 163 | 1,333 | A 36B model with an active-parameter (A4B) sparse-activation design, tagged under IFM's experimental "k2-horizon" architecture. Its niche naming suggests a research release focused on efficient inference at scale rather than a mainstream product. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 633 | 184,542 | An experimental, low-latency vision extension of DeepSeek's V4 series into image-text-to-text territory. The "Flash"/"Exp" naming signals DeepSeek testing fast multimodal inference ahead of a full V4 vision release. |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,988 | 6,024,467 | Qwen's new 27B image-text-to-text flagship and by far the week's most popular release, with nearly 14K likes and 6M+ downloads. It has already anchored a whole ecosystem of GGUF quantizations and uncensored community derivatives. |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,894 | 401,327 | A faster sibling to Qwen3.8-27B tagged as an early "qwen4" experimental architecture, hinting at Qwen's next-generation direction. Nearly 5K likes suggest strong demand for a lighter multimodal option than the 27B flagship. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,063 | 727,610 | The multimodal "Flash" edition of GLM-5.3, offering vision-language capability at lower latency than the full text model. Nearly 730K downloads indicate adoption as a cost-efficient VLM alternative to Qwen. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,829 | 1,484,329 | Lightricks' updated video diffusion model supports an unusually broad modality set — image-to-video, text-to-video, video-to-video, and image-text-to-video — in one checkpoint. Nearly 1.5M downloads make it one of the most-used open video generators this week. |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 439 | 5,962 | A second-generation open text-to-speech model built on a transformer backbone, targeting accessible voice synthesis. Its steady early traction points to growing interest in open TTS alternatives outside major-lab offerings. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,918 | 5,057,414 | MiniMax's H3 handles image-text-to-video generation and has already crossed 5M downloads, making it one of the most-adopted open video generators. It has spawned at least one community fine-tune within weeks of release. |
| [FastVideo-FastH3-4-step-Preview](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 277 | 22,851 | A distilled, 4-step-inference preview using VSA/DataFree techniques to drastically cut video-diffusion latency. It represents the efficiency-focused counterpart to heavier full-step models like MiniMax-H3 and LTX-2.5. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 441 | 123,025 | Google's third-generation TimesFM foundation model for time-series forecasting, packaged for PyTorch. Steady downloads reflect ongoing enterprise interest in pretrained forecasters over bespoke time-series models. |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,522 | 255,006,933 | The ubiquitous sentence-embedding model tops this list by a huge margin at over 255M downloads. It remains the default lightweight embedding backbone for RAG and semantic search pipelines industry-wide. |
| [mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 238 | 12,961 | Meta's Massively Multilingual Speech pretraining checkpoint supports speech tasks across hundreds of languages. Its consistent niche downloads reflect ongoing use in multilingual ASR research. |
| [bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,952 | 56,175,564 | The original BERT continues to see massive reuse (56M+ downloads) as a foundational encoder for classification, embeddings, and fill-mask tasks. Its persistence shows how deeply legacy encoder models remain embedded in production pipelines. |
| [distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,133 | 7,101,423 | DistilBERT's compact, distilled version of BERT remains favored where inference speed and memory footprint matter more than peak accuracy. Over 7M downloads keep it a default choice for lightweight NLP tasks. |
| [clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,187 | 20,755,211 | OpenAI's CLIP remains the standard zero-shot image-text alignment model, with over 20.7M downloads underscoring its role as a backbone for retrieval, captioning, and multimodal embedding pipelines. Its persistence illustrates how foundational CLIP still is despite newer VLMs. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 339 | 297,493 | A research-grade mixed-precision GGUF quantization of Qwen3.8-27B using GSQ/RCO techniques to squeeze more accuracy from low-bit compression. Nearly 300K downloads show strong demand for advanced quantization methods beyond standard GGUF. |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,519 | 10,157,510 | Unsloth's GGUF build of the Qwen3.8-27B flagship is the single most-downloaded quantization on this list at over 10.1M downloads. It's the go-to format for running the new Qwen flagship on consumer hardware via llama.cpp. |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 791 | 780,823 | Unsloth's quantized build of the newer Qwen3.8-Flash-Next, extending the same local-inference pattern to Qwen's next-gen architecture. Nearly 781K downloads shows quantization demand tracks closely behind each new Qwen release. |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 953 | 1,527,627 | An aggressively abliterated, uncensored GGUF fine-tune of the Qwen3.8-27B vision model with multi-token prediction. Its 1.5M+ downloads reflect substantial grassroots demand for unrestricted local VLMs. |
| [Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 193 | 174,405 | An elaborately named experimental merge stacking multiple uncensoring and coding-focused techniques onto Qwen3.8-27B. It exemplifies the long tail of highly customized, community-branded abliterated merges around any popular open base model. |
| [vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 179 | 0 | A community fine-tune of MiniMax's H3 video model released so recently it shows zero recorded downloads yet already 179 likes. Its rapid emergence highlights how quickly the community iterates on newly released open video generators. |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,092 | 968,936 | A fully abliterated variant of Qwen3.8-27B distributed simultaneously in MLX, safetensors, and GGUF formats, targeting Apple Silicon alongside standard local-inference stacks. Nearly 1M downloads reflect strong cross-platform demand for uncensored variants of the flagship. |
| [GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 183 | 8,338 | An FP8-quantized, abliterated version of GLM-5.3-Flash, extending the uncensoring trend seen with Qwen to zai-org's multimodal flagship. FP8 quantization targets efficient GPU inference rather than CPU/edge deployment like the GGUF variants. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 721 | 283,774 | Another independent abliterated GGUF release of Qwen3.8-27B, one of at least four competing "uncensored" variants of the same base model this week. The redundancy underscores how commoditized the uncensored-fine-tune niche has become. |
| [Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 236 | 106,845 | orcarouter's uncensored GGUF build of the newer Qwen3.8-Flash-Next, extending its abliteration pipeline almost immediately after the base model's release. Downloads already exceed 100K despite the base model being newer and smaller in the ecosystem. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 976 | 2,453,361 | A llama.cpp-native uncensored GGUF build of Qwen3.8-27B with multi-token prediction support, pulling in over 2.4M downloads — the most popular of the uncensored Qwen variants. Its scale rivals some official quantizations, showing individual maintainers can achieve mainstream-level distribution. |

## Ecosystem Signal

This week's list is dominated by a single release cycle: Qwen3.8-27B and its Flash-Next sibling account for roughly a third of all trending entries once GGUF quantizations and fine-tunes are counted, showing how one strong open-weight drop can reshape an entire week's ecosystem activity. GLM-5.3/5.3-Flash and DeepSeek's V4-Flash-Vision-Exp confirm that Chinese labs continue to lead open-weight multimodal releases, and notably every model in the top 30 ships open weights — proprietary-only players are absent from the trending surface entirely. Quantization work remains intense and increasingly sophisticated: alongside standard GGUF conversions from unsloth, ISTA-DASLab's GSQ-RCO mixed-precision technique signals continued research investment in squeezing accuracy from low-bit formats. The most striking trend, though, is volume of "uncensored"/abliterated fine-tunes — at least seven of the thirty entries strip safety guardrails from Qwen3.8 or GLM-5.3, produced by independent actors (orcarouter, HauhauCS, DavidAU, OBLITERATUS, JonathanColetti) rather than the original labs, pointing to persistent, fragmented demand for unrestricted local models that official releases don't satisfy.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear technical leader this week (13,988 likes, 6M+ downloads); worth studying as the new open VLM baseline and for benchmarking against GLM-5.3-Flash and DeepSeek-V4-Flash-Vision-Exp.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — worth trying for its unusually broad modality coverage (image/text/video-to-video) in a single checkpoint, useful for teams that want one model instead of a pipeline of specialized ones.
3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — the practical pick for running the new Qwen flagship locally; at 10M+ downloads it's already the de facto standard quantization for llama.cpp-based inference.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
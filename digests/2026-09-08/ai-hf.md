# Hugging Face Trending Models Digest 2026-09-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-08 11:56 UTC

---

# Hugging Face Trending Models Digest — 2026-09-08

## Today's Highlights

The Qwen3.8 family (27B and Flash-Next) dominates this week's trending list, both as first-party releases from Qwen and as the base for a wave of GGUF quantizations and uncensored community fine-tunes from unsloth, ISTA-DASLab, DavidAU, HauhauCS, and others — a pattern that signals strong grassroots demand for local/offline inference of frontier-class open weights. MiniMaxAI's MiniMax-H3 video-generation model is likewise spawning derivative fine-tunes (OpenVDN, WarmBloodAban) within days of release. zai-org shipped both a flagship GLM-5.3 and a lightweight GLM-5.3-Flash, while a third party immediately produced an abliterated "cybersecurity" FP8 variant. DeepSeek's V4-Flash-Vision-Exp extends its lineup into multimodal territory. Meanwhile, legacy infrastructure models (gpt2, bert-base-uncased, all-MiniLM-L6-v2, clip-vit-base-patch32) continue to rack up outsized download counts, reflecting their entrenched role as pipeline defaults rather than genuine novelty.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 800 | 10,661 | A compact 4B text-generation model built on the new spark2_5 architecture. Its efficient parameter count is driving early interest as a lightweight alternative to larger chat models. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 541 | 2,879 | The latest entry in OpenBMB's MiniCPM line, a llama-architecture 2B text-generation model aimed at edge deployment. It continues the series' focus on squeezing strong reasoning into small footprints. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,757 | 474,141 | The flagship release in Zhipu's GLM-5.3 line, a full-size conversational text-generation model. It has already attracted third-party fine-tunes within days of release, a sign of strong developer interest. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 223 | 3,205 | A 36B mixture-style text-generation model using the novel k2_horizon architecture with a 4B active-parameter design. It's an early-stage niche release worth watching as a candidate efficient MoE architecture. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,718 | 14,748,356 | The original GPT-2, still one of the most downloaded models on the Hub thanks to its ubiquity in tutorials, benchmarks, and lightweight pipelines. Its persistence highlights how legacy baselines remain infrastructure staples years after release. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,993 | 50,396,517 | The canonical BERT base model remains a top-downloaded fill-mask backbone across the ecosystem. Its enormous download count reflects continued use as a default encoder in classification and embedding pipelines. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,157 | 7,138,152 | A distilled, lighter-weight BERT variant that trades a small accuracy loss for faster inference. It remains a go-to choice for latency-sensitive fill-mask and classification tasks. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,326 | 6,712,160 | The top-liked release this cycle, a 27B image-text-to-text conversational model built on the new qwen3_5 architecture. Its massive like and download counts have made it the base model for the majority of this week's community derivatives. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,120 | 1,644,796 | A versatile diffusion model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video generation in one package. Its broad task coverage in a single-file diffusion format makes it attractive for production video pipelines. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,994 | 503,263 | A faster, next-generation variant in the Qwen3.8 line using the experimental qwen4_exp architecture for image-text-to-text tasks. It's already being quantized and fine-tuned by the community just days after launch. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 809 | 313,547 | An experimental vision-enabled flash model extending DeepSeek's V4 line into image-text-to-text territory. It signals DeepSeek's continued push toward multimodal capability alongside its core text generation lineup. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,153 | 826,875 | A faster, lighter multimodal variant of GLM-5.3 built on the glm5_next architecture for conversational image-text-to-text use. Its high download-to-like ratio suggests it's being adopted for production inference over the flagship model. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,031 | 4,994,268 | A high-profile image-text-to-video generation model already popular enough to spawn multiple community fine-tunes. Its near-5M downloads in a short window mark it as one of the most in-demand video generation releases currently on the Hub. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 481 | 7,243 | The second iteration of the Breeze text-to-speech model. It's gaining early traction as a community-driven alternative in the growing open TTS space. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 605 | 444,052 | Google's third-generation TimesFM foundation model for time-series forecasting, now in a PyTorch-native release. Its strong download count reflects growing interest in pretrained forecasting models as an alternative to task-specific training. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,581 | 253,331,994 | The most downloaded model in this entire list by a wide margin, a compact sentence-embedding model used across countless RAG and semantic search pipelines. Its 253M+ downloads underscore its status as the de facto default embedding backbone. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 268 | 12,388 | Meta's Massively Multilingual Speech pretraining checkpoint based on wav2vec2, covering hundreds of languages. It remains a foundational base for building speech recognition systems in low-resource languages. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 148 | 1,449 | A 7B streaming automatic speech recognition model from Microsoft's VibeVoice line. Its streaming-first design targets real-time transcription use cases distinct from batch ASR models. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,214 | 20,702,763 | OpenAI's classic CLIP model remains a heavily downloaded zero-shot image classification backbone. Its continued relevance shows how foundational vision-language embedding models still anchor many multimodal pipelines. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 608 | 479,597 | A GGUF quantization of Qwen3.8-27B using GSQ/RCO mixed-precision techniques from the ISTA-DASLab research group. Its near half-million downloads show strong demand for research-grade quantization methods applied to frontier open models. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 323 | 348,753 | An elaborately merged and uncensored GGUF fine-tune of Qwen3.8-27B combining multiple experimental fusion techniques. Its high download count despite a niche audience illustrates the appetite for aggressively customized community merges. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,666 | 10,675,683 | Unsloth's official GGUF quantization of Qwen3.8-27B, the most downloaded fine-tune/quant in this list at over 10.6M downloads. It's become the de facto standard for running Qwen3.8-27B locally via llama.cpp-based tools. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 238 | 0 | A community fine-tune of MiniMax-H3 targeting text-to-video generation, published via Diffusers/safetensors. Its zero download count alongside real likes suggests a very fresh release still gaining initial visibility. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 288 | 19,433 | An FP8-quantized, abliterated fine-tune of GLM-5.3 marketed for cybersecurity use cases with refusal behavior removed. Its rapid appearance right after the GLM-5.3 base release highlights the speed of dual-use community fine-tuning. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 832 | 935,568 | Unsloth's GGUF quantization of the newly released Qwen3.8-Flash-Next model. Nearly a million downloads within days shows how quickly the quantization ecosystem now follows frontier model drops. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 160 | 58,060 | A community video-generation fine-tune built on MiniMax-H3, supporting text-to-video, image-to-video, and video-to-video. Its 58K downloads reflect steady grassroots interest in customized video generation checkpoints. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,008 | 1,715,824 | An uncensored, multi-token-prediction GGUF fine-tune of Qwen3.8-27B with over 1.7M downloads. Its popularity underscores continued demand for unrestricted local chat/vision models despite official safety tuning. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 146 | 113,295 | A llama.cpp-compatible GGUF merge blending Qwen3.8-27B and Flash-Next lineage for image-text-to-text vision tasks. Its naming and tags point to an experimental cross-model merge from the community. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 147 | 26,302 | NVIDIA's own NVFP4 quantization of Qwen3.8-Flash-Next using its Model Optimizer toolkit. It represents official hardware-vendor backing for low-precision inference of the newest Qwen release. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 802 | 299,670 | Another abliterated, uncensored GGUF quantization of Qwen3.8-27B. Its strong likes-to-download ratio adds to the cluster of uncensored Qwen3.8 variants competing for the same audience. |

## Ecosystem Signal

Qwen3.8 (27B and Flash-Next) is the clear center of gravity this week, anchoring both official releases and an unusually dense cluster of GGUF quantizations and uncensored fine-tunes — a pattern that shows the open-weight community now turns around derivative artifacts within days of a frontier drop. Unsloth continues to function as the de facto quantization pipeline of record, topping download counts across multiple base models. MiniMax-H3 and GLM-5.3 show the same dynamic emerging for video generation and Chinese-lab chat models respectively, including a striking same-week abliterated "cybersecurity" fine-tune of GLM-5.3 — a reminder that safety tuning is routinely stripped by downstream actors almost immediately. Meanwhile, legacy encoders (BERT, DistilBERT, MiniLM, CLIP, GPT-2) continue to dwarf everything else in raw downloads, a sign that production infrastructure still leans heavily on stable, years-old open-weight baselines even as headline attention shifts to newer generative models.

## Worth Exploring

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — the freshest architecture in the list (qwen4_exp) and already the base for both official NVFP4 and community GGUF quantizations; worth tracking as a bellwether for Qwen's next-gen direction.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — near-5M downloads and multiple community fine-tunes make it the most active open video-generation model right now, useful for evaluating current open-weight video quality against closed alternatives.
3. **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — a rare non-LLM, non-diffusion entry; a strong pick for teams evaluating pretrained forecasting foundation models instead of training bespoke time-series models.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Hugging Face Trending Models Digest 2026-09-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-09 12:07 UTC

---

# Hugging Face Trending Models Digest — 2026-09-09

## Today's Highlights

The week is dominated by **Qwen/Qwen3.8-27B**, whose 14,460 likes and 6.7M downloads dwarf everything else on the board and have spawned an entire derivative ecosystem — five of today's top-30 entries are GGUF/quantized/fine-tuned variants of it. Video generation is having a strong moment too, led by **MiniMaxAI/MiniMax-H3** (image-text-to-video, 5M downloads) and **Lightricks/LTX-2.5**, both already attracting community fine-tunes. Zhipu's **GLM-5.3** family (base + Flash) and DeepSeek's **DeepSeek-V4-Flash-Vision-Exp** show the Chinese open-weight labs continuing to ship multimodal frontier models at a rapid clip. Meanwhile, veteran utility models — **sentence-transformers/all-MiniLM-L6-v2** (253M downloads) and **BERT/DistilBERT** — remain the quiet backbone of production embedding and classification pipelines. Uncensored/"abliterated" fine-tunes of Qwen3.8-27B and GLM-5.3 continue to proliferate, underscoring persistent demand for unrestricted variants of flagship open models.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 962 | 10,661 | A compact 4B text-generation LLM built on a custom `spark2_5` architecture. Its high like-to-download ratio suggests early community interest ahead of broader adoption. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 805 | 2,879 | A llama-architecture 2B model in OpenBMB's efficiency-focused MiniCPM line. It's trending on the promise of strong performance-per-parameter for edge and on-device deployment. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,809 | 14,770,863 | The original GPT-2 remains a perennial trending model thanks to its role as the default teaching and benchmarking baseline. Nearly 14.8M downloads reflect its continued use in tutorials, research baselines, and low-resource experimentation. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 254 | 3,205 | A 36B mixture-style model (A4B active params) using a new "k2-horizon" architecture. It's gaining early traction as a novel MoE design outside the usual major-lab lineage. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,785 | 474,141 | The base text-generation release in Zhipu's GLM-5.3 series, built on the `glm_moe_dsa` MoE architecture. It anchors a family that already includes a Flash variant and multiple third-party quantizations. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 178 | 2 | A new mini text-generation model built on a `qwen3_5_moe` backbone. Near-zero downloads against real likes suggests this is a fresh release just starting to circulate. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,460 | 6,712,160 | Qwen's flagship 27B image-text-to-text model and by far the most popular release this week, with likes and downloads several multiples above any other entry. It has already become the base model for at least five distinct GGUF/quantized derivatives across the trending list. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,223 | 1,644,796 | A versatile video diffusion model supporting image-to-video, text-to-video, and video-to-video in one pipeline. Its 1.6M downloads reflect strong adoption among creative and generative-video tooling communities. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,035 | 503,263 | A faster, lighter conversational sibling to Qwen3.8-27B using the newer `qwen4_exp` architecture. It's already spawned both NVFP4 (Nvidia) and GGUF (unsloth) quantized derivatives on this same trending list. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 837 | 313,547 | An experimental vision-enabled variant of DeepSeek's V4 Flash line, combining text-generation and image-text-to-text capability. It signals DeepSeek's continued push toward unified multimodal models beyond pure-text V4. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,193 | 826,875 | The faster, image-text-to-text variant of GLM-5.3 on the newer `glm5_next` architecture. Its 826K downloads outpace the base GLM-5.3 model, suggesting demand for lower-latency multimodal inference. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,075 | 4,994,268 | A large image-text-to-video foundation model with nearly 5M downloads, making it one of the most-adopted video generation models this week. It has already attracted at least two community fine-tunes (OpenVDN, WarmBloodAban) listed separately in this digest. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 673 | 444,052 | Google's third-generation TimesFM foundation model for time-series forecasting. It's trending as one of the few dedicated forecasting foundation models gaining broad downloads outside the LLM mainstream. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,687 | 253,331,994 | The de facto standard lightweight sentence-embedding model, with over 253M downloads — the highest of any model in this digest. Its multi-framework support (PyTorch, TF, Rust, ONNX) keeps it the default choice for retrieval and semantic-search pipelines. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,084 | 48,848,285 | The original BERT base model remains a top-downloaded fill-mask backbone at nearly 49M downloads. It continues to serve as a baseline encoder for classification, NER, and embedding fine-tuning tasks. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 336 | 12,171 | A 300M-parameter wav2vec2-based pretraining checkpoint from Meta's Massively Multilingual Speech project. It's used as a foundation for downstream speech recognition fine-tuning across hundreds of languages. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,241 | 7,178,154 | A distilled, lighter version of BERT retaining most of its accuracy at a fraction of the size. Over 7M downloads reflect continued preference for it in latency-sensitive fill-mask and classification deployments. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,300 | 20,778,503 | OpenAI's original CLIP model remains the standard zero-shot image-classification and image-text embedding backbone, with nearly 21M downloads. Its continued relevance underscores how foundational CLIP embeddings still are for multimodal retrieval systems. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 174 | 1,449 | A 7B streaming automatic-speech-recognition model from Microsoft's VibeVoice line. Its low download count relative to likes suggests it's a newly released model just gaining visibility. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 506 | 7,243 | A text-to-speech model from the Breeze family combining text-generation and TTS tagging. It's trending among smaller community-built voice-synthesis tools. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 697 | 479,597 | A GGUF quantization of Qwen3.8-27B using a mixed-precision GSQ/RCO scheme from the research-focused ISTA-DASLab. Nearly 480K downloads show strong demand for research-grade, accuracy-preserving quantization of the flagship Qwen model. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,747 | 10,675,683 | Unsloth's GGUF build of Qwen3.8-27B is the most-downloaded derivative in this digest at over 10.6M downloads — more than any single base model except Qwen3.8-27B itself. It highlights how central Unsloth's quantization pipeline has become for local/CPU inference of frontier open models. |
| [DavidAU/Qwen3.8-27B-TURBO-...-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 391 | 348,753 | An elaborately merged, uncensored GGUF fine-tune of Qwen3.8-27B targeting coding and unrestricted generation use cases. Its long chained name reflects a multi-stage community merge/fine-tune pipeline, and 348K downloads show real uptake despite the niche positioning. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 343 | 19,433 | An FP8-quantized, abliterated fine-tune of GLM-5.3 marketed for cybersecurity use cases with refusal behavior removed. It exemplifies the growing niche of domain-targeted, restriction-free fine-tunes of major open-weight LLMs. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 267 | 0 | A community fine-tune of MiniMaxAI/MiniMax-H3 for text-to-video generation. Zero recorded downloads despite 267 likes indicates a very recent release still awaiting its first pulls. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 198 | 58,060 | Another community fine-tune built on MiniMax-H3, focused on image-to-video and general video-generation tasks. Its 58K downloads show MiniMax-H3 is already attracting a small but active fine-tuning community. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 173 | 26,302 | Nvidia's NVFP4 quantization of Qwen3.8-Flash-Next, built with their Model Optimizer toolkit. It targets efficient inference on Nvidia hardware, reflecting the chipmaker's push to optimize third-party open models for its own accelerators. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 169 | 113,295 | A llama.cpp-compatible GGUF build blending Qwen3.8-27B and Flash-series capabilities for vision tasks. Over 113K downloads show steady community pickup for local multimodal inference. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,043 | 1,715,824 | An uncensored, multi-token-prediction GGUF fine-tune of Qwen3.8-27B with over 1.7M downloads. It's one of the highest-traction unrestricted derivatives in this digest, underscoring sustained demand for uncensored variants of top-tier open models. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 857 | 935,568 | Unsloth's GGUF quantization of the lighter Qwen3.8-Flash-Next model. Nearly 936K downloads reinforce Unsloth's position as the go-to source for quantized builds across the entire Qwen3.8 family. |

## Ecosystem Signal

Qwen continues to consolidate its position as the default open-weight base for the community fine-tuning economy: Qwen3.8-27B and Qwen3.8-Flash-Next together anchor eight of today's 30 trending entries once GGUF, NVFP4, and merge derivatives are counted — more than any other family, including GLM-5.3 and MiniMax-H3. Quantization activity is heavily GGUF-centric (Unsloth, ISTA-DASLab, community merges), though Nvidia's NVFP4 release signals growing hardware-vendor investment in native low-precision formats beyond llama.cpp's ecosystem. Uncensored/abliterated fine-tunes remain a persistent, high-download niche (HauhauCS, DavidAU, dealignai), suggesting demand that base-model providers aren't meeting directly. Video generation is the fastest-growing modality outside pure text, with MiniMax-H3 and LTX-2.5 both drawing millions of downloads and their own early fine-tune communities. Meanwhile, foundational utility models — MiniLM, BERT, CLIP, GPT-2 — continue to dwarf everything else in raw download volume, a reminder that production infrastructure still leans heavily on mature, boring, well-understood models even as the frontier moves fast.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear center of gravity this week; understanding it directly explains the wave of quantized and fine-tuned derivatives dominating the rest of the list.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — a strong open image-text-to-video foundation model worth studying for anyone tracking the video-generation space, already fostering its own fine-tune ecosystem.
3. **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — a rare, well-supported dedicated forecasting foundation model, valuable for teams working outside the standard LLM/vision paradigm.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
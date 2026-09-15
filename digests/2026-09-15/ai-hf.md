# Hugging Face Trending Models Digest 2026-09-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-15 12:25 UTC

---

# Hugging Face Trending Models Digest — 2026-09-15

## Today's Highlights

Qwen continues to dominate the open-weight leaderboard, with **Qwen3.8-27B** pulling in 15,201 likes and 7.7M downloads as the week's most-adopted base model, while a **Qwen3.8-Flash-Next** preview (built on an experimental `qwen4_exp` architecture) signals the next generation is already in testing. The Qwen3.8-27B release has spawned a dense quantization/fine-tune cluster — GGUF builds from **unsloth** and **ISTA-DASLab**, plus a community "Swift" variant — showing how fast the ecosystem retools around a strong open base. Video generation is a clear growth area, led by **MiniMaxAI/MiniMax-H3** (5,310 likes, 4.9M downloads) and **Lightricks/LTX-2.5**, both shipping full image-to-video/text-to-video/video-to-video pipelines. **DeepSeek-V4.1-Flash** remains highly active, notable both for its own adoption and for an "UNCENSORED-FP8" community derivative already circulating. Meanwhile, legacy infrastructure models (BERT, GPT-2, CLIP, DistilBERT) still post massive download counts, underscoring their continued role as dependencies rather than novelty.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,201 | 7,702,543 | A conversational, vision-capable model on the new `qwen3_5` architecture that leads this week's trending list by a wide margin. Its 7.7M downloads make it the de facto reference base for the current round of community quantizations and fine-tunes. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,353 | 1,992,040 | A fast, image-text-to-text conversational model on the `glm5_next` architecture. Nearly 2M downloads suggest strong adoption as a lightweight multimodal chat alternative. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,582 | 325,712 | A vision-language "Flash" variant of DeepSeek's V4.1 line, built for fast inference at scale. It's trending both on its own merits and as the base for a same-week uncensored community fork. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 2,384 | 17,853 | An MLX-native, MoE (qwen3_5_moe) preview model explicitly optimized for edge inference. Its activation-sparse "A3B" design targets on-device deployment rather than datacenter serving. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,422 | 271,754 | A compact 2B llama-architecture text-generation model in OpenBMB's MiniCPM line. High download-to-size ratio reflects continued demand for efficient small models. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,189 | 25,650 | A 4B general-purpose LLM on the custom `spark2_5` architecture. Its emergence alongside larger MoE releases shows continued appetite for mid-size, single-GPU-friendly models. |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,917 | 11,904 | A 4B `qwen3_5_text` model tagged for agentic use cases. Its likes-to-download ratio suggests early community interest ahead of broader production adoption. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 798 | 5,202 | The smaller, image-text-to-text member of Nex-AGI's N2.5 MoE family. It offers a lighter-weight entry point into the same architecture as the larger Nex-N2.5-Pro. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 642 | 30,881 | The flagship model in Nex-AGI's N2.5 MoE lineup, combining text and image understanding. Higher downloads than its "mini" sibling suggest it's the preferred pick despite lower likes. |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 167 | 898 | A new image-text-to-text model from a smaller lab entering the crowded "Flash"-tier chat model space. Early-stage metrics indicate it's just beginning to gain visibility. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,617 | 5,712,837 | Meta's instruction-tuned 8B Llama 3.1 remains a heavily used workhorse over a year after release. Its 5.7M downloads reflect entrenched status as a default fine-tuning base. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,084 | 15,311,786 | The original GPT-2 still ranks among the most-downloaded text-generation models on the Hub. Its 15.3M downloads reflect its role as a teaching and baseline reference model rather than active frontier use. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,310 | 4,906,989 | An image-text-to-video diffusion model supporting text-to-video and image-to-video generation. Its 4.9M downloads make it the most-adopted open video generation model this week. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,926 | 1,580,077 | A single-file diffusion model covering image-to-video, text-to-video, and video-to-video generation. Broad pipeline coverage under one checkpoint is driving strong download volume. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 406 | 147,766 | A community video-generation variant built on the MiniMax-H3 architecture. It illustrates how quickly derivative works cluster around a strong open video base model. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 518 | 6,716 | A 3B music-generation model supporting symbolic planning and agentic editing of compositions. It represents a growing niche of controllable, agent-assisted audio generation. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 234 | 2,390 | A zero-shot text-to-speech model from Tencent supporting voice cloning. Early-stage metrics suggest it's a fresh release still gaining traction in the TTS space. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,981 | 254,208,155 | A compact sentence-embedding model and one of the most heavily used models on the entire Hub. Its 254M downloads underscore its role as the default lightweight embedding backbone for RAG and search systems. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,342 | 46,672,496 | The original BERT base model continues to see massive download volume years after release. It remains a foundational fill-mask and fine-tuning reference across NLP tooling. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,531 | 21,504,830 | A zero-shot image classification model pairing vision and text embeddings. Its 21.5M downloads reflect continued use as a building block in multimodal retrieval pipelines. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,442 | 7,314,069 | A distilled, lighter-weight BERT variant for fill-mask tasks. Strong sustained downloads show ongoing demand for smaller, faster encoder models in production. |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 793 | 865,343 | A pretrained time-series forecasting foundation model. Nearly 865K downloads indicate growing interest in foundation-model approaches to forecasting outside NLP/vision. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 537 | 22,228 | A wav2vec2-based pretraining checkpoint from Meta's Massively Multilingual Speech project. It serves as a base for downstream multilingual speech recognition fine-tuning. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,125 | 9,456,089 | Unsloth's GGUF quantization of Qwen3.8-27B, with 9.5M downloads outpacing even the original base model. It's the go-to format for running Qwen3.8-27B efficiently on local and consumer hardware. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,084 | 884,926 | A research-grade GGUF quantization of Qwen3.8-27B using GSQ/RCO mixed-precision techniques. It's aimed at squeezing better accuracy-per-bit out of aggressive quantization than standard methods. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 701 | 949,394 | A heavily customized, uncensored community fine-tune/merge of Qwen3.8-27B in GGUF format. Nearly 950K downloads show sustained demand for unrestricted, code-focused derivative builds despite the niche framing. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 185 | 5,783 | An FP8-quantized, safety-alignment-stripped derivative of DeepSeek-V4.1-Flash. Its rapid appearance the same week as the base model shows how quickly permissive forks follow major releases. |
| [Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI) | Alissonerdx | 163 | 14,533 | A LoRA adaptation of MiniMax-H3 packaged for ComfyUI workflows. It reflects the video-generation community's fast adoption of new base models into node-based creative tools. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 201 | 1,355 | A "Swift" community variant of Qwen3.8-27B, likely optimized for inference speed. Low early download counts suggest it's a fresh release still finding its audience relative to the official base. |

## Ecosystem Signal

The **Qwen3.5/3.8 family** is the clearest momentum story this week: the base **Qwen3.8-27B** tops the trending list, and it's already spawned a full derivative stack — an official GGUF from unsloth (9.5M downloads, exceeding the base model itself), a research quantization from ISTA-DASLab, a "Swift" speed-oriented fork, and an unconstrained community merge — showing how fast infrastructure and fine-tuning tooling converges around a strong open release. Open-weight models dominate across every category; there's no proprietary entry in this list, reinforcing that leaderboard visibility on the Hub is now almost entirely an open-weight phenomenon. Quantization activity is heavily GGUF-centric and concentrated on a handful of hot bases (Qwen3.8-27B, MiniMax-H3), rather than spread evenly across releases. Notably, two "uncensored" derivatives (DeepSeek-V4.1-Flash-UNCENSORED-FP8, and DavidAU's Heretic-Uncensored Qwen merge) appearing in the same week as their base models highlights a persistent, fast-moving alignment-stripping subculture. Meanwhile, video generation (MiniMax-H3, LTX-2.5) and legacy encoder models (BERT, CLIP, MiniLM) both post outsized download counts — one driven by novelty, the other by embedded infrastructure dependency.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear consensus pick this week; its scale of adoption (15K+ likes, 7.7M downloads) and the depth of its derivative ecosystem make it the most representative current-generation open vision-language model to study.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the leading open video-generation model right now, worth exploring for anyone tracking the fast-moving text/image-to-video space.
3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — the practical entry point for running Qwen3.8-27B locally; its download volume (9.5M) makes it the most battle-tested quantization for consumer hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
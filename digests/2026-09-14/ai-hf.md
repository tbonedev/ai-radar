# Hugging Face Trending Models Digest 2026-09-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-14 13:35 UTC

---

# Hugging Face Trending Models Digest — 2026-09-14

## Today's Highlights

Qwen's `Qwen3.8-27B` dominates the leaderboard with a staggering 15,084 likes and 7.7M downloads, cementing the Qwen3.5 architecture as the de facto base for a wave of downstream forks — including three of today's GGUF/quantization entries. DeepSeek's `DeepSeek-V4.1-Flash` debuts as a multimodal flagship, while MiniMax's H3 video family (base model, ComfyUI LoRA, and a fine-tune) shows strong cross-ecosystem pull in image-to-video generation. The community fine-tuning scene remains highly active around Qwen3.8-27B, spanning everything from Unsloth's efficiency-focused GGUF to more provocative "uncensored"/abliterated variants, signaling continued tension between safety-aligned releases and permissionless derivatives. Classic foundational models — GPT-2, BERT, CLIP, MiniLM — continue to rack up enormous cumulative downloads, underscoring their entrenched role as production infrastructure even amid frontier-model churn.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 1,555 | 8,109 | A Qwen3.5-MoE-based model optimized for edge inference via MLX, targeting on-device deployment of a 35B-parameter (3B active) architecture. It's trending as developers seek MoE models that run efficiently outside the datacenter. |
| [MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,370 | 206,774 | The latest entry in OpenBMB's compact MiniCPM line, built on a Llama-style architecture for strong performance at just 2B parameters. Its high download count reflects continued demand for efficient small models suitable for resource-constrained deployment. |
| [Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 776 | 4,543 | A compact member of Nex AGI's N2.5 family built on Qwen3.5-MoE, offering both text and image-text capability in a lightweight package. Early traction suggests interest in nex-agi's approach to efficient MoE scaling. |
| [Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 630 | 30,489 | The larger sibling to Nex-N2.5-mini, sharing the Qwen3.5-MoE backbone but aimed at higher-capability use cases. Its 30K+ downloads against a newer release date point to fast community adoption. |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,164 | 24,084 | A 4B-parameter general-purpose LLM using the custom "spark2_5" architecture. It's gaining traction as a lightweight alternative for developers wanting non-Qwen-derived small models. |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,071 | 15,182,177 | OpenAI's original GPT-2, still pulling over 15M downloads thanks to broad multi-framework support (PyTorch, TF, JAX, TFLite). Its persistence highlights continued use as a teaching and benchmarking baseline nearly a decade after release. |
| [Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,593 | 5,620,539 | Meta's instruction-tuned 8B Llama 3.1 remains a workhorse for fine-tuning and RAG pipelines, with 5.6M downloads reflecting its role as a stable, well-documented open baseline. It continues to outperform newer, less-battle-tested small models in production reliability. |
| [NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,771 | 9,520 | A Qwen3.5-text-based 4B model tagged for agentic use cases, suggesting tool-use and multi-step reasoning tuning. Its likes-to-download ratio suggests strong community curiosity outpacing production adoption so far. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,358 | 288,414 | DeepSeek's newest flagship multimodal model combines text and image understanding in a single "Flash" fast-inference variant. It's trending as the latest signal of DeepSeek's push into unified vision-language architectures. |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,084 | 7,703,400 | The top-trending model overall, this 27B multimodal (image-text-to-text) release has become the base for a wide derivative ecosystem — quantizations, fine-tunes, and uncensored variants all appearing in this same list. Its 7.7M downloads make it one of the most widely adopted open multimodal models currently available. |
| [YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 443 | 5,186 | A symbolic music-generation model supporting agentic editing workflows for composition. It stands out for combining structured musical planning with generative audio output, a less common combination in the space. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,818 | 1,559,653 | Lightricks' video diffusion model supports image-to-video, text-to-video, video-to-video, and image-text-to-video in one unified single-file checkpoint. Its 1.5M+ downloads reflect strong demand for versatile, deployable video generation tools. |
| [Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 388 | 141,057 | A community fine-tune of MiniMax-H3 focused on video generation across image-to-video and video-to-video tasks. Its 141K downloads show the base MiniMax-H3 ecosystem attracting active third-party experimentation. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,270 | 4,827,156 | MiniMax's flagship image-text-to-video diffusion model, built on the Diffusers framework, has racked up nearly 4.8M downloads. It's anchoring an entire mini-ecosystem of derivative fine-tunes and ComfyUI integrations appearing elsewhere on this list. |
| [AuK](https://huggingface.co/tencent/AuK) | tencent | 209 | 1,928 | Tencent's zero-shot text-to-speech model supports voice cloning without per-speaker fine-tuning. Its early-stage but growing interest reflects continued momentum in low-shot voice synthesis. |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,202 | 645,881 | A fast-inference multimodal variant built on Qwen's newer "qwen4_exp" experimental architecture, hinting at Qwen's next-generation model line. Strong early likes suggest anticipation for what follows Qwen3.5/3.8. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,321 | 1,770,038 | Zhipu's (zai-org) fast multimodal conversational model in the GLM-5.3 line, with 1.77M downloads indicating solid production uptake. It competes directly with Qwen and DeepSeek in the open multimodal chat space. |
| [Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 150 | 736 | A newer entrant multimodal model from Agnes-AI, still early in adoption but tagged for general text-generation and image-text use. Worth watching as a smaller lab's attempt to compete in the crowded multimodal-flash category. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,959 | 252,806,720 | The de facto standard sentence-embedding model, with an extraordinary 252.8M downloads across PyTorch, TF, Rust, and ONNX runtimes. It remains the backbone of countless RAG and semantic-search pipelines despite newer embedding models entering the field. |
| [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 788 | 826,017 | Google's pretrained time-series forecasting foundation model, now in its third major version. Its 826K downloads show growing adoption of foundation-model approaches to forecasting beyond traditional statistical methods. |
| [bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,337 | 46,435,111 | The original BERT encoder continues to see massive usage (46.4M downloads) for fill-mask and embedding tasks across PyTorch, TF, JAX, and Rust. Its longevity demonstrates how encoder-only architectures remain relevant for non-generative NLP tasks. |
| [mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 535 | 19,486 | Meta's Massively Multilingual Speech pretraining checkpoint built on wav2vec2, designed as a base for downstream speech tasks across hundreds of languages. It's a foundational resource for low-resource-language speech research. |
| [clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,528 | 21,349,787 | OpenAI's CLIP model remains a go-to for zero-shot image classification and cross-modal retrieval, with 21.3M downloads. Its continued relevance underscores CLIP embeddings as infrastructure for countless downstream multimodal systems. |
| [distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,439 | 7,294,014 | A distilled, lighter-weight BERT variant retaining strong fill-mask performance at reduced compute cost. Its 7.3M downloads reflect ongoing demand for efficient encoder models in latency-sensitive applications. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,000 | 819,784 | A research-grade GGUF quantization of Qwen3.8-27B using novel GSQ/RCO mixed-precision techniques. Its 819K downloads suggest strong interest in cutting-edge quantization methods beyond standard GGUF conversions. |
| [Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 663 | 875,703 | An elaborately-named community fine-tune of Qwen3.8-27B combining refusal removal ("Heretic"/uncensored) with coding-focused tuning, packaged via Unsloth. Nearly 876K downloads illustrate the sustained demand for uncensored derivative models despite the growing complexity of naming conventions. |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,066 | 10,077,938 | Unsloth's official GGUF quantization of the base Qwen3.8-27B model has exploded to over 10M downloads, making it one of the most-used quantized checkpoints on the platform. It anchors local-inference workflows via llama.cpp and compatible runtimes. |
| [MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 223 | 108,471 | The official GGUF-quantized release of MiniCPM5-2B, enabling efficient CPU/edge inference of OpenBMB's compact model. Its steady download volume reflects consistent demand for quantized small-model deployment. |
| [GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 439 | 30,502 | An FP8-quantized, abliterated fine-tune of GLM-5.3 specialized for cybersecurity use cases with refusal behavior removed. Its niche framing highlights growing demand for domain-specific, safety-unconstrained security-research models. |
| [Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI) | Alissonerdx | 149 | 13,295 | A LoRA adaptation of MiniMax-H3 packaged specifically for ComfyUI workflows. It shows how base video models are quickly being repackaged for popular open-source generation front-ends. |

## Ecosystem Signal

The Qwen3.5/3.8 architecture family is the clear center of gravity this week — it underlies not just Qwen's own flagship releases (`Qwen3.8-27B`, `Qwen3.8-Flash-Next`) but also third-party models from Edge0, nex-agi, and TokenRhythm, plus multiple GGUF/quantization derivatives (Unsloth, ISTA-DASLab, DavidAU). This mirrors the pattern Llama set years ago: once a strong open base model lands, the ecosystem rapidly forks it into edge, uncensored, and quantized variants. Open-weight momentum remains dominant across the board — every trending entry here is openly hosted, with heavy activity in the GGUF quantization space specifically (4 of 30 entries), reflecting continued grassroots demand for local/CPU inference. Video generation is a second hot zone, with MiniMax-H3 and Lightricks' LTX-2.5 both drawing large download counts and spawning LoRA/ComfyUI ecosystems. Notably, classic encoder models (BERT, DistilBERT, CLIP, MiniLM) still dominate raw download volume, a reminder that production infrastructure moves far slower than the trending leaderboard suggests.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear ecosystem anchor this week; worth studying both directly and via its many derivatives to understand what makes a base model this fork-friendly.
2. **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — a genuinely unified video model (text/image/video-to-video in one checkpoint) that's worth testing for teams evaluating open video-generation tooling.
3. **[timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — a less flashy but practically valuable pick for teams working on forecasting, showcasing how foundation-model techniques are maturing outside of text/vision.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
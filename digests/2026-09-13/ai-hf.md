# Hugging Face Trending Models Digest 2026-09-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-13 12:30 UTC

---

# Hugging Face Trending Models Digest — 2026-09-13

## Today's Highlights

The week's chart is dominated by a wave of next-generation LLM releases — DeepSeek's V4.1-Flash, Qwen's 3.8-27B and Flash-Next, and Zhipu's GLM-5.3-Flash — all shipping as multimodal (image-text-to-text) chat models rather than pure text generators, confirming that vision-native release is now the default for flagship open-weight models. Qwen/Qwen3.8-27B leads by a wide margin with 14,908 likes and nearly 7.8M downloads, and its ecosystem effect is visible immediately below it: GGUF quantizations from unsloth and ISTA-DASLab, plus a heavily remixed community fine-tune from DavidAU, all cracked the top rankings within days of the base model's release. Generative media models are also strong this cycle, with Lightricks' LTX-2.5 (image/text/video-to-video) and MiniMax-H3 pulling over 1.5M and 4.8M downloads respectively. Meanwhile, decade-old staples like gpt2, bert-base-uncased, and all-MiniLM-L6-v2 remain fixtures of the trending list purely on download volume, underscoring how much production infrastructure still runs on foundational, non-frontier models.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,102 | 244,457 | A fast, image-text-to-text variant of DeepSeek's V4.1 line built on the new `deepseek_v41` architecture. It's trending as the lightweight entry point into DeepSeek's latest generation, pairing multimodal input with the "Flash" speed tier. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,297 | 150,110 | A compact 2B-parameter Llama-architecture model from OpenBMB's MiniCPM5 series aimed at edge and on-device deployment. Its small footprint combined with strong adoption (150K+ downloads) makes it a go-to base for resource-constrained fine-tuning. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 673 | 3,552 | A 35B mixture-of-experts (3B active) preview built on the Qwen3.5-MoE architecture and shipped in MLX format for edge inference. It's notable for targeting Apple-silicon/edge deployment of a large MoE model rather than server GPUs. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 750 | 3,970 | A smaller Qwen3.5-MoE-based multimodal model from Nex AGI's N2.5 family, supporting both text and image-text-to-text pipelines. It's an early-traction entrant riding the same MoE architecture wave as several other models on this list. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,908 | 7,768,964 | Qwen's flagship 27B image-text-to-text model on the new `qwen3_5` architecture, and by far the most-liked and most-downloaded model this week. Its dominance has already spawned multiple third-party GGUF quantizations and fine-tunes elsewhere on this list. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,148 | 21,336 | A 4B text-generation model on XHToken's new `spark2_5` architecture. It's gaining traction as a small, general-purpose LLM option outside the major-lab ecosystem. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 619 | 30,289 | The larger "Pro" counterpart to Nex-N2.5-mini, sharing the Qwen3.5-MoE base and multimodal text/image-text-to-text capability. Its higher download count relative to likes suggests it's being pulled primarily for evaluation and integration testing. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,154 | 624,390 | A fast-tier model on Qwen's newer `qwen4_exp` experimental architecture, positioned as a preview of Qwen's next architecture generation. With over 624K downloads, it's seeing rapid adoption as an early look at what follows Qwen3.5. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,293 | 1,576,209 | Zhipu's fast-tier GLM-5.3 release on the new `glm5_next` architecture, built for image-text-to-text conversational use. Its 1.5M+ downloads make it one of the most heavily adopted non-Qwen/DeepSeek chat models this cycle. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,021 | 15,158,496 | The original GPT-2 text-generation model, still pulling over 15M downloads thanks to its role as a lightweight baseline and teaching model. It remains a fixture of the trending charts purely on sustained infrastructure and tutorial usage. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 891 | 518,558 | An experimental vision-enabled variant of DeepSeek's V4-Flash line, combining text-generation and image-text-to-text pipelines under the `deepseek_v4` architecture. It sits alongside V4.1-Flash as DeepSeek iterates rapidly on its multimodal Flash tier. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,669 | 1,548,442 | A video generation model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video pipelines in a single-file diffusion format. Its breadth of supported modalities and 1.5M+ downloads make it one of the most versatile video generators trending this week. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 370 | 3,707 | A 3B music-generation model with symbolic planning and agentic-editing capabilities, the successor to the original YuE project. It stands out for treating music generation as an editable, agentic process rather than one-shot synthesis. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 363 | 123,491 | A community video-generation model built on the MiniMax-H3 architecture, supporting text-to-video, image-to-video, and video-to-video. Its rapid uptake (123K+ downloads) shows strong community interest in remixing MiniMax's video backbone. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,216 | 4,819,845 | MiniMax's official H3 video-generation model, supporting image-text-to-video, text-to-video, and image-to-video via Diffusers. With nearly 4.8M downloads it's the clear anchor for the growing MiniMax-H3 ecosystem, including at least one community derivative on this list. |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 210 | 0 | A video-to-video model specialized for character replacement and video editing/animation. Despite zero recorded downloads, it's drawing likes on the strength of Viggle's established character-animation product line. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 231 | 2,594 | A 7B streaming automatic-speech-recognition/transcription model from Microsoft's VibeVoice line. It's notable for targeting real-time streaming ASR rather than batch transcription. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 165 | 1,202 | A zero-shot text-to-speech model with voice-cloning capability from Tencent. It's an early-stage but closely watched entrant in the fast-moving zero-shot TTS space. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 769 | 797,832 | Google's third-generation pretrained time-series forecasting foundation model in PyTorch. Its ~798K downloads reflect growing demand for general-purpose forecasting models outside the LLM/vision mainstream. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,907 | 252,928,721 | The long-standing default sentence-embedding model, available across PyTorch, TF, Rust, and ONNX runtimes. Its 252.9M downloads dwarf every other model on this list, cementing its role as the default embedding backbone for retrieval and semantic search. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,284 | 46,513,338 | The original BERT base-uncased masked-language model, still pulling 46.5M+ downloads. It persists on the trending list as foundational infrastructure for countless fine-tuning and embedding pipelines. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,432 | 7,325,282 | A distilled, lighter-weight version of BERT for fill-mask tasks across PyTorch, TF, and Rust. Its continued 7.3M+ downloads show sustained demand for cheaper BERT-class inference. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 522 | 12,880 | Meta's Massively Multilingual Speech pretraining model at 300M parameters, built on wav2vec2. It remains a key building block for low-resource multilingual speech applications. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,491 | 21,331,361 | OpenAI's original CLIP model for zero-shot image classification, still drawing 21.3M+ downloads. It continues to serve as the reference model for vision-language embedding and retrieval tasks. |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 192 | 4,119 | A 4B model purpose-built for autonomous-driving motion planning, using image-text-to-text input for scene understanding. It marks Qwen's entry into domain-specialized driving models, distinct from its general-purpose chat line. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,979 | 11,005,880 | Unsloth's official GGUF quantization of Qwen3.8-27B, already pulling over 11M downloads. Its rapid uptake shows how quickly the local-inference community converts a flagship release into a runnable local format. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 933 | 769,557 | A GGUF quantization of Qwen3.8-27B using GSQ/RCO mixed-precision quantization techniques from ISTA-DASLab. Its 769K+ downloads highlight demand for research-grade quantization methods beyond standard GGUF conversion. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 600 | 750,591 | An elaborately merged, "heretic" uncensored community fine-tune/quantization of Qwen3.8-27B in GGUF format, built with Unsloth tooling. Its 750K+ downloads show sustained appetite for aggressively customized, refusal-removed community variants of flagship models. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 421 | 30,310 | An FP8-quantized, abliterated fine-tune of GLM-5.3 targeted at cybersecurity use cases with refusal behavior removed. It's a notable example of domain-specific quantized fine-tuning applied almost immediately after a base model's release. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 209 | 99,716 | The official GGUF quantization of MiniCPM5-2B for local/edge inference. Its adoption tracks closely with the base model, reinforcing MiniCPM's edge-deployment focus. |

## Ecosystem Signal

This week's data shows the Qwen3.5 architecture family acting as the dominant gravitational center of the open ecosystem: Qwen3.8-27B's 14,908 likes and 7.8M downloads have already pulled in official (unsloth) and research-grade (ISTA-DASLab) quantizations plus an aggressive community fine-tune (DavidAU), all landing in the same trending window as the base model. DeepSeek, GLM, and Nex AGI are converging on the same pattern — shipping multimodal, image-text-to-text "Flash" or MoE variants as their primary release format rather than text-only models, suggesting vision-native release is becoming the ecosystem norm rather than a later add-on. Open-weight activity clearly dominates this list; no proprietary/API-only entries appear. Quantization and fine-tuning remain the fastest follow-on activity after any major release — GGUF conversions for Qwen3.8-27B and MiniCPM5-2B appeared alongside their base models, and domain-specific abliterated/FP8 fine-tunes (GLM-5.3-CYBERSECURITY-FP8) show specialization happening within days. Meanwhile, decades-old staples (gpt2, BERT, CLIP, MiniLM) continue to anchor the download charts, a reminder that "trending" reflects both novelty and entrenched production dependency.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear center of gravity this week, with the highest likes and downloads by a wide margin and an already-forming ecosystem of quantizations and fine-tunes around it; the best starting point for understanding where the Qwen3.5 architecture generation is headed.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — worth studying for its unusually broad pipeline support (image-to-video, text-to-video, video-to-video, image-text-to-video) in a single-file diffusion model, making it a good benchmark for current open video-generation capability.
3. **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — a small but conceptually interesting model that frames music generation as an agentic, editable process (symbolic planning + agentic editing) rather than one-shot synthesis, worth a look for anyone tracking where generative audio is heading beyond raw sample generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Hugging Face Trending Models Digest 2026-09-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-30 13:17 UTC

---

# Hugging Face Trending Models Digest, 2026-09-30

## Today's Highlights

Qwen dominates this week's list. Qwen3.8-27B leads with 16,609 likes and about 7M downloads, and Qwen-Image-2.1 and its many derivatives (GGUF, ComfyUI, Turbo LoRA) fill the rest of the multimodal category. Lightricks' LTX-2.5 (5,619 likes) and DeepSeek-V4.1-Flash (3,916 likes) are the other big open-weight releases. Community quantization is very active, especially for Qwen3.8-27B (GSQ-RCO, ternary 2-bit, uncensored merges). A cluster of new "decision" or "calibrated" classifiers (Laya, Julia-1, GLiNER2.5-Decide) is also getting attention.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,609 | 7,038,259 | Multimodal (image-text-to-text) conversational 27B model from the Qwen3.8 line. It has the most likes and downloads on the list, and it is the base for many fine-tunes and quantizations. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,916 | 721,211 | Fast "Flash" variant of DeepSeek's V4.1 family that accepts image and text input. It is trending as the main non-Qwen open-weight LLM release. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,811 | 47,613 | Mixture-of-experts conversational model with 29B total and about 4B active parameters. It draws interest for offering a small inference footprint relative to its size. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 604 | 80,958 | RL-tuned multimodal text-generation model from Xiaomi's MiMo V2.6 line. Its downloads are high relative to its likes, which suggests real usage. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 780 | 8,524 | Text-generation model built on Qwen3.8 (qwen3_5_text architecture). It appears aimed at creative writing. |
| [orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B) | orcarouter | 216 | 2,456 | vLLM-ready 27B derivative of Qwen3.8. It is a small but notable release from a router-focused vendor. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,688 | 70,687 | Official text-to-image and image-editing model in diffusers format. It is the anchor for a large derivative ecosystem. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,619 | 1,602,348 | Open video model covering text-to-video, image-to-video and video-to-video. It has the second-highest likes on the list. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 859 | 5,032,483 | ComfyUI-packaged single-file build of Qwen-Image-2.1. Its 5M downloads show how much of the usage comes through ComfyUI. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 437 | 205,137 | Turbo LoRA that speeds up Qwen-Image-2.1 generation and editing. Companies are already shipping accelerators for it. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 352 | 0 | Design-oriented text-to-image model with custom code. It is new, with no downloads recorded yet. |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 171 | 8,078 | Video-to-video LoRA for character swapping on MiniMax-H3. It is a practical video-editing adapter. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,567 | 26,749 | Streaming automatic speech recognition model. It is trending for its "infinite" long-form streaming design. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,590 | 0 | "System-one" text classifier for calibrated decisions. It has 4,590 likes but no recorded downloads, which suggests hype ahead of real usage. |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 974 | 30,383 | OCR-focused vision-language model built on Qwen2.5-VL. It targets document text extraction. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 550 | 2,392 | 8B contrastive-learning reranker and verifier. It is aimed at RAG and answer-checking pipelines. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 538 | 36,386 | Speaker diarization and voice-activity model in NeMo, with GGUF weights. It is a rare open diarization release from a major vendor. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,148 | 12,139 | 9B multimodal vision-language model focused on spatial reasoning. It has strong likes for its size. |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 274 | 2,103 | 9B vision-language model from Apple, built on the qwen3_5 architecture. It is notable as an Apple open release. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 577 | 12,085 | MiMo V2.6 distilled into a 9B Qwen-architecture vision-language model. It offers a small, deployable version of the larger model. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 248 | 34,664 | GLiNER-family extractor for intent and text classification. Its download count is solid for a lightweight model. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 304 | 2,201 | Multilingual decision-model text classifier. It follows the "decision model" trend alongside Laya. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 320 | 1,132 | Gemma4-based unified image-text model tagged for classification. It is an experimental multimodal classifier. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,496 | 1,232,685 | Uncensored GGUF build of Qwen-Image-2.1 for ComfyUI. It has more than 1.2M downloads. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,289 | 3,676,692 | Ternary (2-bit) GGUF of a 27B model for llama.cpp. It has 3.7M downloads, which shows demand for extreme compression. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,845 | 1,679,903 | Mixed-precision GGUF of Qwen3.8-27B using the GSQ-RCO method from an academic lab. It reaches 1.68M downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,291 | 1,777,756 | Uncensored, coder-tuned Qwen3.8-27B merge with multi-token prediction. It is popular in the community despite its unwieldy name. |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 303 | 302,158 | Unsloth's quantized GGUF of Qwen-Image-2.1. It is a trusted low-VRAM option. |
| [ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF) | ukisai | 162 | 175,005 | Fine-tune of Qwen3.8-27B, quantized with GSQ-RCO. It shows the method spreading beyond its original authors. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 171 | 7,186 | Cybersecurity-oriented, uncensored GGUF derivative of Qwen3.8-27B. It has modest downloads and is a niche release. |

## Ecosystem Signal

The Qwen family is the center of the ecosystem. Qwen3.8-27B has 16.6K likes and 7M downloads, and at least ten other entries are derivatives of it or of Qwen-Image-2.1. Xiaomi MiMo, Apple LensVLM, Hemmingway and OrcaSAQ all build on Qwen3.8 or the qwen3_5 architecture. That makes Qwen the default base for open work, as Llama once was.

Open weights dominate this list, with DeepSeek-V4.1-Flash and LTX-2.5 as the main non-Qwen flagships. Quantization is very active. GSQ-RCO mixed-precision GGUFs, ternary 2-bit builds and Unsloth's image-model GGUFs all draw large download counts. Image-model quantization for ComfyUI is now as active as LLM quantization. Uncensored merges also draw many downloads. Finally, small "decision" classifiers (Laya, Julia-1, GLiNER2.5-Decide) are a new cluster. Laya's 4,590 likes with zero downloads should be treated with caution.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: This is the base for most of the list's derivatives. Study it to understand where the open ecosystem is heading, and use it as the baseline to compare quantizations against.
2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**: Compare this mixed-precision method with ternary builds like Ternary-Bonsai to see how far a 27B model can be compressed for local use.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: An open video model that handles text-to-video, image-to-video and video-to-video. It is worth trying for local video workflows, together with community LoRAs such as the character-swap adapter.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
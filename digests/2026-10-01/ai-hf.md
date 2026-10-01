# Hugging Face Trending Models Digest 2026-10-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-01 14:07 UTC

---

# Hugging Face Trending Models Digest: 2026-10-01

## Today's Highlights

The Qwen family dominates this week's trending list. Qwen3.8-27B leads at 16,690 likes and 6.9M downloads, and Qwen-Image-2.1 has spawned a wide set of derivatives: GGUF builds, LoRAs, ComfyUI packages and a turbo variant. Lightricks' LTX-2.5 is the top video model at 5,791 likes. DeepSeek-V4.1-Flash is the most notable new multimodal release from outside the Qwen ecosystem. Community quantization is very active, especially GSQ-RCO GGUF builds from ISTA-DASLab and ternary 2-bit weights from prism-ml.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,690 | 6,950,834 | A 27B multimodal (image-text-to-text) conversational model from the Qwen3.8 line. It has the most likes on the list and is the base for many quantizations and fine-tunes. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,956 | 748,482 | A "Flash" release in the DeepSeek V4.1 series with image-text-to-text support. It is trending as the strongest non-Qwen open model of the week. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,822 | 48,705 | A 29B mixture-of-experts conversational model with about 4B active parameters. It has drawn strong interest despite modest downloads. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 586 | 12,758 | A 9B multimodal model distilled from MiMo-V2.6 onto a Qwen base. It offers a compact option for local use. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 795 | 8,996 | A text-generation model built on the Qwen3.8 text architecture. It is trending as a community derivative of the new Qwen base. |
| [orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B) | orcarouter | 236 | 2,728 | A vLLM-ready 27B text-generation model based on Qwen3.8. It is an early-stage derivative with a small but growing following. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,791 | 1,588,619 | An open video model covering image-to-video, text-to-video and video-to-video. It leads the video category in both likes and downloads. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,745 | 76,938 | The official Qwen image generation and editing model, released in diffusers format. It is the hub of a large derivative ecosystem. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 876 | 5,376,977 | A ComfyUI-ready single-file packaging of Qwen-Image-2.1. Its 5.4M downloads show most users reach the model through ComfyUI. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 480 | 217,638 | A turbo LoRA/GGUF variant of Qwen-Image-2.1 aimed at faster inference. Its 217K downloads show demand for low-step generation. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 360 | 0 | A design-oriented text-to-image model with custom code. It is new, which likely explains the zero download count. |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 204 | 10,031 | A LoRA for character swapping in video, built on MiniMax-H3. It shows continued demand for video-editing adapters. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,065 | 173,323 | A Qwen-Image-2.1 edit LoRA for face swapping. It is popular, though it raises misuse concerns. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 2,005 | 27,228 | A streaming automatic speech recognition model for long-form audio. Its likes are high relative to its downloads. |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 1,135 | 31,584 | A Qwen2.5-VL-based OCR model. It is trending as a dedicated document-reading specialist. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,750 | 0 | A text-classification model tagged for calibrated decision-making. It has 4,750 likes with zero recorded downloads, which suggests hype or a gated release. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 583 | 2,720 | An 8B contrastive-learning model for verification and reranking. It targets reward-model and RAG-reranking use cases. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 578 | 40,936 | NVIDIA's NeMo speaker diarization and voice-activity model, also available as GGUF. It fills a gap in open speaker-attribution tooling. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 327 | 2,556 | A multilingual decision-model classifier. It is part of a cluster of "decision" models trending this week. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 262 | 38,386 | A GLiNER2.5 extractor for text and intent classification. It is lightweight and suited to production routing. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 353 | 305 | A research image classifier linked to a recent arXiv paper. Its low downloads suggest academic interest only. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 333 | 1,402 | A Gemma4-based unified model used for text classification. It is a small experimental release. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,771 | 6,271,224 | Unsloth's GGUF quantization of Qwen3.8-27B. With 6.3M downloads it is the default local-inference build. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,315 | 3,766,691 | A 2-bit ternary 27B model for llama.cpp. It stands out for extreme compression with strong adoption. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,633 | 1,303,476 | An uncensored GGUF build of Qwen-Image-2.1 for ComfyUI. It has 1.3M downloads, which shows strong demand for unrestricted image models. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,864 | 1,679,425 | A mixed-precision GGUF of Qwen3.8-27B made with the GSQ-RCO method. It has 1.7M downloads. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 413 | 952,084 | A GSQ-RCO quantization of Qwen3.8-Flash-Next. It has nearly 1M downloads. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 161 | 148,142 | A coder-oriented variant that adds pruning on top of GSQ-RCO quantization. It targets local coding assistants. |
| [ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF) | ukisai | 177 | 231,149 | A community fine-tune of Qwen3.8-27B in GSQ-RCO GGUF form. It shows the quantization method spreading through the community. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 216 | 8,412 | An uncensored, cybersecurity-focused GGUF fine-tune of Qwen3.8. It is niche and dual-use. |

## Ecosystem Signal

Qwen is the dominant ecosystem. About 20 of the 30 entries are Qwen3.8 or Qwen-Image-2.1 models or derivatives, and the list covers base models, GGUF quantizations, LoRAs, ComfyUI packages and fine-tunes. Open weights lead in every category. DeepSeek-V4.1-Flash and Xiaomi's MiMo are the main non-Qwen LLM entries.

Quantization is the most active area. GSQ-RCO (ISTA-DASLab, ukisai) appears in five entries, and ternary 2-bit weights (prism-ml) have reached 3.8M downloads. Together with Unsloth's GGUF builds, this points to strong demand for running 27B-class models locally. Image and video work centers on ComfyUI, where Comfy-Org's packaging has 5.4M downloads. Several entries show likes far above downloads, or zero downloads (laya, Ming-Image). Those like counts may be unreliable, so treat them with caution.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: the reference model for this wave. Study it as the base for the ecosystem's quantizations and fine-tunes.
2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**: compare its mixed-precision GSQ-RCO approach against Unsloth's standard GGUF for quality and speed.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: an open video model with image, text and video inputs, worth trying if you work on generative video.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
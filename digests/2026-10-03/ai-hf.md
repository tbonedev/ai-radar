# Hugging Face Trending Models Digest 2026-10-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-03 12:11 UTC

---

# Hugging Face Trending Models Digest, 2026-10-03

## 1. Today's Highlights

**Qwen3.8-27B** leads the list by a wide margin with 16,835 likes and 6,895,117 downloads. Its ecosystem is also the main story. Qwen-Image-2.1 has spawned an official release, a ComfyUI repackage, a turbo LoRA and a face-swap LoRA. Qwen3.8 itself has more than half a dozen GGUF and quantized derivatives. **Lightricks/LTX-2.5** (6,046 likes) and **deepseek-ai/DeepSeek-V4.1-Flash** (4,027 likes) are the other major first-party releases. Small decision and classification models such as laya and Julia-1 are also drawing attention. Note that laya's 5,028 likes sit alongside 0 downloads, which is an unusual pattern.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,835 | 6,895,117 | A 27B multimodal (image-text-to-text) conversational model built on the qwen3_5 architecture. It is the most-liked and most-downloaded model today, and it is the base for most of the quantization activity. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,027 | 787,841 | The Flash variant of DeepSeek's V4.1 line, with image-text-to-text support. It has strong traction at under 1M downloads. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,662 | 12,483 | A 9B vision-language model that targets spatial reasoning. It has many likes relative to its downloads. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 894 | 2,620 | Cloudflare's image-text-to-text model, built on qwen3_5. It is notable as an infrastructure vendor publishing its own model. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 310 | 4,310 | A lighter "flash" sibling of clef on the same qwen3_5 base. It is aimed at lower-latency use. |
| [NaiveAI/Naive-N0.5-Flash](https://huggingface.co/NaiveAI/Naive-N0.5-Flash) | NaiveAI | 136 | 1,497 | A mixture-of-experts model tagged for code and long context. It is a small newcomer with modest traction. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,046 | 1,629,984 | An open video generation model covering image-to-video, text-to-video and video-to-video. It is the top-liked generation model today. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,859 | 85,895 | Qwen's text-to-image and image-editing model, released in diffusers format. It anchors a large derivative ecosystem. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 920 | 5,999,374 | A ComfyUI-ready single-file packaging of Qwen-Image-2.1. Its downloads are about 70 times those of the original repo, which shows how users actually run the model. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 548 | 257,298 | A turbo LoRA for fast Qwen-Image-2.1 generation, also shipped as GGUF. It brings few-step inference to the new base. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,122 | 193,270 | A face-swap LoRA for Qwen-Image 2.1 and Qwen-Image-Edit. It is trending because it adapts quickly to the new base model. |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 251 | 13,258 | A video character-swap LoRA for MiniMax-H3. It extends video editing to a new base model. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 145 | 4,924 | A MiniMax-H3 LoRA for 360° orbit camera motion with first-last-frame conditioning. It is a niche camera-control tool. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 629 | 48,784 | NVIDIA's speaker diarization / voice-activity model, available in NeMo, safetensors and GGUF formats. It adds a vendor-backed option to the open audio stack. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 2,405 | 36,995 | A streaming speech recognition model. Its like count is high for its downloads. |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 156 | 2,361 | An MLX speech-to-text model for Apple silicon, built on a Parakeet TDT variant. It targets on-device transcription. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,028 | 0 | A text-classification model tagged for "system-one" calibrated decisions. It has 5,028 likes but 0 downloads, so treat the signal with caution. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 377 | 3,251 | A multilingual decision model for text classification. It belongs to the same decision-model trend as laya. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 333 | 50,402 | A GLiNER2-based extractor for intent and text classification. It has the best download-to-like ratio of the decision-style models. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 677 | 3,190 | An 8B contrastive model for verification and reranking. It targets verifier and reranker workloads. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 378 | 1,338 | A computer-vision image classifier linked to a recent arXiv paper. It is an early research release. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,364 | 3,969,867 | A ternary, 2-bit GGUF build for llama.cpp. It has nearly 4M downloads, which shows strong demand for extreme compression. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,919 | 1,674,292 | A mixed-precision GGUF quantization of Qwen3.8-27B using GSQ and RCO. It is the most popular of ISTA-DASLab's four releases on the list. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 479 | 1,474,719 | A GSQ-RCO mixed-precision quant of the Flash-Next variant. It has high downloads relative to its likes. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 214 | 303,256 | A coder-oriented GSQ-RCO quantization with pruning. It extends the same method to coding workloads. |
| [ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF) | ukisai | 212 | 335,684 | A community fine-tune of Qwen3.8-27B, quantized with GSQ-RCO for llama.cpp. It shows the method being reused outside ISTA-DASLab. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,872 | 1,455,921 | An uncensored GGUF build of Qwen-Image-2.1 for ComfyUI. It has high downloads, so demand for unrestricted image generation is clear. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,377 | 2,116,212 | An uncensored, coder-oriented fine-tune of Qwen3.8-27B in GGUF format. It has more than 2M downloads. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 285 | 11,585 | An uncensored, cyber-security-focused 27B GGUF built on Qwen3.8. It is a niche domain fine-tune. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 143 | 520 | A 3.0 bpw EXL3 quantization of an uncensored GLM-5.3 MoE. It is one of the few non-Qwen LLM derivatives on the list. |

## 3. Ecosystem Signal

**Qwen dominates.** Qwen3.8-27B and Qwen-Image-2.1 together anchor over a dozen of the 30 entries, including quantizations, LoRAs and fine-tunes. Qwen is now the default base for community work in both text and image. Comfy-Org's repackage shows that downstream distribution can matter more than the original repo: it has about 6M downloads against 85,895 for the source.

**Open weights lead.** Alongside Qwen, DeepSeek-V4.1-Flash, LTX-2.5, NVIDIA's Nemotron-3-Diarization and Cloudflare's clef are open releases. GLM-5.3 and MiniMax-H3 also appear as bases for derivatives.

**Quantization is the most active layer.** ISTA-DASLab's GSQ-RCO method appears in four of the entries, and ukisai reuses it. Prism-ml's ternary 2-bit build reached nearly 4M downloads. Uncensored fine-tunes are also prominent, such as DavidAU's and orcarouter's.

**Caveat:** laya's 5,028 likes with 0 downloads looks anomalous and may reflect inflated engagement.

## 4. Worth Exploring

1. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**: This is a good place to study mixed-precision quantization applied to a strong multimodal base. The method is already being reused by others.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: It is the leading open video model today and supports several modes. It also has solid downloads (1,629,984) to back the likes.
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**: A 2-bit ternary 27B model with almost 4M downloads. It is worth testing for local deployment and for quality at extreme compression.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
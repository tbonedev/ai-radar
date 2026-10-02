# Hugging Face Trending Models Digest 2026-10-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-02 13:30 UTC

---

# Hugging Face Trending Models Digest, 2026-10-02

## Today's Highlights

The Qwen family dominates this week's list. Qwen3.8-27B leads with 16,753 likes and 6,934,867 downloads, and about a third of the entries are quantizations or fine-tunes built on it or on Qwen-Image-2.1. Lightricks' LTX-2.5 (5,905 likes) and DeepSeek-V4.1-Flash (4,003 likes) are the other major first-party releases. Mixed-precision GGUF quantization (GSQ/RCO) and ternary 2-bit weights are drawing heavy downloads. The 4,911-like, 0-download `convaiinnovations/laya` entry is an anomaly and should be treated with caution.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,753 | 6,934,867 | A 27B image-text-to-text conversational model on the `qwen3_5` architecture. It is the most-liked model this week and the base for many of the quantizations below. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,003 | 767,871 | A "Flash" variant of DeepSeek's V4.1 line, tagged for both text-generation and image-text-to-text. It draws strong attention for a first-party open release. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,583 | 12,395 | A 9B multimodal vision-language model tagged for spatial reasoning. Its likes are high relative to its downloads, so interest is currently exploratory. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,826 | 49,408 | A conversational text-generation model whose name suggests a 29B-total, ~4B-active MoE design. It runs on a custom `xing4_0` architecture. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 581 | 824 | Cloudflare's image-text-to-text model built on `qwen3_5`. It is notable as an infrastructure vendor publishing its own model. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 195 | 1,303 | The smaller "flash" sibling of clef, also on `qwen3_5`. It signals a tiered model line from Cloudflare. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,905 | 1,584,129 | An open video model covering image-to-video, text-to-video and video-to-video. It has the highest likes among the generation models. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,813 | 81,738 | Qwen's text-to-image and image-editing model, released as diffusers weights. It anchors a large ecosystem of derivatives. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 894 | 5,674,460 | A ComfyUI-ready single-file packaging of Qwen-Image-2.1. Its downloads far exceed the original repo's, which shows where users actually run the model. |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 1,249 | 32,675 | An OCR-focused vision-language model built on `qwen2_5_vl`. OCR remains a popular practical use of VLMs. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 516 | 240,660 | A turbo LoRA for Qwen-Image-2.1, shipped as both diffusers and GGUF. It is aimed at faster generation. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 614 | 44,350 | An NVIDIA NeMo speaker diarization and voice-activity model, also published as GGUF. It brings Nemotron-branded audio tooling to local runtimes. |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 144 | 2,126 | An MLX-format ASR model for Apple silicon, built on a Parakeet TDT architecture. It targets on-device speech-to-text on Macs. |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 229 | 11,563 | A video-to-video LoRA for character swapping on MiniMax-H3. It shows growing LoRA-based video editing. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,083 | 187,625 | A face-swap LoRA for Qwen-Image-2.1 and its edit variants. It has solid adoption among image-editing users. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,911 | 0 | A text-classification model tagged "calibrated-decisions". Its 0 downloads against 4,911 likes is anomalous and suggests artificial or promotional activity. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 634 | 2,951 | An 8B text-ranking model tagged as a verifier and reranker. It is trained with a contrastive objective. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 352 | 2,909 | A multilingual decision model for text classification. It is part of a small cluster of "decision" models this week. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 313 | 43,826 | A GLiNER2-based extractor for intent and text classification. Its downloads are healthy for a lightweight task model. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 363 | 1,279 | A PyTorch image classifier that cites an arXiv paper. It is an academic release with modest uptake so far. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,804 | 6,237,305 | Unsloth's GGUF quantization of Qwen3.8-27B. It is the go-to local-inference build, with downloads close to the base model's. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,760 | 1,376,248 | An uncensored GGUF of Qwen-Image-2.1 for ComfyUI. It has strong download volume for a community fine-tune. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,344 | 3,869,715 | A 27B ternary (2-bit) GGUF for llama.cpp. It has very high downloads for such an aggressive compression scheme. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,891 | 1,678,428 | A mixed-precision GGUF of Qwen3.8-27B using the GSQ/RCO method. It is the flagship of a three-model quantization series. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 444 | 1,141,018 | A GSQ/RCO mixed-precision quantization of Qwen3.8-Flash-Next. It has over a million downloads. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 190 | 261,136 | A coder variant of the Flash-Next quantization, tagged with pruning as well. It targets code-focused local use. |
| [ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF) | ukisai | 197 | 284,203 | A third-party fine-tune of Qwen3.8-27B quantized with GSQ/RCO. It shows the method spreading beyond its originators. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,348 | 2,035,504 | An uncensored, coder-oriented Qwen3.8-27B fine-tune in GGUF. It is typical of the community's heavily stacked merges. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 247 | 9,533 | An uncensored, cyber-themed 27B GGUF derived from Qwen3.8. It is a niche release with limited uptake. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 815 | 9,566 | A text-generation model on `qwen3_5_text`, likely aimed at creative writing given its name. Its likes are high relative to its downloads. |

## Ecosystem Signal

Qwen is the clear center of gravity. Qwen3.8-27B and Qwen-Image-2.1 each have a first-party release plus a cluster of derivatives. These include Unsloth, ISTA-DASLab and ukisai quantizations, Comfy-Org packaging, and LoRAs from Viggle and Alissonerdx. Other releases build on the `qwen3_5` architecture, including Cloudflare's clef models.

Open-weight releases dominate the list. DeepSeek-V4.1-Flash, LTX-2.5 and Nemotron-3-Diarization show major labs still shipping weights. Proprietary models don't appear on a hub-based ranking.

Quantization is the busiest area. GSQ/RCO mixed-precision GGUFs and a 2-bit ternary build (Ternary-Bonsai-2-27B, 3.87M downloads) show demand for running 27B-class models on consumer hardware. Uncensored fine-tunes also draw large volumes. Likes-to-downloads ratios need care: the laya anomaly suggests some engagement may be inflated.

## Worth Exploring

1. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**: A good place to compare GSQ/RCO mixed-precision against standard GGUF quants, with 1.68M downloads of real-world usage behind it.
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**: A 2-bit ternary 27B model is worth studying for the quality-versus-memory tradeoff. It could change what fits on a single consumer GPU.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: An open video model that handles image-to-video, text-to-video and video-to-video. It is the strongest option here for anyone building local video pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
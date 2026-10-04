# Hugging Face Trending Models Digest 2026-10-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-04 13:00 UTC

---

# Hugging Face Trending Models Digest, 2026-10-04

## Today's Highlights

Qwen dominates the week. Qwen3.8-27B leads the list with 16,906 likes and 6.8M downloads, and Qwen3.8-Flash-Next and Qwen-Image-2.1 also rank. The Qwen3.8 base has spawned a large set of community quantizations, uncensored variants and fine-tunes, and Qwen-Image-2.1 is driving LoRA and GGUF derivatives. Lightricks' LTX-2.5 (6,203 likes, 1.6M downloads) leads open video generation. DeepSeek-V4.1-Flash also drew strong attention (4,073 likes). Several new "decision model" and calibrated-classification releases, such as laya and Julia-1, are drawing attention, though some of their like counts look high relative to their downloads.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,906 | 6,821,761 | Qwen's 27B multimodal-capable conversational model, built on the qwen3_5 architecture. It is the most-liked and most-downloaded model on the list, which makes it the base for many derivatives. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,876 | 1,480,842 | A faster "Flash" variant on the experimental qwen4_exp architecture. It is trending as an early look at Qwen's next-generation design. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,073 | 798,422 | DeepSeek's efficiency-oriented V4.1 release with image-text-to-text support. It draws attention as the main open-weight rival to Qwen's flagship models. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 323 | 1,135 | A reasoning-focused mixture-of-experts model that is vLLM-ready. Likes are modest and downloads very low, so it is likely early interest in a European lab's release. |
| [NaiveAI/Naive-N0.5-Flash](https://huggingface.co/NaiveAI/Naive-N0.5-Flash) | NaiveAI | 152 | 1,920 | A long-context MoE model aimed at code and research use. It is a small but notable newcomer. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,203 | 1,626,951 | An open video-generation model supporting image-to-video, text-to-video and video-to-video. It has the most likes of any generation model this week. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,920 | 90,003 | Qwen's image generation and editing model, available through diffusers. Its main draw is the ecosystem of LoRAs and quantizations built on it. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,824 | 12,638 | A 9B vision-language model emphasizing spatial reasoning. Its likes are high relative to its downloads. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,085 | 4,214 | Cloudflare's image-text-to-text model built on the qwen3_5 architecture. It is notable as a model release from a major infrastructure provider. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 394 | 6,372 | A smaller, faster variant of clef. It extends Cloudflare's presence on the Hub. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 659 | 53,014 | A speaker diarization and voice-activity model from NVIDIA with GGUF and NeMo formats. It is a practical speech-pipeline component. |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 180 | 2,635 | An MLX speech recognition model for Apple silicon, built on a Parakeet TDT variant. It is trending among on-device speech users. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 393 | 1,516 | A PyTorch image classification model linked to an arXiv paper. Interest is mostly research-driven. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 574 | 272,896 | A turbo LoRA/GGUF release for fast Qwen-Image-2.1 generation. Its 272,896 downloads show strong demand for faster inference. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,162 | 203,086 | A face-swap LoRA for Qwen-Image-Edit. It has solid uptake in the image-editing community. |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 282 | 15,800 | A character-swap LoRA for video editing on MiniMax-H3. It shows the LoRA ecosystem forming around that model. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 168 | 5,742 | A first/last-frame LoRA for 360° orbit camera moves on MiniMax-H3. It targets a specific camera-control use case. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,115 | 3,752 | A text-classification model for calibrated decision-making. It has very high likes against only 3,752 downloads, so the engagement is unusual. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 699 | 3,445 | An 8B contrastive-learning verifier and reranker. It is interesting for verification and ranking pipelines. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 405 | 3,657 | A multilingual decision model for text classification. It joins a small cluster of decision-oriented releases. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 357 | 53,625 | A GLiNER-based extractor for classification and intent detection. Its 53,625 downloads suggest real production use. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,403 | 4,045,810 | A 2-bit ternary GGUF of a 27B model for llama.cpp. Its 4M+ downloads show strong appetite for extreme compression. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,952 | 1,636,747 | A mixed-precision GGUF of Qwen3.8-27B made with GSQ and RCO quantization. It is the leading quality-focused quantization of the base model. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 532 | 1,886,975 | A GSQ-RCO mixed-precision GGUF of Qwen3.8-Flash-Next. It has high downloads relative to its likes. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 244 | 351,230 | A coding-focused GSQ-RCO GGUF that also uses pruning. It targets local code assistants. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,006 | 1,553,744 | An uncensored GGUF of Qwen-Image-2.1 for ComfyUI. It has over 1.5M downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,407 | 2,164,143 | A heavily merged, uncensored coder fine-tune of Qwen3.8-27B in GGUF. It has 2.1M+ downloads. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 337 | 14,195 | A cyber-focused uncensored GGUF on Qwen3.8. It is niche, and its use cases deserve care. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 227 | 14,361 | A GGUF of a 29B MoE with 4B active parameters. It suits local inference on modest hardware. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 197 | 946 | A 3.0 bpw EXL3 quantization of an uncensored GLM-5.3 MoE. It serves ExLlamaV3 users. |

## Ecosystem Signal

The Qwen family has the most momentum, and the pattern is visible across the whole list. Qwen3.8-27B, Qwen3.8-Flash-Next and Qwen-Image-2.1 sit in the top ranks. At least eight other entries are built on Qwen bases, including the ISTA-DASLab quantizations, DavidAU's fine-tune, orcarouter's cyber model and the Viggle and face-swap LoRAs. Cloudflare's clef models also use the qwen3_5 architecture, so Qwen has become a common base even for infrastructure companies.

Open weights dominate. No proprietary models appear, and DeepSeek, NVIDIA and Aleph-Alpha add to the open side.

Quantization is the most active area. GSQ-RCO mixed precision, 2-bit ternary (Bonsai, 4M+ downloads), EXL3 and MLX builds all appear, and uncensored GGUFs draw very high downloads. Video LoRAs for MiniMax-H3 show a similar ecosystem forming around newer generation models. Treat the decision-model entries with some caution: laya's 5,115 likes against 3,752 downloads is an unusual ratio.

## Worth Exploring

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**: its qwen4_exp architecture gives an early view of Qwen's next generation, and it is worth benchmarking against the 27B model.
2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**: a strong case study in mixed-precision quantization, with 1.6M downloads, for anyone running local inference.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: the leading open video model, with image-to-video, text-to-video and video-to-video support in one checkpoint.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Hugging Face Trending Models Digest 2026-10-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-06 13:52 UTC

---

# Hugging Face Trending Models Digest, 2026-10-06

## Today's Highlights

The Qwen3.8 family dominates this week. Qwen3.8-27B leads with 17,077 likes and 6.8M downloads. Qwen3.8-Flash-Next and Qwen-Image-2.1 follow, and a large ecosystem of quantizations, uncensored fine-tunes and LoRAs has grown around them. Lightricks' LTX-2.5 (6,576 likes) leads open video generation. DeepSeek-V4.1-Flash and Cloudflare's new Clef models show that infrastructure companies are now shipping their own models. Several "decision" and "system-one" classifiers (laya, JEV/GEV, Julia-1) are also gaining attention.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,077 | 6,768,060 | A 27B vision-language chat model in the Qwen3.5 architecture family. It is the most-liked model on the list and the base for many derivatives. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,958 | 1,589,145 | A faster multimodal variant with an experimental `qwen4_exp` architecture. It is trending as a preview of the next Qwen generation. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,158 | 1,160,332 | A Flash-tier open-weight model from DeepSeek that accepts image and text input. It has over 1.1M downloads. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,597 | 7,255 | Cloudflare's first flagship vision-language model, built on Qwen3.5. Attention is high (1,597 likes) but downloads are low so far. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 562 | 10,638 | A lighter sibling of Clef aimed at lower-latency use. It shows Cloudflare building a model line, not a single release. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,880 | 12,889 | A 9B multimodal model focused on spatial reasoning. It has strong likes for its size. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 682 | 4,138 | A mixture-of-experts reasoning model that is ready to serve with vLLM. It is a notable European open-weight release. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 425 | 30,585 | A 29B MoE model with about 4B active parameters, released in GGUF form. Its small active size makes it practical for local use. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,576 | 1,679,035 | An open video model covering image-to-video, text-to-video and video-to-video. It is the most-liked video model this week. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,025 | 102,510 | An official text-to-image and image-editing model. It anchors a family of LoRAs and community variants. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 625 | 302,425 | A turbo (fast-inference) LoRA/GGUF build of Qwen-Image-2.1. It has 302K downloads. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,231 | 219,575 | A face-swap LoRA for Qwen-Image-Edit. It is popular, but it carries misuse risk. |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 316 | 20,353 | A LoRA that adds character swapping to MiniMax-H3 video editing. It shows an adapter ecosystem forming around MiniMax-H3. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 223 | 8,745 | A LoRA for 360° orbit camera moves, with first/last-frame conditioning. It is another MiniMax-H3 adapter. |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 241 | 3,339 | A speech recognition model packaged for MLX on Apple silicon. It is aimed at on-device transcription. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 707 | 58,703 | NVIDIA's speaker diarization and voice-activity model, available in NeMo and GGUF formats. It brings the Nemotron brand into audio. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,265 | 20,386 | A "system-one" text classifier built for calibrated decisions. It has very high likes against modest downloads. |
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 883 | 1,525,286 | A 27B vision-language decision/judge model built on Qwen3.5. It has over 1.5M downloads, which suggests pipeline use. |
| [autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide) | autotrust | 631 | 854,574 | A Gemma 4-based decision classifier from the same group as JEV. Its 854K downloads point to heavy automated use. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 446 | 4,160 | A multilingual decision-model classifier. It is part of the trend toward small judge models. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 742 | 3,904 | An 8B contrastive model for verification and reranking. It is trending as a verifier for reasoning outputs. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 427 | 1,749 | A PyTorch image classifier tied to a recent arXiv paper. Its likes outpace its downloads. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,364 | 1,721,760 | An uncensored GGUF of Qwen-Image-2.1 for ComfyUI. It has 1.7M downloads. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,472 | 4,193,836 | A 2-bit ternary GGUF of a 27B model for llama.cpp. It has the second-highest downloads on the list. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 630 | 2,709,781 | A mixed-precision GGUF of Qwen3.8-Flash-Next made with the GSQ/RCO quantization method. It has 2.7M downloads. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 304 | 478,633 | A coder-oriented variant that adds pruning to the GSQ/RCO quantization. It targets code workloads on local hardware. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,476 | 2,125,779 | A heavily merged, uncensored coder fine-tune of Qwen3.8-27B with MTP support. It has 2.1M downloads. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 413 | 18,114 | An uncensored cybersecurity fine-tune of Qwen3.8 in GGUF form. It is niche and carries dual-use concerns. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 253 | 1,660 | A 3.0 bits-per-weight ExLlamaV3 quant of an uncensored GLM-5.3 MoE. It targets GPU-constrained enthusiasts. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 343 | 15,134 | A Gemma 4-based model tuned to make text sound more human. It ships in GGUF and safetensors formats. |

## Ecosystem Signal

Qwen is the clear leader. Qwen3.8-27B, Flash-Next and Image-2.1 sit at the top, and roughly a third of the list builds on them, including quantizations, LoRAs, uncensored merges and Cloudflare's Clef, which is built on the Qwen3.5 architecture. Open weights dominate completely, and DeepSeek, Aleph-Alpha, NVIDIA and Cloudflare all released open models. Quantization is the busiest area. Ternary 2-bit builds (Bonsai), mixed-precision GSQ/RCO and EXL3 at 3 bpw all draw millions of downloads, so local inference of 27B-class models is now routine. Uncensored variants are common and draw heavy traffic, which raises safety and licensing questions. LoRA adapters for video (MiniMax-H3) and image editing (Qwen-Image) are growing too. Finally, small "decision" or judge classifiers (laya, JEV, GEV, Julia-1) are a new niche. Some of their download counts look automated.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: The de facto baseline for open multimodal models at this size. Its derivatives are the most useful reference points for comparison.
2. **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**: Worth studying for its GSQ/RCO mixed-precision method and its 2.7M downloads. Compare it with ternary approaches such as Bonsai.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: The strongest open video generation model on the list. It covers several modes and has the most-liked video model's community behind it.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
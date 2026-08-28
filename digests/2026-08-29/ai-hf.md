# Hugging Face Trending Models Digest 2026-08-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-28 19:12 UTC

---

# Hugging Face Trending Models Digest — 2026-08-29

## Today's Highlights

Qwen's **Qwen3.8** family dominates this week's trending list, with the 27B base model pulling in over 3.4M downloads and spawning a wave of community "uncensored"/abliterated derivatives from at least six different authors. **zai-org's GLM-5.3** and **GLM-5.3-Flash** mark a fresh release cycle for the GLM line, while **moonshotai/Kimi-K3** and **deepseek-ai/DeepSeek-V4-Flash-0731** show China's frontier labs continuing rapid, high-frequency releases. On the generative side, **MiniMaxAI/MiniMax-H3** leads video models with nearly 4.85M downloads, and **Lightricks/LTX-2.5** extends the open video-generation race. The sheer volume of Qwen3.8-27B fine-tunes and quantizations this week signals it has quickly become the community's preferred base model for customization.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,122 | 4,810 | A new lightweight, fast-inference variant in Qwen's experimental `qwen4_exp` architecture family with native vision-language support. Its early-preview status and Qwen's track record are driving strong likes despite still-modest download counts. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,476 | 34 | A speed-optimized member of zai-org's newly released GLM-5.3 series, built on the `glm5_next` architecture with vision-language capability. Very low downloads relative to likes suggest it just went live and adoption is still ramping. |
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,038 | 0 | The flagship release in the GLM-5.3 line, using a new `glm_moe_dsa` mixture-of-experts architecture for conversational tasks. Zero downloads with four-figure likes indicates a same-day launch generating anticipatory buzz. |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,118 | 3,457,687 | The base 27B vision-language model anchoring the entire Qwen3.8 release, and by far the most downloaded model this week. Its popularity has directly spawned over a dozen community quantizations and uncensored fine-tunes listed below. |
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 222 | 0 | An early preview of Tencent's next-generation Hunyuan (`hy_v4`) text-generation model. As a fresh preview drop, it's drawing likes from watchers ahead of any measurable download activity. |
| [Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 476 | 88,102 | A 35B mixture-of-experts vision-language model built on the Qwen3.5-MoE architecture from newcomer lab ornith-ai. Solid early downloads suggest it's finding traction as an alternative MoE option outside the major labs. |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,784 | 3,959,575 | A dated Flash checkpoint in DeepSeek's V4 series, continuing the lab's pattern of frequent incremental releases. Nearly 4M downloads reflect DeepSeek's consistently high developer adoption. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,058 | 2,675,145 | Moonshot AI's latest Kimi model with native vision-language and feature-extraction support, using compressed-tensors for efficient serving. High likes and downloads place it among this week's top-tier frontier releases. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,985 | 912,729 | Lightricks' updated video model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video in one checkpoint. Its versatility across four generation modes is driving strong adoption for open video workflows. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,567 | 4,848,404 | MiniMax's flagship video-generation model, supporting both text-to-video and image-to-video via diffusers. Its ~4.85M downloads make it the single most-downloaded model on this week's entire trending list. |
| [MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 153 | 3,344 | Alibaba's ControlNet-style conditioning module built on top of MiniMax-H3 for guided video-to-video and text-to-video generation. It's an early sign of the community building a control-and-editing ecosystem around MiniMax-H3. |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 150 | 240 | A text-to-speech model combining a transformer generation backbone with dedicated speech synthesis. Modest but growing traction suggests it's a newer entrant in the increasingly crowded open TTS space. |
| [SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 189 | 4,232 | SenseTime's natively multimodal any-to-any model using a Mixture-of-Transformers (`neo_chat`) design. It stands out for tackling any-to-any generation natively rather than bolting vision onto a text-only base. |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,282 | 19,726 | MiniMax's third-generation text-to-music diffusion model for full song generation. It's carving out a niche as one of the few actively-trending dedicated music-generation checkpoints. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 143 | 349 | A small vision-language model from Thomson Reuters built on the Qwen3.5-MoE architecture, likely targeting legal/media document understanding. Its appearance signals a legacy enterprise player entering the open-weight model space. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,124 | 7,758,790 | Unsloth's GGUF quantization of the Qwen3.8-27B base model for llama.cpp-based local inference. Its ~7.8M downloads make it the most-downloaded artifact on the entire list, dwarfing even the base model. |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 503 | 4,354 | A GGUF build of the newly-released Qwen3.8-Flash-Next vision-language model, enabling local quantized inference. Early but steady downloads track the base model's own fresh release. |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 874 | 509,270 | An abliterated (safety-refusal-removed) fine-tune of Qwen3.8-27B distributed in MLX, safetensors, and GGUF formats. Half a million downloads underscore how quickly the community moves to strip guardrails from popular new base models. |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,222 | 273,577 | An FP8-quantized, abliterated variant of Qwen3.8-27B optimized for faster inference with reduced memory footprint. It's one of several uncensored Qwen3.8-27B variants from the same author across different formats. |
| [Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,180 | 83,352 | The MLX-format counterpart of orcarouter's uncensored Qwen3.8-27B, targeting Apple Silicon inference. Its popularity reflects continued strong demand for on-device uncensored LLMs on Mac hardware. |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 717 | 938,219 | A GGUF uncensored fine-tune of Qwen3.8-27B using aggressive multi-token prediction (MTP) for faster generation. Nearly 940K downloads make it one of the most-adopted uncensored variants despite a niche author. |
| [GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 240 | 0 | Unsloth's day-one GGUF quantization of the newly-released GLM-5.3-Flash. Zero downloads with meaningful likes reflect a same-day release still awaiting adoption. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 797 | 1,666,948 | Another independent uncensored GGUF build of Qwen3.8-27B with MTP support for llama.cpp. Its 1.67M downloads make it one of the highest-adoption community fine-tunes this week. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 518 | 188,460 | A third format release from orcarouter, this time a standard GGUF abliterated build of Qwen3.8-27B. It rounds out the author's multi-format (FP8, MLX, GGUF) coverage of the same fine-tune. |
| [Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 420 | 1,355,482 | huihui-ai's well-known abliteration pipeline applied to Qwen3.8-27B and packaged as GGUF. The author's established reputation for abliterated releases is reflected in over 1.3M downloads. |
| [Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,509 | 0 | A community-maintained repository of corrected Jinja chat templates for Qwen models on MLX. High likes with no downloads reflect its role as a reference fix rather than a downloadable model artifact. |
| [Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 144 | 2,219 | Qwen's own official FP8 quantization of Qwen3.8-Flash-Next, released alongside the base model for efficient deployment. Early download numbers track its just-released sibling model. |
| [Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 331 | 1,469,059 | A GGUF quantization of ornith-ai's 35B MoE model for local inference. Its 1.47M downloads substantially outpace the unquantized base model, typical of large MoE checkpoints. |
| [MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 129 | 609 | Acceleration LoRAs for MiniMax-H3 aimed at speeding up video generation inference. Still early-stage, it points to a growing efficiency-tuning ecosystem around the popular video model. |
| [Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 201 | 18,598 | The unquantized safetensors source release underlying orcarouter's full family of uncensored Qwen3.8-27B derivatives. Lower downloads than its quantized siblings reflect that most users prefer the compressed formats for local use. |

## Ecosystem Signal

The week is defined by **Qwen3.8-27B's rapid colonization of the fine-tune ecosystem**: within days of release, at least five independent authors (orcarouter, OBLITERATUS, HauhauCS, JonathanColetti, huihui-ai) shipped abliterated/uncensored variants across GGUF, MLX, and FP8 formats, collectively pulling millions of downloads — a pattern that has become the default community response to any strong new open-weight base model. Chinese labs continue to set release cadence: Qwen, GLM (zai-org), DeepSeek, Kimi (moonshotai), and Hunyuan (tencent) all shipped new checkpoints this week, reinforcing open-weight dominance in the LLM race even as vision-language capability becomes a near-universal default rather than a differentiator. On the generative side, MiniMax's H3 video model is spawning its own secondary ecosystem (ControlNet, acceleration LoRAs), mirroring the fine-tune dynamics seen around top LLMs. Unsloth remains the go-to source for day-one official-quality quantizations across nearly every major release.

## Worth Exploring

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear anchor model of the week; understanding it is prerequisite context for the dozen-plus derivatives it spawned.
2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the most-downloaded model overall and worth studying for state-of-the-art open video generation quality and its emerging LoRA/ControlNet ecosystem.
3. **[GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** — a brand-new MoE architecture (`glm_moe_dsa`) from zai-org worth watching as it moves from day-one buzz to measurable adoption.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
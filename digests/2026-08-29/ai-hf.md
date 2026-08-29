# Hugging Face Trending Models Digest 2026-08-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-29 12:56 UTC

---

# Hugging Face Trending Models Digest — 2026-08-29

## Today's Highlights

Qwen dominates this week's trending chart, with **Qwen3.8-27B** and **Qwen3.8-Flash-Next** driving both official releases and a long tail of community derivatives (GGUF quants, abliterated/uncensored variants, MLX ports). Chinese labs continue to lead frontier releases: **zai-org's GLM-5.3 / GLM-5.3-Flash**, **moonshotai/Kimi-K3** (11K+ likes), and **deepseek-ai/DeepSeek-V4-Flash-0731** all post strong engagement, while **MiniMaxAI/MiniMax-H3** leads video generation with nearly 5M downloads. A notable ecosystem pattern this week is the sheer volume of "uncensored"/abliterated Qwen3.8-27B fine-tunes from multiple independent authors (orcarouter, HauhauCS, JonathanColetti, huihui-ai, OBLITERATUS), signaling strong community demand for unrestricted variants of a single strong open-weight base. Unsloth's quantization pipeline remains the fastest to ship GGUF builds of new flagship releases.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,561 | 189,793 | A fast-tier variant of zai-org's GLM-5.3 line built on a new `glm5_next` architecture. Trending on downloads volume (189K+) despite modest likes, suggesting heavy pipeline integration rather than casual browsing. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,213 | 8,804 | The full-size counterpart to GLM-5.3-Flash, using a distinct `glm_moe_dsa` mixture-of-experts architecture. Early-stage traction (low downloads relative to likes) points to a very recent release still gaining adoption. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 263 | 1,394 | A preview release of Tencent's next Hunyuan-generation text model (`hy_v4` architecture). Low download count reflects its preview status, but presence on the trending list signals early community interest in Tencent's next LLM generation. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 488 | 106,562 | A 35B mixture-of-experts model (3B active params) built on the Qwen3.5 MoE architecture. Strong download-to-like ratio suggests it's being pulled into production or benchmarking pipelines quickly. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,797 | 4,330,482 | A fast/distilled variant of DeepSeek-V4, dated to a July 31 checkpoint. Over 4.3M downloads makes it one of the most heavily used models on this list, underscoring DeepSeek's continued dominance in cost-efficient open-weight inference. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,072 | 2,701,014 | Moonshot AI's latest Kimi-series flagship, using `compressed-tensors` for efficient storage/serving and supporting image-text-to-text input. With 11K+ likes it's the second-most-liked model on the board, reflecting strong anticipation for Moonshot's next-gen release. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,220 | 52,341 | The top-liked model this week, a fast vision-language variant on Qwen's new `qwen4_exp` experimental architecture. Its high like count relative to downloads suggests strong buzz around Qwen's next architectural generation ahead of wider adoption. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,191 | 4,028,839 | The most-liked and heavily downloaded model on the entire list — a 27B vision-language model on the `qwen3_5` architecture. It has become the de facto base model for this week's wave of community fine-tunes and quantizations, evidenced by a dozen derivative uploads across GGUF, MLX, and FP8 formats. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,061 | 1,044,661 | A versatile video generation model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video via a single-file diffusion checkpoint. Over 1M downloads highlights Lightricks' continued strength in accessible, single-file video diffusion tooling. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,599 | 5,018,833 | MiniMax's flagship image-text-to-video diffusion model, already spawning downstream ControlNet and LoRA fine-tunes from alibaba-pai. Its 5M+ downloads make it the most-downloaded generative video model on this week's board. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 181 | 1,017 | A text-to-speech model built on a custom `breeze` architecture. Very early download numbers suggest a fresh release still building an audience in the TTS space. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,293 | 20,724 | A dedicated text-to-music generation model using diffusers/safetensors, extending MiniMax's generative media lineup beyond video. Solid early likes-to-downloads ratio indicates growing interest in open music-generation checkpoints. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 147 | 831 | An enterprise-branded small vision-language model built on the Qwen3.5 MoE architecture, marking Thomson Reuters' entry into open-weight model publishing. Its presence signals growing interest from non-traditional (media/legal-data) enterprises in fine-tuning and releasing domain models. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 128 | 2,668 | An alpha-stage LLM built on Nvidia's Nemotron-H architecture, purpose-built by the Pipecat team for voice/phone-call applications. Early but notable given Pipecat's role as a popular open-source voice-agent framework. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,167 | 8,363,481 | Unsloth's GGUF quantization of Qwen3.8-27B, and the single most-downloaded artifact on this entire list at 8.3M+ downloads. Demonstrates how fast community quantization tooling now outpaces even official release adoption for local/edge inference. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 892 | 645,554 | An abliterated (safety-filter-removed) fine-tune of Qwen3.8-27B shipped in MLX, safetensors, and GGUF simultaneously. High multi-format downloads reflect strong demand for uncensored variants across different inference backends. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,244 | 290,216 | One of five separate "Uncensored" Qwen3.8-27B releases from orcarouter alone, this one in FP8 for efficient GPU serving. The proliferation of formats (FP8, GGUF, MLX, full-precision) from a single author shows a systematic strategy to cover every deployment target. |
| [HauhauCS/...-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 732 | 1,061,687 | A GGUF quant combining uncensoring with multi-token prediction (MTP) tuning for faster inference, over 1M downloads. Reflects growing community sophistication in stacking abliteration with speed-oriented fine-tuning techniques. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 813 | 1,843,237 | Another independent uncensored GGUF build of Qwen3.8-27B with MTP support via llama.cpp. Nearly 1.8M downloads shows this remains one of the most-sought derivative formats this week. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 541 | 188,061 | Unsloth's quantization of the newly-released Qwen3.8-Flash-Next, shipped within days of the base model. Shows Unsloth's continued role as the fastest quantization pipeline for major Qwen releases. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 537 | 215,892 | A GGUF-format abliterated build of Qwen3.8-27B, part of orcarouter's broader multi-format release strategy. Solid mid-tier adoption alongside its FP8 and MLX siblings from the same author. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 430 | 1,485,837 | A well-established abliteration specialist's GGUF release of Qwen3.8-27B, pulling nearly 1.5M downloads. Huihui-ai's consistent output cements them as one of the most reliable sources for uncensored model derivatives. |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 160 | 4,250 | A ControlNet adapter fine-tuned on top of MiniMax-H3 for guided video generation via the VideoX-Fun framework. Shows Alibaba's PAI team actively extending third-party video foundation models with control mechanisms. |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 150 | 44,281 | Qwen's own official FP8-quantized release of Flash-Next, shipped alongside the base model for efficient serving. Official first-party quantization support lowers the barrier for production deployment immediately at launch. |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 139 | 13,767 | Acceleration-focused LoRA adapters for MiniMax-H3, referencing an associated arXiv paper. Part of Alibaba PAI's broader push to optimize inference speed for third-party video diffusion models. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,512 | 0 | A community utility repo fixing Jinja chat-template bugs across the Qwen model family for MLX users. Despite zero downloads (template-only, no weights), it has 1,512 likes — reflecting how widely a small but critical tooling fix can resonate. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 336 | 1,768,313 | The GGUF quantization of Ornith-1.5-35B-A3B, already outpacing its base model in downloads (1.77M vs 106K). Illustrates how quantized formats often become the primary consumption path for MoE models. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 203 | 42,987 | The full-precision safetensors source release underlying orcarouter's suite of Uncensored Qwen3.8-27B derivatives (FP8, GGUF, MLX). Serves as the base checkpoint other quantizers and format-converters build from. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,198 | 97,508 | An MLX-formatted abliterated build of Qwen3.8-27B, targeting Apple Silicon inference. Its high likes-to-downloads ratio reflects strong interest from the local/on-device Mac inference community. |

## Ecosystem Signal

Qwen3.8-27B has become this week's dominant open-weight substrate: it anchors at least eleven derivative uploads spanning GGUF, FP8, MLX, and multiple independent "uncensored"/abliterated fine-tunes — a clear signal that open-weight releases are increasingly evaluated not just on benchmark quality but on how quickly and thoroughly the community can strip safety alignment and reformat for diverse hardware. Unsloth remains the fastest first-mover on official quantization, often shipping GGUF builds within days of a base release (Qwen3.8-27B-GGUF alone pulled 8.3M downloads). Chinese labs (Qwen, GLM/zai-org, DeepSeek, Kimi/Moonshot, Tencent, MiniMax) account for the overwhelming majority of both original releases and download volume, reinforcing open-weight China-origin models as the primary engine of Hugging Face trending activity. Enterprise entrants like Thomson Reuters publishing domain models, and infrastructure teams like Pipecat and Alibaba PAI shipping task-specific adapters (voice LLM, ControlNet, acceleration LoRAs), show the ecosystem maturing beyond raw model races into applied tooling built atop these bases.

## Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — second-highest likes on the board (11K+) with 2.7M downloads and compressed-tensors support; worth studying as Moonshot's next flagship and a strong candidate for efficient large-scale serving.
2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the base model driving the week's entire derivative ecosystem (12+ downstream uploads); understanding it directly explains most of the other entries on this list.
3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — leading open video-generation model by downloads (5M+), already extended with ControlNet and LoRA adapters, making it a strong pick for anyone building video-generation pipelines today.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
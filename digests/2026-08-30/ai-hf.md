# Hugging Face Trending Models Digest 2026-08-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-30 12:32 UTC

---

# Hugging Face Trending Models Digest — August 30, 2026

## Today's Highlights

Qwen dominates this week's chart with two flagship releases — the multimodal **Qwen3.8-Flash-Next** and **Qwen3.8-27B** — which have already spawned a large wave of GGUF quantizations and "uncensored"/abliterated derivatives from community groups including unsloth, orcarouter, HauhauCS, JonathanColetti, and huihui-ai. zai-org shipped two new GLM-5.3 variants (**GLM-5.3** and **GLM-5.3-Flash**), continuing its rapid release cadence. In video generation, **MiniMaxAI/MiniMax-H3** is pulling strong likes and downloads, while **moonshotai/Kimi-K3** remains a top multimodal contender with over 11K likes. DeepSeek keeps its steady drumbeat with **DeepSeek-V4-Flash-0731**, and Thomson Reuters' entry (**Thomson-1.0-Small**) signals growing enterprise interest in small domain-tuned models.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,659 | 346,516 | A fast, lighter-weight variant of GLM-5.3 built on the new `glm5_next` architecture. Its 346K+ downloads against a modest like count suggest heavy pipeline integration and testing rather than social buzz. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,307 | 50,116 | The full-size GLM-5.3 conversational model using the `glm_moe_dsa` mixture-of-experts architecture. It's trending alongside its Flash sibling as zai-org pushes a coordinated two-tier release. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 299 | 2,123 | An early preview of Tencent's next-generation Hunyuan (`hy_v4`) text-generation model. Low download count reflects its preview status, but early likes suggest anticipation for the full release. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 501 | 147,038 | A 35B mixture-of-experts model (3B active) built on the `qwen3_5_moe` architecture with multimodal text-generation support. It's gaining traction as an efficient MoE alternative for lower-compute deployment. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,814 | 4,575,518 | A fast-tier DeepSeek V4 checkpoint dated 0731, racking up 4.5M+ downloads. Its scale of adoption underscores DeepSeek's continued dominance as a go-to open-weight production model. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,089 | 2,794,721 | The latest Kimi model using `compressed-tensors` for efficient multimodal feature-extraction and generation. Its 11K+ likes make it one of the most-loved releases on the board this week. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,333 | 121,976 | A fast, next-gen vision-language model using the new `qwen4_exp` architecture. It's already the seed for multiple community GGUF and FP8 conversions within days of release. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,298 | 4,511,348 | Qwen's flagship 27B vision-language model and the clear star of this week's chart, with 13K+ likes and 4.5M downloads. It's the base for an entire ecosystem of quantized and fine-tuned derivatives appearing elsewhere on this list. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,191 | 1,137,181 | An updated LTX video model supporting image-to-video, text-to-video, and video-to-video in a single-file diffusion format. Its broad task coverage and 1.1M downloads make it a versatile production choice for video generation pipelines. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,639 | 5,263,381 | MiniMax's H3 model handles both image-to-video and text-to-video generation via the `diffusers` framework. With 5.2M+ downloads, it's currently the most-adopted video generation model on the trending list. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 174 | 0 | A distilled, 4-step accelerated variant of MiniMax's H3 video model using data-free VSA compression. Zero downloads so far indicate it's a brand-new preview drawing early attention purely on likes. |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 162 | 5,538 | A ControlNet-Union adapter built on top of MiniMax-H3 via Alibaba's `videox_fun` framework, adding controllable video-to-video and text-to-video generation. It extends the base model's utility for guided video editing workflows. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 197 | 1,838 | A dedicated text-to-speech model built on a custom `breeze` architecture. It's an early-stage release gaining attention as a lightweight open TTS alternative. |
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 153 | 1,009 | Thomson Reuters' first small vision-language model, built on the `qwen3_5_moe` architecture. Its debut signals a major enterprise/media player entering the open-model space, likely tuned for legal or news-domain tasks. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 138 | 3,982 | An alpha-stage LLM built on NVIDIA's `nemotron_h` architecture, purpose-built for phone/voice-agent use cases. It reflects growing demand for LLMs optimized specifically for real-time voice pipelines. |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 129 | 87,848 | A 35B (3B-active) code-specialized MoE model released directly in quantized GGUF form with imatrix calibration. It targets local, CPU/GPU-efficient coding assistants. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 585 | 328,195 | Unsloth's GGUF quantization of Qwen3.8-Flash-Next for efficient local inference. Nearly 330K downloads within days shows how fast the community adopts unsloth's quant releases. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,209 | 8,839,153 | The GGUF quantization of the flagship Qwen3.8-27B, and by far the most-downloaded model on this entire list at 8.8M+ downloads. It's become the de facto way most users run Qwen3.8-27B locally. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 936 | 725,757 | An abliterated (safety-guardrail-removed) fine-tune of Qwen3.8-27B distributed across MLX, safetensors, and GGUF formats. Its multi-format release maximizes reach across local inference stacks. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 281 | 45,936 | Unsloth's quantized GGUF build of GLM-5.3-Flash, arriving quickly after the base model's release. It extends unsloth's pattern of same-week quantization coverage for major new releases. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,225 | 109,121 | An MLX-format abliterated build of Qwen3.8-27B optimized for Apple Silicon. It's one of several orcarouter "Uncensored" variants covering different runtimes. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 762 | 1,158,065 | An aggressively abliterated GGUF build of Qwen3.8-27B using multi-token prediction (MTP) for faster inference. Its 1.1M+ downloads make it one of the most popular community fine-tunes of the base model. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,274 | 301,964 | An FP8-quantized abliterated variant of Qwen3.8-27B aimed at GPU inference with reduced memory footprint. It's part of orcarouter's broad multi-format "Uncensored" release strategy. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 565 | 238,397 | The GGUF-format counterpart to orcarouter's uncensored Qwen3.8-27B line, targeting llama.cpp-based local inference. |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 156 | 76,935 | Qwen's own official FP8-quantized release of Flash-Next, offering a lower-precision option straight from the model authors. It complements the community-driven GGUF quants of the same model. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 837 | 1,991,437 | Another independent abliterated GGUF build of Qwen3.8-27B with MTP support, pulling nearly 2M downloads. The sheer number of competing "uncensored" Qwen3.8-27B quants highlights how much community demand exists for guardrail-free variants. |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 148 | 23,734 | Acceleration LoRAs fine-tuned on top of MiniMax-H3 for faster video generation, referencing an accompanying research paper (arXiv:2607.26004). It shows Alibaba's PAI team actively building tooling around third-party video models. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 443 | 1,622,056 | Yet another abliterated GGUF fine-tune of Qwen3.8-27B, from a group with a long track record of "uncensored" releases. Its 1.6M downloads confirm huihui-ai's established following in this niche. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,522 | 0 | A community patch providing corrected Jinja chat templates for Qwen models on MLX. Its 1,522 likes with zero downloads show it's a reference/utility repo rather than a downloadable model artifact. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 214 | 58,501 | The base safetensors release of orcarouter's abliterated Qwen3.8-27B, from which the MLX, FP8, and GGUF variants above were derived. |

## Ecosystem Signal

The Qwen3.8 family — especially the 27B flagship — is the clear center of gravity this week, anchoring not just two official releases (base and Flash-Next) but an entire secondary market of community quantizations and abliterated "uncensored" fine-tunes from unsloth, orcarouter, HauhauCS, JonathanColetti, huihui-ai, and OBLITERATUS. This scale of derivative activity around a single base model, spanning GGUF, MLX, and FP8 formats within days, signals both strong open-weight momentum and a persistent demand for guardrail-removed variants. zai-org's coordinated GLM-5.3/GLM-5.3-Flash launch and DeepSeek's steady V4-Flash cadence show established players continuing rapid iteration. Video generation is consolidating around MiniMax-H3 and Lightricks' LTX-2.5, with Alibaba's PAI team building acceleration LoRAs and ControlNets on top of MiniMax rather than training from scratch — a sign of ecosystem specialization forming around a few strong video backbones. Enterprise entrants like Thomson Reuters and voice-focused efforts like pipecat-ai's phonellm point to open models expanding into narrower, domain-specific niches beyond general chat.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The most-liked and most-derived model this week; understanding it directly (rather than a downstream quant) is essential given how much of the ecosystem now builds on it.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — Leading video-generation model by download volume, and now a foundation for third-party acceleration LoRAs and ControlNets — worth studying both the base model and the tooling growing around it.
3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — A top-liked multimodal model using `compressed-tensors`, offering a compelling alternative architecture worth benchmarking against the Qwen3.8 line.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
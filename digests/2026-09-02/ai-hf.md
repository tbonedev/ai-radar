# Hugging Face Trending Models Digest 2026-09-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-02 11:55 UTC

---

# Hugging Face Trending Models Digest — 2026-09-02

## 1. Today's Highlights

Qwen's next-generation lineup dominates the board this week, with **Qwen/Qwen3.8-27B** topping the likes chart (13,637) and racking up nearly 5M downloads, while **Qwen/Qwen3.8-Flash-Next** is already spawning a wave of GGUF, FP8, and uncensored derivatives across the community. Chinese labs continue to push flagship releases in parallel: **zai-org/GLM-5.3** and **GLM-5.3-Flash**, **DeepSeek-V4-Flash-Vision-Exp**, **tencent/Hy4-preview**, and **moonshotai/Kimi-K3** (11,137 likes) all landed this cycle. On the generative side, **MiniMaxAI/MiniMax-H3** is the standout video model with 5.5M downloads, alongside **Lightricks/LTX-2.5** for image/video generation. The most notable ecosystem pattern is the sheer volume of third-party quantizations and "uncensored"/abliterated fine-tunes of the Qwen3.8 family — unsloth, orcarouter, HauhauCS, and huihui-ai each shipped GGUF or FP8 variants within days of the base model's release.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,922 | 441,348 | A fast, lightweight member of the GLM-5.3 conversational family built on the new `glm5_next` architecture. Its 441K+ downloads suggest strong adoption as a low-latency chat backbone. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,694 | 207,941 | Qwen's next-gen "Flash" variant on the experimental `qwen4_exp` architecture, positioned as a speed-optimized conversational model. It's already the seed model for at least five community GGUF/FP8/uncensored derivatives in this list. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,486 | 94,403 | The full-size GLM-5.3 text-generation model using the `glm_moe_dsa` mixture-of-experts architecture. It anchors the GLM-5.3 family alongside the Flash variant. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,637 | 4,960,483 | The highest-engagement model this week, a 27B-parameter vision-language model on the `qwen3_5` architecture. Nearly 5M downloads and nine derivative repos in this digest make it the clear center of gravity for the current cycle. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 477 | 17,893 | An experimental vision-enabled preview of DeepSeek-V4-Flash, marked explicitly as "Exp" for early testing. It signals DeepSeek's move to add native multimodal capability to its Flash line. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 392 | 3,516 | An early preview of Tencent's Hunyuan-4 text-generation model. Despite modest download numbers so far, it marks the debut of a new architecture generation (`hy_v4`) from the Hunyuan team. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,137 | 2,783,061 | Moonshot AI's Kimi-K3 flagship model, built on `compressed-tensors` for efficient inference. With over 11K likes and 2.7M downloads, it's one of the most-adopted new releases of the week. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,511 | 1,232,274 | A versatile video diffusion model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video generation in a single-file format. Over 1.2M downloads reflect strong uptake among video-generation practitioners. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,783 | 5,532,597 | MiniMax's H3 image/text-to-video generation model, distributed via `diffusers`. With 5.5M downloads it's the most-downloaded generative model in this digest, and already has dedicated LoRA and experimental derivative repos. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 242 | 0 | A distilled, 4-step accelerated preview of a video-generation pipeline using VSA (video sparse attention) in a data-free setting. It targets dramatically faster inference for text-to-video workflows. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 330 | 3,086 | The second-generation Breeze text-to-speech model built on a transformer backbone. It's an early-stage but notable entrant in the open TTS space this week. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 257 | 0 | Google's third-generation TimesFM foundation model for time-series forecasting, released in PyTorch format. It extends Google's pretrained forecasting line into a new major version. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 191 | 6,813 | An alpha-stage LLM built on the Nemotron-H architecture, purpose-built for phone/voice-agent applications by the Pipecat team. It signals growing specialization of LLMs for real-time voice pipelines. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 701 | 431,339 | Unsloth's GGUF quantization of Qwen3.8-Flash-Next for local/llama.cpp inference. Its 431K downloads already rival the base model's own download count. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,365 | 9,354,057 | Unsloth's GGUF conversion of Qwen3.8-27B, and by far the most-downloaded repo in this entire digest at 9.35M downloads. It underscores how much local-inference demand outstrips even the base model's own reach. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 330 | 63,718 | A GGUF quantization of GLM-5.3-Flash for CPU/edge deployment via llama.cpp. It extends Unsloth's quantization coverage beyond the Qwen ecosystem. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,017 | 805,791 | An abliterated (safety-guardrail-removed) fine-tune of Qwen3.8-27B distributed in mlx, safetensors, and gguf formats. Over 800K downloads show strong demand for unrestricted local variants. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 855 | 1,276,092 | An "aggressive" uncensored GGUF fine-tune of Qwen3.8-27B using multi-token prediction (MTP). Its 1.27M downloads make it one of the most popular uncensored variants tracked here. |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 183 | 130,451 | Qwen's own official FP8-quantized release of Flash-Next for efficient GPU inference. It gives deployers an official low-precision option alongside the full-precision base model. |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 182 | 32,893 | Acceleration LoRAs fine-tuned on top of MiniMax-H3 via the `videox_fun` toolkit, referencing an accompanying arXiv paper. It targets faster inference for the video-generation base model. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 176 | 64,325 | An abliterated, uncensored GGUF build of Qwen3.8-Flash-Next. It's one of several orcarouter releases targeting the uncensored local-inference niche this week. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 647 | 254,529 | The GGUF counterpart of orcarouter's uncensored Qwen3.8-27B line. Its 254K+ downloads reflect the broader trend of rapid uncensoring of newly released flagship models. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 139 | 56,208 | A research-grade GGUF quantization of Qwen3.8-27B using GSQ (mixed-precision) and RCO quantization techniques from the ISTA-DASLab group. It represents the academic/quantization-research side of the ecosystem rather than a community fine-tune. |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 147 | 2,576 | An abliterated FP8 build of GLM-5.3-Flash. It shows orcarouter extending its uncensoring pipeline beyond the Qwen family to GLM. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,357 | 316,128 | The FP8 edition of orcarouter's uncensored Qwen3.8-27B, offering GPU-efficient inference without safety guardrails. It's among the higher-engagement uncensored variants in this digest. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 902 | 2,143,289 | A llama.cpp-compatible uncensored GGUF fine-tune of Qwen3.8-27B with MTP support, with a striking 2.14M downloads. It's the most-downloaded uncensored variant tracked this week. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 393 | 0 | An experimental community repackaging of MiniMax-H3 from a well-known ComfyUI-ecosystem contributor. It's early-stage but already drawing notable likes ahead of any downloads. |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 191 | 130,086 | A GGUF quantization of the 35B Mixture-of-Experts "Tiel-Coder" model built with imatrix calibration for llama.cpp. It brings a specialized coding model into the local-inference-friendly quantized format. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,266 | 121,028 | An MLX-format build of orcarouter's uncensored Qwen3.8-27B, targeting Apple Silicon inference. It rounds out orcarouter's multi-format (GGUF/FP8/MLX) uncensoring strategy for the same base model. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 492 | 1,869,259 | Huihui-ai's well-known abliteration pipeline applied to Qwen3.8-27B, packaged as GGUF. With 1.87M downloads, it's one of the most-adopted uncensored derivatives, consistent with huihui-ai's track record on prior model generations. |

## 3. Ecosystem Signal

The week is defined almost entirely by **Qwen3.8** (27B and Flash-Next), which anchors 9 of the 17 fine-tune/quantization entries and pulls in the single highest download count in the digest (9.35M for Unsloth's GGUF). This illustrates a now-familiar pattern: a strong open-weight base release from Qwen triggers an immediate, multi-format community response — GGUF (llama.cpp), MLX (Apple Silicon), FP8, and abliterated/"uncensored" variants — often within days, frequently outpacing the base model's own download numbers. GLM-5.3, DeepSeek-V4, Kimi-K3, and Hunyuan's Hy4-preview show that open-weight flagship competition among Chinese labs remains intense and largely simultaneous. Notably, no proprietary/closed model appears anywhere in this list — every trending entry is open-weight, reinforcing Hugging Face's role as the default distribution surface for frontier-adjacent models. Quantization activity is no longer a niche afterthought: official orgs (Qwen itself shipping FP8) and academic groups (ISTA-DASLab) are now quantizing alongside community actors like Unsloth and orcarouter.

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the week's most-liked and most-derived-from model; understanding it is a prerequisite for making sense of the nine downstream quantized/uncensored repos it spawned.
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — second-highest likes (11,137) with a `compressed-tensors`-native release, worth studying for how Moonshot is packaging efficient inference directly into the base checkpoint.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the leading open video-generation model by downloads (5.5M), already spawning acceleration LoRAs and experimental community builds, making it a good bellwether for where open video generation is heading.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
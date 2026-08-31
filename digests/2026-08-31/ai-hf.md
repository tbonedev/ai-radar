# Hugging Face Trending Models Digest 2026-08-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-31 14:47 UTC

---

# Hugging Face Trending Models Digest — 2026-08-31

## Today's Highlights

The Qwen3.8 family dominates this week's charts, with the official `Qwen3.8-27B` base pulling in 4.7M downloads and 13,428 likes — the single largest engagement of any model tracked. Alongside it, zai-org's GLM-5.3 line (both the dense and Flash variants) and DeepSeek's V4-Flash series show that the "flash"-tier, cost-efficient multimodal model race is intensifying among Chinese labs. The long tail is striking: at least nine separate "Uncensored"/"OBLITERATED"/abliterated GGUF derivatives of `Qwen3.8-27B` are trending simultaneously, underscoring how quickly the community reworks a strong open-weight release into unrestricted local variants. On the generative side, MiniMax-H3 is spinning up a fast-growing video ecosystem — base weights, LoRA accelerators, and a ControlNet-Union — while Lightricks' LTX-2.5 continues to push open video generation forward.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,388 | 66,195 | Dense text-generation model using a new `glm_moe_dsa` architecture, positioned as the flagship non-multimodal member of the GLM-5.3 family. Early adoption (66K downloads) trails its Flash sibling, suggesting users are prioritizing the lighter variant for now. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 338 | 2,589 | Preview release of Tencent's Hunyuan-v4 text-generation architecture (`hy_v4`), signaling the next generation of the Hunyuan LLM line. Still early-stage with modest downloads, but preview status from a major lab draws immediate community attention. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,836 | 4,561,861 | A dated snapshot of DeepSeek's efficient V4-Flash conversational model, already at 4.5M downloads. Its rapid uptake reflects DeepSeek's continued cadence of frequent, production-ready checkpoint releases. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 510 | 172,695 | A 35B mixture-of-experts model (A3B active params) built on the `qwen3_5_moe` architecture from a smaller independent lab. Solid early traction shows growing interest in efficient MoE fine-tunes outside the major labs. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,476 | 158,598 | Qwen's newest lightweight image-text-to-text model on the experimental `qwen4_exp` architecture, hinting at the direction of the upcoming Qwen4 line. It leads all models in likes-per-download ratio among top entries, reflecting strong community excitement despite being a "Next" preview. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,779 | 379,271 | The multimodal, cost-efficient variant of GLM-5.3, already outpacing its dense sibling with nearly 6x the downloads. Its `glm5_next` architecture positions it as zai-org's go-to model for vision-language tasks at scale. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,428 | 4,720,763 | The flagship 27B multimodal release in the Qwen3.8 line and by far this week's most-liked model, with 4.7M downloads. Its popularity is driving the huge wave of downstream GGUF, FP8, MLX and abliterated derivatives seen across the rest of this digest. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 241 | 0 | An experimental vision-enabled branch of DeepSeek-V4-Flash, extending the text-only model into image-text-to-text territory. Zero recorded downloads suggest this is a very fresh upload still awaiting community benchmarking. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,324 | 1,182,585 | A versatile diffusion model supporting image-to-video, text-to-video, video-to-video and image-text-to-video in one checkpoint. Its single-file diffusion format and broad task coverage have driven over 1.1M downloads. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,691 | 5,362,365 | MiniMax's flagship image-text-to-video diffusion model, the most-downloaded generative model in this digest at 5.36M. Its popularity has already spawned an ecosystem of LoRAs, ControlNets and experimental forks listed below. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 212 | 0 | A distilled, data-free 4-step text-to-video preview built for fast inference, likely targeting real-time or low-latency video generation. The "VSA-DataFree" naming suggests a distillation technique that avoids paired training data. |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 166 | 5,736 | A unified ControlNet adapter for MiniMax-H3 enabling guided video-to-video and text-to-video generation. Part of Alibaba's PAI team's broader "Fun" tooling suite built on top of MiniMax's base video model. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 374 | 0 | An experimental repackaging of MiniMax-H3 weights from a well-known ComfyUI ecosystem contributor. Zero downloads with meaningful likes suggests early buzz ahead of tooling integration (e.g., ComfyUI nodes). |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 226 | 2,236 | Second-generation text-to-speech model from BreezeBlue, built on a transformer architecture rather than a diffusion vocoder. Modest but steady traction reflects the niche but consistent demand for open TTS alternatives. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 163 | 4,721 | An alpha-stage LLM built on NVIDIA's Nemotron-H architecture, purpose-tuned for phone/voice-agent pipelines by the Pipecat team. Its niche focus on telephony-grade conversational AI fills a gap most general chat models don't target. |
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 168 | 1,045 | A small multimodal model from Thomson Reuters built on a `qwen3_5_moe` backbone, likely tuned for legal or professional-information workflows. Enterprise-backed entrants like this signal growing interest in domain-specialized open releases from non-traditional AI labs. |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 157 | 105,974 | A quantized 35B MoE coding model (imatrix GGUF) built for local, llama.cpp-based code generation. Strong download counts relative to its likes suggest heavy practical use by developers running it locally rather than casual browsing. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,268 | 9,059,937 | Unsloth's GGUF quantization of the flagship Qwen3.8-27B, and the single most-downloaded artifact in this entire digest at over 9M. It's the clearest evidence that local, quantized inference remains the dominant consumption path for large open models. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 623 | 373,029 | GGUF quantization of the new Qwen3.8-Flash-Next multimodal model, giving llama.cpp users day-one access to Qwen's lightweight preview. Downloads already exceed twice the base model's, showing quantized builds often outpace the originals. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 306 | 53,350 | Unsloth's quantized build of GLM-5.3-Flash for efficient local text-generation inference. Smaller adoption than the Qwen GGUFs reflects GLM's comparatively newer footprint in the local-inference community. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 966 | 759,644 | A multi-format (MLX/safetensors/GGUF) abliterated fine-tune of Qwen3.8-27B that strips refusal behavior. Nearly 760K downloads in this format alone shows strong demand for uncensored variants of the flagship base model. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 806 | 1,202,914 | An "aggressive" uncensored GGUF fine-tune of Qwen3.8-27B using multi-token prediction (MTP) for faster inference. Its 1.2M downloads make it one of the most-adopted uncensored derivatives tracked this week. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,312 | 307,496 | FP8-quantized uncensored variant of Qwen3.8-27B, targeting GPU-accelerated serving rather than CPU/edge inference. orcarouter's presence across four separate Qwen3.8 derivatives in this digest marks them as a prolific fine-tuner this cycle. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,246 | 114,057 | Apple MLX-format build of the same uncensored Qwen3.8-27B fine-tune, aimed at Apple Silicon local inference. Its strong likes-to-download ratio suggests high interest from the Mac-based local-LLM community. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 866 | 2,055,081 | Another independent uncensored GGUF fine-tune of Qwen3.8-27B with MTP support, notching over 2M downloads. It's the highest-download uncensored derivative in this batch, illustrating just how much demand exists for unrestricted local Qwen3.8 builds. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 469 | 1,764,919 | A GGUF build of huihui-ai's well-known abliteration technique applied to Qwen3.8-27B. huihui-ai is a recurring, trusted name in the abliteration space, helping this variant reach 1.76M downloads quickly. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 593 | 246,445 | Standard GGUF release of orcarouter's uncensored Qwen3.8-27B fine-tune, complementing their FP8 and MLX builds. Rounding out orcarouter's four-format release strategy shows a deliberate push to cover every major local-inference runtime. |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 169 | 84,954 | Qwen's own official FP8 quantization of Flash-Next, offering a first-party efficient-serving option alongside the full-precision release. Official quantized releases like this typically anchor trust for downstream community derivatives. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 141 | 51,125 | Uncensored GGUF fine-tune of the newer, smaller Qwen3.8-Flash-Next model, extending orcarouter's uncensoring pipeline beyond just the 27B model. Lower volume than the 27B variants suggests the community's uncensoring demand still concentrates on the larger flagship. |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 162 | 27,009 | LoRA adapters designed to accelerate inference for MiniMax-H3 video generation, referencing an accompanying arXiv paper. This is a rare example of acceleration-focused (rather than style) LoRAs trending for a video model. |

## Ecosystem Signal

This week's data shows two dominant forces: **Qwen3.8-27B's gravitational pull** and the **uncensoring/abliteration economy** it has spawned. A single official base model generated at least nine independent derivative releases (GGUF, FP8, MLX, abliterated) across five different authors within the same week — a pattern that increasingly defines how open-weight releases are actually consumed, with quantized/uncensored community builds often outpacing the original in downloads (Unsloth's GGUF alone hit 9M vs. the base model's 4.7M). GLM-5.3 and DeepSeek-V4-Flash show that Chinese labs continue to iterate rapidly on efficient, multimodal-first "flash" tiers rather than monolithic frontier models. On the generation side, MiniMax-H3 is following a similar trajectory to Qwen — a strong base model quickly wrapped in LoRAs, ControlNets, and experimental forks. Enterprise-backed niche entrants (Thomson Reuters, Pipecat) suggest domain-specific fine-tuning is expanding beyond hobbyist circles. Overall, open-weight momentum remains squarely with the Qwen and MiniMax ecosystems, with unsloth cementing its role as the default quantization distributor.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear center of gravity this week; understanding it directly explains nearly a third of all other trending entries in this digest.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the top generative model by downloads, with an already-maturing tooling ecosystem (LoRAs, ControlNet) worth evaluating for video workflows.
3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — the most-downloaded artifact overall; the practical entry point for anyone wanting to run the flagship Qwen model locally.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
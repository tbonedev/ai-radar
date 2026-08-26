# Hugging Face Trending Models Digest 2026-08-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-26 07:41 UTC

---

# Hugging Face Trending Models Digest — 2026-08-26

## Today's Highlights

Qwen's new **Qwen3.8-27B** dominates this week's chart, both as the top-liked model (12,767 likes) and as the base for an extraordinary wave of community derivatives — nearly two-thirds of the 30 trending repos are quantizations, abliterated "uncensored" builds, speculative-decoding wrappers, or chat-template fixes for this single model. Competing frontier releases from **DeepSeek** (V4-Flash-0731) and **Moonshot AI** (Kimi-K3) also pulled strong engagement. On the generative side, **MiniMax-H3** and **Lightricks/LTX-2.5** lead a active video-generation front, while **SenseNova-U1.5-8B-MoT** stands out as a rare genuinely native any-to-any multimodal model. The sheer number of independent abliteration efforts (OBLITERATUS, orcarouter, huihui-ai, 0bserverx, DavidAU) targeting one base model underscores how fast — and contentiously — the community races to strip safety filters from a hot new release.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,767 | 2,945,415 | Qwen's newest 27B image-text-to-text base model, topping trending with nearly 13K likes and 2.9M downloads. Its release triggered an immediate wave of community abliterated, quantized, and MTP fine-tunes across the rest of this list. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 430 | 70,158 | A 35B mixture-of-experts (A3B active) model blending image-text-to-text and text-generation capabilities. It anchors a coordinated multi-size family that also spans a 9B variant and GGUF quantizations. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 219 | 98,323 | The compact 9B sibling in the Ornith-1.5 family, also supporting image-text-to-text. Its GGUF counterpart already surpasses 1.1M downloads, pointing to strong edge/local-inference demand. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,722 | 3,528,373 | DeepSeek's fast-inference V4 checkpoint pulls 3.5M downloads. It continues DeepSeek's cadence of frequent dated checkpoint releases for its V4 line. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,001 | 2,865,293 | Moonshot AI's Kimi-K3 lands with nearly 11K likes on a new `kimi_k3` architecture with compressed-tensors support. Its image-text-to-text pipeline positions it as a direct Qwen3.8-27B competitor. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,811 | 833,845 | A single-file video diffusion model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video. Its breadth of supported modalities makes it one of the most flexible video generators trending this week. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,470 | 4,639,786 | MiniMax's H3 diffusion model tops the video-generation category with 4.6M downloads, supporting text-to-video and image-to-video. Its popularity already spawned a ControlNet-Union extension from Alibaba-PAI. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,250 | 18,705 | MiniMax extends into music generation with a diffusion-based text-to-music model. Despite modest download counts, 1,250 likes indicate strong early creative-community interest. |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 164 | 3,640 | A lightweight 0.1B-parameter TTS preview using the ArkTTS architecture. Its tiny footprint targets on-device or low-latency speech synthesis. |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 156 | 2,682 | A native any-to-any multimodal model built on a Mixture-of-Transformers (MoT) architecture. It stands out as one of the few genuinely omni-modal (not just vision-language) releases this week. |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 125 | 2,194 | A ControlNet-Union adapter for MiniMax-H3 enabling structured/conditional video control. Its emergence days after MiniMax-H3's release shows how fast tooling builds around popular video base models. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 244 | 3,474 | A compact Qwen3-based ASR model targeting efficient transcription workloads. Downloads are modest so far, but the small footprint suits low-resource deployment. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 227 | 64,984 | Applies DFlash2 speculative decoding to Qwen3.8-27B to accelerate inference without retraining. One of two independent DFlash2 implementations trending simultaneously for this model. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 181 | 105,786 | Incoai's own DFlash2 speculative-decoding build for Qwen3.8-27B, out-downloading the z-lab equivalent. Two competing DFlash2 builds highlight fast community iteration on inference-speed tooling. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,933 | 7,334,695 | Unsloth's official GGUF quantization of Qwen3.8-27B leads the entire list with 7.3M downloads. It's the go-to format for running the new base model efficiently via llama.cpp. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 769 | 389,747 | An abliterated build of Qwen3.8-27B distributed in MLX, safetensors, and GGUF formats. Multi-format packaging makes it convenient across Apple Silicon and server deployments. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,111 | 68,855 | An MLX-formatted abliterated variant of Qwen3.8-27B optimized for Apple Silicon. Part of orcarouter's broader multi-format "Uncensored" release series. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,156 | 249,744 | FP8-quantized abliterated Qwen3.8-27B, balancing reduced memory footprint with near-full precision. Higher downloads than its MLX sibling suggest stronger demand for GPU-server deployment. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 628 | 832,185 | A GGUF build combining abliteration with "Aggressive MTP" multi-token-prediction tuning for faster generation. Its 832K downloads show real demand for speed-optimized uncensored variants. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 301 | 1,156,903 | GGUF quantization of the Ornith-1.5 35B MoE model, already exceeding 1.1M downloads. Strong uptake versus the safetensors original reflects typical preference for local-inference-ready formats. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 730 | 1,525,645 | A llama.cpp-compatible abliterated GGUF of Qwen3.8-27B with MTP support, among the most-downloaded uncensored variants at 1.5M. Reinforces GGUF as the dominant distribution format for community fine-tunes. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 454 | 154,225 | Orcarouter's GGUF release completing its MLX/FP8/GGUF trio of Qwen3.8-27B uncensored builds. Offering all three formats from one author gives users deployment flexibility. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,476 | 0 | A community fix for broken chat templates in Qwen releases, distributed as MLX/jinja templates rather than weights. 1,476 likes with zero downloads shows how much friction template bugs cause at launch. |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 251 | 0 | A second, independent chat-template correction effort for Qwen models, competing with froggeric's fix. Two parallel repos reflect real deployment pain points following Qwen's release. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 204 | 1,144,037 | GGUF quantization of the smaller Ornith-1.5 9B model, pulling over 1.1M downloads — nearly matching its 35B sibling's quantized uptake. Confirms strong demand for locally runnable, MIT-licensed mid-size models. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 361 | 1,230,831 | Huihui-ai's well-known abliteration pipeline applied to Qwen3.8-27B and packaged as GGUF. Huihui is a recognized name in the abliteration community, lending credibility that drove 1.2M downloads. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 243 | 221,918 | DavidAU's heavily customized "Cold-Fusion GAIN" merge/training recipe applied to Qwen3.8-27B with MTP and unsloth tooling. The elaborate naming reflects a layered experimental pipeline distinct from simple abliteration. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 185 | 15,341 | The original unquantized safetensors release underlying orcarouter's MLX/FP8/GGUF uncensored variants. Lower downloads versus its quantized siblings show users prefer compressed formats over full precision. |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 127 | 2,319 | An aggressive 2-bit quantization of Qwen3.8-27B, pushing compression to the extreme for minimal-footprint deployment. Early-stage adoption reflects its niche, experimental-precision use case. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 279 | 735,183 | Another independent abliterated GGUF build ("Heretic") of Qwen3.8-27B, pulling 735K downloads. The sheer number of competing abliteration efforts for one base model highlights how in-demand uncensoring it has become. |

## Ecosystem Signal

Qwen3.8-27B's release has triggered a striking wave of derivative activity — 19 of the 30 trending repos are direct variants (quantizations, abliterated/uncensored builds, speculative-decoding wrappers, or chat-template fixes) of a single base model, dwarfing organic interest in competing families. This concentration signals both Qwen's growing mindshare and a maturing "day-one ecosystem" pattern: unsloth ships quantized GGUFs almost immediately, multiple independent groups (OBLITERATUS, orcarouter, huihui-ai, 0bserverx, DavidAU) race to abliterate safety filters, and community members patch chat-template bugs within days. Open-weight momentum remains dominant — DeepSeek-V4-Flash, Kimi-K3, and the Ornith-1.5 family all ship openly licensed checkpoints with immediate GGUF support, reinforcing local-inference culture. Video/audio generation is a secondary but active front, led by MiniMax (H3, Music3) and Lightricks LTX-2.5, with adapters like ControlNet-Union appearing almost as fast as the base models. Notably, GGUF remains the default distribution format for community derivatives, consistently out-pulling safetensors originals in downloads — evidence that llama.cpp-based local inference, not cloud API usage, drives most of this week's trending activity.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the base model underlying nearly two-thirds of this week's trending list; understanding its architecture and capabilities is prerequisite context for the entire ecosystem snapshot.
2. **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** — one of the only genuinely native any-to-any multimodal releases here (versus vision-language bolt-ons), worth studying for its Mixture-of-Transformers approach.
3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — the single most-downloaded model in the list (7.3M); the clearest reference point for how the community actually deploys Qwen3.8-27B in practice.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
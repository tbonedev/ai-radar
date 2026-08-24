# Hugging Face Trending Models Digest 2026-08-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-24 07:54 UTC

---

# Hugging Face Trending Models Digest — 2026-08-24

## Today's Highlights

Qwen's new **Qwen3.8-27B** multimodal model dominates this week's list, spawning over a dozen community derivatives — GGUF/MLX/FP8 quantizations and a striking wave of "abliterated"/uncensored variants — within days of release. DeepSeek and Moonshot AI both shipped flagship updates (**DeepSeek-V4-Flash/Pro** and **Kimi-K3**), each pulling millions of downloads. MiniMax expanded its generative lineup with a video model (**MiniMax-H3**) and a new music-generation model (**MiniMax-Music3**), while Lightricks' **LTX-2.5** pushes multi-modal video diffusion further. The new **Ornith-1.5** family from ornith-ai (9B and 35B-A3B MoE, plus GGUF quants) emerged as a notable open contender trending across its full size range simultaneously.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,372 | 2,358,347 | Qwen's newest flagship multimodal model on the qwen3_5 architecture, supporting image-text-to-text conversational use. It's the highest-liked release this week and the root of nearly all downstream derivative activity. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 372 | 23,516 | A qwen3_5_moe mixture-of-experts model with image-text-to-text support. It anchors a fast-growing family that's trending simultaneously with its 9B sibling and GGUF quants. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 187 | 31,496 | The smaller 9B member of the Ornith-1.5 family, sharing the qwen3_5 architecture. Its co-trending with the 35B-A3B model suggests broad interest across the whole size range. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,657 | 3,089,709 | DeepSeek's fast/distilled V4 conversational model. Nearly 3.7K likes and over 3M downloads point to strong adoption as a lighter-weight production option. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 738 | 57,928 | The higher-capability Pro tier of DeepSeek's V4 line, released shortly after Flash. Its lower download count suggests it's newer and still ramping up adoption. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,952 | 2,727,920 | Moonshot AI's flagship Kimi-K3 model with compressed-tensors support for efficient serving. Nearly 11K likes and 2.7M downloads make it one of the two biggest official releases this week alongside Qwen3.8-27B. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,659 | 738,345 | A versatile video diffusion model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video in one single-file checkpoint. Its breadth of supported modalities is driving strong adoption. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,215 | 17,421 | MiniMax's third-generation text-to-music diffusion model. It signals MiniMax's push beyond text/video into a growing but still-niche music-generation category. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,391 | 4,039,236 | MiniMax's image-text-to-video diffusion model supporting both text-to-video and image-to-video generation. With 4,391 likes and over 4M downloads, it's the most popular video-generation model this week. |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 167 | 0 | A latent upscaler companion tool built for MiniMax-H3 output. Its trending status despite zero downloads reflects the broader MiniMax-H3 ecosystem's momentum. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 217 | 2,280 | A compact ASR (speech recognition) model built on the qwen3 text-generation architecture. Its small footprint suggests a targeted on-device or low-latency transcription use case. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 208 | 36,234 | A speculative-decoding draft model paired with Qwen3.8-27B to accelerate inference. Its appearance so soon after the base model shows inference-efficiency tooling shipping in near lockstep with new releases. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 166 | 69,783 | A second, independently trained DFlash2 speculative-decoding variant for Qwen3.8-27B. Two competing implementations appearing simultaneously highlights active experimentation with this technique. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,759 | 6,674,515 | Unsloth's official GGUF quantization of Qwen3.8-27B for llama.cpp inference. Its 6.67M downloads — the highest of any derivative — make it the go-to local-inference format for the new base model. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 979 | 47,098 | An abliterated ("uncensored") MLX build of Qwen3.8-27B for Apple Silicon. Part of a wave of guardrail-removed variants appearing within days of the base model's release. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 650 | 244,834 | A multi-format (MLX, safetensors, GGUF) abliterated release of Qwen3.8-27B. Broad format coverage in one repo helped it draw 244,834 downloads quickly. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,057 | 190,062 | An FP8-quantized abliterated variant of Qwen3.8-27B, from the same author behind several other uncensored builds. FP8 packaging targets efficient GPU serving of the guardrail-removed model. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 548 | 676,697 | An aggressively abliterated GGUF quant with multi-token prediction (MTP) support for Qwen3.8-27B. Nearly 676,697 downloads show real demand for uncensored, speed-optimized local builds. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 658 | 1,334,820 | Another community GGUF quantization of uncensored Qwen3.8-27B, built for llama.cpp with MTP tagging. Over 1.33M downloads make it one of the most-downloaded uncensored variants. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 386 | 108,666 | orcarouter's own GGUF release of its uncensored Qwen3.8-27B, complementing its MLX and FP8 versions. The same author now covers three major serving formats for the abliterated model. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 260 | 369,478 | Official GGUF quantization of the Ornith-1.5-35B-A3B MoE model. With 369,478 downloads, it extends the Ornith family's reach to local/CPU inference setups. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,431 | 0 | A small utility repo providing corrected Jinja chat templates for Qwen models. Its 1,431 likes despite zero downloads suggest it's a bookmarked reference fix rather than a downloadable weight repo. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 310 | 943,360 | A GGUF-quantized abliterated build of Qwen3.8-27B from huihui-ai, a well-known publisher of uncensored model conversions. Nearly 943,360 downloads reflect the popularity of this abliteration lineage. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 214 | 193,794 | A heavily customized merge/fine-tune ("Cold Fusion" with "GAIN Training") of Qwen3.8-27B in GGUF format. The experimental naming reflects DavidAU's pattern of aggressive community model-merging. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 180 | 359,078 | GGUF quantization of the smaller Ornith-1.5-9B model. With 359,078 downloads, it rounds out full-format coverage for the Ornith-1.5 family. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 674 | 2,653,678 | Qwen's own official FP8 quantization of its flagship model. Backed by the original publisher, it has already drawn 2,653,678 downloads, nearly matching the full-precision release. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 250 | 131,435 | A quantized, llama.cpp-ready GGUF build of Qwen3.8-27B from empero-ai. Represents the many independent quantization efforts converging on the same base model within days of launch. |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 202 | 0 | Another community-maintained set of fixed Jinja chat templates for Qwen models. Its appearance alongside froggeric's similar repo shows chat-template compatibility is a recurring pain point for this model family. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 264 | 24,844 | The safetensors (non-quantized) version of huihui-ai's abliterated Qwen3.8-27B, feeding the GGUF conversion above. Serves as the base for further community requantization. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 249 | 579,334 | Yet another abliterated GGUF release, branded "Heretic," for Qwen3.8-27B. With 579,334 downloads, it underscores how many independent teams are racing to strip safety guardrails from this one model. |

## Ecosystem Signal

The week is defined by an unusually intense "quantize-and-abliterate" race around a single model, Qwen3.8-27B: within days, at least nine independent groups (unsloth, orcarouter, OBLITERATUS, HauhauCS, JonathanColetti, huihui-ai, DavidAU, empero-ai, 0bserverx) published GGUF, MLX, or FP8 derivatives, several explicitly stripping safety guardrails ("uncensored," "abliterated," "Heretic"). This reflects both the model's permissive open-weight license and a maturing, highly parallelized community tooling pipeline (llama.cpp, MLX, unsloth) able to convert a new release into dozens of formats almost immediately. DeepSeek and Moonshot AI continue shipping large open-weight flagships (V4-Flash/Pro, Kimi-K3) that rival closed models, reinforcing the narrowing open-weight-vs-proprietary gap at the frontier. Two independent speculative-decoding (DFlash2) draft models appearing the same week as the base model show inference-efficiency tooling now shipping in near lockstep with new releases. Two separate chat-template fix repos also point to recurring tokenizer/template friction whenever a new Qwen architecture drops.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the actual driver of this week's ecosystem activity; understanding the qwen3_5 architecture directly is more valuable than evaluating any single derivative.
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the most-downloaded video-generation model this week (4M+); worth benchmarking for image/text-to-video quality.
3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — a strong open-weight alternative to closed frontier models, worth testing for cost-efficient production deployment given its download lead over the Pro tier.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
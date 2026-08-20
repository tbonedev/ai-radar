# Hugging Face Trending Models Digest 2026-08-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-20 07:37 UTC

---

Generating the digest from the provided HF trending data now.

## Today's Highlights

Qwen's **Qwen3.8-27B** flagship release dominates today's board with 11,564 likes and over 1M downloads, and has already spawned an entire downstream ecosystem — six-plus GGUF/FP8/NVFP4/MLX quantizations and abliterated fine-tunes from unsloth, orcarouter, huihui-ai, Blackfrost-AI, and others appear in the same 24-hour window. DeepSeek keeps pace with two simultaneous V4 releases (Pro and Flash), while Moonshot's **Kimi-K3** (10,867 likes) shows Chinese open-weight labs continuing to compete head-to-head at the top of the chart. MiniMax pushes into generative media on two fronts — **MiniMax-Music3** for music generation and **MiniMax-H3** for image/text-to-video, the latter already the base for a ComfyUI package pulling over 15M downloads. The volume of same-day "uncensored"/"abliterated" derivatives of Qwen3.8-27B is the standout pattern: restriction-removal has become a near-instant, routine step in the open-weight release cycle rather than a fringe activity.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 656 | 37,583 | The higher-capability member of DeepSeek's new V4 line, aimed at frontier-level text generation. Early adoption is modest relative to downloads but likes suggest developer interest is just ramping up. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,108 | 12,699 | A massive 2.4T-parameter mixture-of-experts (95B active) text-generation model, the largest Qwen3.8-family checkpoint on the board. It's trending as the research-grade upper bound of the Qwen3.8 release rather than a deployment target. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,560 | 2,330,940 | The fast/cheap counterpart to DeepSeek-V4-Pro, already at 2.3M downloads versus Pro's 37K. Its download-to-like ratio signals it's being adopted heavily as a low-latency production default. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 238 | 1,239 | A preview checkpoint from the dots3 text-generation family. Still early-stage with low download volume, it's trending mainly on novelty as a preview release. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,564 | 1,006,235 | The flagship Qwen3.8 vision-language conversational model and today's single most-liked release. It's the base checkpoint behind virtually every quantization and fine-tune elsewhere on this board. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,060 | 13,138 | A text-to-music diffusion model, MiniMax's third-generation music generator. Downloads are still low but it's already spawned a dedicated ComfyUI packaging, suggesting fast tooling uptake. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,350 | 555,993 | A single-file diffusion model supporting image-to-video, text-to-video, and video-to-video in one checkpoint. Its broad task coverage and 556K downloads make it a go-to general-purpose video generator. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,196 | 3,055,205 | MiniMax's image-text-to-video model, with over 3M downloads it's one of the most heavily adopted video-generation checkpoints today. It's already the base model for multiple community turbo and finetune variants. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,710 | 430,313 | A 30B conversational vision-language model from a new "meta-models" publisher. Solid early download numbers position it as a potential alternative to the Qwen3.8 line for multimodal chat. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,867 | 2,289,863 | Moonshot AI's latest Kimi generation, trending near the top of the board with 10,867 likes and 2.3M downloads. Its compressed-tensors packaging indicates an emphasis on efficient deployment at scale. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 275 | 26,566 | A compact 2.9B text-to-image diffusion model built for ComfyUI workflows. Its small size makes it notable as an accessible, low-resource alternative to larger image generators on this list. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,170 | 4,318,134 | unsloth's GGUF quantization of Qwen3.8-27B is the single most-downloaded model on the entire board at 4.3M. It's the de facto standard for running the flagship model locally via llama.cpp. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 613 | 1,063,646 | Qwen's own official FP8 quantization of the flagship model, matching the base model's download volume. Its official provenance makes it the trusted choice for FP8-capable GPU deployment. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 633 | 60,078 | An abliterated FP8 variant of Qwen3.8-27B with safety guardrails removed. One of three orcarouter uncensored releases (FP8/MLX/GGUF) shipped simultaneously across quantization formats. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 641 | 27 | The MLX-format counterpart of orcarouter's uncensored Qwen3.8-27B, targeting Apple Silicon inference. Very low download count reflects the smaller Apple-hardware-only audience for MLX builds. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 480 | 766,812 | Another uncensored GGUF quantization of Qwen3.8-27B, with a notably high 766K downloads for a community release. Its "mtp" tag indicates multi-token-prediction support for faster inference. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 319 | 131,113 | A more aggressively abliterated GGUF fine-tune with multi-token-prediction enabled. Part of the rapid post-release wave of restriction-removed Qwen3.8-27B derivatives. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 299 | 653,042 | unsloth's NVFP4 quantization targeting NVIDIA's newest low-precision format. 653K downloads show strong demand for cutting-edge hardware-optimized quantization even shortly after release. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,308 | 0 | A utility release patching broken Jinja chat templates for the Qwen3.5/3.8 family rather than a model weights release. High likes with zero downloads reflect its role as a reference fix rather than a downloadable artifact. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 208 | 32,454 | A llama.cpp-quantized "Ridge" fine-tune of Qwen3.8-27B. Modest but steady adoption places it among the smaller entrants in the crowded Qwen3.8 GGUF field. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 201 | 325,083 | A ComfyUI-packaged single-file build of MiniMax-Music3 for local diffusion workflows. 325K downloads versus the base model's 13K shows most users access the model via ComfyUI rather than raw weights. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 292 | 0 | A community finetune of MiniMax-H3 for text/image-to-video generation. Zero downloads with nonzero likes suggests it's newly listed and still gaining traction. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 633 | 340,984 | A distilled "Turbo" acceleration of MiniMax-H3 supporting text-, image-, and reference-to-video. 341K downloads indicate real demand for faster inference over the full-size base model. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 207 | 26,472 | orcarouter's fourth uncensored Qwen3.8-27B format release (GGUF), completing their FP8/MLX/GGUF trio. Lower relative traction than their other formats suggests GGUF users gravitated to competing releases. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 182 | 94,234 | huihui-ai's well-known abliteration pipeline applied to Qwen3.8-27B and packaged as GGUF. huihui-ai is one of the most consistent abliteration publishers, appearing across multiple model generations. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 176 | 164,263 | A dense 27B abliterated GGUF release with a comparatively high 164K downloads. Its "dense" tag distinguishes it from MoE-based Qwen3.8 variants circulating elsewhere. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 172 | 245,266 | Uses the "Heretic" abliteration method on Qwen3.8-27B, packaged as GGUF. 245K downloads make it one of the better-adopted uncensored variants despite a modest like count. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,172 | 3,033,363 | A heavily-merged, multi-technique fine-tune (Heretic abliteration plus DavidAU's custom fusion stack) of the prior Qwen3.6-27B generation, with a striking 3M+ downloads. Its scale shows DavidAU's merge-heavy GGUF releases remain among the most-adopted community fine-tunes regardless of base-model generation. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 179 | 7,207 | The unquantized safetensors counterpart to huihui-ai's GGUF abliterated release. Lower downloads versus its GGUF sibling reflect the smaller audience running full-precision weights directly. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,454 | 15,213,225 | The ComfyUI single-file packaging of MiniMax-H3, and the highest-download entry on the entire board at over 15M. It dwarfs the base model's own download count, underscoring ComfyUI as the dominant distribution channel for video-generation models. |

## Ecosystem Signal

Chinese open-weight labs — Qwen, DeepSeek, MiniMax, Moonshot, and dots-studio — occupy nearly the entire trending board today, with Western presence limited to tooling and packaging layers (unsloth, Comfy-Org, Lightricks). Qwen3.8-27B is the clear gravitational center: roughly two-thirds of today's list is a direct quantization or fine-tune of it, spanning GGUF, FP8, and NVFP4 formats plus an MLX build for Apple Silicon — evidence that hardware-target diversity, not just model capability, now drives release volume. The most striking signal is how routine "uncensoring" has become: within roughly a week of Qwen3.8-27B's release, at least seven independent publishers (orcarouter, JonathanColetti, HauhauCS, empero-ai, huihui-ai, Blackfrost-AI, 0bserverx, DavidAU) shipped abliterated variants — a now-standardized step in the open-weight lifecycle rather than a niche practice. Generation modalities are also active outside text: MiniMax's music and video models are being redistributed almost entirely through ComfyUI packages, whose download counts vastly exceed the base checkpoints, showing tooling-layer distribution now outweighs raw weight downloads for diffusion-class models.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the flagship base model driving nearly the entire board; worth benchmarking directly before evaluating any derivative.
2. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — the most-downloaded model today (4.3M); the practical default for local inference of the flagship checkpoint.
3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — a top-tier image-text-to-video model with 3M+ direct downloads and a 15M-download ComfyUI packaging, making it worth studying both as a model and as a case study in tooling-driven adoption.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
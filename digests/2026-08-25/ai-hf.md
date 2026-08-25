# Hugging Face Trending Models Digest 2026-08-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-25 07:40 UTC

---

# Hugging Face Trending Models Digest — 2026-08-25

## 1. Today's Highlights

Qwen's new natively multimodal **Qwen3.8-27B** dominates this week's chart with 12,563 likes and has already triggered a wave of community re-releases — official and third-party quantizations (FP8, GGUF, MLX) plus more than a dozen "abliterated"/uncensored forks from orcarouter, huihui-ai, JonathanColetti, HauhauCS, and OBLITERATUS. DeepSeek countered with two tiered flagship drops, **DeepSeek-V4-Flash-0731** and **DeepSeek-V4-Pro-0813**, while newcomer **ornith-ai** debuted its Ornith-1.5 family (9B and a 35B MoE variant). On the generative-media side, MiniMaxAI shipped both a video model (**MiniMax-H3**, 4,434 likes) and a music model (**MiniMax-Music3**), and Lightricks advanced video diffusion with **LTX-2.5**. The sheer volume of Qwen3.8-27B derivatives — and the parallel emergence of speculative-decoding accelerators (DFlash2) — signals a community racing to both uncensor and speed up the week's dominant open-weight release.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,563 | 2,645,226 | Qwen's flagship natively multimodal chat model, combining image-text-to-text understanding in a 27B footprint. It tops this week's trending chart by a wide margin and has already spawned over a dozen community forks and quantizations. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,690 | 3,274,129 | A fast, lower-latency variant of DeepSeek's V4 conversational model line. Its 3.27M downloads against 3,690 likes suggest heavy production/API usage rather than casual experimentation. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 407 | 60,294 | A 35B mixture-of-experts (A3B active params) multimodal text-generation model from newcomer ornith-ai. It's trending as an emerging open-weight alternative, already accompanied by its own GGUF conversion. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 749 | 63,058 | The higher-capability "Pro" tier of DeepSeek's V4 lineup, released two weeks after the Flash variant. It rounds out DeepSeek's strategy of pairing a fast model with a stronger flagship. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 205 | 83,192 | The smaller 9B sibling in the Ornith-1.5 family, offering multimodal image-text-to-text capability at a more deployable size. Its rapid GGUF quantization indicates early community interest in running it locally. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,434 | 4,465,161 | An image-and-text-to-video diffusion model built on the minimax-h3 architecture. Its 4.46M downloads make it one of the most-adopted video generation models on the platform this week. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,739 | 790,378 | A versatile video diffusion model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video generation in one checkpoint. Its multi-modality range makes it a flexible pick for creative video pipelines. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,233 | 18,065 | A text-to-music diffusion model, the third generation of MiniMax's dedicated music-generation line. It's trending as one of the few specialized music-generation models to break into the top charts. |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 139 | 2,144 | An 8B any-to-any native multimodal model using a Mixture-of-Transformers (MoT) architecture. Its early but growing traction reflects interest in unified any-to-any generation approaches. |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 149 | 2,775 | A compact 0.1B-parameter text-to-speech preview model. Its small footprint targets lightweight, edge-friendly TTS deployment. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 230 | 2,976 | A compact Qwen3-based automatic speech recognition (ASR) model. It's trending as a lightweight transcription option built on a proven text-generation backbone. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 219 | 50,763 | A speculative-decoding acceleration variant of Qwen3.8-27B using the DFlash2 method. It targets faster inference throughput for the newly-released flagship model. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85,034 | A second, independent DFlash2 speculative-decoding implementation for Qwen3.8-27B. Its higher download count than z-lab's version suggests better throughput or easier integration. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,860 | 7,009,063 | Unsloth's official GGUF quantization of Qwen3.8-27B for llama.cpp-based local inference. It's the most-downloaded model in the entire trending set at over 7 million downloads. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,107 | 224,114 | An abliterated ("uncensored") FP8-quantized version of Qwen3.8-27B for fast GPU inference. It's one of four orcarouter uploads of the same abliterated model in different formats. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,049 | 57,947 | The Apple Silicon MLX build of orcarouter's abliterated Qwen3.8-27B. It caters to the growing base of local-inference users on Mac hardware. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,453 | 0 | A community patch providing corrected Jinja chat templates for Qwen models. Its 1,453 likes with zero downloads show it's referenced/starred as a fix rather than downloaded as weights. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 698 | 1,456,700 | Another independent abliterated GGUF conversion of Qwen3.8-27B with multi-token prediction (MTP) support. Its 1.46M downloads show strong demand despite competing against many uncensored forks. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 706 | 312,627 | A multi-format (MLX, safetensors, GGUF) abliterated release of Qwen3.8-27B bundled in a single repo. Offering three formats at once helped it accumulate 312K+ downloads quickly. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 686 | 3,004,940 | Qwen's own official FP8 quantization of the flagship Qwen3.8-27B, offering a reduced memory footprint with minimal accuracy loss. Over 3M downloads reflect strong first-party trust versus community forks. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 591 | 761,975 | An aggressively-tuned abliterated GGUF build of Qwen3.8-27B with multi-token prediction for faster generation. It combines uncensoring with a speed-oriented decoding tweak. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 429 | 143,108 | The GGUF format of orcarouter's abliterated Qwen3.8-27B, completing its trio of MLX/FP8/GGUF releases. It broadens local-inference access across hardware types. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 342 | 1,140,375 | huihui-ai's well-known abliteration pipeline applied to Qwen3.8-27B and packaged as GGUF. huihui-ai is a repeat trending contributor for uncensoring major model releases. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 278 | 988,170 | The GGUF quantization of ornith-ai's new 35B MoE Ornith-1.5 model. Nearly 1M downloads just days after the base model's release shows fast community quantization turnaround. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 281 | 27,316 | The unquantized safetensors version of huihui-ai's abliterated Qwen3.8-27B. It serves as the base for further community requantization. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 264 | 162,580 | A custom-tuned "Ridge" GGUF variant of Qwen3.8-27B for llama.cpp inference. It's one of several differentiated community quantizations competing for local-inference users. |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 236 | 0 | Another community-maintained chat-template fix repo for Qwen models. Its zero downloads alongside real likes confirms it's consumed as a reference/config rather than downloaded weights. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 231 | 209,017 | A heavily-branded experimental merge/fine-tune of Qwen3.8-27B using DavidAU's "GAIN" training method and MTP, packaged as GGUF. It represents the long tail of community experimentation atop the new flagship. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 190 | 971,104 | GGUF quantization of the smaller Ornith-1.5-9B model. Its near-971K downloads outpace the base model itself, underscoring demand for local-runnable formats. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 173 | 10,482 | The base unquantized safetensors release of orcarouter's abliterated Qwen3.8-27B. It anchors the three other format-specific uploads (MLX, FP8, GGUF) from the same author. |

## 3. Ecosystem Signal

The week is dominated by a single release: Qwen's multimodal Qwen3.8-27B, which triggered an immediate explosion of derivative work — official FP8 quantization, Unsloth's GGUF (7M+ downloads), and a dozen-plus independent "abliterated"/uncensored forks from orcarouter, huihui-ai, JonathanColetti, HauhauCS, and OBLITERATUS, each racing to ship MLX, FP8, and GGUF variants within days. This pattern — one strong open-weight base model spawning a swarm of uncensoring and requantization efforts — is now the dominant activity signature on HF Trending, arguably outweighing genuinely new model families in sheer entry count. Open-weight momentum continues elsewhere too: DeepSeek's tiered V4-Flash/V4-Pro releases and newcomer ornith-ai's Ornith-1.5 line both received community GGUF conversions within days of launch. No proprietary/closed model appears anywhere in the list, reinforcing that open-weight releases remain the primary driver of HF engagement. Generative media diversified beyond text: MiniMax shipped both video (H3) and music (Music3) models, Lightricks advanced video diffusion, and lightweight speech models (Audio8 TTS, superwhisper ASR) point to growing interest in small, deployable audio models alongside inference-acceleration work like DFlash2 speculative decoding.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the anchor model of the week; understanding its native multimodal architecture explains the entire derivative ecosystem (quantizations, abliterations, accelerators) it spawned.
2. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — the most-downloaded artifact in the set (7M+); the practical starting point for anyone wanting local inference with minimal setup.
3. **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — a genuinely new MoE architecture from an emerging lab, worth studying as a potential open-weight competitor rather than another Qwen derivative.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
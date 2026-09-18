# Hugging Face Trending Models Digest 2026-09-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-18 12:02 UTC

---

# Hugging Face Trending Models Digest — 2026-09-18

## 1. Today's Highlights

The day is dominated by **Qwen/Qwen3.8-27B**, which has become the reference checkpoint of the cycle — over 15,500 likes and 7.3M downloads have already spawned a full derivative ecosystem (GGUF quants, "Swift" and "Turbo" fine-tunes, novel mixed-precision compression). DeepSeek and Zhipu both shipped Flash-tier multimodal chat models (**DeepSeek-V4.1-Flash**, **GLM-5.3-Flash**), continuing the trend of fast, vision-capable checkpoints from major Chinese labs. Video generation is heating up with **Lightricks/LTX-2.5** and **MiniMax-H3**, the latter already spawning a community remix within days. Notably, **unsloth's GGUF quant of Qwen3.8-27B** has *outdownloaded* the original model, underscoring how strong local-inference demand has become. Meanwhile, legacy infrastructure — **gpt2** (15.4M downloads) and **all-MiniLM-L6-v2** (255M+ downloads) — remains as dominant as any new release.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,363 | 52,519 | A 35B MoE model on the Qwen3.5 architecture, packaged in MLX for on-device edge inference. Its edge-focused design is drawing early adopters wanting to run large MoE checkpoints locally. |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,095 | 429,865 | DeepSeek's flagship Flash-tier vision-language chat model. It leads DeepSeek's push into fast, multimodal deployment with nearly 430K downloads in short order. |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,594 | 7,358,662 | The breakout release of the day, with over 15,500 likes and 7.3M downloads far ahead of everything else here. It has already become the base for a cluster of community quantizations and fine-tunes. |
| [NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 2,359 | 22,666 | A compact 4B agentic text-generation model on the Qwen3.5 text backbone. Its agentic tagging suggests tool-use and multi-step task tuning in a small footprint. |
| [Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 418 | 6,293 | An inference-optimized "Swift" variant of Qwen3.8-27B retaining image-text-to-text ability. It's an early sign of community speed-tuning just days after the base release. |
| [MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,552 | 357,166 | openbmb's latest MiniCPM release, a 2B llama-architecture model continuing the line's focus on efficient small-scale deployment. Over 357K downloads show sustained demand for compact LLMs. |
| [Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 405 | 3,073 | A 29B conversational model on a custom xing4_0 architecture. Still early in adoption, it's a newer entrant in the crowded large-conversational-model space. |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,388 | 724,142 | Tagged `qwen4_exp`, this looks like an early preview of Qwen's next-generation architecture in Flash form. With 5,388 likes, it's generating strong interest as a glimpse past Qwen3.5. |
| [Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,707 | 5,934,139 | Meta's evergreen 8B instruction-tuned model remains a top performer with nearly 5.9M downloads. Its staying power underscores its role as a default fine-tuning and benchmarking baseline. |
| [Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 220 | 1,357 | A conversational text-generation model on Agnes-AI's own architecture. Early-stage adoption marks it as a newer entrant worth watching. |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,139 | 15,439,333 | OpenAI's original GPT-2 keeps racking up downloads (15.4M) years after release. Its persistence in trending lists shows legacy models remain infrastructure even amid frontier launches. |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,270 | 29,684 | A 4B general-purpose LLM under the spark2_5 architecture. Modest but growing traction positions it as a mid-tier small-model alternative. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,440 | 2,669,173 | Zhipu's latest Flash-tier multimodal chat model in the GLM5-Next line. With 2.67M downloads, it continues the trend of fast, low-latency vision-language chat from Chinese labs. |
| [NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 884 | 10,746 | The larger 9B sibling of TokenRhythm's agentic NeoHorse-1 line, also on the Qwen3.5 text backbone. Its release alongside the 4B variant shows a deliberate full-size lineup strategy. |
| [Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 156 | 711 | InternLM's preview model on a novel `glm_moe_dsa` architecture, linked to a fresh arXiv paper. Bilingual (zh/en) support points to continued focus on Chinese-English capability parity. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,273 | 1,590,087 | A single-file diffusion checkpoint supporting image-to-video, text-to-video, and video-to-video generation. With 1.59M downloads, it's one of the most-adopted dedicated video generators here. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,438 | 4,449,605 | MiniMax's H3 model spans image-text-to-video, text-to-video, and image-to-video generation via diffusers. It tops the video/generation category by engagement and has already spawned a community remix. |
| [Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 486 | 217,900 | A community variant of MiniMax-H3 focused on video generation, released just days after the base model. Its quick emergence shows how fast the community iterates on new video-gen flagships. |
| [YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 766 | 13,668 | A 3B music-generation model combining symbolic planning with agentic editing for iterative composition refinement. It's a technically distinctive niche entrant drawing interest from the music-AI community. |
| [AuK](https://huggingface.co/tencent/AuK) | tencent | 295 | 3,184 | Tencent's zero-shot text-to-speech model supports voice cloning without per-speaker fine-tuning. Its steady traction reflects continued demand for production-ready TTS from major labs. |
| [ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 178 | 1,802 | A 9B vision-language model explicitly tuned for spatial reasoning, positioning it for robotics- or embodied-AI-adjacent tasks. It tackles a weak spot most chat-focused VLMs ignore. |
| [YuE2 (ComfyUI)](https://huggingface.co/Comfy-Org/YuE2) | Comfy-Org | 176 | 102,247 | A ComfyUI-packaged, diffusion-single-file build of m-a-p's SheetSage2 music model. Over 102K downloads show real demand for ComfyUI-native music/audio generation nodes. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,055 | 255,050,544 | The de facto standard sentence-embedding model, with an astonishing 255M+ downloads reflecting use as a dependency across countless RAG and search pipelines. Its dominance shows embeddings infrastructure is far stickier than any single generative release. |
| [Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 337 | 0 | A 1B Qwen-2.5 fine-tune packaged for Apple Silicon (MLX) showcasing structured, constrained, and parallel decoding techniques. Zero recorded downloads alongside real likes suggests it's being watched as a technique demo rather than adopted in production. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,297 | 7,628,907 | Unsloth's GGUF quantization of the breakout Qwen3.8-27B, already outpacing the base model in downloads (7.6M vs. 7.4M). It's clear evidence that local/llama.cpp demand for Qwen3.8-27B exceeds even original-format adoption. |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,285 | 1,078,301 | A research-grade quantization of Qwen3.8-27B using a novel GSQ-RCO mixed-precision scheme from a group known for cutting-edge compression research. Over 1M downloads suggest the method itself is compelling adoption beyond typical academic releases. |
| [Qwen3.8-27B-TURBO-...-Heretic-Uncensored-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 870 | 1,197,378 | An elaborately-named community "uncensored" fine-tune and GGUF quant stack built on Qwen3.8-27B, blending several unsloth-based tuning passes. Nearly 1.2M downloads show strong demand for unrestricted, locally-runnable variants of the newest flagship. |
| [Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 610 | 405,609 | A 27B model quantized to ternary (2-bit) precision for llama.cpp, pushing extreme compression to run large models on modest hardware. Over 405K downloads highlight growing appetite for ultra-low-bit quantization. |
| [DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 276 | 33,065 | An uncensored FP8-quantized variant of DeepSeek's flagship V4.1 Flash, released quickly after the base checkpoint. It reflects the familiar pattern of alignment-stripped derivatives fast-following major lab releases. |
| [Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 259 | 100,177 | A GGUF build of ukisai's efficiency-tuned "Swift" Qwen3.8-27B variant. Over 100K downloads show the fast-follow ecosystem around Qwen3.8-27B extends beyond raw quantization into efficiency-focused tuning. |

## 3. Ecosystem Signal

Qwen3.8-27B is the clear center of gravity this cycle: within days it has generated at least six derivative repos across quantization (GGUF, mixed-precision GSQ-RCO), efficiency tuning (Swift), and alignment-stripped fine-tunes (DavidAU's "Heretic" build) — a pattern that shows the community treats strong open-weight base models as platforms, not endpoints. Open-weight releases dominate the entire list; every flagship here (Qwen, DeepSeek, GLM, MiniMax, InternLM) ships weights openly, with no proprietary-only entries in sight. Quantization activity is unusually intense and diverse — GGUF remains the default, but ternary 2-bit (prism-ml) and research-grade mixed-precision (ISTA-DASLab) both appear, suggesting compression research is moving from academic papers into immediately-downloadable artifacts. Uncensored fine-tunes now ship within days of flagship releases (DeepSeek and Qwen both saw "uncensored" derivatives), a now-routine part of the open-weight lifecycle. Meanwhile, video generation (Lightricks, MiniMax) and legacy infrastructure (gpt2, MiniLM) show that both frontier generation and foundational utility models coexist at the top of the charts.

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear hub of this cycle's ecosystem; understanding it explains most of the quantization and fine-tune activity elsewhere on the list.
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — worth studying for anyone interested in state-of-the-art mixed-precision quantization techniques rather than just running the model.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — the strongest open video-generation entrant this round, and already spawning community variants worth comparing against Lightricks' LTX-2.5.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
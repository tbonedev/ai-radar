# Hugging Face Trending Models Digest 2026-09-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-19 11:45 UTC

---

# Hugging Face Trending Models Digest — 2026-09-19

## Today's Highlights

Qwen's new **Qwen3.8-27B** dominates the board — it tops the likes ranking outright (15,700) and has already spawned at least five community derivatives (GGUF quantizations, MLX ports, and "Swift" distillations) within the same trending window, a sign the release lit up the fine-tuning ecosystem instantly. DeepSeek countered with **DeepSeek-V4.1-Flash**, a vision-capable "flash" tier model that's also already been uncensored and re-quantized to FP8 by third parties. Video and audio generation had a strong showing too, with Lightricks' **LTX-2.5** and MiniMax's **MiniMax-H3** both pulling multi-million download counts for image/text-to-video pipelines. Quantization innovation stood out this week: **prism-ml's Ternary-Bonsai-2-27B** pushes 2-bit ternary weights to 1.5M+ downloads, and ISTA-DASLab's GSQ-RCO mixed-precision GGUF shows continued research investment in extreme compression. Meanwhile, the long-tail is thick with small, focused releases — from spatial-reasoning VLMs to structured-decoding experiments — reflecting a maturing ecosystem where incremental, task-specific work is as visible as flagship launches.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 566 | 7,278 | A 29B mixture-of-experts (A4B active) conversational model from a newer Chinese lab entrant. Early traction despite modest downloads suggests niche community interest in its architecture. |
| [MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,576 | 389,555 | The latest in OpenBMB's small-but-capable MiniCPM line, built on a Llama-style backbone. It's trending as a lightweight, deployable alternative for on-device and edge text generation. |
| [Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,464 | 68,403 | A 35B Qwen3.5 MoE variant packaged for MLX and explicitly targeted at edge inference. Its likes-to-download ratio suggests strong interest ahead of a broader on-device rollout. |
| [Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,734 | 5,919,746 | Meta's evergreen 8B instruct model remains a top download draw nearly two years after release. It's trending as the default baseline fine-tuning target for countless downstream projects. |
| [Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 182 | 806 | A research preview from InternLM built on a GLM MoE-with-DSA architecture, backed by a fresh arXiv paper. Bilingual (zh/en) support and its very early download count mark it as a just-published research artifact worth watching. |
| [NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 910 | 11,692 | A 9B Qwen3.5-text-based model tagged explicitly for agentic workloads. Its likes outpacing downloads suggests it's newly published and gaining word-of-mouth before wide adoption. |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,282 | 30,215 | A compact 4B general-purpose LLM from a smaller lab, positioned as an efficient chat/completion model. Solid likes relative to its size class point to interest in lightweight deployable alternatives. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,246 | 482,270 | DeepSeek's fast-tier vision-language model, built on the new `deepseek_v41` architecture for image-text-to-text tasks. It's already spawned an uncensored FP8 community remix within the same week, signaling rapid ecosystem adoption. |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,700 | 7,365,368 | Qwen's flagship 27B vision-language release, topping this week's board with over 15K likes and 7.3M downloads. It has already anchored a cluster of GGUF, MLX, and distilled derivatives across multiple community authors. |
| [Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 463 | 8,761 | A "Swift" efficiency-focused distillation of Qwen3.8-27B for image-text-to-text use. Low download count relative to its GGUF sibling suggests it's a newer, safetensors-first release still gaining traction. |
| [YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 842 | 15,446 | A 3B symbolic music-generation model with agentic editing capabilities, the successor to the original YuE series. It stands out for combining symbolic planning with iterative, agent-driven music editing. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,374 | 1,607,815 | Lightricks' latest video diffusion model supports image-to-video, text-to-video, and video-to-video in a single-file checkpoint. Its 1.6M+ downloads reflect strong demand for accessible, single-file video generation tooling. |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,424 | 742,586 | A faster, next-gen variant of Qwen3.8 built on an experimental `qwen4_exp` architecture, hinting at Qwen4 groundwork. Strong early likes suggest the community is watching it as a preview of Qwen's next generation. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,476 | 4,299,737 | MiniMax's H3 video generation model handles both text-to-video and image-to-video via a dedicated diffusers pipeline. Its 4.3M downloads make it one of the most widely adopted video models this week, and it's already been remixed by the community. |
| [AuK](https://huggingface.co/tencent/AuK) | tencent | 317 | 3,355 | Tencent's zero-shot text-to-speech model supports voice cloning without speaker-specific fine-tuning. Early-stage download numbers reflect a fresh release still building adoption in the TTS space. |
| [ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 191 | 2,926 | A 9B vision-language model emphasizing spatial reasoning, a capability gap many VLMs still struggle with. Its niche focus explains modest but growing engagement. |
| [Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 236 | 1,474 | A fast-tier multimodal chat model from Agnes-AI's own architecture family. Very low download count marks it as a newly published release yet to see broad pickup. |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,466 | 2,905,932 | Z.ai's fast-tier GLM release built on the `glm5_next` architecture for conversational image-text-to-text use. Nearly 3M downloads against modest likes suggests heavy infrastructure/API integration rather than just community curiosity. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 411 | 0 | A 1B model showcasing constrained and parallel decoding techniques on Apple Silicon via MLX. Zero downloads with meaningful likes indicates it's a just-published technique demo rather than a production model. |
| [laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 272 | 0 | A text-classification model built around "calibrated decisions" and a "system-one" reasoning framing, likely for fast, low-latency classification tasks. Zero downloads suggest this is a brand-new upload still awaiting adoption. |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,075 | 254,149,235 | The long-standing default sentence-embedding model, still pulling an astonishing 254M+ downloads. Its cross-framework support (PyTorch, TF, Rust, ONNX) keeps it the go-to lightweight embedder for retrieval and semantic search pipelines. |
| [openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 172 | 0 | A cross-encoder NLI model built on a Qwen3.5 backbone for natural language inference tasks. Its zero-download, non-trivial-likes profile again points to a very fresh release generating early curiosity. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,060 | 1,516,960 | A 2-bit ternary GGUF quantization achieving 1.5M+ downloads, pushing extreme compression for llama.cpp deployment. It's a standout example of how far weight compression has come for 27B-class models. |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,384 | 1,154,265 | A research-grade GGUF quantization of Qwen3.8-27B using mixed-precision GSQ/RCO techniques. Over 1.1M downloads within days of the base model's release shows how fast the quantization pipeline moves for flagship models. |
| [Qwen3.8-27B-...-GGUF (DavidAU)](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 935 | 1,256,962 | An elaborately-named uncensored, Unsloth-based fine-tune/merge of Qwen3.8-27B in GGUF format. Its 1.25M downloads show the enduring demand for heavily customized, restriction-removed community merges. |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,345 | 7,118,363 | Unsloth's official GGUF quantization of Qwen3.8-27B is the single most-downloaded quantized artifact this week at 7.1M downloads. It's effectively become the default local-inference format for the new Qwen release. |
| [Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 293 | 120,740 | The GGUF/llama.cpp-ready quantization of ukisai's Swift-Qwen3.8-27b, emphasizing "efficient thinking." Strong downloads relative to its safetensors counterpart show quantized formats driving most real-world adoption. |
| [DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 295 | 34,230 | A community FP8 quantization of DeepSeek-V4.1-Flash with safety alignment removed. Its rapid appearance underscores how quickly derivative, restriction-stripped variants follow major model launches. |
| [Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 212 | 23,111 | The MLX/Apple-Silicon counterpart to prism-ml's ternary 2-bit quantization. It extends the same extreme-compression technique to on-device Mac inference. |
| [Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 511 | 231,197 | A community fine-tune of MiniMax-H3 for video generation. Its 231K downloads indicate meaningful interest in customized variants of the base video model beyond the official release. |

## Ecosystem Signal

The week is dominated by the **Qwen3.8-27B** launch cascade: within a single trending snapshot, the base model already has an official Unsloth GGUF (7.1M downloads), a research mixed-precision quantization from ISTA-DASLab, an uncensored community merge, an MLX "Swift" distillation with its own GGUF, and hints of a next-gen "Flash-Next" successor testing a `qwen4_exp` architecture — a textbook case of how fast the open-weight ecosystem now converts a flagship release into a full derivative tree. DeepSeek's V4.1-Flash shows the same pattern at smaller scale, already forked into an uncensored FP8 build. Open-weight momentum continues unchallenged at the top of the charts — no proprietary/API-only model appears in the top 30 — while quantization research is trending toward extremes: ternary (2-bit) and mixed-precision GSQ/RCO formats are pulling million-plus downloads, well beyond typical INT4/INT8 GGUF baselines. Meanwhile, `sentence-transformers/all-MiniLM-L6-v2`'s 254M downloads is a reminder that embedding infrastructure, not chat models, still drives the bulk of raw Hub traffic.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — the clear center of gravity this week; studying it (and its GGUF/MLX derivatives) offers the fastest read on where the open vision-language frontier is heading.
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — worth trying for anyone evaluating extreme quantization; 2-bit ternary weights at 27B scale with 1.5M+ downloads suggest the quality/size tradeoff is now viable for real deployment.
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — a single-file video model covering image-to-video, text-to-video, and video-to-video is a rare all-in-one package worth studying for anyone building video generation pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Hugging Face Trending Models Digest 2026-11-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-17 16:38 UTC

---

# Hugging Face Trending Models Digest — 2026-11-18

## Today's Highlights

Qwen3.8-27B dominates the board with 20,372 likes and nearly 7M downloads. Its ecosystem of GGUF quantizations and uncensored fine-tunes occupies a large share of the list. MiniMax-H3-Image is the other big story, with the official release plus ComfyUI, GGUF and merge variants all trending at once. Lightricks' LTX-2.5 leads video generation, while DeepSeek-V4.1-Flash-1017 and Kimi-K3.1-Pro show Chinese labs still shipping strong open-weight flagships. Several smaller releases cover speech (Haru-4B, ZONOS3-Mini) and 3D (idol).

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,372 | 6,942,530 | Multimodal (image-text-to-text) 27B chat model from Qwen. It is the most-liked model of the day and the base for many derivatives. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,845 | 479,986 | A "Flash" variant of DeepSeek's V4.1 line with image-text-to-text support. It is trending on strong community interest in the DeepSeek family. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 2,186 | 53,224 | Kimi's K3.1 Pro release, shipped with compressed-tensors for efficient deployment. Its download count is modest, probably because of its size. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 434 | 18,359 | A small multimodal conversational model from Thinking Machines. It is a notable first open-weight appearance from this lab. |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 490 | 61,591 | A 145B latent-MoE model in NVFP4 and GGUF aimed at edge inference. It stands out for combining a very large parameter count with a low-precision format. |
| [maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash) | maxwell-model | 136 | 287 | A new MoE text-generation model with conversational tuning. Likes are early and downloads are minimal. |
| [sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) | sensenova | 80 | 0 | A 9B multimodal model from SenseNova using a new `sensenova_loop` architecture. It was only just published, so it shows 0 downloads. |
| [internlm/Sage-S2.1-Flash](https://huggingface.co/internlm/Sage-S2.1-Flash) | internlm | 86 | 337 | An InternLM release on the `glm5_next` architecture. It has few details in its tags, and likes are early. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,393 | 727,110 | Official text-to-image and image-to-image model from MiniMax. It anchors a whole family of community ports. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,352 | 2,828,071 | Open video model covering image-to-video, text-to-video and video-to-video. It is the second most-liked model today. |
| [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image) | Comfy-Org | 514 | 2,660,341 | ComfyUI-ready single-file packaging of MiniMax-H3-Image. Its downloads far exceed the original's, showing where users run it. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,392 | 1,062,051 | ComfyUI build of the FLUX.3 Klein image generation and editing model. It is trending on the strength of the FLUX brand. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 504 | 93,909 | A compact text-to-speech model released in safetensors and GGUF. It suits local TTS use. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 476 | 4,445 | A 4B full-duplex speech-to-speech model. It is notable for real-time conversational audio at a small size. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 220 | 3,042 | A tiny English TTS model with ONNX and GGUF builds. It targets very lightweight deployment. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 178 | 489 | Audio-driven avatar video generation from Meituan. It is an early release with ONNX and diffusers support. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,444 | 36,388 | An Apache-2.0 image-to-3D model using Gaussian splatting. Its high like count relative to downloads shows strong interest in permissively licensed 3D. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,859 | 1,971,023 | Meta's SAM 3 segmentation model with video support. It remains a default choice for mask generation. |
| [pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1) | pyannote | 5,268 | 6,375,689 | The standard open speaker diarization pipeline. Its downloads are close to Qwen3.8-27B's, reflecting use in production transcription stacks. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 407 | 35,418 | A vision model for zero-shot object detection and image-to-text. It is aimed at on-device use. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,123 | 6,827,598 | Unsloth's GGUF quantization of Qwen3.8-27B. Its downloads nearly match the base model's. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 679 | 10,670 | A supervised fine-tune of Qwen3.8-27B-class (qwen3_5) weights from Nous. It is a rare lab-grade fine-tune among the community variants. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 9,432 | 32,356 | An uncensored "heretic" 9B Qwen3.5 variant distilled toward DeepSeek-V4-Pro. Its 9,432 likes against 32,356 downloads is an unusually high ratio. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-4B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-4B-UNCENSORED-heretic) | xtools-at | 210 | 21,167 | The 4B sibling of the above, for low-resource hardware. It draws far less attention than the 9B. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,270 | 1,759,757 | A heavily modified, uncensored coder-oriented GGUF of Qwen3.8-27B with MTP (multi-token prediction) support. It has over 1.7M downloads. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 1,868 | 2,187,411 | A 9B uncensored GGUF with Imatrix quantization and MTP. It is popular for consumer-hardware local inference. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,267 | 4,292,911 | An abliterated (refusal-removed) GGUF of Qwen3.8-27B. It has the highest downloads of any community variant of the model. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 467 | 160,748 | A quantized, uncensored Qwen-Image 2.1 in diffusers and GGUF. It extends the uncensoring trend to image models. |
| [Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF) | Abiray | 295 | 190,006 | A GGUF conversion of MiniMax-H3-Image for low-VRAM setups. It appeared quickly after the official release. |
| [OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM](https://huggingface.co/OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM) | OliviaRossi | 338 | 512,570 | A community merge built on MiniMax-H3 and 10Eros-Max. It has over 500K downloads despite being a niche merge. |

## Ecosystem Signal

Qwen is the clear momentum leader. Qwen3.8-27B and its derivatives (unsloth, DavidAU, huihui-ai, Nous Arete-27B) account for six or more entries, and Qwen3.5 bases support further fine-tunes. MiniMax-H3 is a second family forming around image generation, with official, ComfyUI, GGUF and merge variants all trending within days. DeepSeek and Kimi keep open-weight flagships in the top tier. Open weights dominate the list. Proprietary models do not appear on the Hub, so the contest is over licensing and tooling, not access. Quantization is now immediate: GGUF builds appear for LLMs, image models (MiniMax-H3, Qwen-Image) and TTS. Uncensored, "heretic" and abliterated variants account for a large share of community downloads. Some like counts, such as 9,432 for a 9B fine-tune with 32,356 downloads, look out of line with usage and may reflect promotion or like inflation, so treat them cautiously.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The ecosystem hub of the day. A 27B multimodal model with broad tooling support is a sensible baseline for local and self-hosted work, and its derivatives make good comparison points.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — With 12,352 likes and over 2.8M downloads, it is a leading open video generator. It covers several video modes in one model.
3. **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — A small full-duplex speech-to-speech model. It is worth studying for real-time voice agents, where open options are scarce.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
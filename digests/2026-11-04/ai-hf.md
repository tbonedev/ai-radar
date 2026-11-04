# Hugging Face Trending Models Digest 2026-11-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-04 15:01 UTC

---

# Hugging Face Trending Models Digest — 2026-11-04

## Today's Highlights

Qwen3.8-27B leads the board with 19,122 likes and over 8 million downloads, while Lightricks' LTX-2.5 (10,569 likes, 2.49M downloads) dominates open video generation. DeepSeek-V4.1-Flash-1017 (5,233 likes) has spawned an immediate ecosystem of GGUF, NVFP4, and uncensored derivatives, with five entries on today's list. Mistral-Large-4 (1T total / 52B active) and NVIDIA's Nemotron-3.5 Transcribe 30B-A4B show MoE architectures spreading into flagship and speech models. Liquid AI's LFM3 family (1.7B text, 2B omni) keeps small on-device models in the spotlight.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,122 | 8,032,442 | A 27B image-text-to-text model from the Qwen family, built on the qwen3_5 architecture. It is the most-liked and most-downloaded entry today, with over 8M downloads. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,233 | 221,621 | The Flash tier of DeepSeek's V4.1 line, supporting both text generation and image-text input. It anchors a large wave of community derivatives, a sign of strong adoption. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,576 | 8,200 | A trillion-parameter MoE with 52B active parameters and multimodal input, tagged for vLLM and SGLang serving. Likes are high but downloads are modest, which is expected given its size. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,462 | 54,959 | A compact 1.7B text model on Liquid's non-transformer LFM3 architecture. It is trending as a strong small model for edge deployment. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 1,039 | 18,657 | A 33B Llama-architecture text model, the latest in the Nanbeige 4.x series. It draws attention as a mid-size open model at 1,039 likes. |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 241 | 3,341 | A preview MoE with 35B total and 3B active parameters, using a custom clover_moe architecture. It is of interest for its very low active-parameter count. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 227 | 2,704 | A 9B multimodal preview model from SenseNova using a new "loop" architecture. It is early-stage, with modest downloads of 2,704. |
| [microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork) | microsoft | 165 | 1,973 | A Microsoft vision-language model built on the llava_onevision2 architecture. It is a new release aimed at "cowork" assistant scenarios. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,569 | 2,493,402 | An open video model covering text-to-video, image-to-video and video-to-video. It leads the generation category with 2.49M downloads. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,839 | 1,912,603 | Meta's Segment Anything 3 for mask generation, with video support. It has nearly 1.9M downloads, which shows broad use in vision pipelines. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,642 | 305,860 | A GGUF-quantized Qwen-Image 2.1 Turbo packaged for ComfyUI. It brings image generation to consumer GPUs. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,460 | 1,052,684 | A ComfyUI-ready FLUX.3 Klein checkpoint for image generation and editing. It has over 1M downloads. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 348 | 13,057 | A 2B any-to-any model handling multiple modalities in one small footprint. It extends the LFM3 family into omni-modal use. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 416 | 749 | An image-to-video model with joint audio-video generation and LoRA support, released as open weights. Its 749 downloads are low, but a commercial video lab publishing weights is notable. |
| [Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K) | Efficient-Large-Model | 209 | 483,649 | A LoRA for video-to-video refinement tagged minimax-h3. It has 483,649 downloads from only 209 likes, so it appears to be pulled in by pipelines. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 569 | 14,613 | An Apache-2.0 image-to-3D model that outputs Gaussian splats. It is trending in the 3D reconstruction niche. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 284 | 9,695 | A text-to-speech model focused on realistic voice output. It is a small independent release. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 1,446 | 44,939 | A 30B-A4B speech recognition model built on NeMo's speech-LM stack. It uses an LLM-scale MoE for transcription, with only 4B active parameters. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 633 | 123,321 | A 4B code model tuned for three.js and 3D scene generation, with GGUF builds. It is notable for specialising a small base model. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 604 | 230,232 | Baidu's second-generation OCR vision-language model. It has 230K downloads. |
| [xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0) | xiaomi-research | 275 | 22,488 | An OCR model built on the Qwen3.5 architecture from Xiaomi Research. It is another large-company entry in document OCR. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 336 | 8,118 | An 8-bit ModelOpt-quantized model with custom code. The tags give little detail on its purpose, and the author is anonymous. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,435 | 1,403,315 | An uncensored, coding-oriented GGUF fine-tune of Qwen3.8-27B. It has over 1.4M downloads. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 676 | 3,553,512 | An abliterated GGUF of a Qwen3.8 Flash variant. It has the highest download count in this category, at 3.55M, against only 676 likes. |
| [unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF) | unsloth | 338 | 690,137 | Unsloth's GGUF conversion of DeepSeek-V4.1-Flash for local inference. It reached 690K downloads quickly. |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 254 | 84,188 | An uncensored GGUF of LFM3-1.7B. It extends the small-model line to local chat. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 277 | 73,659 | An uncensored GGUF of DeepSeek-V4.1-Flash. It is one of several variants of this release. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 244 | 1,979 | A safety-removed (obliterated) variant of DeepSeek-V4.1-Flash. It is part of the refusal-removal trend. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 348 | 528 | A fine-tune of MiniMaxAI/MiniMax-H3. It has few downloads, so its quality is unproven. |
| [nvidia/DeepSeek-V4.1-Flash-1017-NVFP4](https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-1017-NVFP4) | nvidia | 167 | 3,648 | NVIDIA's NVFP4 quantization of DeepSeek-V4.1-Flash via Model Optimizer. It targets Blackwell-class inference. |

## Ecosystem Signal

Qwen and DeepSeek dominate. Qwen3.8-27B tops the list, and its architecture also underlies OCR, coder, and GGUF derivatives. DeepSeek-V4.1-Flash-1017 has five variants here, including NVIDIA's NVFP4 and Unsloth's GGUF, which shows how fast the community and hardware vendors build on a strong open release. Mistral-Large-4 (1T-A52B) and Nemotron-3.5 (30B-A4B) point to continued MoE adoption at both ends of the scale.

Open weights are now standard even for large models. Pika-Labs has released Pika-H3-Flex, and Lightricks leads video with LTX-2.5. MiniMax-H3 is attracting derivatives such as Sulphur-3 and Open-H3-Regenerate-2K.

Fine-tuning activity is heavily oriented toward uncensored, abliterated, and "obliterated" variants. Of the 30 models, at least six are of this kind. These variants also gather large download counts, such as SC117's 3.55M. Download-to-like ratios in these entries suggest automated or pipeline pulls, so treat raw counts with care.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — This is the most-liked model of the day and the base for many derivatives. A 27B size is practical to run locally, so it is a good baseline for current open multimodal models.

2. **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** — Its non-transformer architecture and small size make it useful to study for on-device inference. Together with LFM3-Omni-2B, it shows what the family can do at the edge.

3. **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — Using an MoE LLM backbone for speech recognition is an unusual design. With only 4B active parameters, it is worth benchmarking for accuracy and latency against dedicated ASR models.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
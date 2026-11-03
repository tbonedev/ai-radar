# Hugging Face Trending Models Digest 2026-11-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-03 14:49 UTC

---

# Hugging Face Trending Models Digest — 2026-11-03

## Today's Highlights

Qwen3.8-27B leads the week on engagement (19,049 likes, 8M+ downloads), while DeepSeek-V4.1-Flash-1017 and its community derivatives make up a visible cluster. Lightricks' LTX-2.5 and a quantized Qwen-Image-2.1 variant each pulled over 2.4M downloads, showing continued appetite for local video and image generation. Liquid AI shipped a full LFM3 family (text, vision, audio, omni), and Mistral-Large-4 arrived as a ~1T-parameter MoE with 52B active. OCR is also active, with entries from Baidu and Xiaomi.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,049 | 8,014,877 | Image-text-to-text conversational model in the Qwen3.5 architecture family. It tops this week's list in both likes and downloads. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 4,805 | 187,260 | Multimodal (image-text-to-text) Flash release from DeepSeek. It has spawned several uncensored and quantized derivatives within days. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,527 | 6,556 | A ~1T-parameter MoE with 52B active parameters, tagged for vLLM and SGLang serving. Likes are high relative to downloads, which fits its size. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,351 | 47,817 | Compact 1.7B text-generation model in Liquid's LFM3 line. It is the base for several GGUF and uncensored variants. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,316 | 32,677 | Conversational text-generation model with a custom `flint` architecture. It gained 1,316 likes despite modest downloads. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 1,018 | 17,839 | A 33B Llama-architecture LLM. It draws steady interest from the open-weight community. |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 233 | 3,017 | Preview MoE with 35B total and 3B active parameters. It targets efficient inference. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 200 | 2,221 | 9B multimodal preview model from SenseNova. It is early-stage, with low downloads so far. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,434 | 2,488,128 | Open video model covering image-to-video, text-to-video and video-to-video. It is the second most-liked model this week. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,769 | 1,891,393 | Meta's Segment Anything 3 for mask generation, with video support. It combines high likes with 1.9M downloads. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,390 | 1,032,077 | ComfyUI-ready FLUX.3 Klein checkpoint for image generation and editing. It passed 1M downloads. |
| [Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K) | Efficient-Large-Model | 199 | 413,605 | LoRA for video refinement built on MiniMax-H3. Its download count is high relative to its likes. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 472 | 10,742 | Apache-2.0 image-to-3D model using Gaussian splatting. It brings a permissive license to 3D reconstruction. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 377 | 633 | Image-to-video LoRA with audio-video generation, tagged for diffusers. Downloads are still very low. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 328 | 11,662 | 2B any-to-any model from Liquid. It packs several modalities into a very small footprint. |
| [LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B) | LiquidAI | 223 | 11,153 | 2B vision-language member of the LFM3 family. It targets on-device image understanding. |
| [LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B) | LiquidAI | 203 | 7,069 | 2B any-to-any audio model with ASR capability. It completes Liquid's multimodal lineup. |
| [LiquidAI/d1-2B](https://huggingface.co/LiquidAI/d1-2B) | LiquidAI | 195 | 5,952 | 2B image-text-to-text model on the LFM3-VL architecture. It is a smaller-scale companion release. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 709 | 38,942 | MoE speech-recognition model with 30B total and 4B active parameters. It brings an LLM-scale design to ASR. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 265 | 8,090 | Text-to-speech model aimed at realistic voices. It is a lightweight "Air" variant. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 579 | 189,897 | Baidu's second-generation OCR vision-language model. It has strong downloads for a specialist model. |
| [xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0) | xiaomi-research | 255 | 20,802 | OCR model built on the Qwen3.5 architecture. It is Xiaomi's first appearance in this document-AI niche. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 583 | 91,123 | 4B code model tuned for Three.js 3D scene generation, with GGUF available. It stands out as a small, task-specific coder. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,593 | 2,508,590 | GGUF-quantized, uncensored Qwen-Image-2.1 for ComfyUI. It is the most downloaded model in this category, at over 2.5M. |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 229 | 72,919 | Uncensored GGUF of LFM3-1.7B. It is easy to run locally. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 243 | 53,913 | Uncensored GGUF of DeepSeek-V4.1-Flash using GSQ quantization. It appeared within days of the base release. |
| [LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF) | LiquidAI | 204 | 194,039 | Official llama.cpp-ready GGUF of LFM3-1.7B. Its downloads exceed those of the base model. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 231 | 1,643 | Abliterated (refusal-removed) variant of DeepSeek-V4.1-Flash. It shows how fast refusal-removal appears after a release. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 313 | 395 | Fine-tune of MiniMaxAI/MiniMax-H3. Likes are solid but downloads are minimal. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 309 | 7,461 | 8-bit ModelOpt-quantized model with custom code. Its origin is not documented in the metadata. |

## Ecosystem Signal

The Qwen3.5/3.8 architecture is the strongest force this week. Qwen3.8-27B leads, and the same architecture underlies Xiaomi-OCR-0 and the Qwen3.5-4B-3D-Coder fine-tune. DeepSeek-V4.1-Flash has already produced three derivatives (uncensored GGUF, abliterated, and the base), which shows how quickly community tooling forms around a popular open release. Liquid AI is notable for breadth: seven LFM3-related repos span text, vision, audio and omni at around 2B parameters, a strong small-model, on-device strategy. Open weights dominate, and the largest models (Mistral-Large-4, Nemotron, Clover) use sparse MoE designs with small active-parameter counts. Quantization is widespread, with GGUF featuring in image generation (Qwen-Image) as well as LLMs, and "uncensored" variants draw large download counts. MiniMax-H3 is emerging as a base for video LoRAs and fine-tunes.

## Worth Exploring

1. **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)**: A 2B any-to-any model is a useful case study for on-device multimodal systems, and it is part of a consistent family.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: With over 2.4M downloads, it is the open video model to test for local text/image-to-video workflows.
3. **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)**: A sparse MoE applied to speech recognition is an uncommon design worth studying for accuracy and cost.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
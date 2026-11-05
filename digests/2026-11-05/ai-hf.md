# Hugging Face Trending Models Digest 2026-11-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-05 15:07 UTC

---

# Hugging Face Trending Models Digest — 2026-11-05

## Today's Highlights

The DeepSeek-V4.1-Flash-1017 release dominates community activity. Its official repo has 5,320 likes, and at least six derivatives sit on the list: GGUF builds, an NVFP4 build, and uncensored or abliterated variants. Qwen3.8-27B leads the list with 19,188 likes and 8,037,597 downloads. Mistral-Large-4-1T-A52B (1,605 likes) and Kimi-K3.1-Pro (798 likes) show that frontier-scale open-weight multimodal models are now routine. LTX-2.5 (10,675 likes, 2,561,845 downloads) leads video generation, and SAM 3 stays strong in segmentation.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,188 | 8,037,597 | A 27B image-text-to-text model in the Qwen3.5 architecture family. It has the most likes and downloads of any model on the list, which suggests it is the community's default mid-size base. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,320 | 243,508 | The Flash tier of DeepSeek's V4.1 line, with multimodal input. It is the base for most of the derivative activity on today's list. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,605 | 9,592 | A roughly 1T-parameter mixture-of-experts model with 52B active parameters and image input. It is tagged for vLLM and SGLang, so it is built for production serving. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,501 | 60,681 | A 1.7B text model from Liquid's non-transformer LFM line. It targets on-device use at a small size. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 798 | 11,658 | A multimodal Kimi release shipped with compressed-tensors weights. Quantized distribution at launch is its notable feature. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 245 | 2,929 | A 9B multimodal preview model. Its download count is still low. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 203 | 939 | A 65B Apache-2.0 preview that needs custom code. It is a new, unproven entrant. |
| [microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork) | microsoft | 184 | 2,555 | A vision-language model on the LLaVA-OneVision-2 architecture, from Microsoft. Its name points to a collaborative-agent use case. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 351 | 8,789 | An 8-bit ModelOpt-quantized model with custom code, from an anonymous author. The repo gives little provenance. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 369 | 607 | A fine-tune of MiniMaxAI/MiniMax-H3. Likes are high relative to its 607 downloads. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 369 | 14,315 | A 2B any-to-any model that handles several modalities. It is a small omni-modal option for edge devices. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,675 | 2,561,845 | An open video model covering text, image and video-to-video. It is the most downloaded generation model on the list. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,918 | 1,921,413 | Meta's SAM 3 segmentation model, with video support. It has very high adoption for a vision model. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,656 | 233,059 | A GGUF quantization of Qwen-Image-2.1 Turbo for ComfyUI. It brings the model to consumer GPUs. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,043 | 57,297 | A 30B mixture-of-experts speech recognition model with 4B active parameters. It pairs a large model with a small active compute budget. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,537 | 1,077,477 | A ComfyUI-packaged FLUX.3 Klein for image generation and editing. Over a million downloads show strong workflow adoption. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 687 | 17,180 | An Apache-2.0 image-to-3D model that outputs Gaussian splats. It is a notable entry in 3D generation. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 452 | 863 | An image-to-video model with joint audio-video generation and LoRA support. It is a rare open release from a commercial video lab. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 309 | 11,349 | A text-to-speech model aimed at realistic voices. It is a small independent release. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 180 | 218,534 | An optimized text-to-image checkpoint for ComfyUI. Its downloads are high relative to its likes, which points to workflow use. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 617 | 269,424 | Baidu's second-generation OCR vision-language model. Its 269,424 downloads show real document-pipeline demand. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 680 | 157,157 | A 4B Qwen3.5 model tuned to write Three.js code for 3D scenes. It is available as safetensors and GGUF. |
| [xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0) | xiaomi-research | 290 | 22,477 | An OCR model built on the Qwen3.5 architecture. It is Xiaomi's first entry in the category. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 697 | 3,880,611 | An abliterated GGUF quantization of a Qwen3.8 Flash model. It has 3,880,611 downloads on only 697 likes, so it is pulled mostly by local-inference tooling. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,513 | 1,457,791 | An uncensored, coder-oriented fine-tune of Qwen3.8-27B in GGUF. It has 1,457,791 downloads. |
| [unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF) | unsloth | 347 | 777,689 | Unsloth's GGUF conversion of DeepSeek-V4.1-Flash. It is the most downloaded quantization of the DeepSeek base. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 311 | 92,333 | An uncensored GSQ-RCO GGUF of DeepSeek-V4.1-Flash. It is one of several same-day safety-removed variants. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 170 | 127,948 | A coder-focused GSQ-RCO quantization of DeepSeek-V4.1-Flash, from a research lab. It keeps vision capability. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 253 | 2,296 | A refusal-removed version of DeepSeek-V4.1-Flash in full safetensors. It has low downloads so far. |
| [nvidia/DeepSeek-V4.1-Flash-1017-NVFP4](https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-1017-NVFP4) | nvidia | 181 | 6,010 | An NVFP4 build of DeepSeek-V4.1-Flash made with NVIDIA Model Optimizer. It targets Blackwell-class inference. |

## Ecosystem Signal

**Momentum:** Qwen and DeepSeek lead. Qwen3.8 has the top likes and downloads and underlies several derivatives. DeepSeek-V4.1-Flash has seven entries across base, GGUF, NVFP4 and uncensored forms, and no other base model draws that many on this list.

**Open weights:** Every model on this list is open-weight. Mistral-Large-4 (about 1T parameters, 52B active) and Kimi-K3.1-Pro show that frontier-scale mixture-of-experts models are being released openly, with vLLM and SGLang support from the start.

**Quantization and fine-tuning:** Nearly half the list is derivative work. GSQ-RCO appears across several unrelated quantizers, which suggests it is becoming a shared format. NVIDIA's NVFP4 and ModelOpt releases show hardware vendors now quantize third-party models themselves. Uncensored and abliterated variants are common, and one of them reaches 3,880,611 downloads. Small multimodal models, LFM3-Omni-2B and LFM3-1.7B among them, show a push toward the edge.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The community's clear default at 8,037,597 downloads. It is the best baseline for local multimodal work and for judging its many fine-tunes.
2. **[nvidia/DeepSeek-V4.1-Flash-1017-NVFP4](https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-1017-NVFP4)** — A vendor-made NVFP4 build, useful as a reference for how much quality 4-bit floating point keeps on Blackwell-class hardware compared with the community GGUF builds.
3. **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)** — A 2B any-to-any model that suits anyone studying non-transformer, on-device multimodality.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
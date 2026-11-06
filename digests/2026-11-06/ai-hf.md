# Hugging Face Trending Models Digest 2026-11-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-06 14:45 UTC

---

# Hugging Face Trending Models Digest — 2026-11-06

## Today's Highlights

Qwen3.8-27B leads the field by a wide margin (19,244 likes, 7.8M downloads), and its ecosystem is already spawning quantizations and fine-tunes. DeepSeek-V4.1-Flash-1017 has generated a cluster of derivatives, including GGUF builds, uncensored variants, and an "obliterated" release. Lightricks' LTX-2.5 (10,810 likes, 2.6M downloads) and Facebook's SAM 3 show strong demand for open video and segmentation models. Moonshot's Kimi-K3.1-Pro and Mistral-Large-4-1T-A52B represent the frontier large-scale open-weight releases. OCR is also active, with entries from Xiaomi and Baidu.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,244 | 7,845,288 | A 27B multimodal image-text-to-text model from the Qwen family. It is the most-liked and most-downloaded model on the list, which points to broad adoption as a base model. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,345 | 259,511 | DeepSeek's Flash-tier V4.1 release with image-text input. It is the upstream for at least five derivative repos on this list. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,621 | 10,530 | A mixture-of-experts model with about 1T total and 52B active parameters, tagged for vLLM and SGLang. Its likes are high relative to downloads, which is expected for a model this large to self-host. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,386 | 18,432 | Moonshot's multimodal Kimi K3.1 release, shipped with compressed-tensors for efficient deployment. Interest is high at launch while downloads are still low. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,522 | 66,003 | A 1.7B model on Liquid's non-transformer LFM architecture. It is trending as an on-device option. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 306 | 2,013 | An Apache-2.0 65B preview with custom code. It is early and low in downloads. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 259 | 3,138 | A 9B multimodal preview from SenseNova. It is a small, early release. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 158 | 8,209 | An 8B text-generation model built on the Granite architecture, with GGUF builds. It is a smaller entry with modest traction. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 363 | 9,066 | A custom-code model with 8-bit ModelOpt quantization. Little is documented about it. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,810 | 2,607,491 | An open video generation model covering image-to-video, text-to-video and video-to-video. It has the second-highest likes on the list. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,979 | 1,920,315 | Meta's Segment Anything 3, with video support. It has heavy downloads and remains a default for segmentation. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,604 | 1,109,078 | A ComfyUI-packaged FLUX.3 Klein for image generation and editing. Downloads above 1.1M show strong workflow adoption. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 875 | 19,139 | An Apache-2.0 image-to-3D model using Gaussian splatting. It stands out as the main 3D release today. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,067 | 61,049 | A 30B-A4B mixture-of-experts speech recognition model from NVIDIA. Only 4B parameters are active per token, which keeps inference cheap. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 486 | 986 | A video model with joint audio-video generation and LoRA support. It is a new open release from a company known for a hosted product. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 210 | 398,138 | A ComfyUI text-to-image model from Pruna. Its downloads far outrun its likes. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 327 | 12,847 | A text-to-speech model aimed at realistic voices. It is a small community release. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 634 | 310,955 | Baidu's second-generation OCR model. It has strong downloads, which suggests real production use. |
| [xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0) | xiaomi-research | 301 | 23,683 | An OCR model built on the Qwen3.5 architecture. It is Xiaomi's first entry in the OCR space. |
| [microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork) | microsoft | 193 | 2,826 | A vision-language model on the LLaVA-OneVision2 architecture. It is a recent, low-traffic Microsoft release. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 755 | 190,243 | A 4B Qwen3.5 coder tuned to generate Three.js 3D scenes. Its 190K downloads for a niche coder are notable. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 205 | 20,256 | A sibling variant that targets GLB 3D asset output. It shares the same base and Three.js focus. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,676 | 135,850 | A GGUF-quantized Qwen-Image 2.1 Turbo for ComfyUI. Its 5,676 likes show demand for running image models on consumer GPUs. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,574 | 1,518,569 | An uncensored, coder-oriented GGUF fine-tune of Qwen3.8-27B. It passed 1.5M downloads, which shows demand for uncensored derivatives. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,444 | 1,309,045 | Unsloth's GGUF build of Qwen3.8-Flash-Next. It reached 1.3M downloads quickly. |
| [unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF) | unsloth | 354 | 867,526 | The standard GGUF release of DeepSeek-V4.1-Flash. It has high downloads relative to its likes. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 175 | 222,222 | A coder-focused GGUF using GSQ-RCO quantization. It comes from a research lab. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 335 | 108,162 | An uncensored GGUF of DeepSeek-V4.1-Flash using GSQ-RCO quantization. It is one of several uncensored takes on the base. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 266 | 2,640 | A refusal-removed version of DeepSeek-V4.1-Flash. It has low downloads so far. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 388 | 950 | A fine-tune of MiniMaxAI/MiniMax-H3. It has very few downloads. |

## Ecosystem Signal

Qwen and DeepSeek are the strongest families. Qwen3.8-27B anchors a large tree: unsloth's Flash-Next GGUF, DavidAU's 1.5M-download fine-tune, Xiaomi's OCR model and ccore's 3D coders all build on Qwen architectures. DeepSeek-V4.1-Flash-1017 has five-plus derivatives from unsloth, ISTA-DASLab, AtomicChat and OBLITERATUS, which suggests open weights are being rapidly adapted.

Open weights dominate the list, including very large releases such as Mistral-Large-4 (about 1T parameters, 52B active) and Kimi-K3.1-Pro. MoE is now common at the top end, as in NVIDIA's 30B-A4B Transcribe model.

Quantization is the most active layer. GSQ-RCO is a recurring scheme across DeepSeek GGUFs, and the uncensored and "abliterated" variants show steady demand for refusal-free models. ComfyUI-packaged image models (FLUX.3 Klein, Qwen-Image Turbo, P-H3) show the same trend in image generation.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The de facto base model of the week. Studying it also helps you understand the many derivatives built on it.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — A widely used open video model that covers several modes. Try it to see how far open video generation has come.
3. **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — An ASR model with only 4B active parameters. It is worth testing for cost-efficient transcription.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
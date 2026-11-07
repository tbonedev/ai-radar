# Hugging Face Trending Models Digest 2026-11-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-07 13:43 UTC

---

# Hugging Face Trending Models Digest — 2026-11-07

## Today's Highlights

Qwen3.8-27B leads the open-weight field with 19,314 likes and 7.8M downloads, and its derivatives (Unsloth GGUF, DavidAU fine-tune) are close behind. Lightricks' LTX-2.5 tops video generation with 10,924 likes, and Meta's SAM 3 continues to draw heavy usage. DeepSeek-V4.1-Flash-1017 has spawned at least four community quantizations and "uncensored" variants within days. Big releases from Moonshot (Kimi-K3.1-Pro) and Mistral (Mistral-Large-4-1T-A52B) also appeared, though their download counts are still small.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,314 | 7,813,215 | Multimodal (image-text-to-text) 27B model from the Qwen family. It has the most likes and downloads of any language model on the list. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,380 | 277,323 | DeepSeek's V4.1 Flash release, with image-text-to-text support. It is the base for several community quantizations and fine-tunes. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,630 | 11,206 | A roughly 1T-parameter MoE with 52B active parameters, tagged for vLLM and SGLang serving. Its low downloads reflect its size. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,592 | 22,571 | Moonshot's flagship multimodal model, shipped with compressed-tensors weights. It is trending on the Kimi brand and an efficient-deployment format. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,538 | 70,034 | A 1.7B model from Liquid's non-transformer LFM line. It targets on-device use. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 200 | 15,324 | An 8B Granite-based text-generation model with GGUF builds. It is a small but steady pick for local use. |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 216 | 971 | The base model of Baidu's ERNIE 5.5 Flash, a MoE architecture. It is aimed at researchers who want a pretrained starting point. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 267 | 3,306 | A 9B multimodal preview from SenseNova. It is early-stage, with attention coming from the new architecture. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 350 | 3,803 | A 65B Apache-2.0 preview that needs custom code to load. Interest is driven by its permissive license and size. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 373 | 9,212 | An 8-bit ModelOpt-quantized model with custom code. It is a small experimental release. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,924 | 2,643,778 | An open video model covering image-to-video, text-to-video and video-to-video. It has the highest likes and downloads among the generative models. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,031 | 1,952,223 | Meta's Segment Anything 3, with video support. It has nearly 2M downloads. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,700 | 65,099 | A GGUF-quantized Qwen-Image 2.1 Turbo for ComfyUI. It has high likes relative to its downloads. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,023 | 20,689 | An Apache-2.0 image-to-3D model using Gaussian splatting. It is one of the few 3D models on the list. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,087 | 63,798 | A 30B MoE (4B active) speech recognition model in the NeMo framework. It is the most-liked ASR model of the day. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,653 | 1,143,397 | A ComfyUI build of FLUX.3 Klein for image generation and editing. It has over 1.1M downloads. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 504 | 1,083 | A video model with audio-video generation and LoRA support. It is new, from a company known for its closed models. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 228 | 505,526 | A ComfyUI text-to-image model from Pruna's optimization work. It has high downloads for its likes. |
| [PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image) | PrunaAI | 154 | 789 | The diffusers version of the P-H3 image model. It is the lower-traffic sibling of the ComfyUI build. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 341 | 14,103 | A lightweight text-to-speech model that aims for realistic output. It is a small community release. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 641 | 355,394 | Baidu's second-generation OCR model. It has over 355K downloads. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 834 | 221,506 | A 4B Qwen3.5 fine-tune that writes Three.js 3D code, with GGUF builds. It has strong downloads for its size. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 237 | 24,479 | A sibling model that targets GLB 3D asset output. It is a narrower variant of the same project. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,627 | 1,545,313 | An uncensored, coder-oriented GGUF fine-tune of Qwen3.8-27B. It has over 1.5M downloads. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,490 | 1,423,501 | Unsloth's GGUF build of Qwen3.8-Flash-Next. It reached 1.4M downloads quickly. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 401 | 997 | A fine-tune of MiniMax-H3. It is one of the few derivatives of that base. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 360 | 117,016 | An uncensored GGUF of DeepSeek-V4.1 Flash using GSQ quantization. It has over 117K downloads. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 296 | 1,369 | A Qwen3.5-9B model with the Heretic uncensoring treatment, labeled as DeepSeek-V4-Pro-derived. It has little adoption so far. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 270 | 3,835 | An abliterated (refusal-removed) version of DeepSeek-V4.1 Flash. It is part of the wave of uncensoring work on that base. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 189 | 243,190 | A coder-focused GSQ-RCO GGUF of DeepSeek-V4.1 Flash from a research lab. It has high downloads relative to its likes. |

## Ecosystem Signal

Qwen is the dominant family: the official 27B model, Unsloth's Flash-Next GGUF, a 1.5M-download community fine-tune, and several 3D-coder variants built on Qwen3.5 all trend together. DeepSeek-V4.1-Flash-1017 is the second hub, with four derivatives (uncensored, abliterated, coder GGUFs) on the list. The "GSQ-RCO" quantization tag appears on several of these, which suggests a shared new method. Open weights dominate the day: Moonshot, Mistral, Baidu, NVIDIA and Meta all shipped, and Lightricks and Black Forest Labs lead video and image generation. Pika's appearance with open weights is a notable shift. Community activity centers on GGUF and ComfyUI formats and on uncensored "heretic" or "obliterated" variants. Download counts show that fine-tunes can rival their originals in usage, and that large releases such as Mistral Large 4 and Kimi K3.1 Pro start slowly because of their size.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The most popular model of the day. A 27B multimodal model is large enough to be capable and small enough to run on one GPU, and it is the base for most derivatives.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — An open video model covering several modes, with 2.6M downloads. Try it for local video generation.
3. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF)** — Worth studying to see how the GSQ-RCO quantization performs on a recent DeepSeek model, since it comes from a research lab.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
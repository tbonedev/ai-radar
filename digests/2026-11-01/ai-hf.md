# Hugging Face Trending Models Digest 2026-11-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-01 13:59 UTC

---

# Hugging Face Trending Models Digest, 2026-11-01

## 1. Today's Highlights

**Qwen3.8-27B** leads the board with 18,892 likes and about 7.9M downloads. **Lightricks/LTX-2.5** follows in video generation, and **DeepSeek-V4.1-Flash-1017** is the other big language-model release. **Mistral-Large-4-1T-A52B**, a 1T-parameter MoE with 52B active, drew attention but has had little real-world uptake so far. **LiquidAI's LFM3** family has six entries covering text, vision, audio and omni models, plus GGUF builds. Derivatives of the new Qwen3.8 and DeepSeek V4.1 releases (GGUF, abliterated, GSQ-RCO quants) are among the most-downloaded items.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,892 | 7,892,866 | Image-text-to-text conversational model in the Qwen3.5 architecture family. It has the most likes and downloads in this list, and a mid-size 27B footprint makes it easy to run and fine-tune. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 4,169 | 170,353 | "Flash" variant of DeepSeek V4.1 with image-text-to-text support. It is trending as the base for several community quantizations. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,421 | 4,576 | 1T-parameter MoE with 52B active parameters and multimodal input, tagged for vLLM and SGLang. Interest is high but downloads are low, which is expected at this scale. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,285 | 26,703 | Conversational text-generation model with its own `flint` architecture. It has a strong like count for a lesser-known lab. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 959 | 15,795 | Llama-architecture 33B text-generation model. It is a new release in a mid-size class that is popular for self-hosting. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 944 | 16,707 | Compact 4B text model on a custom `spark2_5` architecture. Its like count is high for its size. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 658 | 37,568 | Base text model of the third-generation Liquid Foundation Models, aimed at edge devices. It anchors a family that now has many variants and derivatives. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 312 | 83,901 | Small Nemotron 3.5 model sized around 4GB and released in both Transformers and GGUF formats. It is trending for on-device use and solid download numbers. |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 199 | 2,352 | Preview MoE with 35B total and 3B active parameters. It is early, but the low active-parameter count makes it efficient to run. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,147 | 2,431,846 | Open video generation model covering image-to-video, text-to-video and video-to-video. It has the highest like count among the generation models. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,228 | 970,633 | ComfyUI-ready Flux 3 "Klein" checkpoint for image generation and editing. It is trending because it works directly in the ComfyUI workflow. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 289 | 404 | Video model with joint audio-video generation, distributed with LoRA. Likes are far ahead of downloads, so interest is mostly curiosity so far. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 262 | 4,194 | Apache-2.0 image-to-3D model that produces Gaussian splats. It is notable as a permissively licensed 3D option. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 256 | 8,376 | 2B any-to-any model in the LFM3 family. It handles several modalities at a very small size. |
| [Edge0/Audio8-TTS-Realistic-0.6b](https://huggingface.co/Edge0/Audio8-TTS-Realistic-0.6b) | Edge0 | 185 | 4,613 | Text-to-speech model with 0.6B parameters. Its small size makes it easy to deploy. |
| [LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B) | LiquidAI | 194 | 9,121 | Vision-language model in the LFM3 family at 2B parameters. It targets lightweight image understanding on edge hardware. |
| [LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B) | LiquidAI | 169 | 5,688 | Any-to-any audio model that also supports speech recognition. It completes the LFM3 multimodal lineup. |
| [Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K) | Efficient-Large-Model | 150 | 0 | Video refinement LoRA for the Minimax-H3 ecosystem. It shows 0 downloads, so the likes come from interest in the release itself. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,606 | 1,891,055 | Meta's Segment Anything 3 for mask generation, with video support. Downloads of about 1.9M make it the most widely used vision utility here. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 496 | 109,519 | Baidu's second-generation OCR vision-language model. Its download count is high relative to its likes, which points to practical use. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 573 | 29,364 | 30B MoE with 4B active parameters, built for automatic speech recognition on the NeMo stack. It brings the MoE approach to transcription. |
| [openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) | openbmb | 382 | 3,513 | Document-parsing and OCR model from the MiniCPM line. It is part of a cluster of new OCR releases. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 443 | 44,825 | 4B coding model specialized for Three.js and 3D scene code, available in safetensors and GGUF. A narrow focus at a small size explains its likes. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,446 | 2,548,468 | Uncensored GGUF quantization of Qwen-Image 2.1 for ComfyUI. It has the highest downloads of any community model here. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,283 | 1,451,434 | Uncensored, coding-oriented GGUF fine-tune of Qwen3.8-27B, built with Unsloth. It is trending on the strength of the Qwen3.8 base. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 587 | 3,425,127 | Abliterated GGUF using the GSQ-RCO quantization scheme. Its 3.4M downloads are the highest in this category. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 524 | 2,294,642 | Mixed-precision GSQ-RCO GGUF quantization of DeepSeek V4.1 Flash. It is a research-lab quant that is seeing heavy use. |
| [OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM](https://huggingface.co/OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM) | OliviaRossi | 171 | 167,612 | Community merge on the Minimax-H3 video model, built from 10Eros-Max. Its downloads show active use of the video-model merge scene. |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 167 | 46,155 | Uncensored GGUF build of LFM3-1.7B. It appeared quickly after the base release. |
| [LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF) | LiquidAI | 164 | 150,260 | Official llama.cpp-ready GGUF of LFM3-1.7B. Its downloads are about 4x the base repo's, so local use is the main draw. |

## 3. Ecosystem Signal

**Momentum:** Qwen is the clear leader. Qwen3.8-27B tops the list, and at least four other entries are derived from Qwen models, including Qwen3.8 fine-tunes and image and coding variants. DeepSeek V4.1 Flash is second, mainly through derivatives. LiquidAI's LFM3 family spans text, vision, audio and omni models, and shows that small, edge-focused models are a distinct category.

**Open weights:** Open releases dominate. Mistral's 1T-parameter model sits at the high end, but its low downloads suggest the largest models are mostly out of reach for individuals. Video work around Minimax-H3 (merges, LoRAs) is growing, as is open OCR.

**Quantization and fine-tuning:** Community builds account for most downloads. Uncensored and abliterated GGUFs for Qwen3.8 and DeepSeek V4.1 Flash lead. GSQ-RCO quantization appears on two separate base models, so it is spreading as a method. Official GGUF releases such as LFM3 and Nemotron Bolt show vendors now ship local-inference formats themselves.

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**: The most popular model by a wide margin, at a size that fits on one high-end GPU. It is also the base for several of the fine-tunes above, so it is worth benchmarking before choosing a derivative.
2. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)**: The GSQ-RCO method now appears on two different base models and has large download numbers. Comparing its quality and size against standard GGUF quants would show whether it is a real improvement.
3. **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)**: The base of a family with text, vision, audio and omni variants, plus an official GGUF. It suits anyone building on-device or low-latency applications.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
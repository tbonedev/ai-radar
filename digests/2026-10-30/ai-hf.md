# Hugging Face Trending Models Digest 2026-10-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-30 13:56 UTC

---

# Hugging Face Trending Models Digest: 2026-10-30

## Today's Highlights

Qwen3.8-27B leads the list with 18,713 likes and 7,624,809 downloads. DeepSeek-V4.1-Flash-1017 follows with 3,949 likes, and it has already spawned several community GGUF and abliterated variants. Lightricks' LTX-2.5 (9,909 likes) and facebook/sam3 (5,479 likes) show strong demand for video generation and segmentation. Mistral-Large-4-1T-A52B (1,299 likes) is a very large MoE release, but its 1,239 downloads show it is mostly being watched, not run. LiquidAI also shipped a full LFM3 family across text, vision, omni and audio.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,713 | 7,624,809 | A 27B image-text-to-text conversational model from the Qwen line. It has the most likes and downloads on the list, which suggests it is a default choice for local multimodal use. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 3,949 | 145,869 | The Flash tier of DeepSeek's V4.1 line, tagged for image-text-to-text. It is the second most-liked model today and the base for several derivative quantizations. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,299 | 1,239 | A roughly 1T-parameter MoE with 52B active, tagged for vLLM and SGLang serving. Its download count is tiny next to its likes, which points to attention more than adoption. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,251 | 19,015 | A conversational text-generation model on its own `flint` architecture. It has high likes for its download count, so it is probably drawing curiosity from a new lab. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 915 | 12,515 | A compact 4B text-generation model on the `spark2_5` architecture. Its likes are strong for its size class. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 791 | 12,178 | A 33B Llama-architecture text-generation model. It stands out as a mid-size dense option from a smaller lab. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 528 | 23,694 | The base text model of Liquid's third-generation LFM family. At 1.7B parameters it targets on-device use. |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 496 | 18,795 | A multimodal Flash-tier model in the MiniMax M3 line. Its `minimax_m3_vl` tag marks it as the vision-language variant. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 272 | 64,263 | A small Nemotron 3.5 model sized for a 4GB footprint, with GGUF weights. Its download count is high relative to its likes, which suggests edge deployment. |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 163 | 1,505 | A preview MoE with 35B total and about 3B active parameters. It is an early-stage entry in the efficient-MoE trend. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,909 | 2,335,172 | An open image-to-video model that also supports text-to-video and video-to-video. It has the highest likes of any generative model today, and its download count shows real use. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,081 | 886,973 | A ComfyUI-ready Flux 3 "klein" package for image generation and editing. It is trending because it can be dropped straight into existing ComfyUI workflows. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,111 | 29,986 | A multi-speaker text-to-speech model from Fish Audio. The multi-speaker support suits dialogue and dramatic content. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 828 | 15,575 | A diffusers-format text-to-image model from the OpenMOSS team. It is a rare image-generation release from a lab best known for language models. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 465 | 15,980 | A speech-recognition model with 30B total and about 4B active parameters, built on NeMo. The MoE design aims to keep transcription cost down. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 219 | 3,080 | A 2B any-to-any model in the LFM3 family. It packs several modalities into a very small footprint. |
| [LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B) | LiquidAI | 174 | 6,241 | The 2B vision-language member of LFM3. It is a compact option for image-text-to-text tasks. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 164 | 87 | An image-to-video model with audio-video generation and LoRA support. Its 87 downloads suggest an early or gated release from a commercial video lab. |
| [LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B) | LiquidAI | 142 | 3,550 | A 2B audio model in the LFM3 family, tagged for speech recognition. It completes Liquid's text, vision, omni and audio lineup. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,479 | 1,886,656 | The third Segment Anything model, with video-segmentation support. Its high download count reflects broad use in vision pipelines. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 433 | 24,276 | Baidu's second-generation OCR vision-language model. It is part of a busy week for document understanding. |
| [openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) | openbmb | 352 | 2,413 | An OCR and document-parsing model from the MiniCPM team. It competes directly with Baidu's OCR release. |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 273 | 3,289 | A Qwen3-based text-generation model tagged for DNA. It is a biology-focused release from Hugging Face's bio group. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 296 | 20,197 | A 4B Qwen3.5 fine-tune for code, tagged threejs, which points to 3D web generation. It has both safetensors and GGUF weights for local use. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,345 | 2,516,721 | A GGUF-quantized, uncensored build of Qwen-Image 2.1 for ComfyUI. Its 2,516,721 downloads show strong demand for unrestricted local image generation. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,238 | 1,725,724 | A heavily modified, uncensored Qwen3.8-27B variant in GGUF, tagged for unsloth fine-tuning and MTP. Its 1,725,724 downloads show that community remixes of the new Qwen are spreading fast. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 536 | 3,158,872 | An abliterated GGUF using the GSQ-RCO quantization scheme. It has more downloads than any other fine-tune here despite modest likes. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 493 | 1,747,945 | A mixed-precision GGUF of DeepSeek-V4.1-Flash using GSQ-RCO quantization. It has far more downloads than the 145,869 of the original, so most people are running this version. |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 360 | 30,433 | An abliterated (refusal-removed) GGUF of DeepSeek-V4.1-Flash for llama.cpp. It is one of several uncensored derivatives of the same base. |
| [unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF) | unsloth | 153 | 162,308 | Unsloth's GGUF conversion of Nemotron 3.5 Bolt E4B. Its 162,308 downloads show the usual pull of a trusted quantizer's release. |

## Ecosystem Signal

Qwen3.8 is the dominant family. The base 27B model has 7,624,809 downloads, and at least three derivatives are on the list (DavidAU's fine-tune, SC117's Flash-Next build and ccore's 3D-Coder). DeepSeek-V4.1-Flash is second, with three variants on the list. LiquidAI's LFM3 line is also notable, with four sub-3B models covering text, vision, omni and audio.

Open weights dominate. Mistral-Large-4-1T-A52B is open but huge, and its 1,239 downloads show that very large MoEs are more watched than run. Efficient MoEs such as Nemotron-Transcribe (30B-A4B) and Clover (35B-A3B) are the practical middle ground.

Quantization drives much of the download volume. GSQ-RCO GGUFs appear on both DeepSeek and Qwen bases, and the DeepSeek GGUF has about 12 times the downloads of the original. Abliterated and uncensored variants are common across text and image models. In vision, Baidu and OpenBMB both released OCR models.

## Worth Exploring

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**: An open video model with 9,909 likes and 2,335,172 downloads. It supports image-to-video, text-to-video and video-to-video, so it is a good test of how close open video generation is to closed tools.
2. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)**: Worth studying for the GSQ-RCO mixed-precision scheme. It is the most-downloaded way to run DeepSeek-V4.1-Flash, and the same scheme shows up on a Qwen3.8 build.
3. **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)**: A 2B any-to-any model, worth trying to see how much multimodal capability fits on-device. Compare it with the VL and Audio siblings in the same family.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
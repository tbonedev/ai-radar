# Hugging Face Trending Models Digest 2026-11-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-02 16:47 UTC

---

# Hugging Face Trending Models Digest — 2026-11-03

## 1. Today's Highlights

Qwen3.8-27B leads the week by a wide margin with 18,988 likes and 7.9M downloads, while Lightricks' LTX-2.5 (10,321 likes) dominates video generation. DeepSeek-V4.1-Flash-1017 draws 4,648 likes and has already spawned a quantization and an abliterated derivative. LiquidAI lands a full LFM3 family (text, VL, audio, omni) in one week, and Mistral-Large-4 arrives as a 1T-parameter MoE with 52B active. OCR is a visible theme, with Baidu and Xiaomi both shipping dedicated models.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,988 | 7,915,637 | A 27B image-text-to-text model from the Qwen family. It tops this week's likes and downloads, showing strong community pull for mid-size multimodal open weights. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 4,648 | 177,009 | A multimodal "Flash" release in the DeepSeek V4.1 line. It is trending for rapid downstream activity, with quantized and modified variants appearing within days. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,483 | 5,500 | A roughly 1T-parameter MoE with 52B active parameters and image-text input, tagged for vLLM and SGLang. Strong likes against low downloads reflect its size and interest from serving teams. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 998 | 16,976 | A 33B Llama-architecture text-generation model. It is gaining attention as a mid-large open LLM with nearly 1,000 likes. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 967 | 18,126 | A compact 4B text-generation model. It is trending on small-model efficiency interest. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 840 | 42,384 | The base 1.7B model of Liquid's LFM3 architecture. It is trending as an on-device-friendly alternative to transformer small models. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,309 | 29,574 | A conversational text-generation model on a custom "flint" architecture. It has drawn 1,309 likes despite modest downloads. |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 220 | 2,679 | A preview 35B MoE with only 3B active parameters. It is notable for its very low inference cost relative to total size. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 176 | 1,536 | A 9B multimodal preview model from SenseNova. It is early-stage but draws interest as a new entrant in the 9B class. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,321 | 2,467,613 | An open image/text/video-to-video generation model. It has the second-highest likes this week and 2.4M+ downloads. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,701 | 1,879,182 | Meta's Segment Anything 3 with video support. It remains popular with 1.8M+ downloads for segmentation work. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,534 | 2,516,622 | A GGUF-quantized, uncensored Qwen-Image build for ComfyUI. It has the highest downloads in the image category. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,329 | 1,003,813 | A ComfyUI-packaged FLUX.3 Klein for image generation and editing. It crosses 1M downloads on a convenient single-file format. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 303 | 9,964 | A 2B any-to-any model covering text, image and audio. It shows omni-modality at very small scale. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 384 | 7,787 | An Apache-2.0 image-to-3D model using Gaussian splatting. It is trending for permissively licensed 3D reconstruction. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 345 | 491 | An image-to-video model with audio-video generation and LoRA support. Likes far outpace its 491 downloads, suggesting curiosity over adoption. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 240 | 7,259 | A text-to-speech model focused on realistic voice output. It is a lightweight "Air" variant. |
| [LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B) | LiquidAI | 216 | 10,141 | A 2B vision-language model in the LFM3 family. It targets edge-sized multimodal use. |
| [LiquidAI/d1-2B](https://huggingface.co/LiquidAI/d1-2B) | LiquidAI | 182 | 5,047 | A 2B image-text model built on the LFM3-VL architecture. It extends the LFM3 line with a new variant. |
| [LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B) | LiquidAI | 195 | 6,300 | A 2B any-to-any audio model with speech recognition. It rounds out the LFM3 modality coverage. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 659 | 32,439 | A 30B MoE (4B active) speech recognition model on NeMo. It stands out for pairing LLM-scale capacity with low active compute. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 552 | 147,588 | Baidu's second-generation OCR vision-language model. It has strong adoption at nearly 148K downloads. |
| [xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0) | xiaomi-research | 236 | 18,472 | An OCR model built on the Qwen3.5 base. It marks Xiaomi's entry into document understanding. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 542 | 63,499 | A 4B Qwen3.5-based coder tuned for Three.js/3D code, with GGUF available. It is trending as a niche, locally runnable code specialist. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 280 | 7,108 | An 8-bit ModelOpt-quantized model with custom code. Little metadata is provided, so its purpose is unclear. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 553 | 2,408,000 | A mixed-precision GGUF quantization of DeepSeek-V4.1-Flash using GSQ and RCO methods. Its 2.4M downloads far exceed the original's 177,009. |
| [LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF) | LiquidAI | 197 | 174,177 | The official llama.cpp-ready GGUF of LFM3-1.7B. It sees heavy local-use downloads. |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 202 | 59,832 | A community uncensored GGUF of LFM3-1.7B. It shows how quickly derivatives follow a release. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 209 | 1,095 | An abliterated (refusal-removed) DeepSeek-V4.1-Flash variant. It appeared quickly after the base release. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 214 | 195 | A fine-tune of MiniMaxAI/MiniMax-H3. Likes outpace downloads, suggesting early interest. |

## 3. Ecosystem Signal

Qwen and DeepSeek remain the strongest open-weight momentum builders. Qwen3.8-27B leads all metrics, and Qwen3.5 serves as a base for third-party work such as Xiaomi-OCR-0 and the 3D coder. DeepSeek-V4.1-Flash has three entries (original, GGUF, abliterated), a sign of an active derivative ecosystem. LiquidAI is the notable newcomer, with seven LFM3 entries across text, vision, audio, omni and GGUF. That points to an on-device push on a non-transformer-style architecture. Mistral-Large-4 shows large open MoE models continuing at the frontier, and the Nemotron and Clover MoEs show the low-active-parameter pattern spreading. Quantization is a major driver of adoption: the ISTA-DASLab GGUF has about 13x the downloads of the original model. Uncensored and abliterated variants appear within days of releases. Note that Pika-H3-Flex has 345 likes but only 491 downloads, so its listing may reflect interest more than usage.

## 4. Worth Exploring

1. **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** and its siblings: a full small-model family spanning text, vision, audio and omni, useful for studying edge-oriented architectures.
2. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)**: worth studying for its GSQ/RCO mixed-precision approach and its outsized adoption.
3. **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)**: a 1T MoE with 52B active parameters and vLLM/SGLang support, relevant for anyone evaluating large-scale open-weight serving.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
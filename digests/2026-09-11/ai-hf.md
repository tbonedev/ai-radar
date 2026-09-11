# Hugging Face Trending Models Digest 2026-09-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-11 11:59 UTC

---

# Hugging Face Trending Models Digest — 2026-09-11

## Today's Highlights

Qwen dominates the leaderboard today: **Qwen/Qwen3.8-27B** is the single most-liked and most-downloaded model in the set (14,697 likes, 7.56M downloads), and it has spawned a dense cluster of GGUF quantizations, uncensored/abliterated fine-tunes, and NVFP4 builds from NVIDIA, Unsloth, DavidAU, HauhauCS, orcarouter, and ISTA-DASLab. DeepSeek continues its flagship cadence with **DeepSeek-V4.1-Flash**, a multimodal image-text-to-text release, alongside an experimental vision variant of V4-Flash. Video generation is a major theme, led by **MiniMax-H3** (5,140 likes, ~5M downloads) and **Lightricks LTX-2.5**, both pushing image/text-to-video pipelines, with community fine-tunes of MiniMax-H3 already appearing. Quantization and "uncensored" derivatives remain a disproportionately large share of activity — roughly a third of today's trending list is GGUF/FP8/NVFP4 repackaging rather than net-new base models — signaling strong grassroots demand for local, unrestricted inference over the newest large releases.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,154 | 67,550 | A compact 2B-parameter Llama-architecture chat model from OpenBMB's MiniCPM line, aimed at efficient on-device deployment. It's trending on the strength of the MiniCPM series' reputation for punching above its weight class relative to model size. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,082 | 17,712 | A 4B general-purpose text-generation LLM built on a custom "spark2_5" architecture. Its likes-to-download ratio suggests early community interest outpacing production adoption so far. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 673 | 3,121 | A lightweight MoE (qwen3_5_moe-based) chat model from Nex-AGI with multimodal capability. It's the smaller sibling in a two-tier release alongside Nex-N2.5-Pro. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 591 | 12,260 | The larger MoE variant in Nex-AGI's N2.5 family, sharing the qwen3_5_moe base architecture. Higher downloads than its "mini" counterpart suggest it's the preferred pick despite fewer likes. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 275 | 5,192 | A 36B-parameter (4B active) mixture-of-experts model built on a novel "k2_horizon" architecture. It's a new entrant testing sparse MoE efficiency at a mid-large scale. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,804 | 597,626 | The base conversational release of Zhipu's GLM-5.3 series using the glm_moe_dsa architecture. It anchors a family that already includes a "Flash" variant and a cybersecurity-focused fine-tune, reflecting rapid downstream specialization. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 1,638 | 75,774 | DeepSeek's latest flagship image-text-to-text model, extending the V4 line into a faster "Flash" tier. It's trending as an official lab release with native vision-language conversational support. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,697 | 7,563,763 | The top-trending model across the entire dataset, a 27B image-text-to-text model on the new qwen3_5 architecture. Its scale of adoption (7.5M+ downloads) has already made it the base for over half a dozen GGUF and uncensored derivatives listed here. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,429 | 1,669,564 | A diffusion-based video model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video in one checkpoint. Its broad multi-task coverage and 1.67M downloads make it one of the most versatile generation models trending today. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 273 | 103,178 | A community video-generation variant built on the MiniMax-H3 architecture. It signals early derivative/fine-tune interest around the newly released MiniMax-H3 base model. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 863 | 443,954 | An experimental vision-enabled checkpoint of DeepSeek-V4-Flash, distinct from the newer V4.1 line. Its "Exp" tag and solid download count suggest it's being used as a testbed for vision features ahead of broader rollout. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,088 | 586,040 | A next-generation "Flash" multimodal chat model previewing Qwen's forthcoming qwen4_exp architecture. It's already spawned both an NVFP4 quantization from NVIDIA and community GGUF ports. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,140 | 4,970,363 | MiniMax's flagship image-text-to-video diffusion model, with nearly 5M downloads making it one of the most-adopted generation models in this set. It's already attracting community fine-tunes and variants, including entries elsewhere on this list. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,236 | 1,173,520 | A faster, image-text-to-text variant of Zhipu's GLM-5.3 conversational model. Its 1.17M downloads outpace the base GLM-5.3 model, suggesting the Flash tier is the preferred deployment target. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 166 | 971 | A 3B text-to-audio music generation model with symbolic planning and agentic editing capabilities. It stands out for combining structured music composition with an "agentic" editing workflow, unusual among typical text-to-audio releases. |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 169 | 0 | A diffusion-based video-to-video model specialized in character replacement and animation. Zero recorded downloads despite meaningful likes suggests it's newly published and primarily accessed via hosted demo rather than local weights. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 194 | 2,279 | A 7B streaming automatic speech recognition and transcription model from Microsoft. Its streaming-first design targets low-latency, real-time transcription use cases. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 530 | 8,645 | The second-generation Breeze text-to-speech model. It builds on a text-generation-style architecture, suggesting a unified LM-based approach to speech synthesis. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 720 | 633,239 | Google's third-generation TimesFM foundation model for time-series forecasting, released as a pretrained PyTorch checkpoint. Its 633K downloads reflect steady enterprise demand for general-purpose forecasting foundation models. |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 161 | 3,271 | A 4B image-text-to-text model specialized for autonomous driving and motion planning. It marks Qwen's expansion beyond general chat/vision into a vertical robotics/AV domain. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 814 | 682,187 | A GGUF quantization of Qwen3.8-27B using a mixed-precision "GSQ-RCO" scheme from academic lab ISTA-DASLab. Its 682K downloads show strong demand for research-grade quantization methods applied to the hottest current base model. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,871 | 11,339,637 | Unsloth's GGUF build of Qwen3.8-27B, with over 11.3M downloads — the highest download count in the entire trending set. It underscores Unsloth's role as the default distribution channel for local-inference quantizations of flagship models. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 376 | 28,328 | An FP8-quantized, abliterated fine-tune of GLM-5.3 targeted at cybersecurity use cases with refusal removed. It illustrates the growing niche of domain-specific "uncensored" security research models. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 463 | 606,200 | An elaborately merged, uncensored GGUF fine-tune of Qwen3.8-27B combining multiple experimental techniques ("Cold-Fusion," "Heretic," MTP). Its 606K downloads show sustained community appetite for DavidAU's aggressive merge-and-strip fine-tuning approach. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 198 | 78,737 | NVIDIA's official NVFP4 quantization of Qwen3.8-Flash-Next via its Model Optimizer toolkit. It represents the hardware vendor's push to get next-gen 4-bit formats onto the newest Qwen release quickly. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 194 | 231,831 | A llama.cpp-compatible GGUF vision fine-tune blending Qwen3.8-27B and Opus-style naming conventions. Its 231K downloads indicate a modest but active niche for cross-lineage community merges. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 165 | 70,755 | The official GGUF quantization of MiniCPM5-2B, released directly by OpenBMB. It pairs with the base model release, making it easy for edge/CPU deployment of the 2B chat model. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,089 | 1,999,181 | An aggressively uncensored, multimodal GGUF fine-tune of Qwen3.8-27B with nearly 2M downloads. It's one of the most-downloaded uncensored derivatives in the set, reflecting strong demand for unrestricted local vision-chat models. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 288 | 153 | A community text-to-video fine-tune built directly on MiniMaxAI/MiniMax-H3. Very low download count relative to likes suggests it's a just-published derivative still gaining traction. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 881 | 320,537 | Another abliterated, uncensored GGUF quantization of Qwen3.8-27B. Its presence alongside several other independent uncensored Qwen3.8-27B builds highlights how many parallel community efforts are targeting the same base model. |

## Ecosystem Signal

The ecosystem today is dominated by a single base model — **Qwen3.8-27B** — around which at least seven derivative repos (official GGUF, academic quantizations, NVFP4, and multiple independent "uncensored"/abliterated fine-tunes) have formed within what appears to be days of release. This pattern, echoed by MiniMax-H3's own fine-tune community, shows that open-weight flagship releases now trigger near-immediate, fragmented quantization/fine-tuning swarms rather than a single canonical derivative. Open-weight labs (Qwen, DeepSeek, GLM/zai-org, MiniMax, OpenBMB) fully dominate the trending list — there is no proprietary/closed model present, reinforcing that Hugging Face's discovery surface remains an open-weight-first venue. Video generation is a clear growth axis, with MiniMax-H3 and LTX-2.5 pulling multi-million download counts alongside niche character-animation and video-editing spinoffs. Quantization activity is heavily skewed toward GGUF (llama.cpp ecosystem) over AWQ, with FP8 and NVFP4 appearing only from vendor-backed efforts (NVIDIA, dealignai), suggesting community tooling still favors GGUF as the default distribution format for local inference.

## Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The clear center of gravity this week, both as a strong native multimodal model and as the base for the largest cluster of community derivatives; worth studying for its architecture (qwen3_5) as much as using directly.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — A rare single-checkpoint model spanning image-to-video, text-to-video, video-to-video, and image-text-to-video; useful for anyone evaluating unified video-generation pipelines rather than task-specific models.
3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — The highest-download model in the entire set (11.3M); the practical default choice for anyone wanting to run Qwen3.8-27B locally without navigating the fragmented uncensored-fork landscape.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
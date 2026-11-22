# Hugging Face Trending Models Digest 2026-11-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-22 15:00 UTC

---

# Hugging Face Trending Models Digest — 2026-11-22

## Today's Highlights

Thinking Machines' **Inkling-2-Mini** leads this week's weekly likes (4,169) and has already spawned multiple GGUF and uncensored derivatives. Qwen3.8-27B remains the community's dominant base model, with an unusually large cluster of quantizations and abliterated/uncensored fine-tunes in the top 30. Video and image generation are active (Lightricks LTX-2.5, MiniMax-H3-Image, FLUX-3 Klein, Apple's FastFrames-L), while Apple, Meta and Tencent also shipped notable vision and language releases. Full-duplex speech (Haru-4B) and compact on-device models (Nemotron-3.5-Bolt 4GB) round out the trend toward smaller, deployable systems.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 4,169 | 23,543 | Multimodal image-text-to-text model using the new `inkling2_loop` architecture. It tops the weekly likes chart, though its own download count is modest because most usage goes through GGUF derivatives. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 653 | 48,974 | Smaller sibling in the Inkling-2 family with a standard `inkling2` architecture. It benefits from the family's momentum and has about twice the downloads of Mini. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,841 | 6,297,396 | 27B multimodal conversational model and the most-liked model on this list. Its 6.3M downloads make it the base for much of the fine-tune activity below. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,836 | 515,306 | Flash-tier DeepSeek V4.1 checkpoint with image-text-to-text support. It has strong likes and sustained downloads for a lighter-weight variant. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 586 | 6,617 | Hunyuan v4 Flash multimodal model from Tencent. Its early traction suggests interest in a fast-tier Hunyuan release. |
| [sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B) | sensenova | 479 | 1,863 | 9B multimodal model using a "loop" architecture. It is a compact option in the same looped-design space as Inkling-2. |
| [maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash) | maxwell-model | 337 | 3,317 | Mixture-of-experts text-generation model from a newer lab. It is early in its adoption curve, with 337 likes. |
| [RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B) | RadixArk | 291 | 1,815 | Qwen3.5-architecture 27B image-text-to-text model. It shows the Qwen 27B base being adapted by additional groups. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 705 | 203,420 | Compact Nemotron 3.5 model sized to about 4GB, with GGUF available. Its 203,420 downloads point to demand for on-device use. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,014 | 2,993,088 | Open video generation model covering image-to-video, text-to-video and video-to-video. It is the most-liked generation model here, with about 3M downloads. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,716 | 952,024 | Text-to-image and image-to-image model from the MiniMax-H3 family. It is already used as a base for derivatives such as Sulphur-3. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,664 | 950,169 | ComfyUI-packaged FLUX.3 Klein for image generation and editing. It stays popular thanks to workflow-ready single-file distribution. |
| [chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized) | chatrlabs | 770 | 381,769 | Quantized, uncensored Qwen-Image 2.1 variant in diffusers and GGUF formats. It has 381,769 downloads, showing demand for local image generation. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 513 | 0 | Text-to-video model derived from Wan2.1-T2V-14B, with an accompanying arXiv paper. It is trending on the Apple brand and its research focus on faster video generation. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 413 | 3,483 | Audio-and-text-to-video avatar model with ONNX export. It targets talking-avatar generation. |
| [Lakonik/pi-H3](https://huggingface.co/Lakonik/pi-H3) | Lakonik | 141 | 9,038 | Distilled flow-matching model producing audio-video from text or image. It is an early research-style release. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 579 | 0 | Audio-to-audio speech enhancement and denoising model. It has 579 likes despite no recorded downloads. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 862 | 8,608 | 4B full-duplex speech-to-speech model. Real-time conversational speech at this size is the draw. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 391 | 10,768 | Small English text-to-speech model shipped in ONNX and GGUF. It is easy to run locally. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 7,179 | 1,806,893 | Segment Anything 3 for mask generation, with video support. It has 7,179 likes and 1.8M downloads. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 1,683 | 18,709 | 3D human mesh recovery and pose estimation on a DINOv3 backbone. It extends the SAM line into 3D body understanding. |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 236 | 0 | Metric monocular depth estimation with video depth support. It is the successor to Depth Pro. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 955 | 2,831 | PEFT adapter for Qwen3.8-27B trained with async GRPO via TRL. It is tuned for agent-harness use and shows RL post-training going mainstream. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,286 | 7,683,660 | GGUF quantization of Qwen3.8-27B and the most-downloaded model on the list. It is the default local-inference route for the Qwen 27B. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,479 | 4,534,445 | Abliterated (refusal-removed) GGUF of Qwen3.8-27B. It has 4.5M downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,491 | 1,827,784 | Heretic uncensored, coder-oriented fine-tune of Qwen3.8-27B with MTP support. It draws 3,491 likes and 1.8M downloads. |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 787 | 805,993 | MoE GGUF of Inkling-2-Mini from unsloth. Its 805,993 downloads dwarf the original's 23,543. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 389 | 129,693 | Uncensored LoRA-based GGUF of Inkling-2-Mini. Derivatives appeared quickly after release. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 749 | 78,931 | Fine-tune of MiniMaxAI/MiniMax-H3 under a custom "other" license. It signals community adaptation of the H3 family. |
| [Sentinel7/h3](https://huggingface.co/Sentinel7/h3) | Sentinel7 | 1,091 | 0 | Untyped repository tagged not-for-all-audiences, with no recorded downloads. Metadata is sparse, so treat it with caution. |

## Ecosystem Signal

Qwen3.8-27B is the center of gravity: the base model (20,841 likes), unsloth's GGUF (7.68M downloads), and at least five derivatives (abliterated, uncensored, coder, RL-adapter, DaisyRose) all chart. Thinking Machines' Inkling-2 is the fastest-rising new family, with its GGUF out-downloading the original roughly 34x and an uncensored variant appearing quickly. MiniMax-H3 is following the same pattern with an image model and a fine-tune. Open weights dominate; the notable releases are from Qwen, DeepSeek, Tencent, NVIDIA, Apple and Meta. Quantization and uncensoring are now the standard second stage of a release, with unsloth as the main distributor. Looped and MoE architectures (Inkling-2, SenseNova-Loop, Maxwell) are a visible design trend. Video generation is also strong, led by LTX-2.5. Several entries show zero downloads, which likely reflects gated or recently listed repos rather than lack of interest.

## Worth Exploring

1. **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)**: the week's most-liked new release and a new looped architecture. Try the unsloth GGUF for easy local testing.
2. **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)**: a concrete example of async GRPO adapting a strong base model for agentic harnesses. It is a useful reference for RL post-training recipes.
3. **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)**: a roughly 4GB model with GGUF available, suited to edge and on-device experiments.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
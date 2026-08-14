# Hugging Face Trending Models Digest 2026-08-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-14 08:12 UTC

---

# Hugging Face Trending Models Digest — 2026-08-14

## Today's Highlights

MiniMax-H3 dominates the board this week, spawning an entire derivative ecosystem — a base checkpoint from MiniMaxAI (3,860 likes, 1.6M downloads), a ComfyUI-native repack from Comfy-Org that alone pulled **10.36M downloads**, plus turbo variants, LoRAs, and GGUF quantizations from at least eight different community authors. On the language-model side, Moonshot AI's **Kimi-K3** tops the entire list at 10,638 likes with 1.87M downloads, while DeepSeek shipped a same-week Flash/Pro pair (V4-Flash-0731, V4-Pro-0813) and Qwen released a 2.4T-parameter MoE (Qwen3.8-2.4T-A95B) alongside its FP8 quant. Meta's Muse-Glimmer-30B vision-language model is also proliferating into GGUF quantizations from unsloth and meta-models themselves. Overall, video generation (MiniMax-H3, LTX-2.5) and massive sparse LLMs are the two clearest momentum lines this cycle.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,638 | 1,871,575 | Moonshot AI's flagship model, the most-liked release in this week's trending set. Its compressed-tensors packaging suggests day-one support for efficient inference at scale, driving nearly 1.9M downloads. |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,347 | 1,431,587 | The speed-optimized member of DeepSeek's V4 family, aimed at low-latency conversational use. Strong download volume (1.4M) indicates rapid production adoption. |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 365 | 0 | The higher-capability counterpart to V4-Flash, released the same week and dated just one day before this digest. Zero downloads reflect its just-published status, but early likes suggest anticipation is high. |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 835 | 1,012 | A massive 2.4T-parameter sparse MoE with 95B active parameters, pushing Qwen's scale ambitions further. Early-stage downloads suggest the community is still evaluating hardware requirements. |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 608 | 116,640 | A compact 2.6B liquid-architecture model targeting efficient on-device deployment. Solid download traction (116K) shows continued interest in Liquid AI's non-transformer approach. |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 356 | 3,868 | A preview-stage causal LM built on a mixture-of-experts design from a newer lab. Early engagement signals community curiosity about deepgrove's architecture choices. |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 238 | 44,859 | A 30B Nemotron variant pre-quantized to NVFP4 for Blackwell-class inference efficiency. Meaningful download numbers point to production interest in NVIDIA's native low-precision format. |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 221 | 1,292 | A small-footprint entry in inclusionAI's Ling series using a hybrid "bailing" architecture. MIT licensing keeps it attractive for unrestricted downstream use. |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 190 | 3,184 | A Qwen3.5-MoE-based image-text-to-text model from a newer entrant. Modest but present traction suggests early community sampling rather than broad adoption yet. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,860 | 1,605,940 | The base image-text-to-video model behind this week's biggest ecosystem, already spawning turbo, LoRA, and quantized spin-offs across a dozen repos. Its 1.6M downloads make it the most-adopted generation model tracked here. |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,454 | 121,042 | A 30B image-text-to-text conversational model from Meta, already popular enough to warrant two separate GGUF quantizations from different authors. Downloads exceeding 120K reflect fast community uptake. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 760 | 57,287 | Lightricks' latest video model supports image-to-video, text-to-video, and video-to-video in one release. Broad task coverage in a single checkpoint is driving healthy download volume. |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 469 | 91,455 | A distilled, speed-optimized variant of MiniMax-H3 supporting text-to-video, image-to-video, and reference-to-video generation. Its 91K downloads show real demand for faster inference over the base checkpoint. |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 481 | 25 | MiniMax's newest text-to-audio/music-generation model, built on an sglang-omni serving stack. Very early downloads (25) reflect a just-published state despite already accumulating meaningful likes. |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 376 | 1,164 | An 11B voice-chat model referencing multiple recent arXiv papers, suggesting a research-driven conversational audio pipeline. Early-stage adoption is consistent with a fresh release. |
| [Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 140 | 0 | A 2.9B text-to-image diffusion model packaged as a ComfyUI single-file checkpoint. Zero downloads alongside 140 likes indicates a brand-new release just gaining visibility. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,302 | 10,365,210 | The ComfyUI-native single-file packaging of MiniMax-H3, and by far the highest-download entry on this entire list at over 10.3M. It underscores ComfyUI as the primary distribution channel for community video-model consumption. |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,997 | 2,793,115 | An elaborate uncensored community fine-tune/merge of Qwen3.6-27B in GGUF format, one of DavidAU's signature "Fable-Fusion" releases. Its 2.79M downloads make it the most-adopted fine-tune tracked this week. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 395 | 352,023 | Unsloth's GGUF quantization of Meta's Muse-Glimmer-30B, enabling local/CPU inference of the vision-language model. Downloads over 352K show strong demand for accessible local deployment. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 260 | 136,783 | Meta's own first-party GGUF release of Muse-Glimmer-30B, referencing two arXiv papers behind the architecture. First-party quantization support signals official commitment to local-inference use cases. |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 729 | 0 | A LoRA adapter layering turbo-speed generation onto MiniMax-H3 across text-to-video and text-to-audio tasks. High likes with zero downloads suggest strong anticipation ahead of wider indexing. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 152 | 111,222 | A GGUF quantization of MiniMax-H3 built for stable-diffusion.cpp-style local video generation. Over 111K downloads show meaningful demand for CPU/edge-friendly video inference. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 225 | 0 | An experimental community variant of MiniMax-H3 from a well-known ComfyUI ecosystem contributor. Its presence alongside Kijai's other MiniMax-H3 repo highlights active tinkering around the base model. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 319 | 0 | A ComfyUI-focused repackaging of MiniMax-H3 from the same prolific contributor. Reflects the broader pattern of MiniMax-H3 being re-optimized for specific inference front-ends. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 301 | 324 | A niche community fine-tune of MiniMax-H3 for text-to-video generation, Apache-2.0 licensed. Modest downloads reflect a narrow but engaged audience. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 317 | 0 | A ComfyUI-formatted version of the MiniMax-H3 Turbo LoRA adapter. Part of the fast-growing tooling layer making MiniMax-H3 turbo speed accessible in visual workflows. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 160 | 4,692 | A specialized LoRA tuning MiniMax-H3 toward photorealistic people generation. Downloads in the thousands indicate niche but real production interest from fal's user base. |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 169 | 4,000 | The FP8-quantized companion to Qwen's massive 2.4T MoE, cutting memory footprint for serving the huge base model. Early downloads suggest infrastructure teams are just beginning to test it. |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 135 | 22,279 | The BF16 precision variant of NVIDIA's Nemotron Lightning 30B, offered alongside the NVFP4 version for broader hardware compatibility. Over 22K downloads show it's the more widely compatible of the two precision options. |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 152 | 652 | A PEFT LoRA specialized for rewriting prompts to improve MiniMax-H3 generation quality. A small but telling sign of the tooling ecosystem maturing around prompt engineering for video models. |

## Ecosystem Signal

The MiniMax-H3 video model is this week's clearest ecosystem story: a single base checkpoint has fanned out into at least a dozen derivatives — ComfyUI packagings, turbo distillations, GGUF quantizations, and task-specific LoRAs — with the Comfy-Org repack alone pulling over 10 million downloads, dwarfing every other entry. This mirrors the Stable Diffusion playbook, where community tooling and format conversions drive adoption as much as the base model itself. On the language-model side, open-weight releases continue to lead: DeepSeek, Qwen, Moonshot, and NVIDIA all shipped competitive open checkpoints this week, with Qwen's 2.4T-parameter MoE pushing scale boundaries while NVIDIA and Qwen both ship parallel FP8/NVFP4/BF16 precision variants day-one — a sign that quantization-ready releases are becoming standard practice rather than an afterthought. Meta's Muse-Glimmer-30B getting simultaneous first-party and community GGUF quantizations further reinforces that local-inference support is now a launch-day expectation, not a delayed community contribution.

## Worth Exploring

1. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — worth studying not just as a model but as a case study in ecosystem gravity; its ComfyUI, LoRA, and GGUF derivative graph is the most active on HF this week.
2. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — the top-liked model overall, worth benchmarking against DeepSeek V4 and Qwen3.8 for teams evaluating open frontier-class chat models.
3. **[Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — worth exploring for teams studying extreme-scale sparse MoE design, especially paired with its same-day FP8 quantization to assess the accuracy/efficiency tradeoff.

---
*This digest is auto-generated by [agents-radar](https://github.com/tbonedev/ai-radar).*
# Part 6: SGLang Internals — Performance & Advanced

**Goal:** Dive into SGLang's performance-critical internals — advanced caching, parallelism strategies, and low-level optimizations.

This part explores the techniques that push SGLang's throughput and latency to the limit. From advanced RadixAttention strategies to overlap scheduling and FP8 quantization, you will learn the internals that make SGLang competitive at the cutting edge of LLM serving performance.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 6.1 | [RadixAttention Advanced](../notebooks/part6/chapter_6.1_radix_advanced.ipynb) | Cache-aware scheduling, multi-level eviction, tree pruning, memory optimization |
| 6.2 | [Data & Expert Parallelism](../notebooks/part6/chapter_6.2_parallelism.ipynb) | Data parallelism, expert parallelism for MoE, hybrid parallelism strategies |
| 6.3 | [Torch.compile Integration](../notebooks/part6/chapter_6.3_torch_compile.ipynb) | Graph capture with torch.compile, custom backends, compilation caching, limitations |
| 6.4 | [Overlap Scheduling](../notebooks/part6/chapter_6.4_overlap_scheduling.ipynb) | Overlapping compute and communication, double buffering, pipeline micro-batches |
| 6.5 | [FP8 & Quantization](../notebooks/part6/chapter_6.5_fp8_quantization.ipynb) | FP8 formats (E4M3/E5M2), per-tensor vs per-channel, W8A8 inference, calibration |
| 6.6 | [Speculative Decoding](../notebooks/part6/chapter_6.6_speculative_decoding.ipynb) | SGLang's speculative decoding implementation, EAGLE integration, token verification |
| 6.7 | [Embedding & Reward Models](../notebooks/part6/chapter_6.7_embedding_reward.ipynb) | Serving embedding models, reward model inference, classification heads |
| 6.8 | [Custom CUDA Kernels](../notebooks/part6/chapter_6.8_cuda_kernels.ipynb) | SGLang-specific kernels, custom attention, fused operations, kernel dispatch |

## Prerequisites

- Completed Part 5 (SGLang Architecture Deep Dive)
- Understanding of CUDA programming and GPU execution model
- Familiarity with quantization concepts (from Part 1)
- Knowledge of distributed computing and collective operations

## Learning Outcomes

After completing Part 6, you will be able to:

- Implement advanced RadixAttention strategies for complex workloads
- Configure and optimize parallelism strategies for MoE and dense models
- Understand torch.compile integration and its performance benefits
- Profile and optimize overlap scheduling for maximum GPU utilization
- Deploy FP8 quantized models with SGLang for cost-effective inference
- Analyze and modify SGLang's custom CUDA kernels

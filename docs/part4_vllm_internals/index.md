# Part 4: vLLM Internals — Memory & Execution

**Goal:** Master the low-level mechanisms that give vLLM its performance edge — from KV-cache memory layout to distributed execution.

This part goes beneath the architecture into the implementation details that matter most for performance. You will understand exactly how memory is laid out on the GPU, how CUDA graphs eliminate kernel launch overhead, and how vLLM scales across multiple GPUs and nodes.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 4.1 | [KV-Cache Memory Layout](../notebooks/part4/chapter_4.1_kvcache_layout.ipynb) | Physical block layout in GPU memory, slot mapping, key/value tensor organization |
| 4.2 | [Prefix Caching (APC)](../notebooks/part4/chapter_4.2_prefix_caching.ipynb) | Automatic prefix caching, hash-based block matching, cache hit/miss handling |
| 4.3 | [CUDA Graph Capture](../notebooks/part4/chapter_4.3_cuda_graphs.ipynb) | Graph capture and replay, padding strategies, when graphs help and when they hurt |
| 4.4 | [Custom CUDA Kernels](../notebooks/part4/chapter_4.4_cuda_kernels.ipynb) | vLLM's custom kernels: reshape_and_cache, paged_attention_v1/v2, rotary embedding |
| 4.5 | [Distributed Execution](../notebooks/part4/chapter_4.5_distributed.ipynb) | Tensor parallelism implementation, NCCL communication, Ray-based orchestration |
| 4.6 | [Speculative Decoding](../notebooks/part4/chapter_4.6_speculative_decoding.ipynb) | Draft-model and draft-free methods, verification, token acceptance, throughput gains |
| 4.7 | [Chunked Prefill](../notebooks/part4/chapter_4.7_chunked_prefill.ipynb) | Breaking long prefills into chunks, mixing prefill and decode, latency control |
| 4.8 | [LoRA Serving](../notebooks/part4/chapter_4.8_lora.ipynb) | Multi-LoRA serving, adapter management, SGMV kernels, dynamic adapter loading |

## Prerequisites

- Completed Part 3 (vLLM Architecture Deep Dive)
- Understanding of CUDA programming concepts (threads, blocks, kernels)
- Familiarity with GPU memory management and profiling tools
- Knowledge of distributed computing basics (collective operations, NCCL)

## Learning Outcomes

After completing Part 4, you will be able to:

- Visualize exactly how KV-cache blocks are stored and accessed on the GPU
- Implement and debug prefix caching for multi-turn conversations
- Profile and optimize CUDA graph capture for different batch sizes
- Understand the distributed execution model and communication patterns
- Configure speculative decoding and measure its throughput impact
- Deploy multi-LoRA serving with efficient adapter management

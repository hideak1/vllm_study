# Part 1: Foundations of LLM Serving

**Goal:** Build the conceptual foundation — why LLM serving is hard and what makes it fundamentally different from training.

Before diving into any specific framework, you need to deeply understand the computational and systems challenges that make LLM inference a unique engineering problem. This part builds that foundation.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 1.1 | [Transformer & KV-Cache Recap](../notebooks/part1/chapter_1.1_transformer_kvcache.ipynb) | How autoregressive decoding works, why KV-Cache is essential, prefill vs decode phases |
| 1.2 | [GPU Memory Hierarchy](../notebooks/part1/chapter_1.2_gpu_memory.ipynb) | HBM vs SRAM, memory bandwidth bottleneck, GPU architecture for inference |
| 1.3 | [Arithmetic Intensity & Roofline](../notebooks/part1/chapter_1.3_roofline_model.ipynb) | Compute-bound vs memory-bound operations, roofline analysis for LLM inference |
| 1.4 | [Tokenization & Streaming](../notebooks/part1/chapter_1.4_tokenization.ipynb) | BPE/SentencePiece internals, detokenization challenges, streaming token delivery |
| 1.5 | [Latency vs Throughput Metrics](../notebooks/part1/chapter_1.5_metrics.ipynb) | TTFT, TPOT, ITL, throughput measurement, benchmarking methodology |
| 1.6 | [Batching Strategies](../notebooks/part1/chapter_1.6_batching.ipynb) | Static batching, dynamic batching, continuous batching — why it matters |
| 1.7 | [Quantization Primer](../notebooks/part1/chapter_1.7_quantization.ipynb) | FP16, INT8, INT4, GPTQ, AWQ, GGUF — theory and hands-on |
| 1.8 | [Sampling Strategies](../notebooks/part1/chapter_1.8_sampling.ipynb) | Temperature, top-k, top-p, beam search, speculative decoding overview |

## Prerequisites

- Basic understanding of Transformer architecture (attention, FFN, residual connections)
- PyTorch familiarity (tensor operations, basic model definition)
- Linear algebra basics (matrix multiplication, memory layout)

## Learning Outcomes

After completing Part 1, you will be able to:

- Explain why LLM inference is memory-bandwidth bound during decode
- Calculate the memory requirements for any LLM model
- Understand the trade-offs between different quantization methods
- Build intuition for why continuous batching provides 10-20x throughput improvement
- Profile GPU utilization and identify bottlenecks

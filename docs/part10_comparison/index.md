# Part 10: Comparative Analysis & Benchmarks

**Goal:** Systematically compare vLLM and SGLang across architecture, scheduling, memory management, and real-world performance.

After studying both frameworks in depth, this part brings everything together with a rigorous side-by-side comparison. You will understand the fundamental design differences, run controlled benchmarks, and develop a decision framework for choosing the right engine for your use case.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 10.1 | [Architecture Comparison](../notebooks/part10/chapter_10.1_architecture.ipynb) | Engine design philosophies, component mapping, abstraction layers, extensibility |
| 10.2 | [Scheduling Comparison](../notebooks/part10/chapter_10.2_scheduling.ipynb) | Scheduling algorithms, preemption strategies, batch formation, fairness guarantees |
| 10.3 | [Memory Management Comparison](../notebooks/part10/chapter_10.3_memory.ipynb) | PagedAttention vs RadixAttention, block allocation, prefix caching strategies |
| 10.4 | [Performance Benchmarks](../notebooks/part10/chapter_10.4_benchmarks.ipynb) | Controlled benchmarks: throughput, latency, TTFT, ITL across model sizes and workloads |
| 10.5 | [Feature Matrix](../notebooks/part10/chapter_10.5_features.ipynb) | Feature-by-feature comparison: quantization, multi-modal, speculative decoding, LoRA |
| 10.6 | [Decision Framework](../notebooks/part10/chapter_10.6_decision.ipynb) | When to choose vLLM vs SGLang, workload-based recommendations, migration strategies |

## Prerequisites

- Completed Parts 3-6 (deep understanding of both vLLM and SGLang)
- Experience running both frameworks
- Understanding of benchmarking methodology (from Part 9)
- Familiarity with statistical analysis of performance data

## Learning Outcomes

After completing Part 10, you will be able to:

- Articulate the fundamental architectural differences between vLLM and SGLang
- Explain the trade-offs of PagedAttention vs RadixAttention
- Design and run fair, reproducible benchmarks comparing serving engines
- Make informed decisions about which framework to use for specific workloads
- Evaluate new serving frameworks using a structured comparison methodology

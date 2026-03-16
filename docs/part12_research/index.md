# Part 12: Cutting-Edge Research & Future Directions

**Goal:** Explore the frontier of LLM serving research — the papers, techniques, and ideas shaping the next generation of serving systems.

LLM serving is a rapidly evolving field. This part surveys the latest research directions, from disaggregated serving and KV-cache compression to long-context handling and agent serving. Each chapter connects academic research to practical implementation, helping you stay at the cutting edge.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 12.1 | [Disaggregated Serving](../notebooks/part12/chapter_12.1_disaggregated.ipynb) | Prefill/decode separation, DistServe, Splitwise, Mooncake — architectures and trade-offs |
| 12.2 | [KV-Cache Compression](../notebooks/part12/chapter_12.2_kvcache_compression.ipynb) | Quantized KV-cache, token eviction, H2O, StreamingLLM, compression algorithms |
| 12.3 | [Long-Context Serving](../notebooks/part12/chapter_12.3_long_context.ipynb) | Ring attention, sequence parallelism, chunked processing, memory management for 100K+ tokens |
| 12.4 | [Reasoning Model Serving](../notebooks/part12/chapter_12.4_reasoning_models.ipynb) | Chain-of-thought serving, long-output models, budget-aware scheduling, thinking tokens |
| 12.5 | [Hardware-Aware Optimization](../notebooks/part12/chapter_12.5_hardware.ipynb) | AMD GPUs, Intel Gaudi, AWS Inferentia, Apple Silicon — cross-platform serving |
| 12.6 | [Agent Serving](../notebooks/part12/chapter_12.6_agent_serving.ipynb) | Tool-calling patterns, multi-turn optimization, stateful sessions, function calling |
| 12.7 | [MoE Optimization](../notebooks/part12/chapter_12.7_moe_optimization.ipynb) | Expert offloading, dynamic routing, expert caching, load balancing across experts |
| 12.8 | [Continuous Learning](../notebooks/part12/chapter_12.8_continuous_learning.ipynb) | Staying current with research, reading papers effectively, experimental methodology |

## Prerequisites

- Completed Parts 1-11 (comprehensive understanding of LLM serving)
- Comfort reading academic papers (ML systems, computer architecture)
- Understanding of distributed systems concepts
- Willingness to experiment with bleeding-edge techniques

## Learning Outcomes

After completing Part 12, you will be able to:

- Evaluate and implement disaggregated serving architectures
- Apply KV-cache compression techniques to reduce memory footprint
- Design serving systems for long-context and reasoning-heavy workloads
- Adapt serving systems for new hardware platforms
- Build efficient serving pipelines for agent and tool-calling workloads
- Develop a systematic approach to tracking and evaluating new research

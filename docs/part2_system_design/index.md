# Part 2: LLM Serving System Design

**Goal:** Understand the full architecture of an LLM serving system before diving into specific frameworks.

This part teaches you to think like a systems architect. You'll understand every component of an LLM serving system and the design trade-offs involved, so that when you read vLLM and SGLang source code, you'll know *why* each component exists.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 2.1 | [Request Lifecycle](../notebooks/part2/chapter_2.1_request_lifecycle.ipynb) | End-to-end journey of a request: API → tokenize → schedule → prefill → decode → detokenize → stream |
| 2.2 | [Scheduler Design](../notebooks/part2/chapter_2.2_scheduler_design.ipynb) | FCFS, priority scheduling, preemption strategies, fairness guarantees |
| 2.3 | [KV-Cache Memory Management](../notebooks/part2/chapter_2.3_kvcache_memory.ipynb) | Paging, swapping, recomputation — the core memory challenge |
| 2.4 | [Model Parallelism for Serving](../notebooks/part2/chapter_2.4_model_parallelism.ipynb) | Tensor parallelism, pipeline parallelism, expert parallelism in inference context |
| 2.5 | [API Layer Design](../notebooks/part2/chapter_2.5_api_layer.ipynb) | OpenAI-compatible API, gRPC, streaming SSE, request validation |
| 2.6 | [Multi-Model Serving](../notebooks/part2/chapter_2.6_multi_model.ipynb) | Model routing, weight sharing, dynamic model loading/unloading |
| 2.7 | [Disaggregated Serving](../notebooks/part2/chapter_2.7_disaggregated.ipynb) | Prefill/decode separation, inter-node KV-cache transfer |

## Prerequisites

- Completed Part 1 (Foundations)
- Basic understanding of operating system concepts (scheduling, memory management)
- Familiarity with REST APIs and async programming

## Learning Outcomes

After completing Part 2, you will be able to:

- Design an LLM serving system from scratch
- Make informed decisions about scheduling policies
- Understand memory management trade-offs for KV-cache
- Choose the right parallelism strategy for your hardware
- Evaluate architectural choices in existing serving frameworks

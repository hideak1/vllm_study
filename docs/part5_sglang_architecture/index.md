# Part 5: SGLang Architecture Deep Dive

**Goal:** Understand SGLang's architecture from top to bottom — its unique runtime, RadixAttention, and the frontend DSL that sets it apart.

SGLang takes a different approach to LLM serving, built around a radix tree-based KV-cache (RadixAttention), a high-performance runtime with a router-based design, and a powerful frontend DSL for structured generation. This part dissects each component to show how SGLang achieves its performance advantages.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 5.1 | [Codebase Tour](../notebooks/part5/chapter_5.1_codebase_tour.ipynb) | Repository layout, package structure, key abstractions, build and installation |
| 5.2 | [Runtime & Router](../notebooks/part5/chapter_5.2_runtime.ipynb) | Runtime architecture, router-based request dispatching, process management |
| 5.3 | [RadixAttention](../notebooks/part5/chapter_5.3_radix_attention.ipynb) | Radix tree for KV-cache, automatic prefix sharing, eviction policies |
| 5.4 | [Scheduler](../notebooks/part5/chapter_5.4_scheduler.ipynb) | Scheduling policies, batch formation, priority management, preemption |
| 5.5 | [Tokenizer & Detokenizer](../notebooks/part5/chapter_5.5_tokenizer.ipynb) | Tokenization pipeline, incremental detokenization, special token handling |
| 5.6 | [ModelRunner & TpWorker](../notebooks/part5/chapter_5.6_model_runner.ipynb) | Model execution, tensor parallelism workers, input preparation, forward pass |
| 5.7 | [FlashInfer Integration](../notebooks/part5/chapter_5.7_flashinfer.ipynb) | FlashInfer as the attention backend, paged KV-cache with FlashInfer, performance |
| 5.8 | [Constrained Decoding](../notebooks/part5/chapter_5.8_constrained_decoding.ipynb) | JSON schema enforcement, regex-guided generation, grammar-based decoding, jump-forward |
| 5.9 | [Frontend DSL](../notebooks/part5/chapter_5.9_frontend_dsl.ipynb) | SGLang language primitives, gen/select/fork/join, program compilation, batched execution |
| 5.10 | [Multi-Modal Support](../notebooks/part5/chapter_5.10_multimodal.ipynb) | Vision-language models, image/video input handling, multi-modal architectures |

## Prerequisites

- Completed Parts 1 and 2 (Foundations and System Design)
- Python proficiency (async programming, multiprocessing, ZMQ)
- Understanding of tree data structures (radix/prefix trees)
- Basic familiarity with SGLang installation and usage

## Learning Outcomes

After completing Part 5, you will be able to:

- Navigate the SGLang codebase and understand its runtime architecture
- Explain how RadixAttention achieves automatic prefix sharing
- Trace a request through the router, scheduler, and model execution pipeline
- Use the SGLang frontend DSL to write efficient multi-call LLM programs
- Understand FlashInfer integration and its performance implications
- Implement constrained decoding with JSON schemas and grammars

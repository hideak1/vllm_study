# Part 3: vLLM Architecture Deep Dive

**Goal:** Trace every major component of vLLM from the API entry-point to GPU execution, understanding how the pieces fit together.

Armed with the conceptual foundations from Parts 1 and 2, you are now ready to read real production code. This part walks through the vLLM codebase component by component, explaining the design decisions, data flow, and key abstractions that make vLLM one of the most widely adopted LLM serving engines.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 3.1 | [Codebase Tour](../notebooks/part3/chapter_3.1_codebase_tour.ipynb) | Repository layout, package structure, build system, entry points |
| 3.2 | [LLMEngine & AsyncLLMEngine](../notebooks/part3/chapter_3.2_llm_engine.ipynb) | The central orchestrator: request ingestion, scheduling loop, output processing |
| 3.3 | [Scheduler Deep Dive](../notebooks/part3/chapter_3.3_scheduler.ipynb) | Scheduling policies, sequence groups, preemption, waiting/running/swapped queues |
| 3.4 | [PagedAttention](../notebooks/part3/chapter_3.4_paged_attention.ipynb) | Virtual memory for KV-cache, block tables, copy-on-write, memory sharing |
| 3.5 | [Block Manager](../notebooks/part3/chapter_3.5_block_manager.ipynb) | Block allocation, eviction, swap-in/swap-out, physical-to-logical mapping |
| 3.6 | [Worker & ModelRunner](../notebooks/part3/chapter_3.6_worker_model_runner.ipynb) | GPU worker lifecycle, model execution, input preparation, output extraction |
| 3.7 | [Model Loader](../notebooks/part3/chapter_3.7_model_loader.ipynb) | Weight loading strategies, safetensors, sharded checkpoints, lazy loading |
| 3.8 | [Attention Backends](../notebooks/part3/chapter_3.8_attention_backends.ipynb) | FlashAttention, FlashInfer, xFormers — backend selection and dispatch |
| 3.9 | [Sampling Pipeline](../notebooks/part3/chapter_3.9_sampling_pipeline.ipynb) | Logits processing, sampling parameters, logprobs, beam search implementation |
| 3.10 | [API Server](../notebooks/part3/chapter_3.10_api_server.ipynb) | FastAPI server, OpenAI-compatible endpoints, request/response handling, SSE streaming |

## Prerequisites

- Completed Parts 1 and 2 (Foundations and System Design)
- Python proficiency (async/await, generators, dataclasses)
- Comfort reading large Python codebases
- Basic familiarity with vLLM installation and usage

## Learning Outcomes

After completing Part 3, you will be able to:

- Navigate the vLLM codebase confidently and locate any component
- Trace a request end-to-end through the engine, scheduler, worker, and back
- Explain how PagedAttention eliminates memory fragmentation
- Understand the role of each abstraction layer in the architecture
- Read and modify vLLM source code for debugging or feature development

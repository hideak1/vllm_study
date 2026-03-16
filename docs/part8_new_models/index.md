# Part 8: Adding New Model Architectures

**Goal:** Learn to add support for new model architectures in both vLLM and SGLang, from registration to performance tuning.

When a new model architecture is released, someone needs to integrate it into serving frameworks. This part teaches you exactly how to do that — covering the full lifecycle from model registration and implementation through quantization support, testing, and performance optimization in both vLLM and SGLang.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 8.1 | [vLLM Model Registration](../notebooks/part8/chapter_8.1_vllm_registration.ipynb) | Model registry, configuration mapping, architecture detection, entry points |
| 8.2 | [Implementing a Model in vLLM](../notebooks/part8/chapter_8.2_vllm_new_model.ipynb) | Step-by-step model implementation: layers, attention, MLP, weight loading, parallelism |
| 8.3 | [Adding Quantization](../notebooks/part8/chapter_8.3_quantization_support.ipynb) | GPTQ, AWQ, FP8 support, quantization config, linear layer replacement |
| 8.4 | [Multi-Modal Integration](../notebooks/part8/chapter_8.4_multimodal.ipynb) | Vision encoders, input processors, multi-modal input mapping, cross-attention |
| 8.5 | [SGLang Model Registration](../notebooks/part8/chapter_8.5_sglang_registration.ipynb) | SGLang model registry, configuration, architecture mapping |
| 8.6 | [Implementing a Model in SGLang](../notebooks/part8/chapter_8.6_sglang_new_model.ipynb) | Model implementation in SGLang: layers, forward pass, weight loading, RadixAttention integration |
| 8.7 | [Testing & Validation](../notebooks/part8/chapter_8.7_testing.ipynb) | Correctness testing, output comparison with HuggingFace, numerical precision validation |
| 8.8 | [Performance Tuning](../notebooks/part8/chapter_8.8_performance.ipynb) | Benchmarking new models, identifying bottlenecks, optimization strategies, memory profiling |

## Prerequisites

- Completed Parts 3-5 (vLLM and SGLang architecture understanding)
- Deep understanding of Transformer variants (GQA, MQA, sliding window, etc.)
- PyTorch proficiency (custom modules, state_dict manipulation, tensor parallelism)
- Familiarity with HuggingFace Transformers library

## Learning Outcomes

After completing Part 8, you will be able to:

- Add a new model architecture to vLLM from scratch
- Add a new model architecture to SGLang from scratch
- Implement quantization support for custom models
- Integrate multi-modal capabilities into serving frameworks
- Write comprehensive tests to validate model correctness
- Profile and optimize new model implementations for production throughput

---
hide:
  - navigation
  - toc
---

# vLLM & SGLang Expert Tutorials

<div class="hero" markdown>

# Master LLM Serving Systems

<p class="hero-subtitle">
  From GPU fundamentals to contributor-level expertise in vLLM and SGLang. 105 hands-on notebooks covering PagedAttention, RadixAttention, CUDA kernels, and production deployment.
</p>

<div class="hero-actions">
  <a href="part1_foundations/" class="btn-primary">Start Learning</a>
  <a href="https://github.com/hideak1/vllm_study" class="btn-outline">GitHub</a>
  <a href="https://colab.research.google.com/github/hideak1/vllm_study/blob/main/notebooks/part1/chapter_1.1_transformer_kvcache.ipynb" class="btn-outline">Open in Colab</a>
</div>

</div>

<div class="highlights-bar" markdown>

<div class="hl">
  <span class="hl-value">105</span>
  <span class="hl-label">Chapters</span>
</div>
<div class="hl">
  <span class="hl-value">12</span>
  <span class="hl-label">Parts</span>
</div>
<div class="hl">
  <span class="hl-value">2</span>
  <span class="hl-label">Frameworks</span>
</div>
<div class="hl">
  <span class="hl-value">96</span>
  <span class="hl-label">Notebooks</span>
</div>

</div>

<div class="arch-flow">
  <span class="node node-request">Request</span>
  <span class="connector">&rarr;</span>
  <span class="node node-schedule">Schedule</span>
  <span class="connector">&rarr;</span>
  <span class="node node-prefill">Prefill</span>
  <span class="connector">&rarr;</span>
  <span class="node node-decode">Decode</span>
  <span class="connector">&rarr;</span>
  <span class="node node-stream">Stream</span>
</div>

<div class="techs">
  <span>vLLM</span>
  <span>SGLang</span>
  <span>PagedAttention</span>
  <span>FlashInfer</span>
  <span>Triton</span>
  <span>CUDA</span>
</div>

<div class="section-divider" markdown>

## Curriculum

A systematic path from fundamentals to source-level mastery.

</div>

<div class="parts-grid" markdown>

<a class="card" href="part1_foundations/">
  <span class="card-icon">:material-chip:</span>
  <span class="card-title">Part 1: Foundations</span>
  <span class="card-desc">Transformer internals, GPU memory hierarchy, roofline analysis, batching strategies, quantization, and serving metrics.</span>
  <span class="card-meta">8 chapters</span>
</a>

<a class="card" href="part2_system_design/">
  <span class="card-icon">:material-sitemap:</span>
  <span class="card-title">Part 2: System Design</span>
  <span class="card-desc">Request lifecycle, scheduler design, KV-cache memory management, model parallelism, and API layer architecture.</span>
  <span class="card-meta">7 chapters</span>
</a>

<a class="card" href="part3_vllm_architecture/">
  <span class="card-icon">:material-code-braces:</span>
  <span class="card-title">Part 3: vLLM Architecture</span>
  <span class="card-desc">Full source code walkthrough — LLMEngine, Scheduler, PagedAttention, Block Manager, Worker, and API Server.</span>
  <span class="card-meta">10 chapters</span>
</a>

<a class="card" href="part4_vllm_internals/">
  <span class="card-icon">:material-memory:</span>
  <span class="card-title">Part 4: vLLM Internals</span>
  <span class="card-desc">KV-cache memory layout, prefix caching, CUDA graph capture, custom kernels, speculative decoding, and LoRA serving.</span>
  <span class="card-meta">8 chapters</span>
</a>

<a class="card" href="part5_sglang_architecture/">
  <span class="card-icon">:material-lightning-bolt:</span>
  <span class="card-title">Part 5: SGLang Architecture</span>
  <span class="card-desc">Runtime & Router, RadixAttention, Scheduler, ModelRunner, FlashInfer integration, and Frontend DSL.</span>
  <span class="card-meta">10 chapters</span>
</a>

<a class="card" href="part6_sglang_internals/">
  <span class="card-icon">:material-cog:</span>
  <span class="card-title">Part 6: SGLang Internals</span>
  <span class="card-desc">Advanced RadixAttention, data & expert parallelism, torch.compile, overlap scheduling, and FP8 quantization.</span>
  <span class="card-meta">8 chapters</span>
</a>

<a class="card" href="part7_cuda_kernels/">
  <span class="card-icon">:material-gpu:</span>
  <span class="card-title">Part 7: CUDA & Triton</span>
  <span class="card-desc">Write GPU kernels from scratch — PagedAttention, FlashAttention, fused ops, quantized matmul, and CUTLASS.</span>
  <span class="card-meta">8 chapters</span>
</a>

<a class="card" href="part8_new_models/">
  <span class="card-icon">:material-puzzle:</span>
  <span class="card-title">Part 8: New Models</span>
  <span class="card-desc">End-to-end guide to adding new model architectures to vLLM and SGLang with testing and performance tuning.</span>
  <span class="card-meta">8 chapters</span>
</a>

<a class="card" href="part9_production/">
  <span class="card-icon">:material-rocket-launch:</span>
  <span class="card-title">Part 9: Production</span>
  <span class="card-desc">Deployment options, load balancing, monitoring, benchmarking methodology, cost optimization, and multi-node serving.</span>
  <span class="card-meta">8 chapters</span>
</a>

<a class="card" href="part10_comparison/">
  <span class="card-icon">:material-scale-balance:</span>
  <span class="card-title">Part 10: Comparison</span>
  <span class="card-desc">Systematic vLLM vs SGLang comparison — architecture, scheduling, memory management, and decision framework.</span>
  <span class="card-meta">6 chapters</span>
</a>

<a class="card" href="part11_contributing/">
  <span class="card-icon">:material-source-pull:</span>
  <span class="card-title">Part 11: Contributing</span>
  <span class="card-desc">Dev environment setup, testing framework, debugging, performance profiling, and code review workflow.</span>
  <span class="card-meta">7 chapters</span>
</a>

<a class="card" href="part12_research/">
  <span class="card-icon">:material-telescope:</span>
  <span class="card-title">Part 12: Research</span>
  <span class="card-desc">Cutting-edge topics — disaggregated serving, KV-cache compression, long-context, reasoning models, and MoE optimization.</span>
  <span class="card-meta">8 chapters</span>
</a>

</div>

<div class="section-divider" markdown>

## Learning Path

The recommended progression through the curriculum.

</div>

```mermaid
graph LR
    A[Foundations] --> B[System Design]
    B --> C[vLLM Architecture]
    C --> D[vLLM Internals]
    D --> E[SGLang Architecture]
    E --> F[SGLang Internals]
    F --> G[CUDA & Triton]
    G --> H[Production & Research]

    style A fill:#dcfce7,stroke:#166534,color:#166534
    style B fill:#dbeafe,stroke:#1e40af,color:#1e40af
    style C fill:#e0e7ff,stroke:#3730a3,color:#3730a3
    style D fill:#ede9fe,stroke:#5b21b6,color:#5b21b6
    style E fill:#fce7f3,stroke:#9d174d,color:#9d174d
    style F fill:#fae8ff,stroke:#86198f,color:#86198f
    style G fill:#fef3c7,stroke:#92400e,color:#92400e
    style H fill:#059669,stroke:#059669,color:#fff
```

<div class="section-divider" markdown>

## Quick Start

</div>

```bash
git clone https://github.com/hideak1/vllm_study.git
cd vllm_study
make install   # Install dependencies via uv
make serve     # Start docs (localhost:8000) + Jupyter (localhost:8888)
```

| Convention | Meaning |
|-----------|---------|
| :material-information: **Concept** | Key concepts and theory explanations |
| :material-alert: **Common Pitfall** | Frequent mistakes and misconceptions |
| :material-lightbulb: **Pro Tip** | Expert-level insights and best practices |
| :material-pencil: **Exercise** | Hands-on coding exercises |

---
hide:
  - navigation
  - toc
---

# vLLM & SGLang 专家教程

<div class="hero" markdown>

# 精通 LLM 推理服务系统

<p class="hero-subtitle">
  从 GPU 基础到 vLLM 与 SGLang 的贡献者级专业知识。105 个实战 Notebook，涵盖 PagedAttention、RadixAttention、CUDA 内核与生产环境部署。
</p>

<div class="hero-actions">
  <a href="part1_foundations/" class="btn-primary">开始学习</a>
  <a href="https://github.com/hideak1/vllm_study" class="btn-outline">GitHub</a>
  <a href="https://colab.research.google.com/github/hideak1/vllm_study/blob/main/notebooks/part1/chapter_1.1_transformer_kvcache.ipynb" class="btn-outline">在 Colab 中打开</a>
</div>

</div>

<div class="highlights-bar" markdown>

<div class="hl">
  <span class="hl-value">105</span>
  <span class="hl-label">章节</span>
</div>
<div class="hl">
  <span class="hl-value">12</span>
  <span class="hl-label">部分</span>
</div>
<div class="hl">
  <span class="hl-value">2</span>
  <span class="hl-label">框架</span>
</div>
<div class="hl">
  <span class="hl-value">96</span>
  <span class="hl-label">Notebook</span>
</div>

</div>

<div class="arch-flow">
  <span class="node node-request">请求</span>
  <span class="connector">&rarr;</span>
  <span class="node node-schedule">调度</span>
  <span class="connector">&rarr;</span>
  <span class="node node-prefill">预填充</span>
  <span class="connector">&rarr;</span>
  <span class="node node-decode">解码</span>
  <span class="connector">&rarr;</span>
  <span class="node node-stream">流式输出</span>
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

## 课程体系

从基础到源码级精通的系统化学习路径。

</div>

<div class="parts-grid" markdown>

<a class="card" href="part1_foundations/">
  <span class="card-icon">:material-chip:</span>
  <span class="card-title">第一部分：基础知识</span>
  <span class="card-desc">Transformer 内部机制、GPU 显存层级、Roofline 分析、批处理策略、量化方法与推理服务指标。</span>
  <span class="card-meta">8 章</span>
</a>

<a class="card" href="part2_system_design/">
  <span class="card-icon">:material-sitemap:</span>
  <span class="card-title">第二部分：系统设计</span>
  <span class="card-desc">请求生命周期、调度器设计、KV-Cache 内存管理、模型并行与 API 层架构。</span>
  <span class="card-meta">7 章</span>
</a>

<a class="card" href="part3_vllm_architecture/">
  <span class="card-icon">:material-code-braces:</span>
  <span class="card-title">第三部分：vLLM 架构</span>
  <span class="card-desc">全面的源码解读 — LLMEngine、Scheduler、PagedAttention、Block Manager、Worker 与 API Server。</span>
  <span class="card-meta">10 章</span>
</a>

<a class="card" href="part4_vllm_internals/">
  <span class="card-icon">:material-memory:</span>
  <span class="card-title">第四部分：vLLM 内部机制</span>
  <span class="card-desc">KV-Cache 内存布局、前缀缓存、CUDA Graph 捕获、自定义内核、推测解码与 LoRA 服务。</span>
  <span class="card-meta">8 章</span>
</a>

<a class="card" href="part5_sglang_architecture/">
  <span class="card-icon">:material-lightning-bolt:</span>
  <span class="card-title">第五部分：SGLang 架构</span>
  <span class="card-desc">Runtime 与 Router、RadixAttention、Scheduler、ModelRunner、FlashInfer 集成与前端 DSL。</span>
  <span class="card-meta">10 章</span>
</a>

<a class="card" href="part6_sglang_internals/">
  <span class="card-icon">:material-cog:</span>
  <span class="card-title">第六部分：SGLang 内部机制</span>
  <span class="card-desc">高级 RadixAttention、数据与专家并行、torch.compile、重叠调度与 FP8 量化。</span>
  <span class="card-meta">8 章</span>
</a>

<a class="card" href="part7_cuda_kernels/">
  <span class="card-icon">:material-gpu:</span>
  <span class="card-title">第七部分：CUDA 与 Triton</span>
  <span class="card-desc">从零编写 GPU 内核 — PagedAttention、FlashAttention、融合算子、量化矩阵乘法与 CUTLASS。</span>
  <span class="card-meta">8 章</span>
</a>

<a class="card" href="part8_new_models/">
  <span class="card-icon">:material-puzzle:</span>
  <span class="card-title">第八部分：新模型接入</span>
  <span class="card-desc">向 vLLM 和 SGLang 添加新模型架构的完整指南，涵盖测试与性能调优。</span>
  <span class="card-meta">8 章</span>
</a>

<a class="card" href="part9_production/">
  <span class="card-icon">:material-rocket-launch:</span>
  <span class="card-title">第九部分：生产部署</span>
  <span class="card-desc">部署方案、负载均衡、监控告警、基准测试方法、成本优化与多节点服务。</span>
  <span class="card-meta">8 章</span>
</a>

<a class="card" href="part10_comparison/">
  <span class="card-icon">:material-scale-balance:</span>
  <span class="card-title">第十部分：框架对比</span>
  <span class="card-desc">vLLM 与 SGLang 的系统化对比 — 架构、调度、内存管理与选型决策框架。</span>
  <span class="card-meta">6 章</span>
</a>

<a class="card" href="part11_contributing/">
  <span class="card-icon">:material-source-pull:</span>
  <span class="card-title">第十一部分：开源贡献</span>
  <span class="card-desc">开发环境搭建、测试框架、调试技术、性能分析与代码审查流程。</span>
  <span class="card-meta">7 章</span>
</a>

<a class="card" href="part12_research/">
  <span class="card-icon">:material-telescope:</span>
  <span class="card-title">第十二部分：前沿研究</span>
  <span class="card-desc">前沿课题 — 分离式推理、KV-Cache 压缩、长上下文处理、推理模型与 MoE 优化。</span>
  <span class="card-meta">8 章</span>
</a>

</div>

<div class="section-divider" markdown>

## 学习路径

推荐的课程进阶路线。

</div>

```mermaid
graph LR
    A[基础知识] --> B[系统设计]
    B --> C[vLLM 架构]
    C --> D[vLLM 内部机制]
    D --> E[SGLang 架构]
    E --> F[SGLang 内部机制]
    F --> G[CUDA & Triton]
    G --> H[生产部署与前沿研究]

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

## 快速开始

</div>

```bash
git clone https://github.com/hideak1/vllm_study.git
cd vllm_study
make install   # 通过 uv 安装依赖
make serve     # 启动文档站点 (localhost:8000) + Jupyter (localhost:8888)
```

| 标识 | 含义 |
|-----------|---------|
| :material-information: **概念** | 核心概念与理论讲解 |
| :material-alert: **常见陷阱** | 常见错误与误区 |
| :material-lightbulb: **进阶技巧** | 专家级洞见与最佳实践 |
| :material-pencil: **练习** | 动手编程练习 |

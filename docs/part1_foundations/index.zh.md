# 第一部分：LLM 推理服务基础

**目标：** 构建概念基础 — 理解 LLM 推理服务为何困难，以及它与训练有何本质不同。

在深入任何具体框架之前，你需要深刻理解使 LLM 推理成为独特工程挑战的计算和系统层面问题。本部分将建立这些基础认知。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 1.1 | [Transformer 与 KV-Cache 回顾](../notebooks/part1/chapter_1.1_transformer_kvcache.ipynb) | 自回归解码的工作原理、KV-Cache 的必要性、预填充与解码阶段 |
| 1.2 | [GPU 显存层级](../notebooks/part1/chapter_1.2_gpu_memory.ipynb) | HBM 与 SRAM、显存带宽瓶颈、面向推理的 GPU 架构 |
| 1.3 | [算术强度与 Roofline 模型](../notebooks/part1/chapter_1.3_roofline_model.ipynb) | 计算密集型与访存密集型操作、LLM 推理的 Roofline 分析 |
| 1.4 | [分词与流式输出](../notebooks/part1/chapter_1.4_tokenization.ipynb) | BPE/SentencePiece 内部机制、反分词挑战、流式 Token 传输 |
| 1.5 | [延迟与吞吐量指标](../notebooks/part1/chapter_1.5_metrics.ipynb) | TTFT、TPOT、ITL、吞吐量测量与基准测试方法 |
| 1.6 | [批处理策略](../notebooks/part1/chapter_1.6_batching.ipynb) | 静态批处理、动态批处理、持续批处理 — 为何如此重要 |
| 1.7 | [量化入门](../notebooks/part1/chapter_1.7_quantization.ipynb) | FP16、INT8、INT4、GPTQ、AWQ、GGUF — 理论与实践 |
| 1.8 | [采样策略](../notebooks/part1/chapter_1.8_sampling.ipynb) | Temperature、top-k、top-p、束搜索、推测解码概述 |

## 前置条件

- 对 Transformer 架构的基本理解（注意力机制、FFN、残差连接）
- 熟悉 PyTorch（张量操作、基本模型定义）
- 线性代数基础（矩阵乘法、内存布局）

## 学习成果

完成第一部分后，你将能够：

- 解释为何 LLM 推理在解码阶段受限于显存带宽
- 计算任意 LLM 模型的显存需求
- 理解不同量化方法之间的权衡
- 建立直觉认知：为何持续批处理能带来 10-20 倍的吞吐量提升
- 分析 GPU 利用率并识别性能瓶颈

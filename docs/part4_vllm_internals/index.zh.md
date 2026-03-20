# 第四部分：vLLM 内部机制 — 内存与执行

**目标：** 掌握赋予 vLLM 性能优势的底层机制 — 从 KV-Cache 内存布局到分布式执行。

本部分深入架构之下的实现细节，这些细节对性能至关重要。你将精确了解 GPU 上的内存布局方式、CUDA Graph 如何消除内核启动开销，以及 vLLM 如何跨多个 GPU 和节点进行扩展。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 4.1 | [KV-Cache 内存布局](../notebooks/part4/chapter_4.1_kvcache_layout.ipynb) | GPU 显存中的物理块布局、槽位映射、Key/Value 张量组织 |
| 4.2 | [前缀缓存 (APC)](../notebooks/part4/chapter_4.2_prefix_caching.ipynb) | 自动前缀缓存、基于哈希的块匹配、缓存命中/未命中处理 |
| 4.3 | [CUDA Graph 捕获](../notebooks/part4/chapter_4.3_cuda_graphs.ipynb) | 图捕获与重放、填充策略、CUDA Graph 的适用场景与局限性 |
| 4.4 | [自定义 CUDA 内核](../notebooks/part4/chapter_4.4_cuda_kernels.ipynb) | vLLM 的自定义内核：reshape_and_cache、paged_attention_v1/v2、旋转位置编码 |
| 4.5 | [分布式执行](../notebooks/part4/chapter_4.5_distributed.ipynb) | 张量并行实现、NCCL 通信、基于 Ray 的编排 |
| 4.6 | [推测解码](../notebooks/part4/chapter_4.6_speculative_decoding.ipynb) | 草稿模型与无草稿方法、验证机制、Token 接受策略、吞吐量提升 |
| 4.7 | [分块预填充](../notebooks/part4/chapter_4.7_chunked_prefill.ipynb) | 将长预填充拆分为块、预填充与解码混合执行、延迟控制 |
| 4.8 | [LoRA 服务](../notebooks/part4/chapter_4.8_lora.ipynb) | 多 LoRA 服务、适配器管理、SGMV 内核、动态适配器加载 |

## 前置条件

- 完成第三部分（vLLM 架构深度解析）
- 理解 CUDA 编程概念（线程、线程块、内核）
- 熟悉 GPU 显存管理与性能分析工具
- 了解分布式计算基础（集合通信操作、NCCL）

## 学习成果

完成第四部分后，你将能够：

- 精确理解 KV-Cache 块在 GPU 上的存储和访问方式
- 实现和调试多轮对话的前缀缓存
- 针对不同批大小分析和优化 CUDA Graph 捕获
- 理解分布式执行模型和通信模式
- 配置推测解码并衡量其对吞吐量的影响
- 部署高效适配器管理的多 LoRA 服务

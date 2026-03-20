# 第六部分：SGLang 内部机制 — 性能与进阶

**目标：** 深入 SGLang 的性能关键内部实现 — 高级缓存策略、并行方案与底层优化。

本部分探索将 SGLang 的吞吐量和延迟推至极限的技术。从高级 RadixAttention 策略到重叠调度和 FP8 量化，你将学习使 SGLang 在 LLM 推理服务领域保持竞争力的核心内部机制。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 6.1 | [RadixAttention 进阶](../notebooks/part6/chapter_6.1_radix_advanced.ipynb) | 缓存感知调度、多级淘汰、树剪枝、内存优化 |
| 6.2 | [数据并行与专家并行](../notebooks/part6/chapter_6.2_parallelism.ipynb) | 数据并行、MoE 的专家并行、混合并行策略 |
| 6.3 | [torch.compile 集成](../notebooks/part6/chapter_6.3_torch_compile.ipynb) | 使用 torch.compile 进行图捕获、自定义后端、编译缓存与局限性 |
| 6.4 | [重叠调度](../notebooks/part6/chapter_6.4_overlap_scheduling.ipynb) | 计算与通信重叠、双缓冲、流水线微批次 |
| 6.5 | [FP8 与量化](../notebooks/part6/chapter_6.5_fp8_quantization.ipynb) | FP8 格式（E4M3/E5M2）、逐张量 vs 逐通道、W8A8 推理、校准方法 |
| 6.6 | [推测解码](../notebooks/part6/chapter_6.6_speculative_decoding.ipynb) | SGLang 的推测解码实现、EAGLE 集成、Token 验证 |
| 6.7 | [Embedding 与奖励模型](../notebooks/part6/chapter_6.7_embedding_reward.ipynb) | Embedding 模型服务、奖励模型推理、分类头 |
| 6.8 | [自定义 CUDA 内核](../notebooks/part6/chapter_6.8_cuda_kernels.ipynb) | SGLang 专用内核、自定义注意力、融合操作、内核分发 |

## 前置条件

- 完成第五部分（SGLang 架构深度解析）
- 理解 CUDA 编程与 GPU 执行模型
- 熟悉量化概念（第一部分内容）
- 了解分布式计算与集合通信操作

## 学习成果

完成第六部分后，你将能够：

- 针对复杂工作负载实现高级 RadixAttention 策略
- 为 MoE 和稠密模型配置和优化并行策略
- 理解 torch.compile 集成及其性能收益
- 分析和优化重叠调度以最大化 GPU 利用率
- 使用 SGLang 部署 FP8 量化模型以实现高性价比推理
- 分析和修改 SGLang 的自定义 CUDA 内核

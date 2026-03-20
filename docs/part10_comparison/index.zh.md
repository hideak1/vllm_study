# 第十部分：对比分析与基准测试

**目标：** 从架构、调度、内存管理和实际性能等维度，系统化地对比 vLLM 与 SGLang。

深入学习两个框架之后，本部分通过严格的并排对比将所有知识汇聚在一起。你将理解两者根本性的设计差异，运行受控基准测试，并建立一套选型决策框架来帮助你为具体场景选择合适的推理引擎。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 10.1 | [架构对比](../notebooks/part10/chapter_10.1_architecture.ipynb) | 引擎设计哲学、组件映射、抽象层级、可扩展性 |
| 10.2 | [调度对比](../notebooks/part10/chapter_10.2_scheduling.ipynb) | 调度算法、抢占策略、批次构建、公平性保证 |
| 10.3 | [内存管理对比](../notebooks/part10/chapter_10.3_memory.ipynb) | PagedAttention vs RadixAttention、块分配、前缀缓存策略 |
| 10.4 | [性能基准测试](../notebooks/part10/chapter_10.4_benchmarks.ipynb) | 受控基准测试：不同模型大小和工作负载下的吞吐量、延迟、TTFT、ITL |
| 10.5 | [功能矩阵](../notebooks/part10/chapter_10.5_features.ipynb) | 逐项功能对比：量化、多模态、推测解码、LoRA |
| 10.6 | [选型决策框架](../notebooks/part10/chapter_10.6_decision.ipynb) | 何时选择 vLLM vs SGLang、基于工作负载的建议、迁移策略 |

## 前置条件

- 完成第三至第六部分（深入理解 vLLM 和 SGLang）
- 具有运行两个框架的实际经验
- 理解基准测试方法论（第九部分内容）
- 熟悉性能数据的统计分析

## 学习成果

完成第十部分后，你将能够：

- 清晰阐述 vLLM 与 SGLang 之间的根本架构差异
- 解释 PagedAttention 与 RadixAttention 的设计权衡
- 设计和运行公平、可复现的推理引擎对比基准测试
- 针对特定工作负载做出明智的框架选型决策
- 使用结构化的对比方法论评估新兴推理服务框架

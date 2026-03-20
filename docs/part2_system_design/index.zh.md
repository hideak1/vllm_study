# 第二部分：LLM 推理服务系统设计

**目标：** 在深入具体框架之前，全面理解 LLM 推理服务系统的完整架构。

本部分教你像系统架构师一样思考。你将理解 LLM 推理服务系统的每个组件以及相关的设计权衡，这样当你阅读 vLLM 和 SGLang 源码时，就能明白每个组件*为何*存在。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 2.1 | [请求生命周期](../notebooks/part2/chapter_2.1_request_lifecycle.ipynb) | 请求的端到端流程：API → 分词 → 调度 → 预填充 → 解码 → 反分词 → 流式输出 |
| 2.2 | [调度器设计](../notebooks/part2/chapter_2.2_scheduler_design.ipynb) | FCFS、优先级调度、抢占策略、公平性保证 |
| 2.3 | [KV-Cache 内存管理](../notebooks/part2/chapter_2.3_kvcache_memory.ipynb) | 分页、换入换出、重计算 — 核心内存管理挑战 |
| 2.4 | [推理场景下的模型并行](../notebooks/part2/chapter_2.4_model_parallelism.ipynb) | 张量并行、流水线并行、推理场景中的专家并行 |
| 2.5 | [API 层设计](../notebooks/part2/chapter_2.5_api_layer.ipynb) | OpenAI 兼容 API、gRPC、SSE 流式传输、请求校验 |
| 2.6 | [多模型服务](../notebooks/part2/chapter_2.6_multi_model.ipynb) | 模型路由、权重共享、动态模型加载与卸载 |
| 2.7 | [分离式推理](../notebooks/part2/chapter_2.7_disaggregated.ipynb) | 预填充/解码分离、节点间 KV-Cache 传输 |

## 前置条件

- 完成第一部分（基础知识）
- 对操作系统概念有基本了解（调度、内存管理）
- 熟悉 REST API 和异步编程

## 学习成果

完成第二部分后，你将能够：

- 从零设计一个 LLM 推理服务系统
- 对调度策略做出明智的决策
- 理解 KV-Cache 内存管理的权衡
- 为你的硬件选择合适的并行策略
- 评估现有推理服务框架的架构设计

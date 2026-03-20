# 第十二部分：前沿研究与未来方向

**目标：** 探索 LLM 推理服务研究的前沿 — 塑造下一代推理系统的论文、技术与思想。

LLM 推理服务是一个快速发展的领域。本部分梳理最新的研究方向，从分离式推理和 KV-Cache 压缩到长上下文处理和 Agent 服务。每章将学术研究与实际实现相连接，帮助你始终站在技术前沿。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 12.1 | [分离式推理](../notebooks/part12/chapter_12.1_disaggregated.ipynb) | 预填充/解码分离、DistServe、Splitwise、Mooncake — 架构与权衡 |
| 12.2 | [KV-Cache 压缩](../notebooks/part12/chapter_12.2_kvcache_compression.ipynb) | 量化 KV-Cache、Token 淘汰、H2O、StreamingLLM、压缩算法 |
| 12.3 | [长上下文推理服务](../notebooks/part12/chapter_12.3_long_context.ipynb) | Ring Attention、序列并行、分块处理、100K+ Token 的内存管理 |
| 12.4 | [推理模型服务](../notebooks/part12/chapter_12.4_reasoning_models.ipynb) | 思维链推理服务、长输出模型、预算感知调度、思考 Token |
| 12.5 | [硬件感知优化](../notebooks/part12/chapter_12.5_hardware.ipynb) | AMD GPU、Intel Gaudi、AWS Inferentia、Apple Silicon — 跨平台推理服务 |
| 12.6 | [Agent 服务](../notebooks/part12/chapter_12.6_agent_serving.ipynb) | 工具调用模式、多轮优化、有状态会话、函数调用 |
| 12.7 | [MoE 优化](../notebooks/part12/chapter_12.7_moe_optimization.ipynb) | 专家卸载、动态路由、专家缓存、专家间负载均衡 |
| 12.8 | [持续学习](../notebooks/part12/chapter_12.8_continuous_learning.ipynb) | 跟踪最新研究、高效阅读论文、实验方法论 |

## 前置条件

- 完成第一至第十一部分（全面理解 LLM 推理服务）
- 能够阅读学术论文（机器学习系统、计算机体系结构）
- 理解分布式系统概念
- 愿意尝试最前沿的技术

## 学习成果

完成第十二部分后，你将能够：

- 评估和实现分离式推理架构
- 应用 KV-Cache 压缩技术降低内存占用
- 为长上下文和推理密集型工作负载设计推理系统
- 将推理系统适配到新的硬件平台
- 为 Agent 和工具调用工作负载构建高效的推理流水线
- 建立系统化的方法来跟踪和评估新研究

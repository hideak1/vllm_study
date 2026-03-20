# 第五部分：SGLang 架构深度解析

**目标：** 全面理解 SGLang 的架构 — 独特的运行时、RadixAttention 以及使其脱颖而出的前端 DSL。

SGLang 采用了与众不同的 LLM 推理服务方案，构建于基数树的 KV-Cache（RadixAttention）、基于 Router 的高性能运行时，以及强大的结构化生成前端 DSL 之上。本部分逐一剖析每个组件，展示 SGLang 如何实现其性能优势。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 5.1 | [代码库导览](../notebooks/part5/chapter_5.1_codebase_tour.ipynb) | 仓库结构、包组织、核心抽象、构建与安装 |
| 5.2 | [Runtime 与 Router](../notebooks/part5/chapter_5.2_runtime.ipynb) | 运行时架构、基于 Router 的请求分发、进程管理 |
| 5.3 | [RadixAttention](../notebooks/part5/chapter_5.3_radix_attention.ipynb) | 用于 KV-Cache 的基数树、自动前缀共享、淘汰策略 |
| 5.4 | [Scheduler](../notebooks/part5/chapter_5.4_scheduler.ipynb) | 调度策略、批次构建、优先级管理、抢占机制 |
| 5.5 | [Tokenizer 与 Detokenizer](../notebooks/part5/chapter_5.5_tokenizer.ipynb) | 分词流水线、增量反分词、特殊 Token 处理 |
| 5.6 | [ModelRunner 与 TpWorker](../notebooks/part5/chapter_5.6_model_runner.ipynb) | 模型执行、张量并行 Worker、输入准备、前向传播 |
| 5.7 | [FlashInfer 集成](../notebooks/part5/chapter_5.7_flashinfer.ipynb) | FlashInfer 作为注意力后端、基于 FlashInfer 的分页 KV-Cache、性能表现 |
| 5.8 | [约束解码](../notebooks/part5/chapter_5.8_constrained_decoding.ipynb) | JSON Schema 强制约束、正则引导生成、基于语法的解码、跳跃前进 |
| 5.9 | [前端 DSL](../notebooks/part5/chapter_5.9_frontend_dsl.ipynb) | SGLang 语言原语、gen/select/fork/join、程序编译、批量执行 |
| 5.10 | [多模态支持](../notebooks/part5/chapter_5.10_multimodal.ipynb) | 视觉-语言模型、图片/视频输入处理、多模态架构 |

## 前置条件

- 完成第一部分和第二部分（基础知识与系统设计）
- 熟练掌握 Python（异步编程、多进程、ZMQ）
- 理解树数据结构（基数树/前缀树）
- 对 SGLang 的安装和使用有基本了解

## 学习成果

完成第五部分后，你将能够：

- 浏览 SGLang 代码库并理解其运行时架构
- 解释 RadixAttention 如何实现自动前缀共享
- 追踪一个请求经过 Router、Scheduler 和模型执行流水线的完整路径
- 使用 SGLang 前端 DSL 编写高效的多步 LLM 程序
- 理解 FlashInfer 集成及其对性能的影响
- 使用 JSON Schema 和语法规则实现约束解码

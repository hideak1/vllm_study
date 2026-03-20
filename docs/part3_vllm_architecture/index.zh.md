# 第三部分：vLLM 架构深度解析

**目标：** 从 API 入口到 GPU 执行，追踪 vLLM 的每个核心组件，理解各部分如何协同工作。

有了第一部分和第二部分的概念基础，你现在可以阅读真正的生产级代码了。本部分逐一剖析 vLLM 代码库的各个组件，讲解设计决策、数据流以及使 vLLM 成为最广泛采用的 LLM 推理引擎之一的关键抽象。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 3.1 | [代码库导览](../notebooks/part3/chapter_3.1_codebase_tour.ipynb) | 仓库结构、包组织、构建系统、入口点 |
| 3.2 | [LLMEngine 与 AsyncLLMEngine](../notebooks/part3/chapter_3.2_llm_engine.ipynb) | 核心调度器：请求接收、调度循环、输出处理 |
| 3.3 | [Scheduler 深度解析](../notebooks/part3/chapter_3.3_scheduler.ipynb) | 调度策略、序列组、抢占机制、等待/运行/换出队列 |
| 3.4 | [PagedAttention](../notebooks/part3/chapter_3.4_paged_attention.ipynb) | KV-Cache 的虚拟内存机制、块表、写时复制、内存共享 |
| 3.5 | [Block Manager](../notebooks/part3/chapter_3.5_block_manager.ipynb) | 块分配、淘汰策略、换入/换出、物理到逻辑映射 |
| 3.6 | [Worker 与 ModelRunner](../notebooks/part3/chapter_3.6_worker_model_runner.ipynb) | GPU Worker 生命周期、模型执行、输入准备、输出提取 |
| 3.7 | [Model Loader](../notebooks/part3/chapter_3.7_model_loader.ipynb) | 权重加载策略、safetensors、分片检查点、延迟加载 |
| 3.8 | [Attention 后端](../notebooks/part3/chapter_3.8_attention_backends.ipynb) | FlashAttention、FlashInfer、xFormers — 后端选择与分发 |
| 3.9 | [采样流水线](../notebooks/part3/chapter_3.9_sampling_pipeline.ipynb) | Logits 处理、采样参数、logprobs、束搜索实现 |
| 3.10 | [API Server](../notebooks/part3/chapter_3.10_api_server.ipynb) | FastAPI 服务、OpenAI 兼容端点、请求/响应处理、SSE 流式传输 |

## 前置条件

- 完成第一部分和第二部分（基础知识与系统设计）
- 熟练掌握 Python（async/await、生成器、dataclass）
- 具备阅读大型 Python 代码库的能力
- 对 vLLM 的安装和使用有基本了解

## 学习成果

完成第三部分后，你将能够：

- 自信地浏览 vLLM 代码库并定位任意组件
- 追踪一个请求从引擎、调度器、Worker 到返回的完整流程
- 解释 PagedAttention 如何消除内存碎片
- 理解架构中每个抽象层的作用
- 阅读和修改 vLLM 源码以进行调试或功能开发

# 第八部分：添加新模型架构

**目标：** 学习在 vLLM 和 SGLang 中添加新模型架构的支持，从注册到性能调优。

当新模型架构发布时，需要有人将其集成到推理服务框架中。本部分教你具体的操作方法 — 涵盖从模型注册与实现，到量化支持、测试和性能优化的完整生命周期，同时覆盖 vLLM 和 SGLang 两个框架。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 8.1 | [vLLM 模型注册](../notebooks/part8/chapter_8.1_vllm_registration.ipynb) | 模型注册表、配置映射、架构检测、入口点 |
| 8.2 | [在 vLLM 中实现模型](../notebooks/part8/chapter_8.2_vllm_new_model.ipynb) | 逐步实现模型：层定义、注意力、MLP、权重加载、并行化 |
| 8.3 | [添加量化支持](../notebooks/part8/chapter_8.3_quantization_support.ipynb) | GPTQ、AWQ、FP8 支持、量化配置、线性层替换 |
| 8.4 | [多模态集成](../notebooks/part8/chapter_8.4_multimodal.ipynb) | 视觉编码器、输入处理器、多模态输入映射、交叉注意力 |
| 8.5 | [SGLang 模型注册](../notebooks/part8/chapter_8.5_sglang_registration.ipynb) | SGLang 模型注册表、配置、架构映射 |
| 8.6 | [在 SGLang 中实现模型](../notebooks/part8/chapter_8.6_sglang_new_model.ipynb) | SGLang 中的模型实现：层定义、前向传播、权重加载、RadixAttention 集成 |
| 8.7 | [测试与验证](../notebooks/part8/chapter_8.7_testing.ipynb) | 正确性测试、与 HuggingFace 的输出比对、数值精度验证 |
| 8.8 | [性能调优](../notebooks/part8/chapter_8.8_performance.ipynb) | 新模型基准测试、瓶颈识别、优化策略、内存分析 |

## 前置条件

- 完成第三至第五部分（理解 vLLM 和 SGLang 架构）
- 深入理解 Transformer 变体（GQA、MQA、滑动窗口等）
- 熟练掌握 PyTorch（自定义模块、state_dict 操作、张量并行）
- 熟悉 HuggingFace Transformers 库

## 学习成果

完成第八部分后，你将能够：

- 从零向 vLLM 添加新模型架构
- 从零向 SGLang 添加新模型架构
- 为自定义模型实现量化支持
- 将多模态能力集成到推理服务框架中
- 编写全面的测试以验证模型正确性
- 分析和优化新模型实现以达到生产级吞吐量

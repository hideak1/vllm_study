# 第七部分：自定义 CUDA 内核与 Triton

**目标：** 学习编写、优化和分析驱动 LLM 推理服务的 GPU 内核 — 从 CUDA C++ 到 Triton 再到 CUTLASS。

LLM 推理服务的性能最终取决于 GPU 内核的效率。本部分从 CUDA 基础出发，经过 Triton 编程，最终实现生产级内核（如从零构建 PagedAttention）。你将获得为 vLLM 和 SGLang 编写和优化自定义内核所需的技能。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 7.1 | [CUDA 编程入门](../notebooks/part7/chapter_7.1_cuda_primer.ipynb) | 线程层级、内存模型、Warp 级原语、共享内存、同步机制 |
| 7.2 | [Triton 编程](../notebooks/part7/chapter_7.2_triton.ipynb) | Triton 语言基础、块级编程、自动调优、融合操作 |
| 7.3 | [PagedAttention 内核](../notebooks/part7/chapter_7.3_paged_attention_kernel.ipynb) | 从零构建 PagedAttention：块表查找、分页 QKV、Softmax 分块 |
| 7.4 | [FlashAttention 算法](../notebooks/part7/chapter_7.4_flash_attention.ipynb) | 在线 Softmax、分块策略、IO 感知计算、前向与反向传播 |
| 7.5 | [融合内核](../notebooks/part7/chapter_7.5_fused_kernels.ipynb) | 融合 Add-RMSNorm、融合旋转位置编码、激活融合、内核融合策略 |
| 7.6 | [量化矩阵乘法](../notebooks/part7/chapter_7.6_quantized_matmul.ipynb) | INT8/INT4 GEMM、反量化策略、混合精度累加、Marlin 内核 |
| 7.7 | [CUTLASS 与 CuTe](../notebooks/part7/chapter_7.7_cutlass.ipynb) | CUTLASS 抽象、CuTe 布局代数、构建自定义 GEMM 内核、Epilogue 融合 |
| 7.8 | [内核性能分析](../notebooks/part7/chapter_7.8_profiling.ipynb) | Nsight Compute、Nsight Systems、占用率分析、内核 Roofline 模型、优化工作流 |

## 前置条件

- 完成第三至第六部分（理解内核在 vLLM/SGLang 中的使用场景）
- 熟练掌握 C/C++（指针、内存管理、模板）
- 线性代数（矩阵乘法、注意力计算）
- 拥有安装了 CUDA Toolkit 的 NVIDIA GPU

## 学习成果

完成第七部分后，你将能够：

- 编写配置正确线程/线程块和共享内存的 CUDA 内核
- 使用 Triton 实现带自动调优的注意力内核
- 从零构建 PagedAttention 内核并理解生产级实现
- 在实现层面理解 FlashAttention 算法
- 编写和优化量化矩阵乘法内核
- 系统性地分析 GPU 内核并发现优化机会

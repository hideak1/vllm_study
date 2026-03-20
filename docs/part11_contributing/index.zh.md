# 第十一部分：贡献与开发工作流

**目标：** 成为 vLLM 和 SGLang 的高效贡献者 — 从搭建开发环境到成功合并 PR。

开源贡献不仅仅是写代码。本部分涵盖完整的开发工作流：环境搭建、测试、调试、性能分析、代码审查与 CI/CD。无论你想修复 Bug、添加功能还是改进文档，本部分都会给你有效贡献所需的实用技能。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 11.1 | [开发环境搭建](../notebooks/part11/chapter_11.1_dev_setup.ipynb) | 从源码构建、开发容器、IDE 配置、依赖管理 |
| 11.2 | [测试框架](../notebooks/part11/chapter_11.2_testing.ipynb) | 单元测试、集成测试、模型测试、测试夹具、pytest 模式 |
| 11.3 | [调试技术](../notebooks/part11/chapter_11.3_debugging.ipynb) | GDB 调试 CUDA、Python 调试、日志记录、常见故障模式、崩溃分析 |
| 11.4 | [性能分析](../notebooks/part11/chapter_11.4_profiling.ipynb) | Nsight Systems、torch.profiler、py-spy、内存分析、Trace 分析 |
| 11.5 | [代码审查与 PR 流程](../notebooks/part11/chapter_11.5_code_review.ipynb) | PR 最佳实践、审查清单、提交规范、反馈处理 |
| 11.6 | [CI/CD 流水线](../notebooks/part11/chapter_11.6_cicd.ipynb) | GitHub Actions 工作流、测试矩阵、GPU CI、发布流程 |
| 11.7 | [撰写文档](../notebooks/part11/chapter_11.7_documentation.ipynb) | 文档字符串、API 文档、教程、架构决策记录 |

## 前置条件

- 完成第三至第六部分（理解两个代码库）
- 熟练使用 Git（分支管理、变基、冲突解决）
- 具有 Python 测试经验（pytest）
- 熟悉 CI/CD 概念

## 学习成果

完成第十一部分后，你将能够：

- 为 vLLM 和 SGLang 搭建完整的开发环境
- 在单元、集成和系统层面编写和运行测试
- 调试涉及 Python、CUDA 和分布式执行的复杂问题
- 通过性能分析识别回归问题和优化机会
- 提交结构良好、通过 CI 并高效获得审批的 PR
- 理解两个项目的 CI/CD 流水线与发布流程

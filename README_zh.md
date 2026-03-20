[English](README.md) | **中文** | [日本語](README_ja.md)

# vLLM & SGLang 学习笔记

**一个用于深入理解 LLM 推理服务系统的学习项目 —— 从基础概念到源码级精通。**

**[在线阅读](https://hideak1.github.io/vllm_study/zh/)** | **[在 Colab 中打开](https://colab.research.google.com/github/hideak1/vllm_study/blob/main/notebooks/part1/chapter_1.1_transformer_kvcache.ipynb)** | **[vLLM](https://github.com/vllm-project/vllm)** | **[SGLang](https://github.com/sgl-project/sglang)**

> **声明**: 这是一个个人学习项目，并非官方文档。Notebook 内容由 **AI 生成**（Claude），并按结构化课程体系组织，仅供学习参考。内容可能存在不准确之处，也可能因框架快速迭代而过时。如果发现错误，欢迎提交 PR 或 Issue！

本项目受 [UvA Deep Learning Tutorials](https://uvadlc-notebooks.readthedocs.io/en/latest/) 启发，将 96 个 Jupyter Notebook 整理为系统化的教程，包含详细讲解、可运行的演示代码和动手练习，帮助你深入学习 vLLM 和 SGLang 的内部实现。

---

## 课程大纲

| 部分 | 标题 | 章节数 | 重点内容 |
|:----:|------|:------:|----------|
| 1 | LLM 推理服务基础 | 8 | GPU 内存、批处理、量化、采样、性能指标 |
| 2 | LLM 推理系统设计 | 7 | 调度器、KV-Cache 管理、并行策略、API 设计 |
| 3 | vLLM 架构深度解析 | 10 | 完整源码解读：引擎、调度器、PagedAttention |
| 4 | vLLM 内部机制 | 8 | CUDA Graph、前缀缓存、投机解码、LoRA |
| 5 | SGLang 架构深度解析 | 10 | 运行时、RadixAttention、约束解码、前端 DSL |
| 6 | SGLang 内部机制 | 8 | 重叠调度、torch.compile、FP8、专家并行 |
| 7 | CUDA 与 Triton 内核编程 | 8 | 从零实现 PagedAttention、FlashAttention、融合算子 |
| 8 | 新增模型架构 | 8 | 两个框架的端到端模型集成指南 |
| 9 | 生产环境部署 | 8 | Docker、K8s、监控、基准测试、成本优化 |
| 10 | 对比分析 | 6 | vLLM vs SGLang：架构、调度、内存、性能基准 |
| 11 | 参与贡献与开发 | 7 | 开发环境、测试、调试、性能分析、PR 流程 |
| 12 | 前沿研究方向 | 8 | 分离式推理、长上下文、智能体、MoE |

**总计：96 个 Notebook，约 76 张图表，290+ 个练习**

## 快速开始

### 环境要求

- [uv](https://docs.astral.sh/uv/getting-started/installation/)（Python 包管理器）
- Python 3.10–3.12

### 本地运行

```bash
git clone https://github.com/hideak1/vllm_study.git
cd vllm_study
make install    # 安装所有依赖
make serve      # 启动文档站点 + Jupyter 服务
```

然后打开：
- **http://localhost:8000** — 浏览教程（MkDocs 站点）
- **http://localhost:8888** — 运行 Notebook 和练习（Jupyter）

### 在 Google Colab 中运行

每个 Notebook 顶部都有 **"Open in Colab"** 徽标。点击即可获得带 GPU 的免费副本 —— 无需本地环境。

### 可用命令

```bash
make install          # 通过 uv 安装依赖
make serve            # 同时启动 MkDocs + Jupyter 服务
make docs             # 仅启动 MkDocs 文档服务
make jupyter          # 仅启动 Jupyter 服务
make build            # 构建静态站点
make deploy           # 部署到 GitHub Pages
make clean            # 清理构建产物
make sync-notebooks   # 将 Notebook 复制到 docs/ 目录
```

## 学习路径

```
第1部分（基础知识）→ 第2部分（系统设计）
        ↓
第3部分（vLLM 架构）→ 第4部分（vLLM 内部机制）
        ↓
第5部分（SGLang 架构）→ 第6部分（SGLang 内部机制）
        ↓
第7部分（CUDA/Triton）→ 第8部分（新增模型）
        ↓
第9部分（生产部署）→ 第10部分（对比分析）
        ↓
第11部分（参与贡献）→ 第12部分（前沿研究）
```

## 适合谁？

适合以下工程师：
- 使用过 vLLM/SGLang 但想深入理解内部实现
- 希望在源码层面进行贡献
- 需要为 LLM 推理服务编写自定义 CUDA/Triton 内核
- 想要向框架中添加新的模型架构
- 正在构建生产级 LLM 推理服务基础设施

## 需要 GPU 吗？

**不需要。** 几乎所有教程和练习都可以在 CPU 上运行。Notebook 通过 Python 模拟来讲解 GPU 概念 —— 调度器、内存管理器、数据结构等。只有第 7 部分中的 3 个练习（Triton 内核编写）需要 GPU，而这些练习都提供了 Colab 徽标以获取免费 GPU。

## 项目结构

```
vllm_study/
├── notebooks/          # 96 个 Jupyter Notebook（数据源）
│   ├── part1/          # LLM 推理服务基础
│   ├── part2/          # LLM 推理系统设计
│   ├── ...
│   └── part12/         # 前沿研究方向
├── docs/               # MkDocs 文档源文件
│   ├── index.md        # 首页
│   ├── part1_foundations/
│   ├── ...
│   └── javascripts/    # MathJax 配置
├── mkdocs.yml          # MkDocs 配置
├── pyproject.toml      # 依赖管理（通过 uv）
├── uv.lock             # 锁定的依赖版本
├── start.sh            # 启动脚本
├── Makefile            # 常用命令
└── README.md
```

## 技术栈

- **[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)** — 支持暗色模式、搜索和导航的文档站点
- **[mkdocs-jupyter](https://github.com/danielfrg/mkdocs-jupyter)** — 将 Notebook 渲染为文档页面
- **[uv](https://docs.astral.sh/uv/)** — 快速、可复现的依赖管理
- **[MathJax v3](https://www.mathjax.org/)** — Notebook 中的 LaTeX 数学公式渲染

## 参与贡献

欢迎贡献！如果发现错误、有建议或想添加内容：

1. Fork 本仓库
2. 创建分支（`git checkout -b fix/chapter-3.4-typo`）
3. 进行修改
4. 提交 PR

## 许可证

MIT

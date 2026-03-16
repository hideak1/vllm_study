# vLLM & SGLang Expert Tutorials

**A comprehensive learning resource for mastering LLM serving systems — from fundamentals to contributor-level expertise.**

---

## Welcome

This tutorial series provides a systematic path to becoming an expert in **vLLM** and **SGLang**, the two most important open-source LLM serving frameworks. Inspired by the [UvA Deep Learning Tutorials](https://uvadlc-notebooks.readthedocs.io/en/latest/), each chapter combines detailed explanations with runnable code demos and hands-on exercises.

## Who Is This For?

This resource is designed for engineers who:

- Have used vLLM/SGLang to serve models but want to understand the internals
- Want to contribute to vLLM/SGLang at the source code level
- Need to write custom CUDA kernels for LLM serving
- Want to add new model architectures to these frameworks
- Are building production LLM serving infrastructure

## Prerequisites

- Solid Python programming skills
- Basic understanding of deep learning and Transformers
- Familiarity with PyTorch
- Access to a GPU (NVIDIA recommended, 16GB+ VRAM)
- Basic Linux/Unix command line proficiency

## Curriculum Overview

| Part | Title | Chapters | Focus |
|------|-------|----------|-------|
| **1** | [Foundations of LLM Serving](part1_foundations/index.md) | 8 | Core concepts: GPU memory, batching, quantization, metrics |
| **2** | [LLM Serving System Design](part2_system_design/index.md) | 7 | Architecture patterns: schedulers, memory management, APIs |
| **3** | [vLLM Architecture Deep Dive](part3_vllm_architecture/index.md) | 10 | Full vLLM source code walkthrough |
| **4** | [vLLM Internals](part4_vllm_internals/index.md) | 8 | Memory systems, CUDA graphs, distributed execution |
| **5** | [SGLang Architecture Deep Dive](part5_sglang_architecture/index.md) | 10 | Full SGLang source code walkthrough |
| **6** | [SGLang Internals](part6_sglang_internals/index.md) | 8 | RadixAttention, overlap scheduling, optimizations |
| **7** | [Custom CUDA Kernels & Triton](part7_cuda_kernels/index.md) | 8 | Write your own GPU kernels for LLM serving |
| **8** | [Adding New Model Architectures](part8_new_models/index.md) | 8 | End-to-end model integration guide |
| **9** | [Production Deployment](part9_production/index.md) | 8 | Docker, K8s, monitoring, cost optimization |
| **10** | [Comparative Analysis](part10_comparison/index.md) | 6 | vLLM vs SGLang systematic comparison |
| **11** | [Contributing & Development](part11_contributing/index.md) | 7 | Dev setup, testing, debugging, PR workflow |
| **12** | [Research & Future Directions](part12_research/index.md) | 8 | Cutting-edge: disaggregated serving, long-context, agents |

**Total: 12 Parts, 105 Chapters**

## Recommended Learning Path

```
Part 1 (Foundations) → Part 2 (System Design)
    ↓
Part 3 (vLLM Architecture) → Part 4 (vLLM Internals)
    ↓
Part 5 (SGLang Architecture) → Part 6 (SGLang Internals)
    ↓
Part 7 (CUDA/Triton) → Part 8 (New Models)
    ↓
Part 9 (Production) → Part 10 (Comparison)
    ↓
Part 11 (Contributing) → Part 12 (Research)
```

## How to Use These Tutorials

### Quick Start (Recommended)
```bash
git clone <repo-url>
cd vllm_study
make install   # Install dependencies
make serve     # Start docs + Jupyter servers
```
This starts **both** servers with all dependencies managed by `uv`:

- **http://localhost:8000** — Read tutorials (MkDocs site)
- **http://localhost:8888** — Run exercises (Jupyter notebooks)

No manual dependency installation needed — `uv` handles everything automatically.

### Google Colab
Each notebook includes an "Open in Colab" badge for cloud execution with free GPU access.

### Other Commands
```bash
make install            # Install dependencies
make serve              # Start docs + Jupyter servers
make docs               # Start only MkDocs server
make jupyter            # Start only Jupyter server
make build              # Build static site (mkdocs build)
make deploy             # Deploy to GitHub Pages
make clean              # Remove build artifacts
make sync-notebooks     # Copy notebooks into docs/
```

### Manual Setup (without Make)
```bash
uv sync                          # Install dependencies
uv sync --extra ml               # + PyTorch & Transformers (macOS/CPU)
uv sync --extra gpu              # + vLLM, Triton (Linux + NVIDIA GPU)
uv run mkdocs serve              # Start docs site
uv run jupyter notebook           # Start Jupyter
```

## Conventions

Throughout these tutorials, we use the following conventions:

!!! info "Concept Explanation"
    Blue boxes explain key concepts and theory.

!!! warning "Common Pitfall"
    Orange boxes highlight common mistakes and misconceptions.

!!! tip "Pro Tip"
    Green boxes share expert-level insights and best practices.

!!! example "Hands-on Exercise"
    Purple boxes contain exercises for you to try.

## Citation

If you find these tutorials useful, please star the repository and share with others in the LLM serving community.

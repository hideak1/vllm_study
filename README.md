# vLLM & SGLang Study Notes

**A learning project for understanding LLM serving systems — from fundamentals to internals.**

**[Read Online](https://hideak1.github.io/vllm_study/)** | **[Open in Colab](https://colab.research.google.com/github/hideak1/vllm_study/blob/main/notebooks/part1/chapter_1.1_transformer_kvcache.ipynb)** | **[vLLM](https://github.com/vllm-project/vllm)** | **[SGLang](https://github.com/sgl-project/sglang)**

> **Disclaimer**: This is a personal study project, not official documentation. The notebook content is **AI-generated** (by Claude) and organized into a structured curriculum for learning purposes. Content may contain inaccuracies or become outdated as these frameworks evolve rapidly. If you spot errors, PRs and issues are very welcome!

Inspired by [UvA Deep Learning Tutorials](https://uvadlc-notebooks.readthedocs.io/en/latest/), this project organizes 96 Jupyter notebooks with explanations, runnable demos, and hands-on exercises for studying vLLM and SGLang internals.

---

## Curriculum

| Part | Title | Chapters | Focus |
|:----:|-------|:--------:|-------|
| 1 | Foundations of LLM Serving | 8 | GPU memory, batching, quantization, sampling, metrics |
| 2 | LLM Serving System Design | 7 | Schedulers, KV-cache management, parallelism, APIs |
| 3 | vLLM Architecture Deep Dive | 10 | Full source code walkthrough: engine, scheduler, PagedAttention |
| 4 | vLLM Internals | 8 | CUDA graphs, prefix caching, speculative decoding, LoRA |
| 5 | SGLang Architecture Deep Dive | 10 | Runtime, RadixAttention, constrained decoding, frontend DSL |
| 6 | SGLang Internals | 8 | Overlap scheduling, torch.compile, FP8, expert parallelism |
| 7 | Custom CUDA Kernels & Triton | 8 | Write PagedAttention, FlashAttention, fused kernels from scratch |
| 8 | Adding New Model Architectures | 8 | End-to-end model integration for both frameworks |
| 9 | Production Deployment | 8 | Docker, K8s, monitoring, benchmarking, cost optimization |
| 10 | Comparative Analysis | 6 | vLLM vs SGLang: architecture, scheduling, memory, benchmarks |
| 11 | Contributing & Development | 7 | Dev setup, testing, debugging, profiling, PR workflow |
| 12 | Research & Future Directions | 8 | Disaggregated serving, long-context, agents, MoE |

**Total: 96 notebooks, ~76 diagrams, 290+ exercises**

## Quick Start

### Prerequisites

- [uv](https://docs.astral.sh/uv/getting-started/installation/) (Python package manager)
- Python 3.10–3.12

### Run Locally

```bash
git clone https://github.com/hideak1/vllm_study.git
cd vllm_study
make install    # Install all dependencies
make serve      # Start docs site + Jupyter server
```

Then open:
- **http://localhost:8000** — Browse tutorials (MkDocs site with Material theme)
- **http://localhost:8888** — Run notebooks & exercises (Jupyter)

### Run on Google Colab

Every notebook has an **"Open in Colab"** badge at the top. Click it to get a free copy with GPU access — no local setup needed.

### Available Commands

```bash
make install          # Install dependencies via uv
make serve            # Start both MkDocs + Jupyter servers
make docs             # Start only MkDocs docs server
make jupyter          # Start only Jupyter server
make build            # Build static site for deployment
make deploy           # Deploy to GitHub Pages
make clean            # Remove build artifacts
make sync-notebooks   # Copy notebooks into docs/ for MkDocs
```

## Learning Path

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

## Who Is This For?

Engineers who:
- Have used vLLM/SGLang but want to understand the internals
- Want to contribute at the source code level
- Need to write custom CUDA/Triton kernels for LLM serving
- Want to add new model architectures to these frameworks
- Are building production LLM serving infrastructure

## Do I Need a GPU?

**No.** Nearly all tutorials and exercises run on CPU. The notebooks teach GPU concepts through Python simulations — schedulers, memory managers, data structures, etc. Only 3 exercises in Part 7 (Triton kernel writing) need a GPU, and those have Colab badges for free GPU access.

## Project Structure

```
vllm_study/
├── notebooks/          # 96 Jupyter notebooks (source of truth)
│   ├── part1/          # Foundations of LLM Serving
│   ├── part2/          # LLM Serving System Design
│   ├── ...
│   └── part12/         # Research & Future Directions
├── docs/               # MkDocs documentation source
│   ├── index.md        # Home page
│   ├── part1_foundations/
│   ├── ...
│   └── javascripts/    # MathJax config
├── mkdocs.yml          # MkDocs configuration
├── pyproject.toml      # Dependencies (managed by uv)
├── uv.lock             # Locked dependencies
├── start.sh            # Start script (./start.sh [--no-jupyter])
├── Makefile            # Common commands
└── README.md
```

## Tech Stack

- **[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)** — Documentation site with dark mode, search, navigation
- **[mkdocs-jupyter](https://github.com/danielfrg/mkdocs-jupyter)** — Renders notebooks as documentation pages
- **[uv](https://docs.astral.sh/uv/)** — Fast, reproducible dependency management
- **[MathJax v3](https://www.mathjax.org/)** — LaTeX math rendering in notebooks

## Contributing

Contributions welcome! If you find errors, have suggestions, or want to add content:

1. Fork the repo
2. Create a branch (`git checkout -b fix/chapter-3.4-typo`)
3. Make your changes
4. Submit a PR

## License

MIT

# Part 11: Contributing & Development Workflow

**Goal:** Become a productive contributor to vLLM and SGLang — from setting up a dev environment to getting your PR merged.

Open-source contribution requires more than just code. This part covers the full development workflow: environment setup, testing, debugging, profiling, code review, and CI/CD. Whether you want to fix a bug, add a feature, or improve documentation, this part gives you the practical skills to contribute effectively.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 11.1 | [Dev Environment Setup](../notebooks/part11/chapter_11.1_dev_setup.ipynb) | Building from source, dev containers, IDE configuration, dependency management |
| 11.2 | [Testing Framework](../notebooks/part11/chapter_11.2_testing.ipynb) | Unit tests, integration tests, model tests, test fixtures, pytest patterns |
| 11.3 | [Debugging Techniques](../notebooks/part11/chapter_11.3_debugging.ipynb) | GDB for CUDA, Python debugging, logging, common failure modes, crash analysis |
| 11.4 | [Performance Profiling](../notebooks/part11/chapter_11.4_profiling.ipynb) | Nsight Systems, torch.profiler, py-spy, memory profiling, trace analysis |
| 11.5 | [Code Review & PR Process](../notebooks/part11/chapter_11.5_code_review.ipynb) | PR best practices, review checklist, commit conventions, addressing feedback |
| 11.6 | [CI/CD Pipeline](../notebooks/part11/chapter_11.6_cicd.ipynb) | GitHub Actions workflows, test matrix, GPU CI, release process |
| 11.7 | [Writing Documentation](../notebooks/part11/chapter_11.7_documentation.ipynb) | Docstrings, API docs, tutorials, architecture decision records |

## Prerequisites

- Completed Parts 3-6 (understanding of both codebases)
- Git proficiency (branching, rebasing, conflict resolution)
- Experience with Python testing (pytest)
- Familiarity with CI/CD concepts

## Learning Outcomes

After completing Part 11, you will be able to:

- Set up a complete development environment for vLLM and SGLang
- Write and run tests at unit, integration, and system levels
- Debug complex issues involving Python, CUDA, and distributed execution
- Profile performance to identify regressions and optimization opportunities
- Submit well-structured PRs that pass CI and get approved efficiently
- Understand the CI/CD pipeline and release process for both projects

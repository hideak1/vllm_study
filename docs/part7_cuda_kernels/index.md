# Part 7: Custom CUDA Kernels & Triton

**Goal:** Learn to write, optimize, and profile the GPU kernels that power LLM serving — from CUDA C++ to Triton to CUTLASS.

LLM serving performance ultimately depends on GPU kernel efficiency. This part takes you from CUDA fundamentals through Triton programming to implementing production-grade kernels like PagedAttention from scratch. You will gain the skills needed to write and optimize custom kernels for both vLLM and SGLang.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 7.1 | [CUDA Programming Primer](../notebooks/part7/chapter_7.1_cuda_primer.ipynb) | Thread hierarchy, memory model, warp-level primitives, shared memory, synchronization |
| 7.2 | [Triton Programming](../notebooks/part7/chapter_7.2_triton.ipynb) | Triton language fundamentals, block-level programming, auto-tuning, fused operations |
| 7.3 | [PagedAttention Kernel](../notebooks/part7/chapter_7.3_paged_attention_kernel.ipynb) | Building PagedAttention from scratch: block table lookup, paged QKV, softmax tiling |
| 7.4 | [FlashAttention Algorithm](../notebooks/part7/chapter_7.4_flash_attention.ipynb) | Online softmax, tiling strategy, IO-aware computation, forward and backward pass |
| 7.5 | [Fused Kernels](../notebooks/part7/chapter_7.5_fused_kernels.ipynb) | Fused add-RMSNorm, fused rotary embedding, activation fusion, kernel fusion strategies |
| 7.6 | [Quantized Matmul](../notebooks/part7/chapter_7.6_quantized_matmul.ipynb) | INT8/INT4 GEMM, dequantization strategies, mixed-precision accumulation, Marlin kernel |
| 7.7 | [CUTLASS & CuTe](../notebooks/part7/chapter_7.7_cutlass.ipynb) | CUTLASS abstractions, CuTe layout algebra, building custom GEMM kernels, epilogue fusion |
| 7.8 | [Kernel Profiling](../notebooks/part7/chapter_7.8_profiling.ipynb) | Nsight Compute, Nsight Systems, occupancy analysis, roofline for kernels, optimization workflow |

## Prerequisites

- Completed Parts 3-6 (understanding of where kernels are used in vLLM/SGLang)
- C/C++ proficiency (pointers, memory management, templates)
- Linear algebra (matrix multiplication, attention computation)
- Access to an NVIDIA GPU with CUDA toolkit installed

## Learning Outcomes

After completing Part 7, you will be able to:

- Write CUDA kernels with proper thread/block configuration and shared memory usage
- Implement attention kernels in Triton with auto-tuning
- Build a PagedAttention kernel from scratch and understand production implementations
- Understand the FlashAttention algorithm at the implementation level
- Write and optimize quantized matrix multiplication kernels
- Profile GPU kernels and identify optimization opportunities systematically

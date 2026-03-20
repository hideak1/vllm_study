# Part 7: カスタムCUDAカーネルとTriton

**目標:** LLMサービングを支えるGPUカーネルの記述、最適化、プロファイリングを学ぶ — CUDA C++からTriton、CUTLASSまで。

LLMサービングのパフォーマンスは、突き詰めればGPUカーネルの効率に依存します。このパートでは、CUDAの基礎からTritonプログラミングを経て、PagedAttentionのような本番グレードのカーネルをゼロから実装するまでを扱います。vLLMとSGLang両方のカスタムカーネルを書き、最適化するスキルを身につけます。

## チャプター

| # | チャプター | 学習内容 |
|---|---------|-------------------|
| 7.1 | [CUDAプログラミング入門](../notebooks/part7/chapter_7.1_cuda_primer.ipynb) | スレッド階層、メモリモデル、ワープレベルプリミティブ、共有メモリ、同期 |
| 7.2 | [Tritonプログラミング](../notebooks/part7/chapter_7.2_triton.ipynb) | Triton言語の基礎、ブロックレベルプログラミング、オートチューニング、融合演算 |
| 7.3 | [PagedAttentionカーネル](../notebooks/part7/chapter_7.3_paged_attention_kernel.ipynb) | PagedAttentionをゼロから構築：ブロックテーブル参照、ページドQKV、softmaxタイリング |
| 7.4 | [FlashAttentionアルゴリズム](../notebooks/part7/chapter_7.4_flash_attention.ipynb) | オンラインsoftmax、タイリング戦略、IO-aware計算、フォワードパスとバックワードパス |
| 7.5 | [融合カーネル](../notebooks/part7/chapter_7.5_fused_kernels.ipynb) | Fused add-RMSNorm、Fused rotary embedding、活性化関数の融合、カーネル融合戦略 |
| 7.6 | [量子化行列積](../notebooks/part7/chapter_7.6_quantized_matmul.ipynb) | INT8/INT4 GEMM、デ量子化戦略、混合精度アキュムレーション、Marlinカーネル |
| 7.7 | [CUTLASS & CuTe](../notebooks/part7/chapter_7.7_cutlass.ipynb) | CUTLASSの抽象化、CuTeレイアウト代数、カスタムGEMMカーネルの構築、エピローグ融合 |
| 7.8 | [カーネルプロファイリング](../notebooks/part7/chapter_7.8_profiling.ipynb) | Nsight Compute、Nsight Systems、オキュパンシ解析、カーネルのルーフライン、最適化ワークフロー |

## 前提条件

- Part 3〜6を修了していること（vLLM/SGLangでカーネルがどこで使われるかの理解）
- C/C++の十分なスキル（ポインタ、メモリ管理、テンプレート）
- 線形代数（行列積、Attention計算）
- CUDAツールキットがインストールされたNVIDIA GPUへのアクセス

## 学習成果

Part 7を修了すると、以下ができるようになります：

- 適切なスレッド/ブロック構成と共有メモリを使ったCUDAカーネルを記述できる
- Tritonでオートチューニング付きのAttentionカーネルを実装できる
- PagedAttentionカーネルをゼロから構築し、本番実装を理解できる
- FlashAttentionアルゴリズムを実装レベルで理解できる
- 量子化行列積カーネルを記述・最適化できる
- GPUカーネルをプロファイルし、最適化の機会を体系的に特定できる

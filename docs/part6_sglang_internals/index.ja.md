# Part 6: SGLang内部実装 — パフォーマンスと高度な機能

**目標:** SGLangのパフォーマンスクリティカルな内部実装に踏み込む — 高度なキャッシング、並列化戦略、低レベル最適化。

このパートでは、SGLangのスループットとレイテンシを限界まで押し上げるテクニックを探求します。高度なRadixAttention戦略からオーバーラップスケジューリング、FP8量子化まで、SGLangをLLMサービングパフォーマンスの最前線で戦える存在にしている内部実装を学びます。

## チャプター

| # | チャプター | 学習内容 |
|---|---------|-------------------|
| 6.1 | [RadixAttention応用](../notebooks/part6/chapter_6.1_radix_advanced.ipynb) | キャッシュアウェアスケジューリング、多段エビクション、木の枝刈り、メモリ最適化 |
| 6.2 | [データ並列とエキスパート並列](../notebooks/part6/chapter_6.2_parallelism.ipynb) | データ並列、MoE向けエキスパート並列、ハイブリッド並列戦略 |
| 6.3 | [torch.compile統合](../notebooks/part6/chapter_6.3_torch_compile.ipynb) | torch.compileによるグラフキャプチャ、カスタムバックエンド、コンパイルキャッシュ、制限事項 |
| 6.4 | [オーバーラップスケジューリング](../notebooks/part6/chapter_6.4_overlap_scheduling.ipynb) | 計算と通信のオーバーラップ、ダブルバッファリング、パイプラインマイクロバッチ |
| 6.5 | [FP8と量子化](../notebooks/part6/chapter_6.5_fp8_quantization.ipynb) | FP8フォーマット（E4M3/E5M2）、テンソル単位 vs チャネル単位、W8A8推論、キャリブレーション |
| 6.6 | [投機的デコーディング](../notebooks/part6/chapter_6.6_speculative_decoding.ipynb) | SGLangの投機的デコーディング実装、EAGLE統合、トークン検証 |
| 6.7 | [Embeddingモデルと報酬モデル](../notebooks/part6/chapter_6.7_embedding_reward.ipynb) | Embeddingモデルのサービング、報酬モデル推論、分類ヘッド |
| 6.8 | [カスタムCUDAカーネル](../notebooks/part6/chapter_6.8_cuda_kernels.ipynb) | SGLang固有のカーネル、カスタムAttention、融合演算、カーネルディスパッチ |

## 前提条件

- Part 5（SGLangアーキテクチャ詳解）を修了していること
- CUDAプログラミングとGPU実行モデルの理解
- 量子化の概念の理解（Part 1より）
- 分散コンピューティングと集合通信の知識

## 学習成果

Part 6を修了すると、以下ができるようになります：

- 複雑なワークロード向けの高度なRadixAttention戦略を実装できる
- MoEモデルおよび密なモデル向けの並列化戦略を設定・最適化できる
- torch.compile統合とそのパフォーマンス上の利点を理解できる
- 最大GPU使用率のためのオーバーラップスケジューリングをプロファイル・最適化できる
- SGLangでFP8量子化モデルをデプロイし、コスト効率の良い推論を実現できる
- SGLangのカスタムCUDAカーネルを分析・修正できる

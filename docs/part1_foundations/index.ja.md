# Part 1: LLMサービングの基礎

**目標:** 概念的な基盤を構築する — なぜLLMサービングが難しいのか、そしてトレーニングとは根本的に何が異なるのかを理解する。

特定のフレームワークに飛び込む前に、LLM推論をユニークなエンジニアリング課題とする計算上およびシステム上の課題を深く理解する必要があります。このパートではその基盤を築きます。

## チャプター

| # | チャプター | 学習内容 |
|---|---------|-------------------|
| 1.1 | [Transformer & KVキャッシュ復習](../notebooks/part1/chapter_1.1_transformer_kvcache.ipynb) | 自己回帰デコーディングの仕組み、KVキャッシュが不可欠な理由、プリフィルフェーズとデコードフェーズ |
| 1.2 | [GPUメモリ階層](../notebooks/part1/chapter_1.2_gpu_memory.ipynb) | HBM vs SRAM、メモリ帯域幅のボトルネック、推論向けGPUアーキテクチャ |
| 1.3 | [演算密度とルーフライン](../notebooks/part1/chapter_1.3_roofline_model.ipynb) | 計算律速 vs メモリ律速、LLM推論のルーフライン解析 |
| 1.4 | [トークナイゼーションとストリーミング](../notebooks/part1/chapter_1.4_tokenization.ipynb) | BPE/SentencePieceの内部構造、デトークナイゼーションの課題、ストリーミングトークン配信 |
| 1.5 | [レイテンシ vs スループットのメトリクス](../notebooks/part1/chapter_1.5_metrics.ipynb) | TTFT、TPOT、ITL、スループット測定、ベンチマーク手法 |
| 1.6 | [バッチ処理戦略](../notebooks/part1/chapter_1.6_batching.ipynb) | 静的バッチ処理、動的バッチ処理、継続的バッチ処理 — なぜ重要なのか |
| 1.7 | [量子化入門](../notebooks/part1/chapter_1.7_quantization.ipynb) | FP16、INT8、INT4、GPTQ、AWQ、GGUF — 理論とハンズオン |
| 1.8 | [サンプリング戦略](../notebooks/part1/chapter_1.8_sampling.ipynb) | Temperature、top-k、top-p、ビームサーチ、投機的デコーディングの概要 |

## 前提条件

- Transformerアーキテクチャの基本的な理解（Attention、FFN、残差接続）
- PyTorchの基礎知識（テンソル操作、基本的なモデル定義）
- 線形代数の基礎（行列積、メモリレイアウト）

## 学習成果

Part 1を修了すると、以下ができるようになります：

- デコード時にLLM推論がなぜメモリ帯域幅律速になるかを説明できる
- 任意のLLMモデルのメモリ要件を計算できる
- 異なる量子化手法間のトレードオフを理解できる
- 継続的バッチ処理が10〜20倍のスループット改善をもたらす理由を直感的に理解できる
- GPU使用率をプロファイルしてボトルネックを特定できる

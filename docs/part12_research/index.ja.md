# 第12部：最先端研究 & 将来の方向性

**目標：** LLM サービング研究の最前線を探求する — 次世代サービングシステムを形作る論文、技術、アイデア。

LLM サービングは急速に進化する分野です。この部では、分離型サービングや KV-Cache 圧縮からロングコンテキスト処理、エージェントサービングまで、最新の研究方向を概観します。各章では学術研究と実装を結びつけ、最先端を把握し続けるための力を養います。

## 章一覧

| # | 章 | 学習内容 |
|---|-----|----------|
| 12.1 | [分離型サービング](../notebooks/part12/chapter_12.1_disaggregated.ipynb) | Prefill/Decode 分離、DistServe、Splitwise、Mooncake — アーキテクチャとトレードオフ |
| 12.2 | [KV-Cache 圧縮](../notebooks/part12/chapter_12.2_kvcache_compression.ipynb) | 量子化 KV-Cache、トークン削除、H2O、StreamingLLM、圧縮アルゴリズム |
| 12.3 | [ロングコンテキストサービング](../notebooks/part12/chapter_12.3_long_context.ipynb) | Ring Attention、シーケンス並列、チャンク処理、100K+ トークンのメモリ管理 |
| 12.4 | [推論モデルサービング](../notebooks/part12/chapter_12.4_reasoning_models.ipynb) | Chain-of-Thought サービング、長出力モデル、バジェット対応スケジューリング、思考トークン |
| 12.5 | [ハードウェア対応最適化](../notebooks/part12/chapter_12.5_hardware.ipynb) | AMD GPU、Intel Gaudi、AWS Inferentia、Apple Silicon — クロスプラットフォームサービング |
| 12.6 | [エージェントサービング](../notebooks/part12/chapter_12.6_agent_serving.ipynb) | ツール呼び出しパターン、マルチターン最適化、ステートフルセッション、Function Calling |
| 12.7 | [MoE 最適化](../notebooks/part12/chapter_12.7_moe_optimization.ipynb) | エキスパートオフロード、動的ルーティング、エキスパートキャッシング、エキスパート間の負荷分散 |
| 12.8 | [継続的な学習](../notebooks/part12/chapter_12.8_continuous_learning.ipynb) | 研究の最新動向把握、効果的な論文の読み方、実験方法論 |

## 前提条件

- 第1〜11部を修了していること（LLM サービングの包括的な理解）
- 学術論文の読解力（ML システム、コンピュータアーキテクチャ）
- 分散システムの概念の理解
- 最先端技術の実験に取り組む意欲

## 学習成果

第12部を修了すると、以下のことができるようになります：

- 分離型サービングアーキテクチャを評価・実装できる
- KV-Cache 圧縮技術を適用してメモリ使用量を削減できる
- ロングコンテキストや推論負荷の高いワークロード向けのサービングシステムを設計できる
- 新しいハードウェアプラットフォームにサービングシステムを適応させることができる
- エージェントやツール呼び出しワークロード向けの効率的なサービングパイプラインを構築できる
- 新しい研究を追跡・評価するための体系的なアプローチを確立できる

# Part 8: 新規モデルアーキテクチャの追加

**目標:** vLLMとSGLangの両方に新しいモデルアーキテクチャのサポートを追加する方法を、登録からパフォーマンスチューニングまで学ぶ。

新しいモデルアーキテクチャがリリースされた際、誰かがそれをサービングフレームワークに統合する必要があります。このパートでは、その具体的な方法を解説します。モデルの登録と実装から、量子化サポート、テスト、パフォーマンス最適化まで、vLLMとSGLangの両方における完全なライフサイクルをカバーします。

## チャプター

| # | チャプター | 学習内容 |
|---|---------|-------------------|
| 8.1 | [vLLMモデル登録](../notebooks/part8/chapter_8.1_vllm_registration.ipynb) | モデルレジストリ、設定マッピング、アーキテクチャ検出、エントリーポイント |
| 8.2 | [vLLMでのモデル実装](../notebooks/part8/chapter_8.2_vllm_new_model.ipynb) | ステップバイステップのモデル実装：レイヤー、Attention、MLP、重みロード、並列化 |
| 8.3 | [量子化サポートの追加](../notebooks/part8/chapter_8.3_quantization_support.ipynb) | GPTQ、AWQ、FP8のサポート、量子化設定、線形レイヤーの置換 |
| 8.4 | [マルチモーダル統合](../notebooks/part8/chapter_8.4_multimodal.ipynb) | ビジョンエンコーダ、入力プロセッサ、マルチモーダル入力マッピング、クロスアテンション |
| 8.5 | [SGLangモデル登録](../notebooks/part8/chapter_8.5_sglang_registration.ipynb) | SGLangのモデルレジストリ、設定、アーキテクチャマッピング |
| 8.6 | [SGLangでのモデル実装](../notebooks/part8/chapter_8.6_sglang_new_model.ipynb) | SGLangでのモデル実装：レイヤー、フォワードパス、重みロード、RadixAttention統合 |
| 8.7 | [テストとバリデーション](../notebooks/part8/chapter_8.7_testing.ipynb) | 正確性テスト、HuggingFaceとの出力比較、数値精度の検証 |
| 8.8 | [パフォーマンスチューニング](../notebooks/part8/chapter_8.8_performance.ipynb) | 新規モデルのベンチマーク、ボトルネックの特定、最適化戦略、メモリプロファイリング |

## 前提条件

- Part 3〜5を修了していること（vLLMとSGLangのアーキテクチャの理解）
- Transformerのバリエーションの深い理解（GQA、MQA、スライディングウィンドウなど）
- PyTorchの十分なスキル（カスタムモジュール、state_dict操作、テンソル並列）
- HuggingFace Transformersライブラリの基礎知識

## 学習成果

Part 8を修了すると、以下ができるようになります：

- 新しいモデルアーキテクチャをvLLMにゼロから追加できる
- 新しいモデルアーキテクチャをSGLangにゼロから追加できる
- カスタムモデルの量子化サポートを実装できる
- サービングフレームワークにマルチモーダル機能を統合できる
- モデルの正確性を検証する包括的なテストを記述できる
- 新規モデル実装を本番スループット向けにプロファイル・最適化できる

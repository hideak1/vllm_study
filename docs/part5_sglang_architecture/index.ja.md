# Part 5: SGLangアーキテクチャ詳解

**目標:** SGLangのアーキテクチャを上から下まで理解する — 独自のランタイム、RadixAttention、そして他と一線を画すフロントエンドDSL。

SGLangはLLMサービングに異なるアプローチを採用しています。基数木ベースのKVキャッシュ（RadixAttention）、ルーターベース設計の高性能ランタイム、そして構造化生成のための強力なフロントエンドDSLを中核に構築されています。このパートでは各コンポーネントを詳細に分析し、SGLangがどのようにして性能上の優位性を実現しているかを示します。

## チャプター

| # | チャプター | 学習内容 |
|---|---------|-------------------|
| 5.1 | [コードベースツアー](../notebooks/part5/chapter_5.1_codebase_tour.ipynb) | リポジトリレイアウト、パッケージ構造、主要な抽象化、ビルドとインストール |
| 5.2 | [Runtime & Router](../notebooks/part5/chapter_5.2_runtime.ipynb) | ランタイムアーキテクチャ、ルーターベースのリクエストディスパッチ、プロセス管理 |
| 5.3 | [RadixAttention](../notebooks/part5/chapter_5.3_radix_attention.ipynb) | KVキャッシュの基数木、自動プレフィックス共有、エビクションポリシー |
| 5.4 | [Scheduler](../notebooks/part5/chapter_5.4_scheduler.ipynb) | スケジューリングポリシー、バッチ形成、優先度管理、プリエンプション |
| 5.5 | [Tokenizer & Detokenizer](../notebooks/part5/chapter_5.5_tokenizer.ipynb) | トークナイゼーションパイプライン、インクリメンタルデトークナイゼーション、特殊トークンの処理 |
| 5.6 | [ModelRunner & TpWorker](../notebooks/part5/chapter_5.6_model_runner.ipynb) | モデル実行、テンソル並列ワーカー、入力準備、フォワードパス |
| 5.7 | [FlashInfer統合](../notebooks/part5/chapter_5.7_flashinfer.ipynb) | Attentionバックエンドとしての FlashInfer、FlashInferによるページドKVキャッシュ、パフォーマンス |
| 5.8 | [制約付きデコーディング](../notebooks/part5/chapter_5.8_constrained_decoding.ipynb) | JSONスキーマの強制、正規表現ガイド生成、文法ベースデコーディング、ジャンプフォワード |
| 5.9 | [フロントエンドDSL](../notebooks/part5/chapter_5.9_frontend_dsl.ipynb) | SGLang言語プリミティブ、gen/select/fork/join、プログラムコンパイル、バッチ実行 |
| 5.10 | [マルチモーダルサポート](../notebooks/part5/chapter_5.10_multimodal.ipynb) | ビジョン-言語モデル、画像/動画入力の処理、マルチモーダルアーキテクチャ |

## 前提条件

- Part 1およびPart 2（基礎とシステム設計）を修了していること
- Pythonの十分なスキル（非同期プログラミング、マルチプロセシング、ZMQ）
- 木構造データの理解（基数木/プレフィックス木）
- SGLangのインストールと基本的な使い方の知識

## 学習成果

Part 5を修了すると、以下ができるようになります：

- SGLangのコードベースをナビゲートし、ランタイムアーキテクチャを理解できる
- RadixAttentionがどのように自動プレフィックス共有を実現するかを説明できる
- ルーター、スケジューラ、モデル実行パイプラインを通るリクエストの流れをトレースできる
- SGLangのフロントエンドDSLを使って効率的なマルチコールLLMプログラムを書ける
- FlashInfer統合とそのパフォーマンスへの影響を理解できる
- JSONスキーマや文法を使った制約付きデコーディングを実装できる

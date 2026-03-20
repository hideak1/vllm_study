[English](README.md) | [中文](README_zh.md) | **日本語**

# vLLM & SGLang 学習ノート

**LLM 推論サービングシステムを基礎から内部実装まで深く理解するための学習プロジェクト。**

**[オンラインで読む](https://hideak1.github.io/vllm_study/ja/)** | **[Colab で開く](https://colab.research.google.com/github/hideak1/vllm_study/blob/main/notebooks/part1/chapter_1.1_transformer_kvcache.ipynb)** | **[vLLM](https://github.com/vllm-project/vllm)** | **[SGLang](https://github.com/sgl-project/sglang)**

> **免責事項**: これは個人の学習プロジェクトであり、公式ドキュメントではありません。Notebook の内容は **AI（Claude）によって生成** され、学習目的で構造化されたカリキュラムに整理されています。内容に不正確な部分がある可能性があり、フレームワークの急速な進化により陳腐化する場合もあります。誤りを発見された場合は、PR や Issue の投稿を歓迎します！

[UvA Deep Learning Tutorials](https://uvadlc-notebooks.readthedocs.io/en/latest/) に触発されたこのプロジェクトは、vLLM と SGLang の内部実装を学ぶための 96 の Jupyter Notebook を、詳細な解説・実行可能なデモ・ハンズオン演習とともに体系的に整理しています。

---

## カリキュラム

| パート | タイトル | 章数 | 重点内容 |
|:------:|----------|:----:|----------|
| 1 | LLM サービング基礎 | 8 | GPU メモリ、バッチ処理、量子化、サンプリング、メトリクス |
| 2 | LLM サービングシステム設計 | 7 | スケジューラ、KV-Cache 管理、並列化、API 設計 |
| 3 | vLLM アーキテクチャ詳解 | 10 | ソースコード完全解説：エンジン、スケジューラ、PagedAttention |
| 4 | vLLM 内部構造 | 8 | CUDA Graph、Prefix Caching、投機的デコーディング、LoRA |
| 5 | SGLang アーキテクチャ詳解 | 10 | ランタイム、RadixAttention、制約付きデコーディング、フロントエンド DSL |
| 6 | SGLang 内部構造 | 8 | オーバーラップスケジューリング、torch.compile、FP8、エキスパート並列 |
| 7 | CUDA & Triton カーネル | 8 | PagedAttention、FlashAttention、融合カーネルをゼロから実装 |
| 8 | 新規モデルアーキテクチャ追加 | 8 | 両フレームワークへのエンドツーエンドモデル統合ガイド |
| 9 | 本番環境デプロイ | 8 | Docker、K8s、モニタリング、ベンチマーク、コスト最適化 |
| 10 | 比較分析 | 6 | vLLM vs SGLang：アーキテクチャ、スケジューリング、メモリ、ベンチマーク |
| 11 | コントリビュート & 開発 | 7 | 開発環境、テスト、デバッグ、プロファイリング、PR ワークフロー |
| 12 | 最先端研究 | 8 | 分離型サービング、ロングコンテキスト、エージェント、MoE |

**合計：96 Notebook、約 76 図表、290 以上の演習**

## クイックスタート

### 前提条件

- [uv](https://docs.astral.sh/uv/getting-started/installation/)（Python パッケージマネージャー）
- Python 3.10–3.12

### ローカルで実行

```bash
git clone https://github.com/hideak1/vllm_study.git
cd vllm_study
make install    # 全依存関係をインストール
make serve      # ドキュメントサイト + Jupyter サーバーを起動
```

以下にアクセス：
- **http://localhost:8000** — チュートリアルを閲覧（MkDocs サイト）
- **http://localhost:8888** — Notebook と演習を実行（Jupyter）

### Google Colab で実行

各 Notebook の上部に **「Open in Colab」** バッジがあります。クリックすると GPU 付きの無料コピーが取得できます — ローカル環境は不要です。

### 利用可能なコマンド

```bash
make install          # uv で依存関係をインストール
make serve            # MkDocs + Jupyter サーバーを両方起動
make docs             # MkDocs ドキュメントサーバーのみ起動
make jupyter          # Jupyter サーバーのみ起動
make build            # 静的サイトをビルド
make deploy           # GitHub Pages にデプロイ
make clean            # ビルド成果物を削除
make sync-notebooks   # Notebook を docs/ にコピー
```

## 学習パス

```
第1部（基礎知識）→ 第2部（システム設計）
        ↓
第3部（vLLM アーキテクチャ）→ 第4部（vLLM 内部構造）
        ↓
第5部（SGLang アーキテクチャ）→ 第6部（SGLang 内部構造）
        ↓
第7部（CUDA/Triton）→ 第8部（新規モデル）
        ↓
第9部（本番デプロイ）→ 第10部（比較分析）
        ↓
第11部（コントリビュート）→ 第12部（最先端研究）
```

## 対象者

以下のようなエンジニア向けです：
- vLLM/SGLang を使用しているが、内部実装を理解したい方
- ソースコードレベルでコントリビュートしたい方
- LLM サービング用のカスタム CUDA/Triton カーネルを書く必要がある方
- フレームワークに新しいモデルアーキテクチャを追加したい方
- 本番環境の LLM 推論サービング基盤を構築している方

## GPU は必要ですか？

**いいえ。** ほぼすべてのチュートリアルと演習は CPU で実行できます。Notebook は Python シミュレーションを通じて GPU の概念を解説します — スケジューラ、メモリマネージャー、データ構造など。GPU が必要なのは第 7 部の 3 つの演習（Triton カーネル作成）のみで、それらには無料 GPU 用の Colab バッジが付いています。

## プロジェクト構成

```
vllm_study/
├── notebooks/          # 96 の Jupyter Notebook（データソース）
│   ├── part1/          # LLM サービング基礎
│   ├── part2/          # LLM サービングシステム設計
│   ├── ...
│   └── part12/         # 最先端研究
├── docs/               # MkDocs ドキュメントソース
│   ├── index.md        # ホームページ
│   ├── part1_foundations/
│   ├── ...
│   └── javascripts/    # MathJax 設定
├── mkdocs.yml          # MkDocs 設定
├── pyproject.toml      # 依存関係管理（uv）
├── uv.lock             # ロックされた依存関係
├── start.sh            # 起動スクリプト
├── Makefile            # 共通コマンド
└── README.md
```

## 技術スタック

- **[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)** — ダークモード、検索、ナビゲーション対応のドキュメントサイト
- **[mkdocs-jupyter](https://github.com/danielfrg/mkdocs-jupyter)** — Notebook をドキュメントページとしてレンダリング
- **[uv](https://docs.astral.sh/uv/)** — 高速で再現可能な依存関係管理
- **[MathJax v3](https://www.mathjax.org/)** — Notebook 内の LaTeX 数式レンダリング

## コントリビュート

コントリビュート歓迎！誤りの発見、提案、コンテンツの追加など：

1. リポジトリをフォーク
2. ブランチを作成（`git checkout -b fix/chapter-3.4-typo`）
3. 変更を加える
4. PR を提出

## ライセンス

MIT

# Part 3: vLLMアーキテクチャ詳解

**目標:** APIエントリーポイントからGPU実行まで、vLLMの主要コンポーネントをすべてトレースし、各パーツがどのように組み合わさるかを理解する。

Part 1とPart 2で習得した概念的基盤を武器に、いよいよ本番のプロダクションコードを読む準備が整いました。このパートでは、vLLMのコードベースをコンポーネントごとにウォークスルーし、設計上の判断、データフロー、そしてvLLMを最も広く採用されているLLMサービングエンジンの一つたらしめている重要な抽象化を解説します。

## チャプター

| # | チャプター | 学習内容 |
|---|---------|-------------------|
| 3.1 | [コードベースツアー](../notebooks/part3/chapter_3.1_codebase_tour.ipynb) | リポジトリレイアウト、パッケージ構造、ビルドシステム、エントリーポイント |
| 3.2 | [LLMEngine & AsyncLLMEngine](../notebooks/part3/chapter_3.2_llm_engine.ipynb) | 中央オーケストレータ：リクエスト取り込み、スケジューリングループ、出力処理 |
| 3.3 | [Scheduler詳解](../notebooks/part3/chapter_3.3_scheduler.ipynb) | スケジューリングポリシー、シーケンスグループ、プリエンプション、待機/実行/スワップキュー |
| 3.4 | [PagedAttention](../notebooks/part3/chapter_3.4_paged_attention.ipynb) | KVキャッシュの仮想メモリ、ブロックテーブル、コピーオンライト、メモリ共有 |
| 3.5 | [Block Manager](../notebooks/part3/chapter_3.5_block_manager.ipynb) | ブロック割り当て、エビクション、スワップイン/スワップアウト、物理-論理マッピング |
| 3.6 | [Worker & ModelRunner](../notebooks/part3/chapter_3.6_worker_model_runner.ipynb) | GPUワーカーのライフサイクル、モデル実行、入力準備、出力抽出 |
| 3.7 | [Model Loader](../notebooks/part3/chapter_3.7_model_loader.ipynb) | 重みロード戦略、safetensors、シャードチェックポイント、遅延ロード |
| 3.8 | [Attentionバックエンド](../notebooks/part3/chapter_3.8_attention_backends.ipynb) | FlashAttention、FlashInfer、xFormers — バックエンドの選択とディスパッチ |
| 3.9 | [サンプリングパイプライン](../notebooks/part3/chapter_3.9_sampling_pipeline.ipynb) | ロジット処理、サンプリングパラメータ、logprobs、ビームサーチの実装 |
| 3.10 | [API Server](../notebooks/part3/chapter_3.10_api_server.ipynb) | FastAPIサーバー、OpenAI互換エンドポイント、リクエスト/レスポンス処理、SSEストリーミング |

## 前提条件

- Part 1およびPart 2（基礎とシステム設計）を修了していること
- Pythonの十分なスキル（async/await、ジェネレータ、データクラス）
- 大規模Pythonコードベースの読解に慣れていること
- vLLMのインストールと基本的な使い方の知識

## 学習成果

Part 3を修了すると、以下ができるようになります：

- vLLMのコードベースを自信を持ってナビゲートし、任意のコンポーネントを特定できる
- エンジン、スケジューラ、ワーカーを経由するリクエストの流れをエンドツーエンドでトレースできる
- PagedAttentionがメモリの断片化をどのように解消するかを説明できる
- アーキテクチャ内の各抽象化レイヤーの役割を理解できる
- デバッグや機能開発のためにvLLMのソースコードを読み書きできる

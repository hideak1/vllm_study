---
hide:
  - navigation
  - toc
---

# vLLM & SGLang エキスパートチュートリアル

<div class="hero" markdown>

# LLMサービングシステムをマスターする

<p class="hero-subtitle">
  GPUの基礎からvLLMとSGLangのコントリビューターレベルの専門知識まで。PagedAttention、RadixAttention、CUDAカーネル、本番デプロイを網羅する105のハンズオンノートブック。
</p>

<div class="hero-actions">
  <a href="part1_foundations/" class="btn-primary">学習を始める</a>
  <a href="https://github.com/hideak1/vllm_study" class="btn-outline">GitHub</a>
  <a href="https://colab.research.google.com/github/hideak1/vllm_study/blob/main/notebooks/part1/chapter_1.1_transformer_kvcache.ipynb" class="btn-outline">Colabで開く</a>
</div>

</div>

<div class="highlights-bar" markdown>

<div class="hl">
  <span class="hl-value">105</span>
  <span class="hl-label">チャプター</span>
</div>
<div class="hl">
  <span class="hl-value">12</span>
  <span class="hl-label">パート</span>
</div>
<div class="hl">
  <span class="hl-value">2</span>
  <span class="hl-label">フレームワーク</span>
</div>
<div class="hl">
  <span class="hl-value">96</span>
  <span class="hl-label">ノートブック</span>
</div>

</div>

<div class="arch-flow">
  <span class="node node-request">リクエスト</span>
  <span class="connector">&rarr;</span>
  <span class="node node-schedule">スケジュール</span>
  <span class="connector">&rarr;</span>
  <span class="node node-prefill">プリフィル</span>
  <span class="connector">&rarr;</span>
  <span class="node node-decode">デコード</span>
  <span class="connector">&rarr;</span>
  <span class="node node-stream">ストリーム</span>
</div>

<div class="techs">
  <span>vLLM</span>
  <span>SGLang</span>
  <span>PagedAttention</span>
  <span>FlashInfer</span>
  <span>Triton</span>
  <span>CUDA</span>
</div>

<div class="section-divider" markdown>

## カリキュラム

基礎からソースコードレベルの習熟まで、体系的な学習パス。

</div>

<div class="parts-grid" markdown>

<a class="card" href="part1_foundations/">
  <span class="card-icon">:material-chip:</span>
  <span class="card-title">Part 1: 基礎</span>
  <span class="card-desc">Transformerの内部構造、GPUメモリ階層、ルーフライン解析、バッチ処理戦略、量子化、サービングメトリクス。</span>
  <span class="card-meta">8チャプター</span>
</a>

<a class="card" href="part2_system_design/">
  <span class="card-icon">:material-sitemap:</span>
  <span class="card-title">Part 2: システム設計</span>
  <span class="card-desc">リクエストのライフサイクル、スケジューラ設計、KVキャッシュメモリ管理、モデル並列化、APIレイヤーアーキテクチャ。</span>
  <span class="card-meta">7チャプター</span>
</a>

<a class="card" href="part3_vllm_architecture/">
  <span class="card-icon">:material-code-braces:</span>
  <span class="card-title">Part 3: vLLMアーキテクチャ</span>
  <span class="card-desc">ソースコード完全ウォークスルー — LLMEngine、Scheduler、PagedAttention、Block Manager、Worker、API Server。</span>
  <span class="card-meta">10チャプター</span>
</a>

<a class="card" href="part4_vllm_internals/">
  <span class="card-icon">:material-memory:</span>
  <span class="card-title">Part 4: vLLM内部実装</span>
  <span class="card-desc">KVキャッシュのメモリレイアウト、プレフィックスキャッシング、CUDAグラフキャプチャ、カスタムカーネル、投機的デコーディング、LoRAサービング。</span>
  <span class="card-meta">8チャプター</span>
</a>

<a class="card" href="part5_sglang_architecture/">
  <span class="card-icon">:material-lightning-bolt:</span>
  <span class="card-title">Part 5: SGLangアーキテクチャ</span>
  <span class="card-desc">Runtime & Router、RadixAttention、Scheduler、ModelRunner、FlashInfer統合、フロントエンドDSL。</span>
  <span class="card-meta">10チャプター</span>
</a>

<a class="card" href="part6_sglang_internals/">
  <span class="card-icon">:material-cog:</span>
  <span class="card-title">Part 6: SGLang内部実装</span>
  <span class="card-desc">高度なRadixAttention、データ並列・エキスパート並列、torch.compile、オーバーラップスケジューリング、FP8量子化。</span>
  <span class="card-meta">8チャプター</span>
</a>

<a class="card" href="part7_cuda_kernels/">
  <span class="card-icon">:material-gpu:</span>
  <span class="card-title">Part 7: CUDA & Triton</span>
  <span class="card-desc">GPUカーネルをゼロから実装 — PagedAttention、FlashAttention、融合演算、量子化行列積、CUTLASS。</span>
  <span class="card-meta">8チャプター</span>
</a>

<a class="card" href="part8_new_models/">
  <span class="card-icon">:material-puzzle:</span>
  <span class="card-title">Part 8: 新規モデル追加</span>
  <span class="card-desc">vLLMとSGLangへの新規モデルアーキテクチャ追加の完全ガイド（テストとパフォーマンスチューニング含む）。</span>
  <span class="card-meta">8チャプター</span>
</a>

<a class="card" href="part9_production/">
  <span class="card-icon">:material-rocket-launch:</span>
  <span class="card-title">Part 9: 本番運用</span>
  <span class="card-desc">デプロイオプション、ロードバランシング、モニタリング、ベンチマーク手法、コスト最適化、マルチノードサービング。</span>
  <span class="card-meta">8チャプター</span>
</a>

<a class="card" href="part10_comparison/">
  <span class="card-icon">:material-scale-balance:</span>
  <span class="card-title">Part 10: 比較分析</span>
  <span class="card-desc">vLLM vs SGLangの体系的な比較 — アーキテクチャ、スケジューリング、メモリ管理、意思決定フレームワーク。</span>
  <span class="card-meta">6チャプター</span>
</a>

<a class="card" href="part11_contributing/">
  <span class="card-icon">:material-source-pull:</span>
  <span class="card-title">Part 11: コントリビューション</span>
  <span class="card-desc">開発環境構築、テストフレームワーク、デバッグ、パフォーマンスプロファイリング、コードレビューワークフロー。</span>
  <span class="card-meta">7チャプター</span>
</a>

<a class="card" href="part12_research/">
  <span class="card-icon">:material-telescope:</span>
  <span class="card-title">Part 12: 最先端研究</span>
  <span class="card-desc">最先端トピック — 分離サービング、KVキャッシュ圧縮、ロングコンテキスト、推論モデル、MoE最適化。</span>
  <span class="card-meta">8チャプター</span>
</a>

</div>

<div class="section-divider" markdown>

## 学習パス

カリキュラムの推奨進行順序。

</div>

```mermaid
graph LR
    A[基礎] --> B[システム設計]
    B --> C[vLLMアーキテクチャ]
    C --> D[vLLM内部実装]
    D --> E[SGLangアーキテクチャ]
    E --> F[SGLang内部実装]
    F --> G[CUDA & Triton]
    G --> H[本番運用 & 研究]

    style A fill:#dcfce7,stroke:#166534,color:#166534
    style B fill:#dbeafe,stroke:#1e40af,color:#1e40af
    style C fill:#e0e7ff,stroke:#3730a3,color:#3730a3
    style D fill:#ede9fe,stroke:#5b21b6,color:#5b21b6
    style E fill:#fce7f3,stroke:#9d174d,color:#9d174d
    style F fill:#fae8ff,stroke:#86198f,color:#86198f
    style G fill:#fef3c7,stroke:#92400e,color:#92400e
    style H fill:#059669,stroke:#059669,color:#fff
```

<div class="section-divider" markdown>

## クイックスタート

</div>

```bash
git clone https://github.com/hideak1/vllm_study.git
cd vllm_study
make install   # uvで依存関係をインストール
make serve     # ドキュメント (localhost:8000) + Jupyter (localhost:8888) を起動
```

| 表記規則 | 意味 |
|-----------|---------|
| :material-information: **コンセプト** | 重要な概念と理論の解説 |
| :material-alert: **よくある落とし穴** | 頻出する間違いや誤解 |
| :material-lightbulb: **プロのコツ** | エキスパートレベルの知見とベストプラクティス |
| :material-pencil: **演習** | ハンズオンのコーディング演習 |

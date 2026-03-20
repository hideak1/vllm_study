# 第九部分：生产部署与运维

**目标：** 自信地在生产环境中部署和运维 vLLM 与 SGLang — 涵盖基础设施、监控与成本优化。

从开发转向生产会带来一系列新的挑战：可靠性、可扩展性、可观测性与成本。本部分涵盖大规模运行 LLM 推理服务所需的一切，从部署方案和负载均衡到监控仪表板和成本优化策略。

## 章节

| # | 章节 | 学习内容 |
|---|---------|-------------------|
| 9.1 | [部署方案](../notebooks/part9/chapter_9.1_deployment.ipynb) | Docker 容器、Kubernetes Operator、裸金属部署、云平台专属配置 |
| 9.2 | [负载均衡](../notebooks/part9/chapter_9.2_load_balancing.ipynb) | 请求路由策略、会话亲和性、健康检查、自动伸缩策略 |
| 9.3 | [监控与可观测性](../notebooks/part9/chapter_9.3_monitoring.ipynb) | Prometheus 指标、Grafana 仪表板、告警规则、请求追踪 |
| 9.4 | [基准测试方法](../notebooks/part9/chapter_9.4_benchmarking.ipynb) | 可复现的基准测试、负载生成、延迟分布分析、报告撰写 |
| 9.5 | [成本优化](../notebooks/part9/chapter_9.5_cost_optimization.ipynb) | GPU 利用率最大化、竞价实例、资源合理规划、量化权衡 |
| 9.6 | [多节点服务](../notebooks/part9/chapter_9.6_multi_node.ipynb) | 多节点张量并行、流水线并行、网络配置、Ray 集群 |
| 9.7 | [MoE 模型服务](../notebooks/part9/chapter_9.7_moe_serving.ipynb) | 混合专家模型部署、专家并行、内存规划、MoE 负载均衡 |
| 9.8 | [在线推理 vs 离线推理](../notebooks/part9/chapter_9.8_online_vs_offline.ipynb) | 批处理流水线、吞吐量优化配置、延迟优化配置、混合部署方案 |

## 前置条件

- 完成第三至第五部分（理解 vLLM 和 SGLang 架构）
- 具有 Docker 和容器编排经验
- 熟悉监控工具（Prometheus、Grafana）
- 具备基本的 DevOps 和基础设施知识

## 学习成果

完成第九部分后，你将能够：

- 使用 Docker、Kubernetes 或裸金属方式在生产环境部署 vLLM 和 SGLang
- 建立完善的 LLM 推理服务监控与告警体系
- 设计和执行严格的模型推理服务性能基准测试
- 在满足 SLA 要求的前提下优化基础设施成本
- 为大模型实现跨多节点的推理服务扩展
- 针对在线与离线推理场景选择正确的配置

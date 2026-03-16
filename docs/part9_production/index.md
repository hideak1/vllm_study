# Part 9: Production Deployment & Operations

**Goal:** Deploy and operate vLLM and SGLang in production environments with confidence — covering infrastructure, monitoring, and cost optimization.

Moving from development to production introduces a new set of challenges: reliability, scalability, observability, and cost. This part covers everything you need to run LLM serving at scale, from deployment options and load balancing to monitoring dashboards and cost optimization strategies.

## Chapters

| # | Chapter | What You'll Learn |
|---|---------|-------------------|
| 9.1 | [Deployment Options](../notebooks/part9/chapter_9.1_deployment.ipynb) | Docker containers, Kubernetes operators, bare-metal setup, cloud-specific configurations |
| 9.2 | [Load Balancing](../notebooks/part9/chapter_9.2_load_balancing.ipynb) | Request routing strategies, session affinity, health checks, autoscaling policies |
| 9.3 | [Monitoring & Observability](../notebooks/part9/chapter_9.3_monitoring.ipynb) | Prometheus metrics, Grafana dashboards, alerting rules, request tracing |
| 9.4 | [Benchmarking Methodology](../notebooks/part9/chapter_9.4_benchmarking.ipynb) | Reproducible benchmarks, workload generation, latency distribution analysis, reporting |
| 9.5 | [Cost Optimization](../notebooks/part9/chapter_9.5_cost_optimization.ipynb) | GPU utilization maximization, spot instances, right-sizing, quantization trade-offs |
| 9.6 | [Multi-Node Serving](../notebooks/part9/chapter_9.6_multi_node.ipynb) | Multi-node tensor parallelism, pipeline parallelism, network configuration, Ray clusters |
| 9.7 | [MoE Model Serving](../notebooks/part9/chapter_9.7_moe_serving.ipynb) | Mixture-of-Experts deployment, expert parallelism, memory planning, load balancing for MoE |
| 9.8 | [Online vs Offline Inference](../notebooks/part9/chapter_9.8_online_vs_offline.ipynb) | Batch processing pipelines, throughput-optimized configs, latency-optimized configs, hybrid setups |

## Prerequisites

- Completed Parts 3-5 (understanding of vLLM and SGLang architecture)
- Experience with Docker and container orchestration
- Familiarity with monitoring tools (Prometheus, Grafana)
- Basic DevOps and infrastructure knowledge

## Learning Outcomes

After completing Part 9, you will be able to:

- Deploy vLLM and SGLang in production using Docker, Kubernetes, or bare metal
- Set up comprehensive monitoring and alerting for LLM serving
- Design and execute rigorous benchmarks for model serving performance
- Optimize infrastructure costs while maintaining SLA requirements
- Scale serving across multiple nodes for large models
- Choose the right configuration for online vs offline inference workloads

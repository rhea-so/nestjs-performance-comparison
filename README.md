# Performance Comparison

## Benchmark Tool

I use [bombardier](https://github.com/codesenberg/bombardier) for benchmarking the server. bombardier is a HTTP(S) benchmarking tool. It is written in Go programming language and uses excellent fasthttp instead of Go's default http library, because of its lightning fast performance.

### Installation

```sh
curl -OL https://github.com/codesenberg/bombardier/releases/download/v1.2.6/bombardier-darwin-arm64
chmod +x ./bombardier-darwin-arm64
sudo mv ./bombardier-darwin-arm64 /usr/local/bin/bombardier
# Terminal Restart
```

## Environment

- Model: MacBook Air M1, 2020
  - CPU: Apple M1
  - Memory: 16GB
  - OS: Ventura 13.4.1

## Test Result

### Query

```graphql
query {
  blogs(count: 10) {
    title
    content
  }
}
```

#### 01-nestjs-express-sequelize-apollo

```
Statistics        Avg      Stdev        Max
  Reqs/sec      3405.51     624.68    5058.34
  Latency       36.88ms     9.85ms   198.96ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     5.18MB/s
```

#### 02-nestjs-fastify-sequelize-apollo

```
Statistics        Avg      Stdev        Max
  Reqs/sec      3995.67    1012.19    6170.63
  Latency       31.28ms     6.15ms   156.08ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     6.50MB/s
```

#### 03-nestjs-fastify-sequelize-mercurius

```
Statistics        Avg      Stdev        Max
  Reqs/sec      5472.54     772.48    7491.10
  Latency       22.83ms     4.51ms   133.01ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     8.70MB/s
```

#### 04-nestjs-fastify-typeorm-mercurius

```
Statistics        Avg      Stdev        Max
  Reqs/sec      6080.33     817.49   15853.74
  Latency       20.59ms     2.89ms    55.99ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     9.73MB/s
```

#### 05-nestjs-fastify-mikroorm-mercurius

```
Statistics        Avg      Stdev        Max
  Reqs/sec      3871.91     987.59   16370.90
  Latency       32.36ms     5.16ms    92.94ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     6.19MB/s
```

#### 06-nestjs-fastify-knex-mercurius

```
Statistics        Avg      Stdev        Max
  Reqs/sec      6815.06    1094.04   12659.94
  Latency       18.35ms     3.38ms    67.95ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    10.82MB/s
```

#### 07-nestjs-fastify-sequelize-mercurius-jit

```
Statistics        Avg      Stdev        Max
  Reqs/sec      5545.31     882.18    6949.70
  Latency       22.53ms     4.69ms   130.06ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     8.89MB/s
```

### Mutation

```graphql
mutation {
  createBlog(input: { title: "test title", content: "test content" }) {
    title
    content
  }
}
```

#### 01-nestjs-express-sequelize-apollo

```
Statistics        Avg      Stdev        Max
  Reqs/sec      4066.38    1224.40    6341.64
  Latency       30.74ms     6.62ms   206.72ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     4.85MB/s
```

#### 02-nestjs-fastify-sequelize-apollo

```
Statistics        Avg      Stdev        Max
  Reqs/sec      4447.81    1454.10    6743.36
  Latency       28.10ms     6.61ms   190.88ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     5.70MB/s
```

#### 03-nestjs-fastify-sequelize-mercurius

```
Statistics        Avg      Stdev        Max
  Reqs/sec      5919.75    1432.39   37199.12
  Latency       21.24ms     5.83ms   191.56ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     7.39MB/s
```

#### 04-nestjs-fastify-typeorm-mercurius

```
Statistics        Avg      Stdev        Max
  Reqs/sec      3516.20     913.76   10662.38
  Latency       35.58ms     8.65ms   169.79ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     4.42MB/s
```

#### 05-nestjs-fastify-mikroorm-mercurius

```
Statistics        Avg      Stdev        Max
  Reqs/sec      3040.56     588.78    6157.86
  Latency       41.11ms     7.71ms   185.03ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     3.82MB/s
```

#### 06-nestjs-fastify-knex-mercurius

```
Statistics        Avg      Stdev        Max
  Reqs/sec      5390.51     957.16   11420.80
  Latency       23.20ms     5.05ms   108.05ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     6.77MB/s
```

#### 07-nestjs-fastify-sequelize-mercurius-jit

```
Statistics        Avg      Stdev        Max
  Reqs/sec      6298.44    1004.98    9005.63
  Latency       19.84ms     3.03ms    67.82ms
  HTTP codes:
    1xx - 0, 2xx - 100000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:     7.92MB/s
```

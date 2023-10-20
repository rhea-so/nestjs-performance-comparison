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

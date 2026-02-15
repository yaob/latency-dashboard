const express = require('express');
const client = require('prom-client');
const app = express();
client.collectDefaultMetrics();
const latencyGauge = new client.Gauge({
  name: 'request_latency_seconds',
  help: 'Time taken to handle a request, in seconds',
});
app.use((req, res, next) => {
  const start = process.hrtime();
  res.on('finish', () => {
    const diff = process.hrtime(start);
    const seconds = diff[0] + diff[1] / 1e9;
    latencyGauge.set(seconds);
  });
  next();
});
app.get('/api/foo', (_req, res) => {
  setTimeout(() => res.json({ msg: 'hello' }), Math.random() * 500);
});
app.get('/metrics', (_req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(client.register.metrics());
});
app.listen(3000, () => console.log('🚀 Listening on 3000'));

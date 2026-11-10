// Write Automated API Tests
import { createServer } from 'node:http';

export function handler(req, res) {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }
  res.writeHead(404).end();
}

export function start(port = 3000) {
  const server = createServer(handler);
  server.listen(port);
  return server;
}

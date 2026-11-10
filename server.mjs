// Client want to create a hris app
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { employeesRouter } from './routes/employees.mjs';

const store = { employees: [] };
const routers = [employeesRouter];

export function handler(req, res) {
  if (req.url === '/health') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ ok: true })); }
  if (req.url === '/api/employees') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify(store.employees)); }
  const file = req.url === '/' ? 'public/index.html' : 'public' + req.url;
  if (existsSync(file)) { res.writeHead(200, { 'content-type': file.endsWith('.css') ? 'text/css' : file.endsWith('.js') ? 'text/javascript' : 'text/html' }); return res.end(readFileSync(file)); }
  res.writeHead(404).end();
}

export function start(port = 3000) { const s = createServer(handler); s.listen(port, () => console.log('http://localhost:' + port)); return s; }
import { pathToFileURL } from 'node:url';
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) start();

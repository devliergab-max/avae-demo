import assert from 'node:assert';
import { test } from 'node:test';
import { handler } from './server.mjs';
function call(url){ let code=0,body=''; const res={writeHead(c){code=c;return this;},end(b=''){body=b;return this;}}; handler({url},res); return {code,body}; }
test('GET /health', () => { const r = call('/health'); assert.strictEqual(r.code,200); assert.deepStrictEqual(JSON.parse(r.body),{ok:true}); });
test('GET /api/employees', () => { const r = call('/api/employees'); assert.strictEqual(r.code,200); assert.ok(Array.isArray(JSON.parse(r.body))); });

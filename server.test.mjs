import assert from 'node:assert';
import { test } from 'node:test';
import { handler } from './server.mjs';

test('handler responds to /health', () => {
  let code = 0;
  let body = '';
  const res = { writeHead(c) { code = c; return this; }, end(b = '') { body = b; return this; } };
  handler({ url: '/health' }, res);
  assert.strictEqual(code, 200);
  assert.deepStrictEqual(JSON.parse(body), { ok: true });
});

import assert from 'node:assert';
import { test } from 'node:test';
import { issue10 } from './issue10.mjs';

test('issue10: returns a result for input', () => {
  const result = issue10('sample');
  assert.strictEqual(result.ok, true);
});

test('issue10: flags empty input', () => {
  assert.strictEqual(issue10('').ok, false);
});

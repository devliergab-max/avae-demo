import assert from 'node:assert';
import { test } from 'node:test';
import { issue3 } from './issue3.mjs';

test('issue3: returns a result for input', () => {
  const result = issue3('sample');
  assert.strictEqual(result.ok, true);
});

test('issue3: flags empty input', () => {
  assert.strictEqual(issue3('').ok, false);
});

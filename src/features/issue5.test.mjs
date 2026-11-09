import assert from 'node:assert';
import { test } from 'node:test';
import { issue5 } from './issue5.mjs';

test('issue5: returns a result for input', () => {
  const result = issue5('sample');
  assert.strictEqual(result.ok, true);
});

test('issue5: flags empty input', () => {
  assert.strictEqual(issue5('').ok, false);
});

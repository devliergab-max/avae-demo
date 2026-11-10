import assert from 'node:assert';
import { test } from 'node:test';
import { issue7 } from './issue7.mjs';
test('issue7 returns ok for input', () => { assert.strictEqual(issue7('x').ok, true); });

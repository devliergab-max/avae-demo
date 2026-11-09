import assert from 'node:assert';
import { test } from 'node:test';
import { issue11 } from './issue11.mjs';
test('issue11 returns ok for input', () => { assert.strictEqual(issue11('x').ok, true); });

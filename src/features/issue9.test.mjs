import assert from 'node:assert';
import { test } from 'node:test';
import { issue9 } from './issue9.mjs';
test('issue9 returns ok for input', () => { assert.strictEqual(issue9('x').ok, true); });

import assert from 'node:assert';
import { test } from 'node:test';
import { renderMenu, MENU } from './app.mjs';

test('renderMenu formats every item with a price label', () => {
  const out = renderMenu();
  assert.strictEqual(out.length, MENU.length);
  assert.match(out[0].label, /—/);
});

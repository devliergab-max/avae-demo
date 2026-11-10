// create a coffee website
export const MENU = [
  { id: 1, name: 'Espresso', price: 3.5 },
  { id: 2, name: 'Cappuccino', price: 4.5 },
  { id: 3, name: 'Cold Brew', price: 4.0 },
];
export function renderMenu(items = MENU) { return items.map((i) => ({ ...i, label: `${i.name} — $${i.price.toFixed(2)}` })); }
if (typeof document !== 'undefined') { const list = document.getElementById('items'); if (list) for (const it of renderMenu()) { const li = document.createElement('li'); li.textContent = it.label; list.appendChild(li); } }

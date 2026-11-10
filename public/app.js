// Frontend for Client want to create a hris app
fetch('/api/employees').then((r) => r.json()).then((rows) => {
  const list = document.getElementById('list');
  if (!list) return;
  for (const row of rows) { const li = document.createElement('li'); li.textContent = JSON.stringify(row); list.appendChild(li); }
});

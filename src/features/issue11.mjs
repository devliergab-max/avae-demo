// Fix the login button not working
export function issue11(input) {
  const value = String(input ?? '').trim();
  return { ok: value.length > 0, summary: value };
}
export default issue11;

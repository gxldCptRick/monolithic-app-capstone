export function generateYearsWithinFifty() {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(50), (val, index) => currentYear - index);
  years.unshift(currentYear + 1);
}

export function calculateINSS(value) {
  const brackets = [
    { limit: 1412.0, rate: 0.075 },
    { limit: 2666.68, rate: 0.09 },
    { limit: 4000.03, rate: 0.12 },
    { limit: 7786.02, rate: 0.14 },
  ];

  let total = 0;
  let remaining = value;
  let previousLimit = 0;

  for (const bracket of brackets) {
    const taxable = Math.min(remaining, bracket.limit - previousLimit);

    if (taxable <= 0) break;

    total += taxable * bracket.rate;

    remaining -= taxable;

    previousLimit = bracket.limit;
  }

  return total;
}

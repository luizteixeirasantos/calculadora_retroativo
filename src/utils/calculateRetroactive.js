export function calculateRetroactive({
  oldSalary,
  newSalary,
  retroMonths,
  months13,
  inss,
  discounts,
}) {
  const diff = newSalary - oldSalary;

  const retroValue = diff * retroMonths;

  const thirteenth = (diff / 12) * months13;

  const grossTotal = retroValue + thirteenth;

  const inssValue = grossTotal * (inss / 100);

  let extraDiscounts = 0;

  discounts.forEach((d) => {
    extraDiscounts += Number(d.value || 0);
  });

  const netTotal = grossTotal - inssValue - extraDiscounts;

  return {
    retroValue,
    thirteenth,
    grossTotal,
    inssValue,
    netTotal,
  };
}

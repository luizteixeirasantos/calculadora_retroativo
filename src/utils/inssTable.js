export function getAliquotaINSS(salario) {
  if (salario <= 1412) return 7.5;

  if (salario <= 2666.68) return 9;

  if (salario <= 4000.03) return 12;

  if (salario <= 7786.02) return 14;

  return 14;
}

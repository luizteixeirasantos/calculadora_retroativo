import { z } from "zod";

export const calculatorSchema = z.object({
  oldSalary: z
    .number({ invalid_type_error: "Informe o salário antigo" })
    .min(1, "Valor deve ser maior que zero"),

  newSalary: z.number({ invalid_type_error: "Informe o salário novo" }).min(1),

  retroMonths: z.number().min(1, "Informe os meses retroativos"),

  months13: z.number().min(0).max(12),

  inss: z.number().min(0).max(14),
});

import { useState } from "react";
import { NumericFormat } from "react-number-format";

export default function SalaryForm({ onCalculate }) {
  const [salary, setSalary] = useState(0);
  const [months, setMonths] = useState(1);
  const [discount, setDiscount] = useState(0);

  function submit(e) {
    e.preventDefault();

    onCalculate({
      salary,
      months,
      discount,
    });
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <NumericFormat
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        placeholder="Salário"
        className="border p-2 rounded"
        onValueChange={(values) => setSalary(values.floatValue || 0)}
      />

      <input
        type="number"
        placeholder="Meses retroativos"
        className="border p-2 rounded"
        value={months}
        onChange={(e) => setMonths(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Desconto (%)"
        className="border p-2 rounded"
        value={discount}
        onChange={(e) => setDiscount(Number(e.target.value))}
      />

      <button className="bg-blue-600 text-white p-2 rounded">Calcular</button>
    </form>
  );
}

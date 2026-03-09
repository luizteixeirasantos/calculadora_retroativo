import { useState } from "react";

import { calculateRetroactive } from "../utils/calculateRetroactive";

import ChartResult from "../components/ChartResult";
import ExportPDF from "../components/ExportPDF";
import ExportExcel from "../components/ExportExcel";
import ResultCards from "../components/ResultCard";

import useHistory from "../hooks/useHistory";

export default function Calculator() {
  const [oldSalary, setOldSalary] = useState("");
  const [newSalary, setNewSalary] = useState("");
  const [retroMonths, setRetroMonths] = useState("");
  const [months13, setMonths13] = useState("");
  const [inss, setInss] = useState(7.82);

  const [discounts, setDiscounts] = useState([]);

  const [result, setResult] = useState(null);

  const { addCalculation } = useHistory();

  function addDiscount() {
    setDiscounts([...discounts, { name: "", value: "" }]);
  }

  function updateDiscount(index, field, value) {
    const updated = [...discounts];

    updated[index][field] = value;

    setDiscounts(updated);
  }

  async function handleCalculate() {
    const calc = calculateRetroactive({
      oldSalary: Number(oldSalary),
      newSalary: Number(newSalary),

      retroMonths: Number(retroMonths),

      months13: Number(months13),

      inss: Number(inss),

      discounts,
    });

    setResult(calc);

    await addCalculation(calc);
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold text-center mb-6">
        Calculadora Retroativo Salarial
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Salário Antigo</label>

          <input
            type="number"
            className="border p-2 rounded w-full"
            onChange={(e) => setOldSalary(e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">Salário Novo</label>

          <input
            type="number"
            className="border p-2 rounded w-full"
            onChange={(e) => setNewSalary(e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">Meses Retroativo</label>

          <input
            type="number"
            className="border p-2 rounded w-full"
            onChange={(e) => setRetroMonths(e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">Meses para 13°</label>

          <input
            type="number"
            className="border p-2 rounded w-full"
            onChange={(e) => setMonths13(e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">INSS (%)</label>

          <input
            type="number"
            value={inss}
            className="border p-2 rounded w-full"
            onChange={(e) => setInss(e.target.value)}
          />
        </div>
      </div>

      <h2 className="font-bold mt-6">Descontos adicionais</h2>

      <button
        onClick={addDiscount}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
      >
        Adicionar desconto
      </button>

      {discounts.map((d, index) => (
        <div key={index} className="flex gap-2 mt-2">
          <input
            placeholder="Nome"
            className="border p-2 rounded w-1/2"
            onChange={(e) => updateDiscount(index, "name", e.target.value)}
          />

          <input
            type="number"
            placeholder="Valor"
            className="border p-2 rounded w-1/2"
            onChange={(e) => updateDiscount(index, "value", e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={handleCalculate}
        className="bg-blue-600 text-white w-full mt-6 py-3 rounded"
      >
        Calcular
      </button>

      {result && (
        <div className="mt-8 space-y-6">
          <ResultCards result={result} />

          <ChartResult result={result} />

          <div className="flex gap-4">
            <ExportPDF result={result} />

            <ExportExcel result={result} />
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { calculateRetroactive } from "../utils/calculateRetroactive";
import ChartResult from "./ChartResult";
import ExportPDF from "./ExportPDF";
import ExportExcel from "./ExportExcel";
import HistoryList from "./HistoryList";
import ResultCards from "./ResultCard";
import useHistory from "../hooks/useHistory";

export default function Calculator() {
  const [oldSalary, setOldSalary] = useState("");
  const [newSalary, setNewSalary] = useState("");
  const [retroMonths, setRetroMonths] = useState("");
  const [months13, setMonths13] = useState("");
  const [inss, setInss] = useState(7.82);

  const [discounts, setDiscounts] = useState([]);
  const [result, setResult] = useState(null);

  function addDiscount() {
    setDiscounts([...discounts, { name: "", value: "" }]);
  }

  function updateDiscount(index, field, value) {
    const updated = [...discounts];
    updated[index][field] = value;
    setDiscounts(updated);
  }

  function handleCalculate() {
    const calc = calculateRetroactive({
      oldSalary: Number(oldSalary),
      newSalary: Number(newSalary),
      retroMonths: Number(retroMonths),
      months13: Number(months13),
      inss: Number(inss),
      discounts,
    });

    setResult(calc);
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold text-center mb-6">
        Calculadora Retroativo Salarial
      </h1>

      <label className="font-semibold">Salário Antigo</label>
      <input
        placeholder="Salário Antigo"
        className="input"
        onChange={(e) => setOldSalary(e.target.value)}
      />

      <label className="font-semibold">Salário Novo</label>
      <input
        placeholder="Salário Novo"
        className="input"
        onChange={(e) => setNewSalary(e.target.value)}
      />

      <label className="font-semibold">Meses Retroativo</label>
      <input
        placeholder="Meses Retroativo"
        className="input"
        onChange={(e) => setRetroMonths(e.target.value)}
      />

      <label className="font-semibold">Meses para 13°</label>
      <input
        placeholder="Meses para 13°"
        className="input"
        onChange={(e) => setMonths13(e.target.value)}
      />

      <label className="font-semibold">INSS (%)</label>
      <input
        placeholder="INSS (%)"
        className="input"
        value={inss}
        onChange={(e) => setInss(e.target.value)}
      />

      <h2 className="font-bold mt-4">Descontos adicionais</h2>

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
            placeholder="Valor"
            className="border p-2 rounded w-1/2"
            onChange={(e) => updateDiscount(index, "value", e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={handleCalculate}
        className="bg-blue-600 text-white w-full mt-4 py-2 rounded"
      >
        Calcular
      </button>

      {result && (
        <>
          <div className="bg-gray-100 p-4 mt-6 rounded">
            <p>Retroativo: R$ {result.retroValue.toFixed(2)}</p>
            <p>13º proporcional: R$ {result.thirteenth.toFixed(2)}</p>
            <p>INSS: R$ {result.inssValue.toFixed(2)}</p>
            <p>Total bruto: R$ {result.grossTotal.toFixed(2)}</p>

            <p className="font-bold text-green-600">
              Total líquido: R$ {result.netTotal.toFixed(2)}
            </p>
          </div>

          <ChartResult result={result} />

          <div className="flex gap-4 mt-4">
            <ExportPDF result={result} />

            <ExportExcel result={result} />
          </div>

          {result && (
            <>
              <ResultCards result={result} />

              <ChartResult result={result} />

              <div className="flex gap-4 mt-4">
                <ExportPDF result={result} />
                <ExportExcel result={result} />
              </div>
            </>
          )}

          <HistoryList />
        </>
      )}
    </div>
  );
}

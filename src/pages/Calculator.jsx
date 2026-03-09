import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Calculator() {
  const [salarioAnterior, setSalarioAnterior] = useState("");
  const [salarioAtual, setSalarioAtual] = useState("");
  const [mesesRetroativo, setMesesRetroativo] = useState("");
  const [mesesDecimo, setMesesDecimo] = useState("");

  const [inssPercent, setInssPercent] = useState(0);

  const [retroativo, setRetroativo] = useState(0);
  const [decimo, setDecimo] = useState(0);
  const [inssValue, setInssValue] = useState(0);
  const [totalLiquido, setTotalLiquido] = useState(0);

  const [history, setHistory] = useState([]);

  function getAliquotaINSS(salario) {
    if (salario <= 1412) return 7.5;
    if (salario <= 2666.68) return 9;
    if (salario <= 4000.03) return 12;
    if (salario <= 7786.02) return 14;

    return 14;
  }

  useEffect(() => {
    if (!salarioAtual) return;

    const aliquota = getAliquotaINSS(Number(salarioAtual));

    setInssPercent(aliquota);
  }, [salarioAtual]);

  function calcular() {
    const anterior = Number(salarioAnterior);
    const atual = Number(salarioAtual);

    const mesesRetro = Number(mesesRetroativo);
    const meses13 = Number(mesesDecimo);

    const diferenca = atual - anterior;

    const retro = diferenca * mesesRetro;

    const decimoTerceiro = (diferenca / 12) * meses13;

    const inss = retro * (inssPercent / 100);

    const liquido = retro + decimoTerceiro - inss;

    setRetroativo(retro);
    setDecimo(decimoTerceiro);
    setInssValue(inss);
    setTotalLiquido(liquido);

    const novo = {
      date: new Date().toLocaleDateString(),
      anterior,
      atual,
      mesesRetro,
      meses13,
      retro,
      decimoTerceiro,
      inss,
      liquido,
    };

    const newHistory = [...history, novo];

    setHistory(newHistory);

    localStorage.setItem("history", JSON.stringify(newHistory));
  }

  function exportPDF() {
    const doc = new jsPDF();

    doc.text("Resultado do cálculo", 20, 20);

    doc.text(`Retroativo: R$ ${retroativo.toFixed(2)}`, 20, 40);
    doc.text(`13º: R$ ${decimo.toFixed(2)}`, 20, 50);
    doc.text(`INSS: R$ ${inssValue.toFixed(2)}`, 20, 60);
    doc.text(`Total Líquido: R$ ${totalLiquido.toFixed(2)}`, 20, 70);

    doc.save("calculo.pdf");
  }

  function exportExcel() {
    const data = [
      {
        Retroativo: retroativo,
        Decimo: decimo,
        INSS: inssValue,
        Liquido: totalLiquido,
      },
    ];

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Resultado");

    XLSX.writeFile(wb, "calculo.xlsx");
  }

  const chartData = [
    { name: "Retroativo", value: retroativo },
    { name: "13º", value: decimo },
    { name: "INSS", value: inssValue },
    { name: "Líquido", value: totalLiquido },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Calculadora de Retroativo</h1>

      <div className="grid md:grid-cols-1 gap-4">

        <label className="font-semibold">Salário Antigo</label>
        <input
          type="number"
          placeholder="Salário anterior"
          value={salarioAnterior}
          onChange={(e) => setSalarioAnterior(e.target.value)}
          className="border p-3 rounded w-full border-black"
        />
        
        <label className="font-semibold">Salário Atual</label>
        <input
          type="number"
          placeholder="Salário atual"
          value={salarioAtual}
          onChange={(e) => setSalarioAtual(e.target.value)}
          className="border p-3 rounded w-full border-black"
        />

        <label className="font-semibold">Meses Retroativos</label>
        <input
          type="number"
          placeholder="Meses retroativos"
          value={mesesRetroativo}
          onChange={(e) => setMesesRetroativo(e.target.value)}
          className="border p-3 rounded w-full border-black"
        />

        <label className="font-semibold">Meses para 13º</label>
        <input
          type="number"
          placeholder="Meses para 13º"
          value={mesesDecimo}
          onChange={(e) => setMesesDecimo(e.target.value)}
          className="border p-3 rounded w-full border-black"
        />

        <label className="font-semibold">INSS (%)</label>
        <input
          type="number"
          value={inssPercent}
          readOnly
          className="border p-3 rounded w-full border-black bg-gray-100"
        />
      </div>

      <button
        onClick={calcular}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Calcular
      </button>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <p>
            Retroativo: <b>R$ {retroativo.toFixed(2)}</b>
          </p>

          <p>
            13º: <b>R$ {decimo.toFixed(2)}</b>
          </p>

          <p>
            INSS: <b>R$ {inssValue.toFixed(2)}</b>
          </p>

          <p className="text-lg">
            Total Líquido: <b>R$ {totalLiquido.toFixed(2)}</b>
          </p>

          <div className="flex gap-2 mt-4">
            <button
              onClick={exportPDF}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Exportar PDF
            </button>

            <button
              onClick={exportExcel}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Exportar Excel
            </button>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

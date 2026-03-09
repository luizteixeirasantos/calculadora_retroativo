import { useEffect, useState } from "react";
import useHistory from "../hooks/useHistory";

export default function HistoryList() {
  const { getHistory, clearHistory } = useHistory();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  function handleClear() {
    clearHistory();
    setHistory([]);
  }

  if (history.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        Nenhum cálculo realizado ainda
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Histórico de cálculos</h2>

        <button
          onClick={handleClear}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Limpar histórico
        </button>
      </div>

      <div className="space-y-3">
        {history.map((item, index) => (
          <div key={index} className="border rounded p-4 bg-gray-50">
            <p className="text-sm text-gray-500">{item.date}</p>

            <p>Retroativo: R$ {item.retroValue.toFixed(2)}</p>
            <p>13°: R$ {item.thirteenth.toFixed(2)}</p>
            <p>INSS: R$ {item.inssValue.toFixed(2)}</p>

            <p className="font-bold text-green-600">
              Líquido: R$ {item.netTotal.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

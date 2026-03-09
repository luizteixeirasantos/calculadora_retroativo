import { useEffect, useState } from "react";
import useHistory from "../hooks/useHistory";

export default function History() {
  const { getHistory, clearHistory } = useHistory();

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

useEffect(() => {
  async function load() {
    const data = await getHistory();
    setHistory(data.reverse());
  }

  load();
}, []);

  const filtered = history.filter((item) =>
    item.date.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Histórico de Cálculos</h1>

        <button
          onClick={() => {
            clearHistory();
            setHistory([]);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Limpar
        </button>
      </div>

      {/* filtro */}
      <input
        placeholder="Buscar por data..."
        className="border p-2 rounded w-full mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Data</th>
              <th className="p-2">Retroativo</th>
              <th className="p-2">13°</th>
              <th className="p-2">INSS</th>
              <th className="p-2">Líquido</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item, index) => (
              <tr key={index} className="border-t text-center">
                <td className="p-2">{item.date}</td>

                <td className="p-2">R$ {item.retroValue.toFixed(2)}</td>

                <td className="p-2">R$ {item.thirteenth.toFixed(2)}</td>

                <td className="p-2">R$ {item.inssValue.toFixed(2)}</td>

                <td className="p-2 font-bold text-green-600">
                  R$ {item.netTotal.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

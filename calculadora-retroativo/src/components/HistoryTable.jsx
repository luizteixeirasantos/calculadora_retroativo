export default function HistoryTable({ history }) {
  if (!history.length) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="font-bold mb-4">Histórico de cálculos</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th>Data</th>
              <th>Retroativo</th>
              <th>13º</th>
              <th>INSS</th>
              <th>Total Líquido</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr key={item.id} className="border-b">
                <td>{item.date}</td>

                <td>R$ {item.retroValue.toFixed(2)}</td>

                <td>R$ {item.thirteenth.toFixed(2)}</td>

                <td>R$ {item.inssValue.toFixed(2)}</td>

                <td className="font-bold text-green-600">
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

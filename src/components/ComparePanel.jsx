export default function ComparePanel({ items }) {
  if (items.length !== 2) return null;

  const [a, b] = items;

  return (
    <div className="mt-8 border rounded-xl p-6 bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Comparação de cálculos</h2>

      <table className="w-full text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Campo</th>
            <th className="p-2">Cálculo A</th>
            <th className="p-2">Cálculo B</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-2">Retroativo</td>
            <td>R$ {a.retroValue.toFixed(2)}</td>
            <td>R$ {b.retroValue.toFixed(2)}</td>
          </tr>

          <tr className="border-t">
            <td className="p-2">13º</td>
            <td>R$ {a.thirteenth.toFixed(2)}</td>
            <td>R$ {b.thirteenth.toFixed(2)}</td>
          </tr>

          <tr className="border-t">
            <td className="p-2">INSS</td>
            <td>R$ {a.inssValue.toFixed(2)}</td>
            <td>R$ {b.inssValue.toFixed(2)}</td>
          </tr>

          <tr className="border-t font-bold">
            <td className="p-2">Total líquido</td>
            <td className="text-green-600">R$ {a.netTotal.toFixed(2)}</td>
            <td className="text-green-600">R$ {b.netTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

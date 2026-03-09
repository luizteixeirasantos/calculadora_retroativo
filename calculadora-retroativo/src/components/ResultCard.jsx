export default function ResultCards({ result }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="bg-gray-100 p-4 rounded">
        Retroativo
        <p className="font-bold">R$ {result.retroValue.toFixed(2)}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        13°
        <p className="font-bold">R$ {result.thirteenth.toFixed(2)}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        INSS
        <p className="font-bold">R$ {result.inssValue.toFixed(2)}</p>
      </div>

      <div className="bg-green-100 p-4 rounded">
        Total Líquido
        <p className="font-bold text-green-700">
          R$ {result.netTotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

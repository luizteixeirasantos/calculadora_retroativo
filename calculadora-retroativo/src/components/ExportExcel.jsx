import * as XLSX from "xlsx";

export default function ExportExcel({ result }) {
  function exportFile() {
    const data = [
      { Campo: "Retroativo", Valor: result.retroValue },
      { Campo: "13º", Valor: result.thirteenth },
      { Campo: "INSS", Valor: result.inssValue },
      { Campo: "Total Bruto", Valor: result.grossTotal },
      { Campo: "Total Líquido", Valor: result.netTotal },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Resultado");

    XLSX.writeFile(workbook, "retroativo.xlsx");
  }

  return (
    <button
      onClick={exportFile}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Exportar Excel
    </button>
  );
}

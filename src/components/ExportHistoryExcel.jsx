import * as XLSX from "xlsx";
import useHistory from "../hooks/useHistory";

export default function ExportHistoryExcel() {
  const { getHistory } = useHistory();

  async function exportFile() {
    const history = await getHistory();

    const worksheet = XLSX.utils.json_to_sheet(history);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Historico");

    XLSX.writeFile(workbook, "historico-calculos.xlsx");
  }

  return (
    <button
      onClick={exportFile}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Exportar histórico
    </button>
  );
}

import jsPDF from "jspdf";

export default function ExportPDF({ result }) {
  function generatePDF() {
    const doc = new jsPDF();

    doc.text("Resultado Retroativo Salarial", 20, 20);

    doc.text(`Retroativo: R$ ${result.retroValue.toFixed(2)}`, 20, 40);
    doc.text(`13º: R$ ${result.thirteenth.toFixed(2)}`, 20, 50);
    doc.text(`INSS: R$ ${result.inssValue.toFixed(2)}`, 20, 60);
    doc.text(`Total Bruto: R$ ${result.grossTotal.toFixed(2)}`, 20, 70);
    doc.text(`Total Líquido: R$ ${result.netTotal.toFixed(2)}`, 20, 80);

    doc.save("retroativo.pdf");
  }

  return (
    <button
      onClick={generatePDF}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Exportar PDF
    </button>
  );
}

function formatar(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function addDesconto() {
  let container = document.getElementById("listaDescontos");

  let div = document.createElement("div");
  div.className = "desconto-item";

  div.innerHTML = `
<input placeholder="Nome desconto">
<input type="number" class="valorDesconto" placeholder="Valor" step="0.01">
<button class="btn-remove" onclick="remover(this)">X</button>
`;

  container.appendChild(div);

  atualizar();
}

function remover(btn) {
  btn.parentElement.remove();
  atualizar();
}

function atualizar() {
  let antigo = parseFloat(document.getElementById("salarioAntigo").value) || 0;
  let novo = parseFloat(document.getElementById("salarioNovo").value) || 0;
  let mesesRetro = parseInt(document.getElementById("mesesRetro").value) || 0;
  let meses13 = parseInt(document.getElementById("meses13").value) || 0;
  let inss = parseFloat(document.getElementById("inss").value) || 0;

  let diferenca = novo - antigo;
  let retroativo = diferenca * mesesRetro;
  let decimo = (diferenca / 12) * meses13;
  let totalBruto = retroativo + decimo;

  let descontoINSS = totalBruto * (inss / 100);

  let extras = 0;

  document.querySelectorAll(".valorDesconto").forEach((el) => {
    extras += parseFloat(el.value) || 0;
  });

  let liquido = totalBruto - descontoINSS - extras;

  let html = `
<b>Diferença salarial:</b> ${formatar(diferenca)}<br>
<b>Retroativo:</b> ${formatar(retroativo)}<br>
<b>13º proporcional:</b> ${formatar(decimo)}<br>
<b>Total bruto:</b> ${formatar(totalBruto)}<br>
<b>INSS:</b> ${formatar(descontoINSS)}<br>
<b>Outros descontos:</b> ${formatar(extras)}<br>
<hr>
<b>Valor líquido:</b> ${formatar(liquido)}
`;

  document.getElementById("resultado").innerHTML = html;
}

function gerarPDF() {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();

  let texto = document.getElementById("resultado").innerText;

  doc.text("Resultado cálculo retroativo", 20, 20);
  doc.text(texto, 20, 40);

  doc.save("retroativo.pdf");
}

document.querySelectorAll("input").forEach((el) => {
  el.addEventListener("input", atualizar);
});

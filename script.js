let tipoAtual = "Entrada";

const btn = document.getElementById("btnRegistrar");
const tabela = document.getElementById("tabelaPontos");
const tbody = tabela.querySelector("tbody");

btn.addEventListener("click", () => {
  const agora = new Date();
  const data = agora.toLocaleDateString();
  const hora = agora.toLocaleTimeString();

  const linha = tbody.insertRow();
  linha.insertCell(0).textContent = data;
  linha.insertCell(1).textContent = hora;
  linha.insertCell(2).textContent = tipoAtual;

  tabela.style.display = "table";

  tipoAtual = tipoAtual === "Entrada" ? "Saída" : "Entrada";
});

document.addEventListener("DOMContentLoaded", function () {

  // Menu mobile
  const sidenav = document.querySelectorAll(".sidenav");
  if (sidenav.length) {
    M.Sidenav.init(sidenav);
  }

  // Selects (formulários)
  const selects = document.querySelectorAll("select");
  if (selects.length) {
    M.FormSelect.init(selects);
  }

});

// Função para envio via mailto
function enviarEmail() {

  const nome = document.getElementById("nome")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const loja = document.getElementById("loja")?.value || "";
  const assunto = document.getElementById("assunto")?.value || "";
  const mensagem = document.getElementById("mensagem")?.value || "";

  const corpo = `
Nome: ${nome}
E-mail: ${email}
Loja: ${loja}

Mensagem:
${mensagem}
  `;

  const mailtoLink =
    `mailto:treinamento@nichele.com.br` +
    `?subject=${encodeURIComponent(assunto)}` +
    `&body=${encodeURIComponent(corpo)}`;

  window.location.href = mailtoLink;
}

// Abrir cronograma do Programa de Novos Vendedores (Canva)
function abrirTurma(mes) {
  const anoAtual = new Date().getFullYear();

  const url =
    'https://capacitacaovendedor.my.canva.site/' +
    'turma-' + mes + '-' + anoAtual;

  window.open(url, '_blank');
}


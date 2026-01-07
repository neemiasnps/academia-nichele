document.addEventListener("DOMContentLoaded", function () {
  const sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  // Inicializa selects
  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);
});

// Função para envio via mailto
function enviarEmail() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const loja = document.getElementById('loja').value;
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;

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


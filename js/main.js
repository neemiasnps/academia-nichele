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

// carregar os card de cursos presenciais
document.addEventListener('DOMContentLoaded', function () {

  const urlPlanilha =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7CjHqVjpMrOg1LQFDLjUv1dKNfsXziIlxKD5S2_MBuC8qkuE16_kbX09gZubcov_13w6M3D-yHZ8B/pub?gid=0&single=true&output=csv';

  fetch(urlPlanilha)
    .then(response => response.text())
    .then(csv => {
      const linhas = csv.split('\n');
      linhas.shift(); // remove cabeçalho

      const container = document.getElementById('lista-cursos');

      linhas.forEach(linha => {
        const colunas = linha.split(',');

        const nome = colunas[1];
        const carga = colunas[2];
        const publico = colunas[3];
        const imagem = colunas[4];
        const objetivo = colunas[5];
        const situacao = colunas[6]?.trim().toLowerCase();

        if (situacao !== 'ativo') return;

        const card = `
          <div class="col s12 m6 l4">
            <div class="card curso-card">

              <div class="card-image curso-img">
                <img class="activator" src="${imagem}" alt="${nome}">
              </div>

              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  ${nome}
                  <i class="material-icons right">more_vert</i>
                </span>
                <p>
                  <strong>Público:</strong> ${publico}<br>
                  <strong>Carga horária:</strong> ${carga}
                </p>
              </div>

              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Objetivo
                  <i class="material-icons right">close</i>
                </span>
                <p>${objetivo}</p>
              </div>

            </div>
          </div>
        `;

        container.insertAdjacentHTML('beforeend', card);
      });

    })
    .catch(error => {
      console.error('Erro ao carregar cursos:', error);
    });

});


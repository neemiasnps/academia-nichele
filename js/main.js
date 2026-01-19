document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     MENU MOBILE
  =============================== */
  const sidenav = document.querySelectorAll(".sidenav");
  if (sidenav.length) {
    M.Sidenav.init(sidenav);
  }

  /* ===============================
     SELECTS (FORMULÁRIOS)
  =============================== */
  const selects = document.querySelectorAll("select");
  if (selects.length) {
    M.FormSelect.init(selects);
  }

});

const collapsibles = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsibles, {
    accordion: false // permite abrir vários cargos
  });

/* =====================================================
   FUNÇÃO PARA ENVIO DE E-MAIL (CONTATO)
===================================================== */
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

/* =====================================================
   ABRIR CRONOGRAMA – PROGRAMA NOVOS VENDEDORES
===================================================== */
function abrirTurma(mes) {
  const anoAtual = new Date().getFullYear();
  const url =
    'https://capacitacaovendedor.my.canva.site/' +
    'turma-' + mes + '-' + anoAtual;

  window.open(url, '_blank');
}

/* =====================================================
   CARREGAR CURSOS PRESENCIAIS
===================================================== */
document.addEventListener('DOMContentLoaded', function () {

  const container = document.getElementById('lista-cursos');
  if (!container) return;

  const urlPlanilha =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7CjHqVjpMrOg1LQFDLjUv1dKNfsXziIlxKD5S2_MBuC8qkuE16_kbX09gZubcov_13w6M3D-yHZ8B/pub?gid=0&single=true&output=tsv';

  fetch(urlPlanilha)
    .then(response => response.text())
    .then(tsv => {

      const linhas = tsv.split('\n');
      linhas.shift();

      linhas.forEach(linha => {
        if (!linha.trim()) return;

        const colunas = linha.split('\t');

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
    .catch(error => console.error('Erro ao carregar cursos presenciais:', error));
});

/* =====================================================
   CARREGAR CURSOS EAD
===================================================== */
document.addEventListener('DOMContentLoaded', function () {

  const container = document.getElementById('lista-cursos-ead');
  if (!container) return;

  const urlPlanilha =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7CjHqVjpMrOg1LQFDLjUv1dKNfsXziIlxKD5S2_MBuC8qkuE16_kbX09gZubcov_13w6M3D-yHZ8B/pub?gid=1580520934&single=true&output=tsv';

  fetch(urlPlanilha)
    .then(response => response.text())
    .then(tsv => {

      const linhas = tsv.split('\n');
      linhas.shift();

      linhas.forEach(linha => {
        if (!linha.trim()) return;

        const colunas = linha.split('\t');

        const nome = colunas[0];
        const carga = colunas[1];
        const categoria = colunas[2];
        const imagem = colunas[3];
        const objetivo = colunas[4];
        const situacao = colunas[5]?.trim().toLowerCase();

        if (situacao !== 'ativo') return;

        const mensagemWhats = encodeURIComponent(
          `Olá! Gostaria de solicitar inscrição no curso EAD: ${nome}`
        );

        const linkWhats =
          `https://wa.me/5541998000484?text=${mensagemWhats}`;

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
                  <strong>Categoria:</strong> ${categoria}<br>
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
              <div class="card-action card-action-whats">
                <a href="${linkWhats}" target="_blank" class="btn btn-primary">
                  solicitar inscrição
                </a>
              </div>
            </div>
          </div>
        `;

        container.insertAdjacentHTML('beforeend', card);
      });
    })
    .catch(error => console.error('Erro ao carregar cursos EAD:', error));
});

/* =====================================================
   HERO CAROUSEL – BANNERS DINÂMICOS (COM AUTOPLAY + PAUSE)
===================================================== */
document.addEventListener('DOMContentLoaded', function () {

  const carouselContainer = document.getElementById('hero-carousel');
  if (!carouselContainer) return;

  const isMobile = window.innerWidth <= 600;
  let autoplayInterval = null;

  const urlPlanilhaBanner =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7CjHqVjpMrOg1LQFDLjUv1dKNfsXziIlxKD5S2_MBuC8qkuE16_kbX09gZubcov_13w6M3D-yHZ8B/pub?gid=809112237&single=true&output=tsv';

  fetch(urlPlanilhaBanner)
    .then(response => response.text())
    .then(tsv => {

      const linhas = tsv.split('\n');
      linhas.shift();

      linhas.forEach(linha => {
        if (!linha.trim()) return;

        const colunas = linha.split('\t');

        const textoBotao = colunas[3];
        const linkBotao  = colunas[4];
        const bannerDesk = colunas[5];
        const bannerMob  = colunas[6];
        const status     = colunas[7]?.trim().toLowerCase();

        if (status !== 'ativo') return;

        const banner = isMobile ? bannerMob : bannerDesk;

        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        slide.style.backgroundImage = `url('${banner}')`;
        slide.style.backgroundSize = 'cover';
        slide.style.backgroundPosition = 'center';

        slide.innerHTML = `
          <div class="carousel-fixed-item center" style="bottom: 40px;">
            <a href="${linkBotao}" class="btn btn-primary">
              ${textoBotao}
            </a>
          </div>
        `;

        carouselContainer.appendChild(slide);
      });

      // Inicializa o carousel
      const carouselInstance = M.Carousel.init(carouselContainer, {
        fullWidth: true,
        indicators: true,
        duration: 300
      });

      // Funções de autoplay
      function iniciarAutoplay() {
        autoplayInterval = setInterval(() => {
          carouselInstance.next();
        }, 5000);
      }

      function pararAutoplay() {
        clearInterval(autoplayInterval);
      }

      // Inicia autoplay
      iniciarAutoplay();

      // Pausa ao passar o mouse (desktop)
      carouselContainer.addEventListener('mouseenter', pararAutoplay);

      // Retoma ao sair do mouse
      carouselContainer.addEventListener('mouseleave', iniciarAutoplay);

    })
    .catch(error => console.error('Erro ao carregar banners:', error));
});

/* =====================================================
   GRADE DE CURSOS EAD OBRIGATÓRIOS
===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  const urlPlanilha =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7CjHqVjpMrOg1LQFDLjUv1dKNfsXziIlxKD5S2_MBuC8qkuE16_kbX09gZubcov_13w6M3D-yHZ8B/pub?gid=117347237&single=true&output=tsv';

  fetch(urlPlanilha)
    .then(response => response.text())
    .then(tsv => {

      const linhas = tsv.split('\n');
      linhas.shift();

      const dados = {};

      linhas.forEach(linha => {
        if (!linha.trim()) return;

        const colunas = linha.split('\t');

        const cargo  = colunas[0]?.trim();
        const curso  = colunas[1]?.trim();
        const carga  = colunas[2]?.trim();
        const status = colunas[3]?.trim().toLowerCase();
        const icone  = colunas[4]?.trim();

        if (status !== 'ativo') return;

        if (!dados[cargo]) {
          dados[cargo] = {
            icone: icone,
            cursos: [],
            totalHoras: 0
          };
        }

        // Soma horas (ex: 8h → 8)
        if (carga) {
          const horas = parseInt(carga.replace(/\D/g, ''), 10);
          if (!isNaN(horas)) {
            dados[cargo].totalHoras += horas;
          }
        }

        dados[cargo].cursos.push({
          curso,
          carga
        });
      });

      const container = document.getElementById('grades-cargos');

      Object.keys(dados).forEach(cargo => {

        const info = dados[cargo];

        /* ===== ÍCONE OU IMAGEM ===== */
        let iconeHTML = '';

        if (info.icone && info.icone.startsWith('http')) {
          iconeHTML = `
            <img src="${info.icone}" 
                 alt="${cargo}" 
                 style="width:24px;height:24px;border-radius:50%;margin-right:20px;">
          `;
        } else {
          iconeHTML = `
            <i class="material-icons">
              ${info.icone || 'school'}
            </i>
          `;
        }

        let cursosHTML = '';

        info.cursos.forEach(item => {
          cursosHTML += `
            <li class="collection-item">
              ${item.curso}
              <span class="new badge blue white-text">
                ${item.carga || '—'}
              </span>
            </li>
          `;
        });

        const bloco = `
          <li>
            <div class="collapsible-header">
              ${iconeHTML}
              ${cargo}
              <span class="new badge green white-text right">
                ${info.totalHoras}h
              </span>
            </div>
            <div class="collapsible-body">
              <ul class="collection">
                ${cursosHTML}
              </ul>
            </div>
          </li>
        `;

        container.insertAdjacentHTML('beforeend', bloco);
      });

      M.Collapsible.init(
        document.querySelectorAll('.collapsible'),
        { accordion: false }
      );

    })
    .catch(error => {
      console.error('Erro ao carregar grades:', error);
    });

});

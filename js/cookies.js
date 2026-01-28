document.addEventListener("DOMContentLoaded", function () {

  const banner = document.getElementById("cookie-banner");
  const botao = document.getElementById("btn-aceitar-cookies");

  if (!banner || !botao) return;

  if (localStorage.getItem("cookiesAceitos") === "true") {
    banner.style.display = "none";
  }

  botao.addEventListener("click", function () {
    localStorage.setItem("cookiesAceitos", "true");
    banner.style.display = "none";
  });

});

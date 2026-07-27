// Script leve, sem dependências externas.
// Faz apenas duas coisas: adiciona sombra no cabeçalho ao rolar
// a página e mostra o botão flutuante do WhatsApp após rolar um pouco.

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var floatBtn = document.querySelector(".whatsapp-float");

  function onScroll() {
    var scrolled = window.scrollY > 12;
    if (header) header.classList.toggle("is-scrolled", scrolled);
    if (floatBtn) floatBtn.classList.toggle("is-visible", window.scrollY > 400);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Fecha as outras perguntas do FAQ quando uma é aberta (melhora a leitura)
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});

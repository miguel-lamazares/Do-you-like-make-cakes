let currentLang = "en"; // padrão

function setLanguage(lang) {
  currentLang = lang;

  // muda a bandeira no botão principal
  document.getElementById("flagImg").src = `flags/${lang}.png`;

  // aplica tradução
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = i18n[lang][key];
  });
}

// abrir/fechar menu
document.getElementById("langBtn").addEventListener("click", () => {
  document.getElementById("langMenu").classList.toggle("hidden");
});

// clique numa bandeira
document.querySelectorAll("#langMenu img").forEach(img => {
  img.addEventListener("click", () => {
    setLanguage(img.dataset.lang);
    document.getElementById("langMenu").classList.add("hidden");
  });
});

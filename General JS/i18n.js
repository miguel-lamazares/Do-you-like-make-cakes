// i18n.js - Cicla idiomas e atualiza a bandeira + textos
const languages = ["en", "pt", "es", "jp"]; // ordem do ciclo
let currentIndex = 0;
let translations = {};
const LANG_FILE = "locale/lang.json"; // path para o arquivo de traduções
const FLAG_IMG_ID = "flagImg";
const LANG_BTN_ID = "langBtn";

async function loadTranslations() {
  try {
    const res = await fetch(LANG_FILE);
    if (!res.ok) throw new Error(`Could not load ${LANG_FILE}: ${res.status}`);
    translations = await res.json();
  } catch (err) {
    console.error("i18n: erro ao carregar traduções:", err);
    translations = {}; // evita que quebre
  }
}

// Aplica idioma em todos elementos com data-lang e troca a bandeira
function applyLanguage(lang) {
  // textos
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (!key) return;
    const value = translations?.[lang]?.[key];
    // se elemento for input/placeholder, coloca no placeholder
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = value ?? el.placeholder ?? `??${key}`;
    } else {
      el.textContent = value ?? `??${key}`;
    }
  });

  // bandeira do botão (se existir)
  const flag = document.getElementById(FLAG_IMG_ID);
  if (flag) {
    flag.src = `locale/flags/${lang}.png`;
    flag.alt = `${lang} flag`;
  }
}

// Cicla para o próximo idioma
function nextLanguage() {
  currentIndex = (currentIndex + 1) % languages.length;
  const lang = languages[currentIndex];
  applyLanguage(lang);
  // opcional: salvar preferência
  try { localStorage.setItem("hub_lang", lang); } catch (e) {}
}

// Seleciona idioma diretamente (usado por mini-menu de bandeiras)
function setLanguage(lang) {
  const idx = languages.indexOf(lang);
  if (idx === -1) return;
  currentIndex = idx;
  applyLanguage(lang);
  try { localStorage.setItem("hub_lang", lang); } catch (e) {}
}

// Inicialização: liga eventos e carrega traduções
async function initI18n() {
  await loadTranslations();

  // tenta recuperar idioma salvo
  const saved = (function() {
    try { return localStorage.getItem("hub_lang"); } catch (e) { return null; }
  })();

  // tenta detectar idioma do navegador como fallback
  const nav = (navigator.language || navigator.userLanguage || "en").slice(0,2);

  let startLang = saved || (languages.includes(nav) ? nav : "en");
  currentIndex = languages.indexOf(startLang);
  if (currentIndex === -1) currentIndex = 0;

  applyLanguage(languages[currentIndex]);

  // botão principal que cicla
  const langBtn = document.getElementById(LANG_BTN_ID);
  if (langBtn) langBtn.addEventListener("click", nextLanguage);

  // se tiver um menu com imagens (ex: <img data-lang="pt" ...>), adiciona listeners
  document.querySelectorAll("#langMenu img[data-lang]").forEach(img => {
    img.addEventListener("click", e => {
      const lang = img.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
}

// roda quando DOM estiver pronto (scripts com defer normalmente já garantem isso)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}

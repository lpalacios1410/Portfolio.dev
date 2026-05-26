import { translations, type Lang } from "./translations";

const STORAGE_KEY = "portfolio-lang";
const EVENT_NAME = "languagechange";

function getSavedLang(): Lang {
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") return saved;
  }
  return "es";
}

export function getCurrentLang(): Lang {
  if (typeof document === "undefined") return "es";
  const lang = document.documentElement.lang;
  if (lang === "en" || lang === "es") return lang;
  return "es";
}

export function t(key: string): string {
  const lang = getCurrentLang();
  return translations[lang][key] ?? key;
}

export function setLanguage(lang: Lang): void {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  const metaLocale = document.querySelector('meta[property="og:locale"]');
  if (metaLocale) {
    metaLocale.setAttribute("content", translations[lang]["layout.og_locale"]);
  }

  applyTranslations(lang);
  document.querySelectorAll<HTMLElement>('[data-i18n-lang]').forEach(el => {
    el.textContent = translations[lang][el.getAttribute("data-i18n-lang")!] ?? el.textContent;
  });

  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { lang } }));
}

function applyTranslations(lang: Lang): void {
  const dict = translations[lang];

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (key && dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (key && dict[key] !== undefined) {
      el.setAttribute("title", dict[key]);
    }
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (key && dict[key] !== undefined) {
      el.setAttribute("alt", dict[key]);
    }
  });
}

export function initI18n(): void {
  const lang = getSavedLang();
  document.documentElement.lang = lang;
  applyTranslations(lang);
}

export function onLanguageChange(callback: (lang: Lang) => void): () => void {
  const handler = (e: Event) =>
    callback((e as CustomEvent).detail.lang);
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
}

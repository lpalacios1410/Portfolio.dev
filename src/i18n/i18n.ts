import { translations, type Lang } from "./translations";

type Dictionary = typeof translations["es"];
export type TranslationKey = keyof Dictionary;

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

export function t<K extends TranslationKey>(key: K): Dictionary[K] {
  const lang = getCurrentLang();
  return translations[lang][key] ?? (key as Dictionary[K]);
}

type AttrApplier = (el: HTMLElement, value: string) => void;

const I18N_ATTRS: ReadonlyArray<{ selector: string; attr: string; apply: AttrApplier }> = [
  { selector: "[data-i18n]", attr: "data-i18n", apply: (el, v) => { el.textContent = v; } },
  { selector: "[data-i18n-aria]", attr: "data-i18n-aria", apply: (el, v) => { el.setAttribute("aria-label", v); } },
  { selector: "[data-i18n-placeholder]", attr: "data-i18n-placeholder", apply: (el, v) => { el.setAttribute("placeholder", v); } },
  { selector: "[data-i18n-title]", attr: "data-i18n-title", apply: (el, v) => { el.setAttribute("title", v); } },
  { selector: "[data-i18n-alt]", attr: "data-i18n-alt", apply: (el, v) => { el.setAttribute("alt", v); } },
  { selector: "[data-i18n-lang]", attr: "data-i18n-lang", apply: (el, v) => { el.textContent = v; } },
];

function applyTranslations(lang: Lang): void {
  const dict = translations[lang];
  for (const { selector, attr, apply } of I18N_ATTRS) {
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      const key = el.getAttribute(attr) as TranslationKey | null;
      if (key && dict[key] !== undefined) apply(el, dict[key]!);
    });
  }
}

export function setLanguage(lang: Lang): void {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  const metaLocale = document.querySelector('meta[property="og:locale"]');
  if (metaLocale) {
    metaLocale.setAttribute("content", translations[lang]["layout.og_locale"]!);
  }

  applyTranslations(lang);

  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { lang } }));
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
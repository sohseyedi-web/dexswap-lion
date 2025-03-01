import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import faTranslation from "@/constant/locales/fa/translation.json";
import enTranslation from "@/constant/locales/en/translation.json";

const resources = {
  en: { translation: enTranslation },
  fa: { translation: faTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

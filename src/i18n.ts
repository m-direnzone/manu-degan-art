import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./translations/en/translation.json";
import itTransaltions from "./translations/it/translation.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  it: {
    translation: itTransaltions,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "it",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

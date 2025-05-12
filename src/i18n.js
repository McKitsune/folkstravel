import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationES from "./locales/es.json";
import translationEN from "./locales/en.json";

// Configuración de i18next
i18n.use(initReactI18next).init({
    resources: {
        es: { translation: translationES },
        en: { translation: translationEN },
    },
    lng: "es", // idioma por defecto
    fallbackLng: "en", // idioma de reserva
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

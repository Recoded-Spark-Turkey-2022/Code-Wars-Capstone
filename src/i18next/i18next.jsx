import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import englishTranslation from '../locales/english/translation.json';
import arabicTranslation from '../locales/arabic/translation.json';
import turkishTranslation from '../locales/turkish/translation.json';

const resources = {
  en: {
    translation: englishTranslation,
  },
  ar: {
    translation: arabicTranslation,
  },
  tr: {
    translation: turkishTranslation,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },

    supportedLngs: ['en', 'ar', 'fr', 'tr'],
    debug: false,

    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
  });

export default i18next;

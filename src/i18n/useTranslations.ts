import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Translations } from '../i18n/translations';

const translations = {
  en: () => import('../locales/en.json'),
  es: () => import('../locales/es.json'),
};

export const useTranslations = (): Translations => {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Partial<Translations>>({});

  useEffect(() => {
    translations[language]().then((module) => setMessages(module.default));
  }, [language]);

  return new Proxy(messages as Translations, {
    get(target, prop) {
      if (prop in target) {
        return target[prop as keyof Translations];
      } else {
        return `Missing translation: ${String(prop)}`;
      }
    },
  });
};
"use client"
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es'); // Idioma por defecto 'es'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Recupera el idioma de localStorage o usa 'es' por defecto
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Guarda el idioma en localStorage cada vez que cambia
      localStorage.setItem('language', language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
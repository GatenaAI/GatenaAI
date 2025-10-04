import React, { createContext, useState, useContext } from 'react';
import en from '../locales/en';
import es from '../locales/es';
import de from '../locales/de';
import pt from '../locales/pt';
import fr from '../locales/fr';

const LanguageContext = createContext();

const translations = { en, es, de, pt, fr};



export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  // ← change here: compute t dynamically based on current language
  const t = translations[language] || translations.en; // fallback to English

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}


export function useLanguage() {
  return useContext(LanguageContext);
}

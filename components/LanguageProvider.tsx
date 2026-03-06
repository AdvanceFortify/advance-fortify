'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Language } from '@/lib/translations';

const LanguageContext = createContext<{ language: Language }>({
  language: 'en',
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ language: 'en' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

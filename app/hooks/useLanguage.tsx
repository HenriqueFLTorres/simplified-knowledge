import React, { createContext, useContext, useEffect, useState } from 'react';

export type LanguageProviderProps = {
  isEnglish: boolean;
  setIsEnglish: React.Dispatch<boolean>;
};

export const isLanguageEnglish = createContext<LanguageProviderProps>({
  isEnglish: true,
  setIsEnglish: null as unknown as React.Dispatch<boolean>,
});

export function useEnglishLanguage() {
  return useContext(isLanguageEnglish);
}
export const LanguageContext: React.FC<React.ReactNode> = ({ children }) => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  const LanguageState: {
    isEnglish: boolean;
    setIsEnglish: React.Dispatch<boolean>;
  } = {
    isEnglish: isEnglishLanguage,
    setIsEnglish: setIsEnglishLanguage,
  };

  useEffect(() => {
    const languageStorage: any = localStorage.getItem('isEnglishLanguage');
    if ('isEnglishLanguage' in localStorage) {
      setIsEnglishLanguage(languageStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isEnglishLanguage', String(isEnglishLanguage));
  }, [isEnglishLanguage]);

  return (
    <isLanguageEnglish.Provider value={LanguageState}>
      {children}
    </isLanguageEnglish.Provider>
  );
};

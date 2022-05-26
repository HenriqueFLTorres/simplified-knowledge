import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(null);
const LanguageContextUpdate = createContext(null);

export const useLanguage = () => {
  return useContext(LanguageContext);
};
export const useLanguageUpdate = () => {
  return useContext(LanguageContextUpdate);
};

type Props = {
  children: React.ReactNode;
};


export const LanguageProvider = ({ children }: Props): JSX.Element=> {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const languageStorage: any = localStorage.getItem("language")
    if ( "language" in localStorage ) {
      setLanguage(languageStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return (
    <LanguageContext.Provider value={language}>
      <LanguageContextUpdate.Provider value={setLanguage}>
        {children}
      </LanguageContextUpdate.Provider>
    </LanguageContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";

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
export const LanguageContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  const LanguageState: {
    isEnglish: boolean;
    setIsEnglish: React.Dispatch<boolean>;
  } = {
    isEnglish: isEnglishLanguage,
    setIsEnglish: setIsEnglishLanguage,
  };

  useEffect(() => {
    if (!("isEnglishLanguage" in localStorage)) return;

    let languageStorage: string | boolean =
      localStorage.getItem("isEnglishLanguage")!;
    languageStorage = languageStorage === "true" ? true : false;

    setIsEnglishLanguage(languageStorage);
  }, []);

  return (
    <isLanguageEnglish.Provider value={LanguageState}>
      {children}
    </isLanguageEnglish.Provider>
  );
};

import { useState } from "react";

import { Link } from "@remix-run/react";
import { useDetectClickOutside } from "react-detect-click-outside";

import { useEnglishLanguage } from "@hooks/useLanguage";

import {
  IconWhite,
  IconBlack,
  Moon,
  Sun,
  Language,
} from "@components/icons/global";

const Navbar = () => {
  const [languageDropDown, setLanguageDropDown] = useState<Boolean>(false);

  const { setIsEnglish } = useEnglishLanguage();

  const closeDropDown = () => setLanguageDropDown(false);
  const dropDownRef = useDetectClickOutside({ onTriggered: closeDropDown });

  const themeHandler = () => {
    const page = document.querySelector("html");

    if (typeof localStorage !== "undefined") {
      if (page?.className === "light") {
        localStorage.setItem("theme", "dark");
        return page?.classList.replace("light", "dark");
      }

      localStorage.setItem("theme", "light");
      page?.classList.replace("dark", "light");
    }
  };

  const changeLanguage = (isEnglish: boolean) => {
    setIsEnglish(isEnglish);
    localStorage.setItem("isEnglishLanguage", String(isEnglish));
  };

  return (
    <nav className="flex z-50 justify-between px-8 items-center w-full max-w-[1800px] h-20 select-none">
      <Link to="/">
        <div className="flex items-center justify-center w-12 h-12">
          <IconWhite className="absolute w-10 h-10 opacity-0 dark:opacity-100 transition-all duration-300" />
          <IconBlack className="absolute w-10 h-10 opacity-100 dark:opacity-0 transition-all duration-300" />
        </div>
      </Link>

      <div className="flex flex-row items-center justify-between w-32">
        <button
          onClick={themeHandler}
          className="flex items-center justify-center w-12 h-12 rounded border border-neutral-300 dark:border-neutral-800 hover:border-neutral-600 hover:dark:border-neutral-500 hover:bg-[#2929292c] cursor-pointer transition-all clip-path-inset duration-200"
        >
          <Moon className="absolute w-6 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_5px_#404040] dark:drop-shadow-[0_0_5px_#e8e8e8] translate-y-10 dark:translate-y-0 transition-transform" />
          <Sun className="absolute w-6 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_5px_#404040] dark:drop-shadow-[0_0_5px_#e8e8e8] translate-y-0 dark:-translate-y-10 transition-transform" />
        </button>
        <div
          role={"menu"}
          onClick={() => setLanguageDropDown(!languageDropDown)}
          onKeyDown={() => setLanguageDropDown(!languageDropDown)}
          ref={dropDownRef}
          className="flex items-center justify-center w-12 h-12 rounded border border-neutral-300 dark:border-neutral-800 hover:border-neutral-600 hover:dark:border-neutral-500 hover:bg-[#2929292c] cursor-pointer transition-all duration-200"
          tabIndex={0}
        >
          <Language className="absolute w-6 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_5px_#404040] dark:drop-shadow-[0_0_5px_#e8e8e8]" />
          <div
            className={`absolute flex flex-col items-center justify-between p-2 w-16 h-auto rounded bg-gradient-to-br from-[#cecece90] to-[#ababab4d] dark:from-[#272727e5] dark:to-[#1a1a1a9e] backdrop-blur-sm divide-y border border-neutral-200/20 divide-solid opacity-0 divide-neutral-300 dark:divide-neutral-600 translate-y-[5rem] ${
              languageDropDown
                ? "opacity-100 clip-path-inset pointer-events-auto"
                : "opacity-0 hide-top pointer-events-none"
            } duration-200 transition-all`}
          >
            <button
              onClick={() => changeLanguage(true)}
              className="w-full py-1 text-center text-xl font-bold text-neutral-700 hover:bg-neutral-400/50 dark:text-neutral-100 dark:hover:bg-neutral-600 rounded-t transition-colors duration-200"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage(false)}
              className="w-full py-1 text-center text-xl font-bold text-neutral-700 hover:bg-neutral-400/50 dark:text-neutral-100 dark:hover:bg-neutral-600 rounded-b transition-colors duration-200"
            >
              PT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

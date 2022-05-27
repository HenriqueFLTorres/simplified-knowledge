import { useState } from "react";
import { Link } from "@remix-run/react";
import { useDetectClickOutside } from "react-detect-click-outside";

import IconWhite from "~/svg/IconWhite";
import IconBlack from "~/svg/IconBlack";
import Moon from "~/svg/Moon";
import Sun from "~/svg/Sun";
import Language from "~/svg/Language";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "../tailwind.css";
import { useLanguage, useLanguageUpdate } from "~/utils/useLanguage";

type Props = {};

type navList = {
  EN: Array<Object>;
  PT: Array<Object>;
};

const navItems: navList = {
  EN: [
    {
      name: "Blog",
      linkTo: "/",
    },
    {
      name: "My GitHub",
      linkTo: "https://github.com/HenriqueFLTorres",
    },
    {
      name: "My Website",
      linkTo: "https://htportfolio.vercel.app/",
    },
    {
      name: "My LinkedIn",
      linkTo: "https://www.linkedin.com/in/henriquefltorres/",
    },
  ],
  PT: [
    {
      name: "Blog",
      linkTo: "/",
    },
    {
      name: "Meu GitHub",
      linkTo: "https://github.com/HenriqueFLTorres",
    },
    {
      name: "Meu Website",
      linkTo: "https://htportfolio.vercel.app/",
    },
    {
      name: "Meu LinkedIn",
      linkTo: "https://www.linkedin.com/in/henriquefltorres/",
    },
  ],
};

const Navbar = (props: Props) => {
  const [languageDropDown, setLanguageDropDown] = useState<Boolean>(false);

  const language = useLanguage();
  const updateLanguage: any = useLanguageUpdate();

  const closeDropDown = () => setLanguageDropDown(false);
  const dropDownRef = useDetectClickOutside({ onTriggered: closeDropDown });

  const themeHandler = () => {
    if (typeof localStorage !== "undefined") {
      if (document.querySelector("html")?.className === "light") {
        localStorage.setItem("theme", "dark");
        document.querySelector("html")?.classList.replace("light", "dark");
      } else {
        localStorage.setItem("theme", "light");
        document.querySelector("html")?.classList.replace("dark", "light");
      }
    }
  };

  const handleItemsList = () => {
    if (language === "PT") return navItems.PT;
    else return navItems.EN;
  };

  return (
    <nav className="flex justify-between px-12 lg:px-36 items-center w-full h-20 fixed bg-gradient-to-r from-[#cecece90] to-[#ababab4d] dark:from-[#272727e5] dark:to-[#1a1a1a9e] backdrop-blur-sm border-b border-b-neutral-900/40 dark:border-b-neutral-100/20 select-none">
      <Link to="/">
        <div className="flex items-center justify-center w-12 h-12">
          <IconWhite className="absolute w-10 h-10 opacity-0 dark:opacity-100 transition-all duration-300" />
          <IconBlack className="absolute w-10 h-10 opacity-100 dark:opacity-0 transition-all duration-300" />
        </div>
      </Link>

      <div className="hidden gap-8 flex-row justify-between lg:flex">
        {handleItemsList().map((item: any) => (
          <a href={item.linkTo} key={item.name}>
            <div className="text-xl font-semibold p-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:-translate-y-2 transition-all duration-350 cursor-pointer">
              {item.name}
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-row items-center justify-between w-32">
        <div
          onClick={themeHandler}
          className="flex items-center justify-center w-12 h-12 rounded border border-neutral-300 dark:border-neutral-800 hover:border-neutral-600 hover:dark:border-neutral-500 hover:bg-[#2929292c] cursor-pointer transition-all clip-path-inset duration-200"
        >
          <Moon className="absolute w-6 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_5px_#404040] dark:drop-shadow-[0_0_5px_#e8e8e8] translate-y-10 dark:translate-y-0 transition-transform" />
          <Sun className="absolute w-6 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_5px_#404040] dark:drop-shadow-[0_0_5px_#e8e8e8] translate-y-0 dark:-translate-y-10 transition-transform" />
        </div>
        <div
          onClick={() => setLanguageDropDown(!languageDropDown)}
          ref={dropDownRef}
          className="flex items-center justify-center w-12 h-12 rounded border border-neutral-300 dark:border-neutral-800 hover:border-neutral-600 hover:dark:border-neutral-500 hover:bg-[#2929292c] cursor-pointer transition-all duration-200"
        >
          <Language className="absolute w-6 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_5px_#404040] dark:drop-shadow-[0_0_5px_#e8e8e8]" />
          <div
            className={`absolute flex flex-col items-center justify-between p-2 w-16 h-auto rounded bg-gradient-to-br from-[#cecece90] to-[#ababab4d] dark:from-[#272727e5] dark:to-[#1a1a1a9e] backdrop-blur-sm divide-y border border-neutral-200/20 divide-solid opacity-0 divide-neutral-300 dark:divide-neutral-600 translate-y-[5rem] ${
              languageDropDown
                ? "opacity-100 clip-path-inset"
                : "opacity-0 hide-top"
            } duration-200 transition-all`}
          >
            <p
              onClick={() => updateLanguage("EN")}
              className="w-full py-1 text-center text-xl font-bold text-neutral-700 hover:bg-neutral-400/50 dark:text-neutral-100 dark:hover:bg-neutral-600 rounded-t transition-colors duration-200"
            >
              EN
            </p>
            <p
              onClick={() => updateLanguage("PT")}
              className="w-full py-1 text-center text-xl font-bold text-neutral-700 hover:bg-neutral-400/50 dark:text-neutral-100 dark:hover:bg-neutral-600 rounded-b transition-colors duration-200"
            >
              PT
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

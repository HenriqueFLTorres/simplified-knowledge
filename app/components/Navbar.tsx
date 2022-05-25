import React, { useState, useEffect } from "react";
import IconWhite from "~/svg/IconWhite";
import IconBlack from "~/svg/IconBlack";
import Moon from "~/svg/Moon";
import Sun from "~/svg/Sun";
import Language from "~/svg/Language";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "../tailwind.css";

type Props = {};

const Navbar = (props: Props) => {
  const [languageDropDown, setLanguageDropDown] = useState(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined" ) {
      if (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const themeHandler = () => {
    if (typeof localStorage !== "undefined" ) {
      if ( document.querySelector('html')?.className === "" ) {
        localStorage.setItem("theme", "")
        document.querySelector('html')?.classList.add("");
      }
      else {
        localStorage.setItem("theme", "")
        document.querySelector('html')?.classList.remove("dark");
      }
    }
  }

  return (
    <nav className="flex justify-between px-36 items-center w-full h-20 fixed bg-gradient-to-r from-[#cecece90] to-[#ababab4d] dark:from-[#272727e5] dark:to-[#1a1a1a9e] backdrop-blur-sm border-b border-b-neutral-900/40 dark:border-b-neutral-100/20 select-none">
      <div className="flex items-center justify-center w-12 h-12">
        <IconWhite className="absolute w-10 h-10 opacity-0 dark:opacity-100 transition-all duration-300" />
        <IconBlack className="absolute w-10 h-10 opacity-100 dark:opacity-0 transition-all duration-300" />
      </div>

      <div className=" flex flex-row justify-between w-5/12">
        <div className="text-xl font-semibold p-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:-translate-y-2 transition-all duration-350 cursor-pointer">
          Blog
        </div>
        <div className="text-xl font-semibold p-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:-translate-y-2 transition-all duration-350 cursor-pointer">
          Meu Github
        </div>
        <div className="text-xl font-semibold p-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:-translate-y-2 transition-all duration-350 cursor-pointer">
          Meu Website
        </div>
        <div className="text-xl font-semibold p-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:-translate-y-2 transition-all duration-350 cursor-pointer">
          Meu LinkedIn
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-32">
        <div
          onClick={() =>
            document.querySelector("html")?.classList.toggle("dark")
          }
          className="flex items-center justify-center w-12 h-12 rounded border border-neutral-300 dark:border-neutral-800 hover:border-neutral-600 hover:dark:border-neutral-500 hover:bg-[#2929292c] cursor-pointer transition-all clip-path-inset duration-200"
        >
          <Moon className="absolute w-6 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_5px_#404040] dark:drop-shadow-[0_0_5px_#e8e8e8] translate-y-10 dark:translate-y-0 transition-transform" />
          <Sun className="absolute w-6 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_5px_#404040] dark:drop-shadow-[0_0_5px_#e8e8e8] translate-y-0 dark:-translate-y-10 transition-transform" />
        </div>
        <div
          onClick={() => setLanguageDropDown(!languageDropDown)}
          className="flex items-center justify-center w-12 h-12 rounded border border-neutral-300 dark:border-neutral-800 hover:border-neutral-600 hover:dark:border-neutral-500 hover:bg-[#2929292c] cursor-pointer transition-all duration-200"
        >
          <Language className="absolute w-6 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_5px_#404040] dark:drop-shadow-[0_0_5px_#e8e8e8]" />
          <div
            className={`absolute flex flex-col items-center justify-between p-2 w-16 h-auto rounded bg-gradient-to-br from-[#cecece90] to-[#ababab4d] dark:from-[#272727e5] dark:to-[#1a1a1a9e] backdrop-blur-sm divide-y border border-neutral-200/20 divide-solid opacity-0 divide-neutral-300 dark:divide-neutral-600 translate-y-[5rem] ${
              languageDropDown && "opacity-100 clip-path-inset"
            } transition-all`}
          >
            <p className="w-full py-1 text-center text-xl font-bold text-neutral-700 hover:bg-neutral-200/50 dark:text-neutral-100 dark:hover:bg-neutral-600 rounded-b transition-colors duration-200">
              EN
            </p>
            <p className="w-full py-1 text-center text-xl font-bold text-neutral-700 hover:bg-neutral-200/50 dark:text-neutral-100 dark:hover:bg-neutral-600 rounded-b transition-colors duration-200">
              PT
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

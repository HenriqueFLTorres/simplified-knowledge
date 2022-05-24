import React, { useState, useEffect } from "react";
import IconWhite from "~/svg/IconWhite";
import Moon from "~/svg/Moon";
import Sun from "~/svg/Sun";
import Language from "~/svg/Language";

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
    <nav className="flex justify-between px-36 items-center w-full h-20 fixed bg-gradient-to-r from-[#272727d3] to-[#1a1a1a52] backdrop-blur-sm border-b border-b-neutral-100">
      <div className="w-12">
        <IconWhite />
      </div>

      <div className=" flex flex-row justify-between w-5/12">
        <div className="text-xl font-semibold p-4 text-neutral-400 dark:text-neutral-600 hover:text-neutral-800 hover:-translate-y-4 hover:dark:text-neutral-400 transition-all duration-350 cursor-pointer">
          Blog
        </div>
        <div className="text-xl font-semibold p-4 text-neutral-400 dark:text-neutral-600 hover:text-neutral-800 hover:-translate-y-4 hover:dark:text-neutral-400 transition-all duration-350 cursor-pointer">
          Meu Github
        </div>
        <div className="text-xl font-semibold p-4 text-neutral-400 dark:text-neutral-600 hover:text-neutral-800 hover:-translate-y-4 hover:dark:text-neutral-400 transition-all duration-350 cursor-pointer">
          Meu Website
        </div>
        <div className="text-xl font-semibold p-4 text-neutral-400 dark:text-neutral-600 hover:text-neutral-800 hover:-translate-y-4 hover:dark:text-neutral-400 transition-all duration-350 cursor-pointer">
          Meu LinkedIn
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-32">
        <div
          onClick={() =>
            document.querySelector("html")?.classList.toggle("dark")
          }
          className="flex items-center justify-center w-12 h-12 rounded border border-neutral-300 dark:border-neutral-800 hover:border-neutral-200 hover:dark:border-neutral-500 hover:bg-[#ffffff2c] cursor-pointer transition-all clip-path-inset duration-200"
        >
          <Moon className="absolute w-6 fill-white drop-shadow-[0_0_5px_#292929] dark:drop-shadow-[0_0_5px_#fff] translate-y-10 dark:translate-y-0 transition-transform" />
          <Sun className="absolute w-6 fill-white drop-shadow-[0_0_5px_#292929] dark:drop-shadow-[0_0_5px_#fff] translate-y-0 dark:-translate-y-10 transition-transform" />
        </div>
        <div
          onClick={() => setLanguageDropDown(!languageDropDown)}
          className="flex items-center justify-center w-12 h-12 rounded border border-neutral-300 dark:border-neutral-800 hover:border-neutral-200 hover:dark:border-neutral-500 hover:bg-[#ffffff2c] cursor-pointer transition-all duration-200"
        >
          <Language className="absolute w-6 fill-white drop-shadow-[0_0_5px_#292929] dark:drop-shadow-[0_0_5px_#fff]" />
          <div
            className={`absolute flex flex-col items-center justify-between p-2 w-16 h-auto rounded bg-neutral-800 divide-y divide-solid opacity-0 divide-neutral-600 translate-y-[5rem] ${
              languageDropDown && "opacity-100 clip-path-inset"
            } transition-all`}
          >
            <p className="w-full py-1 text-center text-xl font-bold text-white hover:bg-neutral-600 rounded-t transition-colors duration-200">
              EN
            </p>
            <p className="w-full py-1 text-center text-xl font-bold text-white hover:bg-neutral-600 rounded-b transition-colors duration-200">
              PT
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

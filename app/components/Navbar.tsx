import React from "react";
import { useEffect } from "react";
import IconWhite from "~/svg/IconWhite";
import Moon from "~/svg/Moon";
import Sun from "~/svg/Sun";

import styles from "../tailwind.css";
import utilities from "../utilities.css";

type Props = {};

const Navbar = (props: Props) => {
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
        localStorage.setItem("theme", "dark")
        document.querySelector('html')?.classList.add("dark");
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
        <div className="text-xl font-semibold p-4 text-neutral-400 dark:text-neutral-600 hover:text-neutral-400 hover:-translate-y-4 transition-all duration-250">
          Blog
        </div>
        <div className="text-xl font-semibold p-4 text-neutral-600 hover:text-neutral-400 hover:-translate-y-4 transition-all duration-250">
          Meu Github
        </div>
        <div className="text-xl font-semibold p-4 text-neutral-600 hover:text-neutral-400 hover:-translate-y-4 transition-all duration-250">
          Meu Website
        </div>
        <div className="text-xl font-semibold p-4 text-neutral-600 hover:text-neutral-400 hover:-translate-y-4 transition-all duration-250">
          Meu LinkedIn
        </div>
      </div>

      <div>
        <div onClick={themeHandler} className="w-12 h-12 border border-neutral-800 dark:border-neutral-500">
          <Moon className="absolute w-8 fill-white drop-shadow-[0_35px_35px_rgba(255, 255, 255, 0.682)]" />
          <Sun className="absolute w-8 fill-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

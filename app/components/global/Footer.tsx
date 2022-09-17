import { Link } from "@remix-run/react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "../tailwind.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="hidden sm:flex flex-row justify-center mt-20 lg:justify-between items-center px-32 w-full h-20 bg-neutral-800 text-neutral-400">
      <div className="flex gap-10">
        <a
          href="https://www.linkedin.com/in/henriquefltorres/"
          target="_blank"
          className="font-semibold"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/HenriqueFLTorres"
          target="_blank"
          className="font-semibold"
        >
          GitHub
        </a>
        <a
          href="https://htportfolio.vercel.app/"
          target="_blank"
          className="font-semibold"
        >
          Portfolio
        </a>
        <a
          href="mailto:henriquefltorres@gmail.com"
          target="_blank"
          className="font-semibold"
        >
          Email
        </a>
      </div>
      <div className="hidden lg:inline">
        Designed and Developed by{" "}
        <a
          href="https://github.com/HenriqueFLTorres"
          target="_blank"
          className="font-semibold"
        >
          Henrique Tores
        </a>
      </div>
    </div>
  );
};

export default Footer;

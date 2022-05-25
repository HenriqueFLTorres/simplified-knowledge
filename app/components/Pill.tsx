import React, { useState } from "react";

import styles from "../tailwind.css";

type Props = {
  name: string;
  icon: JSX.Element;
};

const Pill = ({ name, icon }: Props) => {
    const [active, setActive] = useState<boolean>(false)
    
  return (
    <div onClick={() => setActive(!active)} className={`group select-none flex flex-row justify-between border ${active ? "border-neutral-800 dark:bg-neutral-200/[0.15] dark:border-neutral-200" : "bg-neutral-200 dark:bg-neutral-800 border-transparent" } p-2.5 rounded hover:border-neutral-700 dark:hover:border-neutral-500 transtion-all duration-150 cursor-pointer`}>
      <div className={`w-8 h-8 ${active ? "fill-neutral-800 dark:fill-white" : "fill-neutral-400 dark:fill-neutral-500" } mr-2 group-hover:fill-neutral-800  dark:group-hover:fill-neutral-100 group-hover:drop-shadow-[0_0_1px_#404040] dark:group-hover:drop-shadow-[0_0_1px_#fff] transition-all duration-150`}>{icon}</div>
      <p className={`${active ? "text-neutral-800 dark:text-neutral-200" : "text-neutral-400"}  text-2xl font-regular mx-2 group-hover:text-neutral-800 dark:group-hover:text-neutral-100 transition-all duration-150`}>{name}</p>
    </div>
  );
};

export default Pill;

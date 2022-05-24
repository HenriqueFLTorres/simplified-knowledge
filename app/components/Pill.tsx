import React, { useState } from "react";

import styles from "../tailwind.css";

type Props = {
  name: string;
  icon: JSX.Element;
};

const Pill = ({ name, icon }: Props) => {
    const [active, setActive] = useState<boolean>(false)
  return (
    <div onClick={() => setActive(!active)} className={`group select-none flex flex-row justify-between ${active && "bg-neutral-200/[0.15] border-neutral-200"} p-2.5 rounded bg-neutral-800 border border-transparent hover:border-neutral-500 transtion-all duration-150 cursor-pointer`}>
      <div className={`w-8 h-8 ${active && "fill-neutral-200"} mr-2 fill-neutral-500 group-hover:fill-white group-hover:drop-shadow-[0_0_1px_#fff] transition-all duration-150`}>{icon}</div>
      <p className={`${active && "text-neutral-200"} text-neutral-500 text-2xl font-regular mx-2 group-hover:text-white transition-all duration-150`}>{name}</p>
    </div>
  );
};

export default Pill;

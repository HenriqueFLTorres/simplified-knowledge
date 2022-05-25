import React from "react";
import { Link } from "@remix-run/react";

import Clock from "../svg/Clock";

import styles from "../tailwind.css";

type Props = {
  name: string;
  date: string;
  readTime: string;
  tags: JSX.Element;
};

const BlogCard = ({ name, date, readTime, tags }: Props) => {
  return (
    <Link to="/cool">
      <div className="group h-[300px] w-[350px] cursor-pointer bg-neutral-800 rounded-tl-3xl rounded-br-3xl hover:scale-110 transition-transform duration-[400ms]">
        <div className="w-full h-[150px] rounded-tl-3xl bg-gradient-to-tl from-[#f89720] to-[#fed006] group-hover:h-[190px] transition-all duration-[400ms]">
          <div className="w-5 h-5 ml-auto mr-2.5 pt-2.5 fill-white opacity-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_1px_#fff] transition duration-[400ms]">
            {tags}
          </div>
        </div>
        <div className="px-5 py-2.5 h-[150px] flex flex-col justify-between group-hover:h-[110px] transition-all duration-[400ms]">
          <h1 className="text-lg text-neutral-100 font-semibold">{name}</h1>
          <footer className="flex flex-row justify-between">
            <p className="text-lg text-neutral-400 font-semibold">{date}</p>
            <div className="flex flex-row w-16 justify-between items-center">
              <Clock className="w-4 h-4 fill-amber-600" />
              <p className="text-lg text-amber-600 font-semibold">{readTime}</p>
            </div>
          </footer>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
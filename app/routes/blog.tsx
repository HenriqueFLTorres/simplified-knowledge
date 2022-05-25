import { useEffect } from "react";
import styles from "highlight.js/styles/github-dark-dimmed.css";
import { Outlet } from "@remix-run/react";
import Navbar from "~/components/Navbar";

import hljs from "highlight.js";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Blog(props: any) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  

  return (
    <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800">
      <Navbar />
      <article className="prose lg:prose-xl mx-auto prose-neutral dark:prose-invert py-40">
        <Outlet />
      </article>
    </div>
  );
}

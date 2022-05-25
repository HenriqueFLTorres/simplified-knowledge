import styles from "highlight.js/styles/github-dark-dimmed.css";
import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Navbar from "~/components/Navbar";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Blog() {
  return (
    <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800">
      <Navbar />
      <article className="prose lg:prose-xl mx-auto prose-neutral dark:prose-invert py-40">
        <Outlet />
      </article>
    </div>
  );
}

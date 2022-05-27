// import styles from "highlight.js/styles/github-dark-dimmed.css";
import { Outlet } from "@remix-run/react";
import Navbar from "~/components/Navbar";

export default function Blog(props: any) {
  return (
    <div className="w-full min-h-screen h-full bg-neutral-100 dark:bg-neutral-800">
      <Navbar />
      <article className="prose lg:prose-xl mx-auto prose-neutral dark:prose-invert py-40 px-2">
        <Outlet />
      </article>
    </div>
  );
}

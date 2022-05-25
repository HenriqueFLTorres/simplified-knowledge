import Navbar from "~/components/navbar";
import BlogCard from "~/components/BlogCard";
import Pill from "~/components/Pill";

import HTML from "../svg/HTML";
import CSS from "../svg/CSS";
import JavaScript from "../svg/JavaScript";
import TypeScript from "../svg/TypeScript"
import ReactIcon from "../svg/ReactIcon";
import NextJS from "../svg/NextJS";
import NodeJS from "../svg/NodeJS";

import styles from "../styles/tailwind.css";

export default function Index() {
  
  return (
    <div className="font-sanspro w-full h-screen bg-neutral-100 dark:bg-neutral-900">
      <Navbar />
      <h1>Hello!</h1>

      <div className="mt-20 flex align-center justify-center gap-6">
        <Pill name="HTML" icon={<HTML/>} />
        <Pill name="CSS" icon={<CSS/>} />
        <Pill name="JavaScript" icon={<JavaScript/>} />
        <Pill name="TypeScript" icon={<TypeScript/>} />
        <Pill name="React" icon={<ReactIcon/>} />
        <Pill name="Next.js" icon={<NextJS/>} />
        <Pill name="Node.js" icon={<NodeJS/>} />
      </div>

      <div className="flex flex-row w-4/5 mx-auto justify-center mt-32">
        <BlogCard name="Reference - A deep dive into comparasion and memory cleanup" date="5 Nov" readTime="5 min" tags={<JavaScript/>} />
      </div>
    </div>
  );
}

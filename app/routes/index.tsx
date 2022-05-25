import Navbar from "~/components/Navbar";
import BlogCard from "~/components/BlogCard";
import Pill from "~/components/Pill";

import HTML from "../svg/HTML";
import CSS from "../svg/CSS";
import JavaScript from "../svg/JavaScript";
import TypeScript from "../svg/TypeScript"
import ReactIcon from "../svg/ReactIcon";
import NextJS from "../svg/NextJS";
import NodeJS from "../svg/NodeJS";

import * as firstPost from "./blog/referencia-vs-valor.mdx"

import styles from "../styles/tailwind.css";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { pseudoRandomBytes } from "crypto";

const getPostFromModule = (mod: any) => {
  return {
    name: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes,
  }
}

export const loader: LoaderFunction = () => {
  return [getPostFromModule(firstPost)];
}

export default function Index() {
  const posts = useLoaderData()
  
  return (
    <div className="font-sanspro w-full h-screen bg-neutral-100 dark:bg-neutral-900">
      <Navbar />
      <div className="pt-32 flex align-center justify-center gap-6">
        <Pill name="HTML" icon={<HTML/>} />
        <Pill name="CSS" icon={<CSS/>} />
        <Pill name="JavaScript" icon={<JavaScript/>} />
        <Pill name="TypeScript" icon={<TypeScript/>} />
        <Pill name="React" icon={<ReactIcon/>} />
        <Pill name="Next.js" icon={<NextJS/>} />
        <Pill name="Node.js" icon={<NodeJS/>} />
      </div>

      <div className="flex flex-row w-4/5 mx-auto justify-center mt-32">
        <ul>
          {posts.map((post: any) => {
            const { title, posted, readTime, link } = post
            return <BlogCard key={title} name={title} link={link} date={posted} readTime={readTime} tags={<JavaScript/>} />
          })}
        </ul>
      </div>
    </div>
  );
}

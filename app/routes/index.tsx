import Navbar from "~/components/Navbar";
import BlogCard from "~/components/BlogCard";
import Pill from "~/components/Pill";

import HTML from "../svg/HTML";
import CSS from "../svg/CSS";
import JavaScript from "../svg/JavaScript";
import TypeScript from "../svg/TypeScript";
import ReactIcon from "../svg/ReactIcon";
import NextJS from "../svg/NextJS";
import NodeJS from "../svg/NodeJS";

import * as firstPost from "./blog/referencia-vs-valor.mdx";
import * as sas from "./blog/reference-vs-value.mdx";

import styles from "../styles/tailwind.css";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import getPosts from "~/utils/getPostsList";
import { useEffect, useState } from "react";
import { useLanguage } from "~/utils/useLanguage";

const getPostFromModule = (mod: any) => {
  return {
    ...mod.attributes,
  };
};

export const loader: LoaderFunction = () => {
  return [getPosts().map((post) => getPostFromModule(post))];
};

export default function Index() {
  const posts = useLoaderData();
  const language = useLanguage();

  const languagePosts = posts.map((post) =>
    post.filter((post) => post.language === language)
  );

  return (
    <div className="font-sanspro w-full h-screen bg-neutral-100 dark:bg-neutral-900">
      <Navbar />
      <div className="pt-32 flex align-center justify-center gap-6">
        <Pill name="HTML" icon={<HTML />} />
        <Pill name="CSS" icon={<CSS />} />
        <Pill name="JavaScript" icon={<JavaScript />} />
        <Pill name="TypeScript" icon={<TypeScript />} />
        <Pill name="React" icon={<ReactIcon />} />
        <Pill name="Next.js" icon={<NextJS />} />
        <Pill name="Node.js" icon={<NodeJS />} />
      </div>

      <div className="flex flex-row w-4/5 mx-auto justify-center mt-32">
        {languagePosts.map((post: any) => {
          const { title, posted, readTime, link } = post[0];
          return (
            <BlogCard
              key={title}
              name={title}
              link={link}
              date={posted}
              readTime={readTime}
              tags={<JavaScript />}
            />
          );
        })}
      </div>
    </div>
  );
}

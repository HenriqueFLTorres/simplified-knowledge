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

import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getPosts from "~/utils/getPostsList";
import { useLanguage } from "~/utils/useLanguage";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "../styles/tailwind.css";
import Footer from "~/components/Footer";

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

  const languagePosts = posts.map((post: any) =>
    post.filter((post: any) => post.language === language)
  );

  return (
    <>
      <div className="flex flex-col justify-between font-sans max-w-full min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <div className="flex flex-col items-center w-full">
          <Navbar />
          <div className="flex flex-row flex-wrap w-4/5 mx-auto justify-center pt-40 gap-6">
            <Pill name="HTML" icon={<HTML />} />
            <Pill name="CSS" icon={<CSS />} />
            <Pill name="JavaScript" icon={<JavaScript />} />
            <Pill name="TypeScript" icon={<TypeScript />} />
            <Pill name="React" icon={<ReactIcon />} />
            <Pill name="Next.js" icon={<NextJS />} />
            <Pill name="Node.js" icon={<NodeJS />} />
          </div>

          <div className="flex flex-row w-4/5 mx-auto justify-center mt-24 gap-14 flex-wrap">
            {languagePosts.map((post: any) =>
              post.map((post: any) => {
                const { title, posted, readTime, link, mainImage, language } =
                  post;

                return (
                  <BlogCard
                    key={title}
                    name={title}
                    link={link}
                    image={mainImage}
                    date={posted}
                    readTime={readTime}
                    tags={<JavaScript />}
                    language={language}
                  />
                );
              })
            )}
          </div>
        </div>
      <Footer></Footer>
      </div>
    </>
  );
}

import { useState } from "react";
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
  const [tags, setTags] = useState<Array<String>>([]);
  const posts = useLoaderData();
  const language = useLanguage();

  const languagePosts = posts.map((post: any) =>
    post.filter((post: any) => post.postLanguage === language)
  );

  const handleSelectedTags = (tagName: any) => {
    if (tags.includes(tagName)) {
      const filteredTags = tags.filter((tag: String) => tag !== tagName);
      setTags(filteredTags);
    } else {
      setTags([...tags, tagName]);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between font-sans max-w-full min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <div className="flex flex-col items-center w-full">
          <Navbar />
          <div className="flex flex-row flex-wrap w-4/5 mx-auto justify-center pt-40 gap-6">
            <Pill
              name="HTML"
              icon={<HTML />}
              handleSelectedTags={handleSelectedTags}
              activeTags={tags}
            />
            <Pill
              name="CSS"
              icon={<CSS />}
              handleSelectedTags={handleSelectedTags}
              activeTags={tags}
            />
            <Pill
              name="JavaScript"
              icon={<JavaScript />}
              handleSelectedTags={handleSelectedTags}
              activeTags={tags}
            />
            <Pill
              name="TypeScript"
              icon={<TypeScript />}
              handleSelectedTags={handleSelectedTags}
              activeTags={tags}
            />
            <Pill
              name="React"
              icon={<ReactIcon />}
              handleSelectedTags={handleSelectedTags}
              activeTags={tags}
            />
            <Pill
              name="Next.js"
              icon={<NextJS />}
              handleSelectedTags={handleSelectedTags}
              activeTags={tags}
            />
            <Pill
              name="Node.js"
              icon={<NodeJS />}
              handleSelectedTags={handleSelectedTags}
              activeTags={tags}
            />
          </div>

          <div className="flex flex-row w-4/5 mx-auto justify-center mt-24 gap-14 flex-wrap">
            {languagePosts.map((post: any) =>
              post.map((post: any) => {
                const {
                  title,
                  postImage,
                  postedOn,
                  editedOn,
                  postTags,
                  readTimeInMinutes,
                  postLanguage,
                  postURL,
                } = post;

                // if tags are selected, it will return blogs posts accoarding to selection, otherwise it will always return true to render all posts
                const postContainSelectedTags = tags.length > 0 ? postTags.every((tag: String) =>
                  tags.includes(tag)
                ) : true
                

               return postContainSelectedTags && (
                  <BlogCard
                    key={title}
                    title={title}
                    postImage={postImage}
                    postedOn={postedOn}
                    editedOn={editedOn}
                    postTags={postTags}
                    readTimeInMinutes={readTimeInMinutes}
                    postLanguage={postLanguage}
                    postURL={postURL}
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

import { Outlet } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { useLocation } from "react-router-dom";

import { Navbar, Background } from "@components/global";
import generateSocialPreview from "@utils/generateSocialPreview";

export const meta: MetaFunction = () => ({
  ...generateSocialPreview({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    url: `https://simplifiedknowledge.vercel.app/${useLocation().pathname}`,
  }),
});

const Blog = () => {
  return (
    <>
      <Background />
      <Navbar />
      <article className="prose lg:prose-xl mx-auto prose-neutral dark:prose-invert py-40 px-2">
        <Outlet />
      </article>
    </>
  );
};

export default Blog;

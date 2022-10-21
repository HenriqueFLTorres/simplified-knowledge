import { Outlet } from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';
import { useLocation } from 'react-router-dom';

import { Navbar, Footer } from '@components/global';
import generateSocialPreview from '@utils/generateSocialPreview';

export const meta: MetaFunction = () => ({
  ...generateSocialPreview({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    url: `https://simplifiedknowledge.vercel.app/${useLocation().pathname}`,
  }),
});


const Blog = () => {
  return (
    <div className='w-full min-h-screen h-full bg-neutral-100 dark:bg-neutral-900'>
      <Navbar />
      <article className='prose lg:prose-xl mx-auto prose-neutral dark:prose-invert py-40 px-2'>
        <Outlet />
      </article>
    </div>
  );
}

export default Blog;

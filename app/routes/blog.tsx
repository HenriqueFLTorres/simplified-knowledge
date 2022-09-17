import { Outlet } from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';
import { LoaderFunction } from '@remix-run/node';
import { useLocation } from 'react-router-dom';

import generateSocialPreview from '@utils/generateSocialPreview';
import { Navbar, Footer } from '@components/global';

export const meta: MetaFunction = () => {
  return {
    ...generateSocialPreview({
      url: `https://simplifiedknowledge.vercel.app/${useLocation().pathname}`,
    }),
  };
};

export default function Blog(props: any) {
  return (
    <>
      <div className='w-full min-h-screen h-full bg-neutral-100 dark:bg-neutral-900'>
        <Navbar />
        <article className='prose lg:prose-xl mx-auto prose-neutral dark:prose-invert py-40 px-2'>
          <Outlet />
        </article>
        <Footer />
      </div>
    </>
  );
}

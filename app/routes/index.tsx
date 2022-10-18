import { useState } from 'react';

import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { useEnglishLanguage } from '@hooks/useLanguage';

import { Background, Navbar, Footer, Sidebar } from '@components/global';
import { BlogCard, Pill } from '@components/shared';

import type { blogPostType } from '@utils/getPostsList';
import getPosts from '@utils/getPostsList';
import { filterPostsByLanguage } from '@utils/index';

export const loader: LoaderFunction = async () => {
  return await getPosts;
};

export default function Index() {
  const [tags, setTags] = useState<Array<String>>([]);
  const { isEnglish } = useEnglishLanguage();

  const allPosts = useLoaderData();

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
      <Background />
      <div className='flex flex-col justify-between font-default max-w-full min-h-screen'>
        <div className='flex flex-col items-center w-full'>
          <Navbar />

          <Sidebar />

          <div className='flex flex-row flex-wrap w-4/5 mx-auto justify-center pt-40 gap-6'>
            {tagsFilter.map((tag) => (
              <Pill
                key={tag}
                name={tag}
                handleSelectedTags={handleSelectedTags}
                activeTags={tags}
              />
            ))}
          </div>

          <div className='flex flex-row w-4/5 mx-auto justify-center mt-24 gap-14 flex-wrap'>
            {filterPostsByLanguage(allPosts, isEnglish).map(
              (post: blogPostType, index: number) => {
                return <BlogCard key={index} {...post} />;
              }
            )}
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  );
}

const tagsFilter = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
];

import { Link } from '@remix-run/react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { blogPostType } from '@utils/getPostsList';

import { ReadTime } from '@components/icons/global';

const BlogCard = ({
  title,
  postImage,
  postedOn,
  editedOn,
  postTags,
  readTimeInMinutes,
  englishLanguage,
  postURL,
}: blogPostType) => {
  const uploadDate = new Date(postedOn);
  const isPortuguse = !englishLanguage;

  const dateFormated = isPortuguse
    ? formatRelative(uploadDate, new Date(), { locale: ptBR })
    : formatRelative(uploadDate, new Date());

  return (
    <Link to={`blog/${postURL}`}>
      <div className='flex flex-col relative group h-[300px] w-[350px] cursor-pointer bg-neutral-200 dark:bg-neutral-800 rounded-tl-3xl rounded-br-3xl clip-path-inset'>
        <div className='absolute z-10 text-xs font-semibold translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-neutral-100 dark:text-neutral-800 py-1 px-4 ml-4 mt-2 rounded-full bg-neutral-800 dark:bg-neutral-200 transition-[opacity,_transform] duration-[400ms]'>
          JavaScript
        </div>
        <div
          className={`absolute w-full h-full bg-cool rounded-tl-3xl rounded-br-3xl clip-path-inset duration-[400ms]`}
        >
          <img
            className='object-cover bg-center w-full h-full rounded-tl-3xl rounded-br-3xl fade-image'
            src={postImage}
            alt=''
          />
        </div>
        <div className='px-5 py-2.5 flex flex-col justify-end mt-auto'>
          <h1 className='text-lg text-neutral-800 dark:text-neutral-100 font-semibold drop-shadow-lg'>
            {title}
          </h1>
          <p className='max-h-0 text-neutral-700 dark:text-neutral-400 font-normal my-2 opacity-0 group-hover:max-h-52 group-hover:opacity-100 card-transition clip-path-inset'>
            Taking advantage of features such as local storage and state
            management...
          </p>
          <footer className='flex flex-row justify-between text-neutral-700 dark:text-neutral-400'>
            <p className='text-sm fill-neutral-200 font-semibold'>
              {dateFormated}
            </p>
            <div className='flex flex-row w-auto justify-between items-center'>
              <ReadTime className='w-5 h-5 mr-2 fill-neutral-700 dark:fill-neutral-400' />
              <p className='text-sm text-neutral-700 dark:text-neutral-400 font-semibold text-right'>
                {readTimeInMinutes} min
              </p>
            </div>
          </footer>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

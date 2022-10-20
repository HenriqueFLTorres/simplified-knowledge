import { Link } from '@remix-run/react';
import { format, formatDistance, formatRelative } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import type { blogPostType } from '@utils/getPostsList';

import { Pencil, ReadTime } from '@components/icons/global';
import { isLanguageEnglish } from '@hooks/useLanguage';

const BlogCard = ({
  title,
  postImage,
  postedOn,
  editedOn,
  tags,
  shortDescription,
  readTimeInMinutes,
  postURL,
}: blogPostType) => {
  const uploadDate = new Date(postedOn);

  const hasUpdated = postedOn === editedOn;
  const localeObject = isLanguageEnglish ? { locale: enUS } : { locale: ptBR };

  const dateFormated = formatRelative(uploadDate, new Date(), localeObject);
  const editFormated = formatDistance(
    new Date(editedOn),
    new Date(),
    localeObject
  );

  return (
    <Link to={`blog/${postURL}`}>
      <div className='flex flex-col relative group h-[300px] w-[350px] cursor-pointer bg-neutral-200 dark:bg-neutral-800 rounded-tl-3xl rounded-br-3xl clip-path-inset'>
        <div className='z-10 flex flex-row gap-2 ml-3 mt-3'>
          {tags.map((tag, index) => (
            <CardTag key={tag} name={tag} index={index} />
          ))}
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
            {shortDescription}
          </p>
          <footer className='flex flex-row justify-end gap-3 text-neutral-700 dark:text-neutral-400'>
            <p className='text-sm fill-neutral-200 font-semibold mr-auto'>
              {dateFormated}
            </p>
            {hasUpdated ? (
              <div className='flex flex-row w-auto justify-between items-center'>
                <Pencil className='w-4 h-4 mr-2 fill-neutral-700 dark:fill-neutral-400' />
                <p className='text-sm text-neutral-700 dark:text-neutral-400 font-semibold text-right'>
                  {editFormated}
                </p>
              </div>
            ) : null}
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

const CardTag = ({ name, index }: { name: string; index: number }) => {
  const delay = (index + 1) * 200;
  return (
    <div
      className={`text-xs font-medium translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-neutral-100 dark:text-neutral-800 py-1 px-3 rounded-full bg-neutral-800 dark:bg-neutral-200 transition-[opacity,_transform] duration-[${delay}ms]`}
    >
      {name}
    </div>
  );
};

import { Link } from '@remix-run/react';
import { formatDistance, formatRelative } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import type { blogPostType } from '@utils/getPostsList';

import { Pencil, ReadTime } from '@components/icons/global';
import { useEnglishLanguage } from '@hooks/useLanguage';
import SmallLabel from './SmallLabel';

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
  const { isEnglish } = useEnglishLanguage();

  const hasUpdated = postedOn !== editedOn;
  const localeObject = isEnglish ? { locale: enUS } : { locale: ptBR };

  const dateFormated = formatRelative(uploadDate, new Date(), localeObject);
  const editFormated = formatDistance(
    new Date(editedOn),
    new Date(),
    localeObject
  );

  return (
    <Link to={`blog/${postURL}`}>
      <div className='flex flex-col relative group/card h-[300px] w-[350px] cursor-pointer bg-gradient-to-b from-neutral-200 to-neutral-200/40 dark:from-neutral-800 dark:to-neutral-800/40 rounded-tl-3xl rounded-br-3xl clip-path-inset'>
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
          <p className='max-h-0 text-neutral-700 dark:text-neutral-400 font-normal my-2 opacity-0 group-hover/card:max-h-52 group-hover/card:opacity-100 card-transition clip-path-inset'>
            {shortDescription}
          </p>
          <footer className='flex flex-row justify-end gap-3 text-neutral-700 dark:text-neutral-400'>
            <p className='relative z-10 text-sm fill-neutral-200 font-semibold mr-auto'>
              {dateFormated}
            </p>
            {hasUpdated ? <EditedOnFragment editedOn={editFormated} /> : null}
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
  console.log(name, delay)

  return (
    <div
      className={`text-xs font-medium translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 text-neutral-100 dark:text-neutral-800 py-1 px-3 rounded-full bg-neutral-800 dark:bg-neutral-200 transition-[opacity,_transform] duration-[${delay}ms]`}
    >
      {name}
    </div>
  );
};

const EditedOnFragment = ({ editedOn }: { editedOn: string }) => (
  <div className='group/item flex flex-row w-auto justify-between items-center'>
    <Pencil className='w-4 h-4 mr-2 fill-neutral-700 dark:fill-neutral-400' />
    <SmallLabel
      title={editedOn}
      styling={
        '-translate-y-6 group-hover/item:bg-red-900 group-hover/item:-translate-y-12 translate-x-0 group-hover/item:translate-x-0'
      }
    />
  </div>
);

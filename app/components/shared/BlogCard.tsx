import { Link } from '@remix-run/react'
import { formatDistance, formatRelative } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'
import type { blogPostType } from '@utils/getPostsList'

import { Pencil, ReadTime } from '@components/icons/global'
import { useEnglishLanguage } from '@hooks/useLanguage'
import SmallLabel from './SmallLabel'

const BlogCard = ({
  title,
  postImage,
  postedOn,
  editedOn,
  tags,
  shortDescription,
  readTimeInMinutes,
  postURL
}: blogPostType) => {
  const uploadDate = new Date(postedOn)
  const { isEnglish } = useEnglishLanguage()

  const hasUpdated = postedOn !== editedOn
  const localeObject = isEnglish ? { locale: enUS } : { locale: ptBR }

  const dateFormated = formatRelative(uploadDate, new Date(), localeObject)
  const editFormated = formatDistance(
    new Date(editedOn),
    new Date(),
    localeObject
  )

  return (
    <Link to={`blog/${postURL}`}>
      <div className="group/card clip-path-inset relative flex h-[300px] w-[350px] cursor-pointer flex-col rounded-tl-3xl rounded-br-3xl bg-gradient-to-b from-neutral-200 to-neutral-200/40 dark:from-neutral-800 dark:to-neutral-800/40">
        <div className="z-10 ml-3 mt-3 flex flex-row gap-2">
          {tags.map((tag, index) => (
            <CardTag key={tag} name={tag} index={index} />
          ))}
        </div>
        <div
          className={`bg-cool clip-path-inset absolute h-full w-full rounded-tl-3xl rounded-br-3xl duration-[400ms]`}
        >
          <img
            className="fade-image h-full w-full rounded-tl-3xl rounded-br-3xl bg-center object-cover"
            src={postImage}
            alt=""
          />
        </div>
        <div className="mt-auto flex flex-col justify-end px-5 py-2.5">
          <h1 className="text-lg font-semibold text-neutral-800 drop-shadow-lg dark:text-neutral-100">
            {title}
          </h1>
          <p className="card-transition clip-path-inset my-2 max-h-0 font-normal text-neutral-700 opacity-0 group-hover/card:max-h-52 group-hover/card:opacity-100 dark:text-neutral-400">
            {shortDescription}
          </p>
          <footer className="flex flex-row justify-end gap-3 text-neutral-700 dark:text-neutral-400">
            <p className="relative z-10 mr-auto fill-neutral-200 text-sm font-semibold">
              {dateFormated}
            </p>
            {hasUpdated ? <EditedOnFragment editedOn={editFormated} /> : null}
            <div className="flex w-auto flex-row items-center justify-between">
              <ReadTime className="mr-2 h-5 w-5 fill-neutral-700 dark:fill-neutral-400" />
              <p className="text-right text-sm font-semibold text-neutral-700 dark:text-neutral-400">
                {readTimeInMinutes} min
              </p>
            </div>
          </footer>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard

const CardTag = ({ name, index }: { name: string; index: number }) => {
  const delay = (index + 1) * 200

  return (
    <div
      className={`translate-y-4 rounded-full bg-neutral-800 py-1 px-3 text-xs font-medium text-neutral-100 opacity-0 transition-[opacity,_transform] group-hover/card:translate-y-0 group-hover/card:opacity-100 dark:bg-neutral-200 dark:text-neutral-800 duration-[${delay}ms]`}
    >
      {name}
    </div>
  )
}

const EditedOnFragment = ({ editedOn }: { editedOn: string }) => (
  <div className="group/item flex w-auto flex-row items-center justify-between">
    <Pencil className="mr-2 h-4 w-4 fill-neutral-700 dark:fill-neutral-400" />
    <SmallLabel
      title={editedOn}
      styling={
        '-translate-y-6 group-hover/item:bg-red-900 group-hover/item:-translate-y-12 translate-x-0 group-hover/item:translate-x-0'
      }
    />
  </div>
)

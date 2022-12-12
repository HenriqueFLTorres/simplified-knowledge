import { Link } from '@remix-run/react'

const ContentTable = ({ content }: { content: string[] }) => (
  <ul className="my-5 flex flex-col rounded-md border border-neutral-400/50 bg-neutral-400/20 !pl-12 !pr-12 !px-12 !py-6 shadow-md dark:border-neutral-200/50 dark:bg-neutral-700/20">
    {content.map((fragment) => {
      const href = fragment.toLocaleLowerCase().replace(/\s/g, '-')

      return (
        <Link key={fragment} to={`#${href}`} className={'no-underline'}>
          <li className="!m-0 list-decimal text-base font-normal text-neutral-700 transition-[colors] duration-200 hover:text-neutral-600 hover:drop-shadow-[0_0_2px_#40404060] dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:drop-shadow-[0_0_2px_#e8e8e860]">
            {fragment}
          </li>
        </Link>
      )
    })}
  </ul>
)

export default ContentTable

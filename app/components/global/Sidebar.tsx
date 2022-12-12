import { GitHub, LinkedIn, User } from '@components/icons/global'
import { SmallLabel } from '@components/shared'
import { useEnglishLanguage } from '@hooks/useLanguage'

const Sidebar = () => {
  const { isEnglish } = useEnglishLanguage()

  return (
    <aside className="fixed left-9 top-44 hidden w-max flex-col gap-20 md:flex">
      <a
        href={'https://htportfolio.vercel.app/'}
        className="group flex items-center"
      >
        <User className="absolute w-10 fill-neutral-800 drop-shadow-[0_0_3px_#404040] dark:fill-neutral-100 dark:drop-shadow-[0_0_3px_#e8e8e8]" />
        <SmallLabel title={isEnglish ? 'My website' : 'Meu website'} />
      </a>
      <a
        href={'https://github.com/HenriqueFLTorres'}
        className="group flex items-center"
      >
        <GitHub className="absolute w-10 fill-neutral-800 drop-shadow-[0_0_3px_#404040] dark:fill-neutral-100 dark:drop-shadow-[0_0_3px_#e8e8e8]" />
        <SmallLabel title={isEnglish ? 'My GitHub' : 'Meu GitHub'} />
      </a>
      <a
        href={'https://www.linkedin.com/in/henriquefltorres/'}
        className="group flex items-center"
      >
        <LinkedIn className="absolute w-10 fill-neutral-800 drop-shadow-[0_0_3px_#404040] dark:fill-neutral-100 dark:drop-shadow-[0_0_3px_#e8e8e8]" />
        <SmallLabel title={isEnglish ? 'My LinkedIn' : 'Meu LinkedIn'} />
      </a>
    </aside>
  )
}

export default Sidebar

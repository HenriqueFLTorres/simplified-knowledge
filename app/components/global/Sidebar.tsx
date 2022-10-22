import { GitHub, LinkedIn, User } from "@components/icons/global";
import { SmallLabel } from "@components/shared";
import { useEnglishLanguage } from "@hooks/useLanguage";

const Sidebar = () => {
  const { isEnglish } = useEnglishLanguage();

  return (
    <aside className="w-max fixed hidden md:flex flex-col gap-20 left-9 top-44">
      <a
        href={"https://htportfolio.vercel.app/"}
        className="flex items-center group"
      >
        <User className="absolute w-10 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_3px_#404040] dark:drop-shadow-[0_0_3px_#e8e8e8]" />
        <SmallLabel title={isEnglish ? "My website" : "Meu website"} />
      </a>
      <a
        href={"https://github.com/HenriqueFLTorres"}
        className="flex items-center group"
      >
        <GitHub className="absolute w-10 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_3px_#404040] dark:drop-shadow-[0_0_3px_#e8e8e8]" />
        <SmallLabel title={isEnglish ? "My GitHub" : "Meu GitHub"} />
      </a>
      <a
        href={"https://www.linkedin.com/in/henriquefltorres/"}
        className="flex items-center group"
      >
        <LinkedIn className="absolute w-10 fill-neutral-800 dark:fill-neutral-100 drop-shadow-[0_0_3px_#404040] dark:drop-shadow-[0_0_3px_#e8e8e8]" />
        <SmallLabel title={isEnglish ? "My LinkedIn" : "Meu LinkedIn"} />
      </a>
    </aside>
  );
};

export default Sidebar;

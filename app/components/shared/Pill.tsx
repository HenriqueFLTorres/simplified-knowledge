type PillProps = {
  name: string;
  handleSelectedTags: Function;
  activeTags: Array<String>;
};

const Pill = ({ name, handleSelectedTags, activeTags }: PillProps) => {
  const active = activeTags.includes(name);

  return (
    <button
      onClick={() => handleSelectedTags(name)}
      className={`flex items-center justify-center bg-neutral-800 outline-2 focus-visible:outline-white px-6 py-2 rounded-full group select-none p-2.5 cursor-pointer ${
        active ? 'opacity-100' : 'opacity-40'
      } transition-[opacity] duration-300`}
    >
      <p
        className={`${
          active ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500'
        }  text-xl font-regular group-hover:text-neutral-800 dark:group-hover:text-neutral-100 transition-[color] duration-[300ms]`}
      >
        {name}
      </p>
    </button>
  );
};

export default Pill;

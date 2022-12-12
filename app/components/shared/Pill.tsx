type PillProps = {
  name: string
  onClick: (any: any) => void
  activeTags: Array<String>
}

const Pill = ({ name, onClick, activeTags }: PillProps) => {
  const active = activeTags.includes(name)

  return (
    <button
      onClick={onClick}
      className={`group flex cursor-pointer select-none items-center justify-center rounded-full bg-neutral-300 p-2.5 px-6 py-2 outline-2 focus-visible:outline-white dark:bg-neutral-800 ${
        active ? 'opacity-100' : 'opacity-40'
      } transition-[opacity] duration-300`}
    >
      <p
        className={`${
          active
            ? 'text-neutral-600 dark:text-neutral-200'
            : 'text-neutral-500 dark:text-neutral-500'
        }  font-regular pointer-events-none text-lg transition-[color] duration-[300ms] group-hover:text-neutral-800 dark:group-hover:text-neutral-100`}
      >
        {name}
      </p>
    </button>
  )
}

export default Pill

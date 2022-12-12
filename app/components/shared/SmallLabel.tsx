const SmallLabel = ({
  title = 'Please, GIVE ME A TITLE',
  styling
}: {
  title: string
  styling?: string
}) => (
  <span
    className={`pointer-events-none absolute z-20 flex w-max translate-x-12 justify-start rounded bg-neutral-700/40 px-4 py-1 text-center text-sm text-neutral-50 opacity-0 backdrop-blur-sm transition-[transform,_opacity] duration-200 group-hover:translate-x-16 group-hover:opacity-100 ${styling}`}
  >
    {title}
  </span>
)

export default SmallLabel

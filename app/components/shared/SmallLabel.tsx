const SmallLabel = ({
  title = "Please, GIVE ME A TITLE",
}: {
  title: string;
}) => (
  <span
    className={`absolute flex justify-start w-max rounded opacity-0 group-hover:opacity-100 px-4 py-1 text-neutral-50 bg-neutral-700/40 translate-x-12 group-hover:translate-x-16 text-sm z-20 backdrop-blur-sm text-center transition-[transform,_opacity] duration-200 pointer-events-none`}
  >
    {title}
  </span>
);

export default SmallLabel;
